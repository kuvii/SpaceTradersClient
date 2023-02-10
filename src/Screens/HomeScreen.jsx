import { View, Text, StyleSheet, Image } from 'react-native'
import { getUserProfile } from '../api/api'
import { useEffect, useState } from 'react'

const images = {
    avatars: {
        purpleAvatar: require('../../assets/avatars/slime_purple.png'),
    },
    resources: {
        credits: require('../../assets/resources/manat.png')
    }
}

const initUserProfile = {
    credits: 0,
    joinedAt: '',
    shipCount: 0,
    structureCount: 0,
    username: '',
}

const HomeScreen = () => {

    const [userProfile, setUserProfile] = useState(initUserProfile)

    useEffect(() => {
        const fetchUserProfile = async () => {
            const data = await getUserProfile()
            setUserProfile(data.user)
            if (userProfile.username.length >= 18){
                setUserProfile({...userProfile, username: (username.substring(0, 15) + '...')})
            }
        }
        fetchUserProfile()
    }, [])

  return (
    <View style={styles.center}>
        <View style={styles.row}>
            <View style={styles.avatarContainer}>
                <Image source={images.avatars.purpleAvatar} alt='avatar' style={{height: '90%', width: '80%'}} />
            </View>
            <View style={styles.usernameContainer}>
                <Text style={{fontSize: 20}}>{userProfile.username}</Text>
            </View>
        </View>
        <View style={styles.credits}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{textAlign: 'center'}}>{userProfile.credits}</Text>
                <Image source={images.resources.credits} alt='credits' style={{height: 20, width: 20}} />
            </View>
        </View>
        <View style={{...styles.stack, height: 200}}></View>
    </View>
  )
}

let styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center'
    },
    stack: {
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        height: 100,
        margin: 10,
        width: 300,
    },
    avatarContainer: {
        flex: 1,
        alignItems: 'center',
        backgroundColor: 'black',
        borderColor: 'grey',
        borderRadius: 100,
        borderWidth: 2,
        justifyContent: 'center',
        marginLeft: 10,
        height: '90%',
    },
    usernameContainer: {
        flex: 2,
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%'
    }
})

styles = {...styles,
    credits: {
        ...styles.stack, 
        justifyContent: 'center', 
        alignItems: 'center'
    },
    row: {
        ...styles.stack,
        alignItems: 'center',
        flexDirection: 'row',
    }
}


export default HomeScreen