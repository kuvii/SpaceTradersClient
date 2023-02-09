import { endpoints } from "./endpoints"

export const getUserProfile = async () => {
    try {
        
        const response = await fetch(endpoints.userProfile)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}