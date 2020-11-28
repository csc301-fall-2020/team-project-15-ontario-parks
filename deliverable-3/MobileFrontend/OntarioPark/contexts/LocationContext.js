import * as Location from 'expo-location'

import React, { useState, useEffect } from 'react'

const LocationContext = React.createContext()

function LocationContextProvider(props) {
    const [ location, setLocation ] = useState(null)
    const [ granted, setGranted ] = useState(false)

    // Initialize the location context
    // Set location to last known location if permission granted
    useEffect(() => {
        initializeLocation(setGranted, setLocation)

        console.log(location)
    }, []);

    // Get the current location if permission granted
    useEffect(() => {
        if (granted) {
            getCurrentLocation(setLocation)
            Location.watchPositionAsync({
                accuracy: Location.Accuracy.Highest, // Highest accuracy
                timeInterval: 1000, // At least 1000ms between update
                distanceInterval: 20 // Twenty meter of interval
            }, (location) => {
                setLocation(location)
            })
        }
    }, [granted])

    return(
        <LocationContext.Provider value={{location}} >
            { props.children }
        </LocationContext.Provider>
    )
}

const initializeLocation = async (setGranted, setLocation) => {
    let { status } = await Location.requestPermissionsAsync()
    let granted = status == 'granted'

    if (!granted) {
        console.error('Permission to access location was denied')
    }

    Location.getLastKnownPositionAsync({})
        .then(location => {
            setLocation(location)
        })
        .catch(error => {
            console.error(error)
        })
    
    setGranted(granted)
}

const getCurrentLocation = async (setLocation) => {
    Location.getCurrentPositionAsync({})
        .then(location => {
            setLocation(location)
        })
        .catch(error => {
            console.error(error)
        })
}

export { LocationContext, LocationContextProvider }