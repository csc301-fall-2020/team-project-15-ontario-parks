import React, { useState, useEffect } from 'react'
import MapView, { Callout, Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet, Text } from 'react-native'

/**
 * A Map View displaying Marker on locations provided
 */
function Map(props) {
    // Creating Markers to be displayed on the user's screen
    const [ markers, setMakers ] = useState([])
    useEffect(() => {
        setMakers(props.locations.map((location, index) => (
            <Marker 
                title={location.name} 
                key={index}
                coordinate={{
                    longitude: parseFloat(location.longitude),
                    latitude: parseFloat(location.latitude)
                }}
                onPress={() => {
                    props.setSelected(location._id)
                }}
            >
                <Callout onPress={() => props.goToDetail(location._id)}>
                    <Text>
                        {location.name}
                    </Text>
                </Callout>
            </Marker>             
        )))
    }, [props.locations])

    return(
        <MapView 
            style={styles.mapDisplay} 
            region={props.mapRegion}    
            provider={PROVIDER_GOOGLE}
            showsUserLocation={true}
        >
            {markers}
        </MapView>
    )
}

const styles = StyleSheet.create({
    mapDisplay: {
        flex: 1
    }
})

export default Map