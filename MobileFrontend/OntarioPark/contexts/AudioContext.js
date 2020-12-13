import React, { useState, useEffect } from 'react'
import { Audio } from 'expo-av';
import { INTERRUPTION_MODE_ANDROID_DO_NOT_MIX, INTERRUPTION_MODE_IOS_DO_NOT_MIX } from 'expo-av/build/Audio';

const AudioContext = React.createContext()

function AudioContextProvider(props) {
    /**
     * Context for providing audio for the application
     */
    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playsInSilentModeIOS: false,
    });
    
    const [playing, setPlaying] = useState(false);
    const [audioSource, setAudioSource] = useState("");
    const [soundObject] = useState(new Audio.Sound());

    // Updates playing state when status changes
    soundObject.setOnPlaybackStatusUpdate(AVPlaybackStatus => {
        if (playing != AVPlaybackStatus.isPlaying) {
            setPlaying(AVPlaybackStatus.isPlaying)            
        }
        if (audioSource != AVPlaybackStatus.uri) {
            setAudioSource(AVPlaybackStatus.uri)
        }
    })

    // Pause and Play the audio
    const setIsPlaying = (isPlaying) => {
        togglePlaying(soundObject, isPlaying)
    }

    // Load and play the audio from src
    const setAudioUri = (src, isPlaying=false) => {
        if (src !== audioSource) {
            loadAudio(soundObject, src, isPlaying)
        } else {
            setIsPlaying(true)
        }
    }

    return (
        <AudioContext.Provider value={{isPlaying: playing, setIsPlaying, setAudioUri}}>
            { props.children }
        </AudioContext.Provider>
    )
}

const loadAudio = async (soundObject, audioSource, isPlaying) => {
    /**
     * Loads the audio into the soundObject
     */
    try {
        const source = {
            uri: audioSource
        };

        await soundObject.unloadAsync();
        await soundObject.loadAsync(source, {shouldPlay: isPlaying}, false);
    } catch (err) {
        console.log(err)
    }
};


const togglePlaying = async (soundObject, isPlaying) => {
    /**
     * Plays and pauses the audio playback
     */
    try {
        if (isPlaying) {
            // await soundObject.playAsync();
            await soundObject.playFromPositionAsync(0)
        } else {
            await soundObject.pauseAsync()
        }            
    } catch (err) {
        console.log(err)
    }

};

export { AudioContext, AudioContextProvider }