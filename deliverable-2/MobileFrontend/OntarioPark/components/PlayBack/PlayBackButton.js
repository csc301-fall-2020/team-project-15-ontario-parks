import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import usePlayBack from '../../hooks/usePlayBack';

function PlayBackButton(props) {
    /**
     * A button used to playback audio when pressed
     */
    
    //  If the music is playing
    const { isPlaying, setIsPlaying, setAudioSource } = usePlayBack(props.src)
    
    const handlePress = () => setIsPlaying(!isPlaying);

    // Update audio source when changed
    useEffect(() => {
        setAudioSource(props.src)
    }, [props.src])

    // Stop the audio when page changed
    useFocusEffect(
        React.useCallback(() => {
            return () => {
                setIsPlaying(false)
            }      
        }, [])
    )

    return(
        <TouchableOpacity style={{...styles.button, ...props.style}} >
            <Icon 
                name={isPlaying ? "pause-circle-filled" : "play-circle-filled"} 
                size={props.size}
                onPress={handlePress} 
                style={styles.icon}
            />
        </TouchableOpacity>            
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        width: 100,
        height: 100,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 50,
        bottom: 22,
        opacity: 0.8
    },
    icon: {
        opacity: 1.0,
        color: "black"
    }
});

export default PlayBackButton
