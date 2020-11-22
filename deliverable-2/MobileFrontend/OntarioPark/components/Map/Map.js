import React, { useState, useEffect } from 'react'
import MapView, { Marker, PROVIDER_GOOGLE } from 'react-native-maps'
import { StyleSheet } from 'react-native'

function Map(props) {
    const mapRegion = {
        latitude: parseFloat(props.latitude),
        longitude: parseFloat(props.longitude),
        latitudeDelta: parseFloat(props.latitudeDelta),
        longitudeDelta: parseFloat(props.longitudeDelta)
    }
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
            />             
        )))
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