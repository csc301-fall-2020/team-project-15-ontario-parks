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
import { AccessibilityContext } from '../contexts/AccessibilityContext';
import {storeCategories, getCategories} from "../localStorage";

const CategoriesPage = ({ navigation }) => {

    const { categories } = useContext(CategoryContext)
    const { inAccessibilityMode } = useContext(AccessibilityContext)
    const [selectedCategories, setCategories] = useState([getCategories()])

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
                    activate={categories.includes(itemData.item.name)}
                    onremove = {removeCategory}
                    onadd = {addCategory}
                />
            );
        }
    };

    const finishSelect = () => {
        storeCategories(selectedCategories).then(console.log("stored categories:", selectedCategories))
        if (navigation.canGoBack()) {
            navigation.goBack()
        } else {
            if (inAccessibilityMode) {
                navigation.navigate('Accessibility')
            } else {
                navigation.navigate('Map')
            }
        }
    }

    return (
        <View>
            <CategoryHeader 
                title = "Categories" 
                handleContinue = {finishSelect}
            />
            { categories && (
                <FlatList
                    keyExtractor={(item) => item["_id"]}
                    data={categories}
                    renderItem={renderGridItem}
                    numColumns={2}
                />                
            ) }
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

export default CategoriesPage;