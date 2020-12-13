import React from "react";
import {View, StyleSheet, Text} from "react-native";
import SwitchButton from "../Button/SwitchButton";

/**
 * A setting line represent each setting component in setting page
 */
const SettingItem = (props) => {


    return (
        <View style={styles.container}>
            <Text style={styles.text}>
                {props.message}
            </Text>
            <SwitchButton value={props.isEnabled} toggleSwitch={props.toggleSwitch} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: "row",
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        padding: 20,
    },
    text: {
        fontFamily: "open-sans",
        fontSize: 20
    }
})

export default SettingItem