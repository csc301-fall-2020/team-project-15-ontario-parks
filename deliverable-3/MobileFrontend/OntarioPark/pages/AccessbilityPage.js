import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PageHeader from "../components/Header/PageHeader";
import { AttractionContext } from '../contexts/AttractionContext'
import AudioItem from "../components/AudioItem";

/**
 *
 a page for visually impaired users
 */

const AccessibilityPage = ({ navigation }) => {
    const { setUpdate, attractions, getAttraction} = useContext(AttractionContext)
    const goToSetting = () => {
        navigation.navigate('Setting')
    }
    return (
        <View style={styles.screen}>
            <PageHeader title = "Accessibility Mode" buttonTitle = "Setting" handlePress = {goToSetting}/>
            <View style={styles.content}>
                {attractions.map(attraction => (
                    <AudioItem key = {attraction._id} title = {attraction.name} audioSrc = {attraction.audio}/>
                ))
                }
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    content: {
        flex: 1,
        justifyContent: "space-around",
        padding: 20,
    }
})
export default AccessibilityPage