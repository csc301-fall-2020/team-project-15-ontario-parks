import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect } from 'react';
import { StyleSheet,Text, TouchableOpacity } from 'react-native';
import PlayBackButton from "./PlayBack/PlayBackButton";
import Card from "../components/Card";

const AudioItem = props => {

    return(
        <Card style = {styles.card}>
            <Text style={styles.text}>
                {props.title}
            </Text>
            <PlayBackButton src = {props.audioSrc} style ={styles.playBack}/>
        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        height: 35
    },
    playBack: {
        height: 20,
        width: 20,
    },
    text: {
        fontFamily: "open-sans",
        fontSize: 20
    }
})

export default AudioItem