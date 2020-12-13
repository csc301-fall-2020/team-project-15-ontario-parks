import React, {useState} from 'react';
import {
    TouchableOpacity,
    View,
    Text,
    StyleSheet,
    Platform,
    TouchableNativeFeedback
} from 'react-native';
import colors from "../../constants/colors";

/**
 * A tile that represents a category.
 * Click the tile to select/deselect the category.
 */
const CategoryGridTile = props => {
    let TouchableCmp = TouchableOpacity;
    if (Platform.OS === 'android' && Platform.Version >= 21) {
        TouchableCmp = TouchableNativeFeedback;
    }
    const [activate, setActivate] = useState(props.activate)
    const onSelect = () => {
        setActivate(!activate)
        if (activate) {
            props.onremove(props.title)
        } else {
            props.onadd(props.title)
        }
    }
    return (
        <View style={styles.gridItem}>
            <TouchableCmp style={{flex: 1}} onPress={onSelect}>
                <View
                    style={activate ? {...styles.container, ...{backgroundColor: colors.activate}} :
                        {...styles.container, ...{backgroundColor: colors.inactivate}}}
                >
                    <Text style={styles.title} numberOfLines={2}>
                        {props.title}
                    </Text>
                </View>
            </TouchableCmp>
        </View>
    );
};

const styles = StyleSheet.create({
    gridItem: {
        flex: 1,
        margin: 15,
        height: 150,
        borderRadius: 10,
        overflow: 'hidden'
    },
    container: {
        flex: 1,
        borderRadius: 10,
        shadowColor: 'black',
        shadowOpacity: 0.26,
        shadowOffset: {width: 0, height: 2},
        shadowRadius: 10,
        elevation: 3,
        padding: 15,
        justifyContent: 'flex-end',
        alignItems: 'flex-end'
    },
    title: {
        fontFamily: 'open-sans-bold',
        fontSize: 22,
        textAlign: 'right'
    }
});

export default CategoryGridTile;
