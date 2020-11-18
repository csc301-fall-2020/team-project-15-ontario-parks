import { Audio } from 'expo-av';
import { INTERRUPTION_MODE_ANDROID_DO_NOT_MIX, INTERRUPTION_MODE_IOS_DO_NOT_MIX } from 'expo-av/build/Audio';
import { useEffect, useState } from 'react';


function usePlayBack(src) {
    Audio.setAudioModeAsync({
        allowsRecordingIOS: false,
        staysActiveInBackground: true,
        interruptionModeIOS: INTERRUPTION_MODE_IOS_DO_NOT_MIX,
        interruptionModeAndroid: INTERRUPTION_MODE_ANDROID_DO_NOT_MIX,
        playsInSilentModeIOS: false,
    });
    
    const [isPlaying, setIsPlaying] = useState(false);
    const [audioSource, setAudioSource] = useState(src);
    const [soundObject, setSoundObject] = useState(new Audio.Sound());

    useEffect(() => {
        loadAudio(soundObject, audioSource, isPlaying);
    }, [audioSource]);

    useEffect(() => {
        playAudio(soundObject, isPlaying)
    }, [isPlaying]);

    return { isPlaying, setIsPlaying, setAudioSource };
}


const loadAudio = async (soundObject, audioSource, isPlaying) => {
    try {
        const source = {
            uri: audioSource
        };

        await soundObject.loadAsync(source, {shouldPlay: isPlaying}, false);            
    } catch (err) {
        console.log(err)
    }
};


const playAudio = async (soundObject, isPlaying) => {
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