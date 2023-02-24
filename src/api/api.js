import { endpoints } from "./endpoints"

export const getUserProfile = async token => {
    try {
        
        const response = await fetch(endpoints.userProfile + token)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}

export const getSpaceShips = async token => {
    try {
        
        const response = await fetch(endpoints.spaceshipList + token)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}

export const getLoansAvailable = async token => {
    try {
        
        const response = await fetch(endpoints.loansList + token)
        const data = await response.json()

        return data
    } catch (error) {
        console.error(error)
    }
}

export const postLoan = async (token, type) => {
    try {
        const response = await fetch(endpoints.takeOutLoan + token, {
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