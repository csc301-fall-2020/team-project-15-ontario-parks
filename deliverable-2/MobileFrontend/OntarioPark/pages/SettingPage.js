import React from 'react'
import { View, StyleSheet } from 'react-native'
import MapHeader from "../components/Header/MapHeader";
import SettingHeader from "../components/Header/SettingHeader";

const SettingPage = () => {

    return (
        <View>
            <SettingHeader title = "Settings"/>
        </View>

        )
}
const styles = StyleSheet.create({
    screen: {
        flex: 1
    }
})
export default SettingPage