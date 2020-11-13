import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';

function PlayBackButton(props) {
    const [ isPlaying, setIsPlaying ] = useState(false);

    const handlePress = () => setIsPlaying(prevIsPlaying => !prevIsPlaying);

    return(
        <View>
            <TouchableOpacity style={styles.button} >
                <Icon 
                    name={isPlaying ? "pause-circle-filled" : "play-circle-filled"} 
                    size={100} 
                    onPress={handlePress} 
                />
            </TouchableOpacity>            
        </View>
    );
}

const styles = StyleSheet.create({
    button: {
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: "center",

    }
});

export default PlayBackButton
