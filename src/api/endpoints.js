import * as credentials from "./token.json"

export const endpoints = {
    userProfile: `https://api.spacetraders.io/my/account?token=${credentials.token}`,
    serverStatus: 'https://api.spacetraders.io/game/status'
}