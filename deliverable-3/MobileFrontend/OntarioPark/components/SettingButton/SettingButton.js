import Icon from 'react-native-vector-icons/MaterialIcons';
import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';

/**
 * A user defined button to replace the build in button component
 */

function SettingButton(props) {
    return(
        <TouchableOpacity style={styles.button} >
            <Icon 
                name="settings" 
                size={50} 
                onPress={props.handlePress} 
                style={styles.icon}
            />
        </TouchableOpacity>            
    );
}

const styles = StyleSheet.create({
    button: {
        position: "absolute",
        width: 50,
        height: 50,
        justifyContent: 'center',
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: "white",
        borderRadius: 25,
        bottom: 22,
        right: 22,
        opacity: 0.8
    },
    icon: {
        opacity: 1.0,
        color: "black"
    }
});

export default SettingButton
