import React, {useState} from "react";
import {View, StyleSheet, Text} from "react-native";
import SwitchButton from "./SwitchButton";

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
        padding: 10,

    },
    text: {
        fontFamily: "open-sans",
        fontSize: 16
    }
})

export default SettingItem