
export const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=`,
    serverStatus: 'https://api.spacetraders.io/game/status',
    spaceshipList: `https://api.spacetraders.io/systems/OE/ship-listings?token=`,
    loansList: `https://api.spacetraders.io/types/loans?token=`,
    takeOutLoan: `https://api.spacetraders.io/my/loans/?token=`,
    createUser: user => `https://api.spacetraders.io/users/${user}/claim`,
}