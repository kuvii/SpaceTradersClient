import * as credentials from "./token.json"

export const endpoints = {
    userProfile: token => `https://api.spacetraders.io/my/account?token=${token}`,
    serverStatus: 'https://api.spacetraders.io/game/status',
    spaceshipList: `https://api.spacetraders.io/systems/OE/ship-listings?token=${credentials.token}`,
    loansList: `https://api.spacetraders.io/types/loans?token=${credentials.token}`,
    takeOutLoan: `https://api.spacetraders.io/my/loans/?token=${credentials.token}`,
    createUser: user => `https://api.spacetraders.io/users/${user}/claim`,
}