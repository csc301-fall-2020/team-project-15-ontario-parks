import React from 'react';
import {
    View,
    Text,
    FlatList,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import  CATEGORIES  from '../constants/categories';
import CategoryGridTile from '../components/CategoryGridTile';
import colors from "../constants/colors";
import CategoryHeader from "../components/Header/CategoryHeader";
const CategoriesScreen = props => {

    const renderGridItem = itemData => {
        if (itemData.item.name){
            return (
                <CategoryGridTile
                    title={itemData.item.name}
                    color={colors.yellow}
                    onSelect={() => {

                    }}
                />
            );
        }

    };
    console.log(CATEGORIES)
    return (
        <View>
            <CategoryHeader title = "Categories"/>
            <FlatList
                keyExtractor={(item) => item["_id"]}
                data={CATEGORIES}
                renderItem={renderGridItem}
                numColumns={2}
            />
        </View>

    );
};



const styles = StyleSheet.create({
    screen: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

export default CategoriesScreen;