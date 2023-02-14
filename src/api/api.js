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

export const postLoan = async type => {
    try {
        const response = await fetch(endpoints.takeOutLoan, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                type
            })
        })
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}

export const postUser = async user => {
    try {
        const response = await fetch(endpoints.createUser(user), {
            method: 'POST',
        })
        const data = response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}