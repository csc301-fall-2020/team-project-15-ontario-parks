import React from 'react'
import { StyleSheet, View } from 'react-native'
import colors from "../../constants/colors";
import TitleText from "../Text/TitleText";
import HeaderButton from "../Button/HeaderButton";


/**
 a page header represent the title of the page and a functional button
 */
const PageHeader = props => (
    <View style={styles.header}>
        <View style={styles.backView}>
            <HeaderButton handlePress={props.handlePress}> {props.buttonTitle}</HeaderButton>

        </View>
        <View style={styles.TitleView}>
            <TitleText>{props.title}</TitleText>
        </View>
    </View>
)

const styles = StyleSheet.create({
    backView:{
        flexGrow: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        paddingLeft: 10
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
export default PageHeader