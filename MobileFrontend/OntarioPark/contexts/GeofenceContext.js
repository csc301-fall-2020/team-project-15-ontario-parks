import GeoPoint from 'geopoint';
import React, { useContext, useEffect } from 'react';
import { LocationContext } from './LocationContext'
import { AttractionContext } from './AttractionContext'
import { AudioContext } from './AudioContext'

const GeofenceContext = React.createContext()

function GeofenceContextProvider(props) {
  /**
   * Context for triggering audio playback when user move into certain location
   */
    const { attractions } = useContext(AttractionContext)
    const { location, prevLocation } = useContext(LocationContext)
    const { setAudioUri } = useContext(AudioContext)
    const range = 20 // Trigger when attractions are less than 20 meters from the user

    useEffect(() => {
      if (location) {
        const userLocation = new GeoPoint(location.coords.latitude,  location.coords.longitude) // Current user location
        if (prevLocation) {
          const prevUserLocation = new GeoPoint(prevLocation.coords) // Previous user location(if defined)
        }

        // Check if each attraction is in the threshold distance
        attractions.forEach(attraction => {
          const attractionLocation = new GeoPoint(parseFloat(attraction.latitude), parseFloat(attraction.longitude))
          const dist = userLocation.distanceTo(attractionLocation, true) // In kilometers

          if (inRange(dist, range)) {
            if (prevLocation) {
              const prevDist = prevUserLocation.distanceTo(attractionLocation, true)
              if (!inRange(prevDist, range)) { // Do not trigger if the user is just moving inside the range
                setAudioUri(attraction.audio, true)
              }
            } else {
                setAudioUri(attraction.audio, true)
            }
          }         
        })
      }
    }, [location])

    return(
      <GeofenceContext.Provider>
        {props.children}
      </GeofenceContext.Provider>
    )
}

/**
 * Return if the distance is considered in range based on the range
 * @param {float} distance The distance in kilometers 
 */
const inRange = (distance, range) => {
  return distance * 1000 < range
} 

export { GeofenceContext, GeofenceContextProvider }