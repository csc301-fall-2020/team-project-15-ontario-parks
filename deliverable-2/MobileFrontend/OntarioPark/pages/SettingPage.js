import React from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import MapHeader from "../components/Header/MapHeader";
import PageHeader from "../components/Header/PageHeader";

import SettingItem from "../components/SettingItem";
const SettingPage = ({ navigation }) => {
    const goBack = () => {
        navigation.navigate('Map')
    }

    return (
        <View style={styles.screen}>
            <PageHeader title = "Settings" buttonTitle = "Back" handlePress={goBack}  />

            <ScrollView>
                <SettingItem message = "Accessibility Mode"/>
            </ScrollView>
        </View>

        )
}
const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    body: {
        flex: 1,
    }
})
export default SettingPage