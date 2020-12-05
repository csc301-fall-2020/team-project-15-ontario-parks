import Icon from 'react-native-vector-icons/MaterialIcons';
import React, { useContext, useEffect } from 'react';
import { useFocusEffect } from '@react-navigation/native';
import { StyleSheet, TouchableOpacity } from 'react-native';
import { AudioContext } from '../../contexts/AudioContext';

/**
 * A button used to playback audio when pressed
 */
function PlayBackButton(props) {
    //  If the music is playing
    const { isPlaying, setIsPlaying, setAudioUri } = useContext(AudioContext)
    
    const handlePress = () => {
        if (isPlaying) {
            setIsPlaying(!isPlaying)            
        } else {
            setAudioUri(props.src, true)
        }
    };

    // Update audio source when changed
    useEffect(() => {
        setAudioUri(props.src)
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
        <TouchableOpacity 
            style={props.children ? styles.container : {...styles.button, ...props.style}}
            onPress={handlePress} 
        >
            {
                props.children ? props.children : (<Icon
                    name={isPlaying ? "pause-circle-filled" : "play-circle-filled"} 
                    size={props.size}
                    style={styles.icon}
                />)                    
            }
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
    },
    container: {
        flex: 1
    }
});

export default PlayBackButton
