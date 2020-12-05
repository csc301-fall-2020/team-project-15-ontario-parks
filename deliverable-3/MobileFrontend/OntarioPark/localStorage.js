import AsyncStorage from '@react-native-async-storage/async-storage';
const storeCategories = async (value) => {
    try {
        const jsonValue = JSON.stringify(value)
        await AsyncStorage.setItem('categories', jsonValue)
    } catch (e) {
        // saving error
    }
}

const getCategories = async () => {
    try {
        const jsonValue = await AsyncStorage.getItem('categories')
        return jsonValue != null ? JSON.parse(jsonValue) : [];
    } catch(e) {
        // error reading value
    }
}
export {storeCategories, getCategories}