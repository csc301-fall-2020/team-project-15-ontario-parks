import React, { useContext } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import CategoryGridTile from '../components/CategoryGridTile';
import colors from "../constants/colors";
import CategoryHeader from "../components/Header/CategoryHeader";
import { CategoryContext } from '../contexts/CategoryContext';

const CategoriesScreen = props => {

    const { categories } = useContext(CategoryContext)

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

    return (
        <View>
            <CategoryHeader title = "Categories"/>
            <FlatList
                keyExtractor={(item) => item["_id"]}
                data={categories}
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