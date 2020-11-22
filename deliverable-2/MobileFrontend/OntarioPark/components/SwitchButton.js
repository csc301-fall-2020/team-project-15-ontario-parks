import React, {useState} from "react";
import { Switch } from "react-native";


const SwitchButton = (props) => {
    return (
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={props.isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.toggleSwitch}
                value={props.isEnabled}
            />
    );
}

export default SwitchButton;