import React from "react";
import { Switch } from "react-native";

/**
 *
 the switch button for switching on or off
 */

const SwitchButton = (props) => {
    return (
            <Switch
                trackColor={{ false: "#767577", true: "#81b0ff" }}
                thumbColor={props.isEnabled ? "#f4f3f4" : "#f4f3f4"}
                ios_backgroundColor="#3e3e3e"
                onValueChange={props.toggleSwitch}
                value={props.value}
            />
    );
}

export default SwitchButton;