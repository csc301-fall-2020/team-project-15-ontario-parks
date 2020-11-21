import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MapHeader from '../components/Header/MapHeader'
import Map from '../components/Map/Map'
import PlayBackButton from '../components/PlayBack/PlayBackButton'
import { AttractionContext } from '../contexts/AttractionContext'

function MapPage() {
    const [ selected, setSelected ] = useState();
    const [ audio, setAudio ] = useState("http://138.197.141.138/CDGE_A1_Pista30.mp3");
    const { setUpdate, attractions, getAttraction} = useContext(AttractionContext)

    useEffect(() => {
        const attraction = getAttraction(selected)
        if (attraction != undefined && attraction.audio) {
            setAudio(attraction.audio)            
        }
    }, [selected])

    return(
        <View style={styles.container}>
            <Map
                latitude={43.6464479}
                longitude={-79.463079}
                latitudeDelta={0.0125}
                longitudeDelta={0.01}
                locations={attractions}
                setSelected={setSelected}
            />
            <MapHeader text="Welcome to High Park" />
            <PlayBackButton 
                src={audio}
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