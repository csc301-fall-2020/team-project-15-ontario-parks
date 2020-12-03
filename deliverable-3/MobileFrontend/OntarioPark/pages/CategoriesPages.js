import React, { useContext, useState } from 'react';
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
    const [selectedCategories, setCategories]  =useState([])

    const addCategory = (category) => {
        selectedCategories.push(category)
        setCategories(selectedCategories)
    }
    const removeCategory = (removeCategory) => {
        const newCategories = selectedCategories.filter(category => {category !== removeCategory})
        setCategories(newCategories)
    }
    const renderGridItem = itemData => {
        if (itemData.item.name){
            return (
                <CategoryGridTile
                    title={itemData.item.name}
                    color={colors.yellow}
                    onremove = {removeCategory}
                    onadd = {addCategory}
                />
            );
        }
    };

    return (
        <View>
            <CategoryHeader title = "Categories" onPress = {() => {} }/>
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