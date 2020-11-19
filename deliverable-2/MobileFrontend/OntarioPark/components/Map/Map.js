import React from 'react';
import MapView from 'react-native-maps';
import { StyleSheet } from 'react-native';

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
        />
    )
}

const styles = StyleSheet.create({
    mapDisplay: {
        flex: 1
    }
})

export default Map