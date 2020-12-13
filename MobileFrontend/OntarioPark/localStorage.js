import * as SecureStore from 'expo-secure-store';

const storeCategories = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await SecureStore.setItemAsync('ExploreOntario.Categories', jsonValue)
    } catch (e) {
        // saving error
    }
}

const getSelectedCategories = async () => {
    try {
        const jsonValue = await SecureStore.getItemAsync('ExploreOntario.Categories')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
        // error reading value
    }
}
export {storeCategories, getSelectedCategories}