import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MapHeader from '../components/Header/MapHeader'
import Map from '../components/Map/Map'
import PlayBackButton from '../components/Button/PlayBackButton'
import SettingButton from '../components/Button/SettingButton'
import { AttractionContext } from '../contexts/AttractionContext'

function MapPage({ navigation }) {
    /**
     * A page displaying a map and markers that allows user to choose attractions and see detail 
     * or listen to an audio description about the attraction
     */
    const [ selected, setSelected ] = useState()
    const [ audio, setAudio ] = useState("http://138.197.141.138/cherry_blossom.mp3")
    const { attractions, getAttraction, park, location} = useContext(AttractionContext)

    const [ headerText, setHeaderText ] = useState("")

    // The initial region that is displayed on user's screen 
    const mapRegion =  {
        latitude: location ? location.coords.latitude : 43.6464479,
        longitude: location ? location.coords.longitude : -79.463079,
        latitudeDelta: 0.0125,
        longitudeDelta: 0.01
    }

    useEffect(() => {
        const attraction = getAttraction(selected)
        if (attraction !== undefined && attraction.audio) {
            setAudio(attraction.audio)       
        }
    }, [selected])

    useEffect(() =>{
        if (park) {
            setHeaderText(`Welcome to ${park}`)            
        }
    }, [park])

    const goToSetting = () => {
        navigation.navigate('Setting')
    }

    const goToDetail = (id) => {
        const attraction = getAttraction(id)
        if (attraction) {
            navigation.navigate('Details', {
                detail: attraction.description,
                title: attraction.name,
                imageSource: attraction.image
            })
        }
    }

    return(
        <View style={styles.container}>
            <Map
                mapRegion={mapRegion}
                locations={attractions}
                setSelected={setSelected}
                goToDetail={goToDetail}
            />
            <MapHeader text={headerText} />
            <PlayBackButton src={audio} style = {{}} size = {100}/>
            <SettingButton handlePress={goToSetting} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})

export default MapPage