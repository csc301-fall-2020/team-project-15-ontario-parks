import React, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PageHeader from "../components/Header/PageHeader";
import { AttractionContext } from '../contexts/AttractionContext'
import AudioItem from "../components/AudioItem";


const AccessibilityPage = () => {
    const { setUpdate, attractions, getAttraction} = useContext(AttractionContext)
    return (
        <View style={styles.screen}>
            <PageHeader title = "Accessibility Mode" buttonTitle = "Setting"/>
            <ScrollView style={styles.content}>
                {attractions.map(attraction => (
                    <AudioItem key = {attraction._id} title = {attraction.name} audioSrc = {attraction.audio}/>
                ))
                }
            </ScrollView>
        </View>

    )
}

const styles = StyleSheet.create({
    screen: {
        flex: 1
    },
    content: {
      padding: 20
    }
})
export default AccessibilityPage