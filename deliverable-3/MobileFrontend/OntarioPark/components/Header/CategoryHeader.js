import React, { useState } from 'react'
import { StyleSheet, View } from 'react-native'
import colors from "../../constants/colors";
import TitleText from "../TitleText";
import HeaderButton from "../HeaderButton";
const CategoryHeader = props => (
    <View style={styles.header}>

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
export default CategoryHeader