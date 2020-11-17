import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect } from 'react';
import { StyleSheet, TouchableOpacity, View } from 'react-native';
import usePlayBack from '../../hooks/usePlayBack';

function PlayBackButton(props) {
    const { isPlaying, setIsPlaying, setAudioSource } = usePlayBack(props.src)
    
    const handlePress = () => setIsPlaying(prevIsPlaying => !prevIsPlaying);

    useEffect(() => {
        setAudioSource(props.src)
    }, [props.src])

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
