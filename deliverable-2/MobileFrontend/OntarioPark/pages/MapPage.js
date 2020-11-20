import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapHeader from '../components/Header/MapHeader'
import Map from '../components/Map/Map'

function MapPage() {
    return(
        <View style={styles.container}>
            <Map
                latitude={43.6464479}
                longitude={-79.463079}
                latitudeDelta={0.025}
                longitudeDelta={0.02}
                locations={[
                    {
                    title: "title",
                    id: "123",
                    latitude: 43.6464479,
                    longitude: -79.463079
                    }
                ]}
            />
            <MapHeader text="Welcome to High Park" />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapPage