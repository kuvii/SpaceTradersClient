import services from './services'
import storeServices from './services'

const storeToken = (setToken, key, token) => {
    setToken(token)
    storeServices.save(key, token)
    console.log(`Token guardado`)
}

const getValueFor = async (key) => {
    let result = await services.getToken(key)

    if (result) {
        console.log(`Tu valor es ${result}`)
        return result
    }

    return ''
}

const deleteToken = (setToken, key) => {
    setToken('')
    storeServices.deleteToken(key)
    console.log('Token borrado')
}

export default {
    storeToken,
    getValueFor,
    deleteToken
}