import { View, Text, StyleSheet, Button, ImageBackground, Pressable } from 'react-native'
import React from 'react'
import { images } from '../utils/images'

const WelcomeScreen = ({navigation}) => {

    return (
        <ImageBackground source={images.places.login} resizeMode='cover' style={{height: '100%', width: '100%'}}>
            <View style={styles.centerItems}>
                <View style={{flex: 1, justifyContent: 'center'}}>
                <Text style={{fontSize: 30, marginVertical: 20, color: 'aqua'}}>Welcome</Text>
                </View>
                <View style={{flex: 3}}>
                    <Pressable title='Login' style={styles.button} onPress={() => navigation.navigate('Login')}><Text style={{color:'white', fontWeight: '500'}}>Login</Text></Pressable>
                    <Pressable title='Register' style={styles.button} onPress={() => navigation.navigate('Register')}><Text style={{color:'white', fontWeight: '500'}}>Register</Text></Pressable>
                </View>
            </View>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    centerItems: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeButtons: {
        alignItems: 'center',
        flex: 2, 
        height: 200, 
        justifyContent: 'space-evenly',
        width: 200, 
    },
    button: {
        alignItems: 'center',
        backgroundColor: 'rgba(0, 22, 255, 0.5)',
        borderColor: 'rgb(113, 171, 255)',
        borderWidth: 1,
        borderRadius: 5,
        justifyContent: 'center',
        height: 40,
        marginVertical: 10,
        width: 100,
    }
})

export default WelcomeScreen