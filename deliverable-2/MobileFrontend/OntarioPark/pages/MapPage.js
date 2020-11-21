import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapHeader from '../components/Header/MapHeader'
import Map from '../components/Map/Map'
import PlayBackButton from '../components/PlayBack/PlayBackButton'

function MapPage() {
    return(
        <View style={styles.container}>
            <Map
                latitude={43.6464479}
                longitude={-79.463079}
                latitudeDelta={0.0125}
                longitudeDelta={0.01}
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
            <PlayBackButton 
                src="http://138.197.141.138/CDGE_A1_Pista30.mp3"  
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapPage