import { Audio } from 'expo-av';
import { INTERRUPTION_MODE_ANDROID_DO_NOT_MIX, INTERRUPTION_MODE_IOS_DO_NOT_MIX } from 'expo-av/build/Audio';
import { useEffect, useState } from 'react';

/**
 * Custom hook for audio playback
 */
function usePlayBack(src) {
    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playsInSilentModeIOS: false,
    });
    
    const [playing, setPlaying] = useState(false);
    const [audioSource, setAudioSource] = useState(src);
    const [soundObject] = useState(new Audio.Sound());

    // Updates playing state when status changes
    soundObject.setOnPlaybackStatusUpdate(AVPlaybackStatus => {
        if (playing != AVPlaybackStatus.isPlaying) {
            setPlaying(AVPlaybackStatus.isPlaying)            
        }
    })

    // Load the audio
    useEffect(() => {
        loadAudio(soundObject, audioSource, playing);
    }, [audioSource]);

    // Pause and Play the audio
    const setIsPlaying = (isPlaying) => {
        togglePlaying(soundObject, isPlaying)
    }

    return { isPlaying: playing, setIsPlaying, setAudioSource };
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
            soundObject.playFromPositionAsync(0)
        } else {
            await soundObject.pauseAsync();
        }            
    } catch (err) {
        console.log(err)
    }

};

export default usePlayBack;