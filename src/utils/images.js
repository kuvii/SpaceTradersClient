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
    },
    spaceShips: {
        JWMKI: require('../../assets/spaceships/jwmki.png'),
        JWMKII: require('../../assets/spaceships/jwmkii.png'),
        ZAMKII: require('../../assets/spaceships/zamkii.png'),
        ZAMKIII: require('../../assets/spaceships/zamkiii.png'),
        EMMKI: require('../../assets/spaceships/emmki.png'),
        GRMKI: require('../../assets/spaceships/grmki.png'),
        GRMKII: require('../../assets/spaceships/grmkii.png'),
        GRMKIII: require('../../assets/spaceships/grmkiii.png'),
        HMMKI: require('../../assets/spaceships/hmmki.png'),
        HMMKIII: require('../../assets/spaceships/hmmkiii.png'),
        TDMKI: require('../../assets/spaceships/tdmki.png'),
    },
    places: {
        home: require('../../assets/places/ship.jpg'),
        shop: require('../../assets/places/shop.jpeg'),
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

export const getSpaceShipByType = type => {
    const { spaceShips } = images
    const shipTypes = {
        'JW-MK-I': spaceShips.JWMKI,
        'JW-MK-II': spaceShips.JWMKII,
        'GR-MK-I': spaceShips.GRMKI,
        'ZA-MK-II': spaceShips.ZAMKII,
        'ZA-MK-III': spaceShips.ZAMKIII,
        'EM-MK-I': spaceShips.EMMKI,
        'HM-MK-I': spaceShips.HMMKI,
        'GR-MK-II': spaceShips.GRMKII,
        'GR-MK-III': spaceShips.GRMKIII,
        'HM-MK-III': spaceShips.HMMKIII,
        'TD-MK-I': spaceShips.TDMKI,
    }
    return shipTypes[type]
}
