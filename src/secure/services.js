import * as SecureStore from 'expo-secure-store';

const save = async (key, token) => {
    await SecureStore.setItemAsync(key, token)
}

const getToken = async (key) => {
    const token = await SecureStore.getItemAsync(key)
    return token
}

const deleteToken = async key => {
    await SecureStore.deleteItemAsync(key)
}

export default {
    save, 
    getToken,
    deleteToken
}