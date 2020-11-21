import React from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet } from 'react-native'

function Map(props) {
    const mapRegion = {
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: props.latitudeDelta,
        longitudeDelta: props.longitudeDelta
    }

    return(
        <MapView 
            style={styles.mapDisplay} 
            region={mapRegion}    
            provider={PROVIDER_GOOGLE}
        >
            {props.locations.map(location => (
                <Marker 
                    title={location.title} 
                    key={location.id}
                    coordinate={{
                        longitude: location.longitude,
                        latitude: location.latitude
                    }}
                >
                </Marker>                
            ))}
        </MapView>
    )
}

const styles = StyleSheet.create({
    mapDisplay: {
        flex: 1
    }
})

export default Map