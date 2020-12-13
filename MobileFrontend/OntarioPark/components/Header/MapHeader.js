import React, { useContext } from 'react'
import { StyleSheet, View } from 'react-native'
import { Text } from 'react-native-elements'
import { SafeAreaInsetsContext } from 'react-native-safe-area-context'

/**
 * Header for map page. Displays the string in prop text.
 */
function MapHeader(props) {
    const { top } = useContext(SafeAreaInsetsContext)

    return(
        <View style={{
                ...styles.header,
                top: top + 8
            }}>
            <Text style={styles.text}>
                {props.text}
            </Text>
        </View>            
    )
}

const styles = StyleSheet.create({
    header: {
        position: "absolute",
        padding: 18,
        alignSelf: "center",
        borderRadius: 24,
        backgroundColor: "white",
        top: 17,
        opacity: 0.85

    },
    text: {
        fontSize: 34,
        fontWeight: "bold",
        textTransform: "capitalize",
        justifyContent: "center",
        alignSelf: "center",
        opacity: 1.0
    }
})

export default MapHeader