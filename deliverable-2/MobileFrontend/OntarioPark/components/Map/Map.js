import React, { useState, useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet } from 'react-native'

function Map(props) {
    const mapRegion = {
        latitude: props.latitude,
        longitude: props.longitude,
        latitudeDelta: props.latitudeDelta,
        longitudeDelta: props.longitudeDelta
    }
    const [ markers, setMakers ] = useState([])

    useEffect(() => {
        setMakers(props.locations.map((location, index) => (
            <Marker 
                title={location.name} 
                key={index}
                coordinate={{
                    longitude: location.longitude,
                    latitude: location.latitude
                }}
                onPress={() => {
                    props.setSelected(location._id)
                }}
            />             
        )))
        console.log(markers)
    }, [props.locations])

    return(
        <MapView 
            style={styles.mapDisplay} 
            region={mapRegion}    
            provider={PROVIDER_GOOGLE}
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