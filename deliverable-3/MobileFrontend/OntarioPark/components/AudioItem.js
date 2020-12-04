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
        <PlayBackButton style={{flex: 1}} src = {props.audioSrc}>
            <Card style = {styles.card}>
                <View style={styles.textView}>
                    <Text style={styles.text}>
                        {props.title}
                    </Text>
                </View>
            </Card>
        </PlayBackButton>
    )
}

const styles = StyleSheet.create({
    card: {
        flexDirection: "row",
        flex: 1,
        alignItems: "center",
        justifyContent: "space-around",
        height: 55,
        marginBottom: 20,
    },
    textView:{
        flex:1,
        alignItems: "center",
    },
    text: {
        fontFamily: "open-sans",
        fontSize: 28,
    }
})

export default AudioItem