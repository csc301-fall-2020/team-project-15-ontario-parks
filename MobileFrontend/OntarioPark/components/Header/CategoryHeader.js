import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from "../../constants/colors";
import TitleText from "../Text/TitleText";
import HeaderButton from "../Button/HeaderButton";

/**
 * Header for category page.
 * Transition to the proper page after clicking continue.
*/
const CategoryHeader = (props) => {
    return(
        <View style={styles.header}>

            <View style={styles.TitleView}>
                <TitleText>{props.title}</TitleText>
            </View>

            <HeaderButton 
                style ={styles.buttonView} 
                handlePress = {props.handleContinue}
            > 
                Continue 
            </HeaderButton>
        </View>        
    )
}

const styles = StyleSheet.create({
    buttonView:{
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "flex-end",
        paddingRight: 10
    },

    TitleView: {
        paddingLeft: 10,
        flexGrow: 2,
        flexDirection: "row",
        justifyContent: "flex-start"
    },

    header: {
        width: "100%",
        flexDirection: "row",
        height: 90,
        paddingTop: 36,
        backgroundColor: colors.settingHeader ,
        alignItems: "center",
    }

})
export default CategoryHeader