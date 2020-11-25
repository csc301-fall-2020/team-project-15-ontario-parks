import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import MapHeader from '../components/Header/MapHeader'
import Map from '../components/Map/Map'
import PlayBackButton from '../components/PlayBack/PlayBackButton'
import SettingButton from '../components/SettingButton/SettingButton'
import { AttractionContext } from '../contexts/AttractionContext'

function MapPage({ navigation }) {
    /**
     * A page displaying a map and markers that allows user to choose attractions and see detail 
     * or listen to an audio description about the attraction
     */
    const [ selected, setSelected ] = useState();
    const [ audio, setAudio ] = useState("http://138.197.141.138/cherry_blossom.mp3");
    const { setUpdate, attractions, getAttraction} = useContext(AttractionContext)

    useEffect(() => {
        const attraction = getAttraction(selected)
        if (attraction !== undefined && attraction.audio) {
            setAudio(attraction.audio)       
        }
    }, [selected])

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
                latitude={43.6464479}
                longitude={-79.463079}
                latitudeDelta={0.0125}
                longitudeDelta={0.01}
                locations={attractions}
                setSelected={setSelected}
                goToDetail={goToDetail}
            />
            <MapHeader text="Welcome to High Park" />
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