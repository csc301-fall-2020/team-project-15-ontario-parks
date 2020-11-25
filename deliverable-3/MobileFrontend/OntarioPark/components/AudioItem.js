import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect } from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import PlayBackButton from "./PlayBack/PlayBackButton";
import Card from "../components/Card";

/**
 a component represent for each audio item inside accessibility page
 */
const AudioItem = props => {

    return(
        <Card style = {styles.card}>
            <View style={styles.textView}>
                <Text style={styles.text}>
                    {props.title}
                </Text>
            </View>
            <View style={styles.playBackView}>
                <PlayBackButton src = {props.audioSrc} style ={styles.playBack} size = {30}/>
            </View>

        </Card>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        height: 35,
        marginBottom: 20
    },
    playBack: {
        position: "relative",
        width: 30,
        height: 30,
        justifyContent: 'center',
        backgroundColor: "white",
        borderRadius: 50,
        opacity: 0.8,
        bottom: 0
    },
    textView:{
        flex:1,
        alignItems: "center"
    },
    playBackView: {
        flex:1,
        overflow: "visible",
        justifyContent: "center",
        alignItems: "center"
    },
    text: {
        fontFamily: "open-sans",

    }
})

export default AudioItem