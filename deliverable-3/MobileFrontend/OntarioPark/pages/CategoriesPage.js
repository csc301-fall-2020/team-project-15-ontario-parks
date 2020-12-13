import React, { useContext } from 'react';
import {
    View,
    FlatList,
    StyleSheet,
} from 'react-native';
import CategoryGridTile from '../components/Item/CategoryGridTile';
import CategoryHeader from "../components/Header/CategoryHeader";
import { CategoryContext } from '../contexts/CategoryContext';
import { AccessibilityContext } from '../contexts/AccessibilityContext';
import {storeCategories} from "../localStorage";

const CategoriesPage = ({ navigation }) => {
    /**
     * Page for displaying and allowing user to select category that they are interested in.
    */
    const { allCategories, selectedCategories, setSelectedCategories } = useContext(CategoryContext)
    const { inAccessibilityMode } = useContext(AccessibilityContext)
    const addCategory = (category) => {
        setSelectedCategories(prev =>
            prev.concat([category])
        )
    }

    const removeCategory = (removeCategory) => {
        const newCategories = selectedCategories.filter(category => {category !== removeCategory})
        setSelectedCategories(newCategories)
    }

    const renderGridItem = itemData => {
        if (itemData.item.name){
            return (
                <CategoryGridTile
                    title={itemData.item.name}
                    activate={selectedCategories.includes(itemData.item.name)}
                    onremove = {removeCategory}
                    onadd = {addCategory}
                />
            );
        }
    };

    const finishSelect = () => {
        console.log("selectedCategoies", selectedCategories)
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
            { allCategories && (
                <FlatList
                    keyExtractor={(item) => item["_id"]}
                    data={allCategories}
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