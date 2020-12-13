import GeoPoint from 'geopoint';
import { useContext, useEffect } from 'react';
import { LocationContext } from '../contexts/LocationContext'
import { AttractionContext } from '../contexts/AttractionContext'
import { AudioContext } from '../contexts/AudioContext'

/**
 * Hook for applying geofence. Replaced by GeofenceContext.
 */
function useGeofence() {
    const { attractions } = useContext(AttractionContext)
    const { location, prevLocation } = useContext(LocationContext)
    const { setAudioUri } = useContext(AudioContext)

    useEffect(() => {
      if (location) {
        const userLocation = new GeoPoint(location.coords.latitude,  location.coords.longitude)
        if (prevLocation) {
          const prevUserLocation = new GeoPoint(prevLocation.coords)
        }

        attractions.forEach(attraction => {
          const attractionLocation = new GeoPoint(parseFloat(attraction.latitude), parseFloat(attraction.longitude))
          const dist = userLocation.distanceTo(attractionLocation, true) // In kilometers

          if (inRange(dist)) {
            if (prevLocation) {
              const prevDist = prevUserLocation.distanceTo(attractionLocation, true)
              if (!inRange(prevDist)) {
                setAudioUri(attraction.audio, true)
              }
            } else {
                setAudioUri(attraction.audio, true)
            }
          }         
        })
      }
    }, [location])
}

const inRange = (distance) => {
  return distance * 1000 < 20
} 

export default useGeofence