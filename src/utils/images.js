export const images = {
    avatars: {
        purpleAvatar: require('../../assets/avatars/slime_purple.png'),
        lighBlueAvatar: require('../../assets/avatars/slime_lightblue.png'),
        greyAvatar: require('../../assets/avatars/slime_grey.png'),
    },
    resources: {
        credits: require('../../assets/resources/manat.png'),
        shipsCount: require('../../assets/resources/spaceship.png'),
        structures: require('../../assets/resources/structures.png'),
        joinedDate: require('../../assets/resources/calendar.png'),
    }
}

export const getRandomAvatar = () => {
    const avatarsPositions = [
        images.avatars.greyAvatar,
        images.avatars.lighBlueAvatar,
        images.avatars.greyAvatar
    ]

    return avatarsPositions[Math.floor(Math.random() * avatarsPositions.length)]
}
