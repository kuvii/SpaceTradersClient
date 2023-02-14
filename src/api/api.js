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

export const getSpaceShips = async () => {
    try {
        
        const response = await fetch(endpoints.spaceshipList)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}

export const getLoansAvailable = async () => {
    try {
        
        const response = await fetch(endpoints.loansList)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}