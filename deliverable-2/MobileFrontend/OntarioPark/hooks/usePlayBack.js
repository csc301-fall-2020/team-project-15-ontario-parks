import { Audio } from 'expo-av'
import { INTERRUPTION_MODE_ANDROID_DO_NOT_MIX, INTERRUPTION_MODE_IOS_DO_NOT_MIX } from 'expo-av/build/Audio'
import { useEffect, useState } from 'react'

function usePlayBack(src) {
    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playsInSilentModeIOS: false
    })
    
    const [isPlaying, setIsPlaying] = useState(false)
    const [audioSource, setAudioSource] = useState(src)
    
    const soundObject = new Audio.Sound()

    useEffect(() => {
        if (isPlaying) {
            soundObject.playAsync()
        } else {
            soundObject.pauseAsync()
        }
    }, [isPlaying])

    useEffect(() => {
        const source = {
            uri: audioSource
        }
    
        soundObject.loadAsync(source, {shouldPlay: isPlaying}, false)    
    }, [audioSource])

    return { setIsPlaying, setAudioSource }
}

export default usePlayBack