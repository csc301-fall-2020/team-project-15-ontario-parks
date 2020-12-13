
import React, { useContext } from 'react'
import { View, Text, StyleSheet, ScrollView } from 'react-native'
import { TouchableOpacity } from 'react-native-gesture-handler';
import PageHeader from "../components/Header/PageHeader";

import SettingItem from "../components/Item/SettingItem";
import { AccessibilityContext } from '../contexts/AccessibilityContext';

/**
 * a setting page for the mp application
 */
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
                
            <View style={styles.buttonContainer}>
                <TouchableOpacity 
                    style={styles.body} 
                    onPress={() => navigation.navigate('Categories')}
                >
                    <Text style={styles.text}>
                        Select Categories
                    </Text>
                </TouchableOpacity>                
            </View>

        </View>

        )
}
const styles = StyleSheet.create({
    screen: {
        flex:1
    },
    buttonContainer: {
        position: "absolute",
        bottom: 40,
        width: "100%",
        alignSelf: "center",
    }, 
    body: {
        flex: 1,
        alignContent: "center",
        padding: 20,
        backgroundColor: "#ddd",
        borderRadius: 20,
        alignSelf: "center",
        width: "80%"
    },
    text: {
        fontSize: 20,
        alignSelf: "center"
    }
})
export default SettingPage