/**
 * a setting page for the mp application
 */
import React, { useContext } from 'react'
import { View, StyleSheet, ScrollView } from 'react-native'
import PageHeader from "../components/Header/PageHeader";

import SettingItem from "../components/SettingItem";
import { AccessibilityContext } from '../contexts/AccessibilityContext';
const SettingPage = ({ navigation }) => {
    const goBack = () => {
        navigation.navigate(inAccessibilityMode ? "Accessibility" : 'Map')
    }

    const { inAccessibilityMode, setInAccessibilityMode } = useContext(AccessibilityContext)

    const toggleAccessibility = () => {
        setInAccessibilityMode(prevInAccessibilityMode => !prevInAccessibilityMode)
    }

    return (
        <View style={styles.screen}>
            <PageHeader title = "Settings" buttonTitle = "Back" handlePress={goBack} />

            <ScrollView>
                <SettingItem 
                    message = "Accessibility Mode" 
                    toggleSwitch={toggleAccessibility}
                    isEnabled={inAccessibilityMode}  
                />
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