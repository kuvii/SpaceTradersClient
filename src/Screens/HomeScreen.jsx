import { View, Text, StyleSheet, Image, Button, ImageBackground } from 'react-native'

import { images } from '../utils/images'
import Username from '../components/Username'
import { useEffect, useState } from 'react'

const HomeScreen = ({logOut, userProfile}) => {

  return (
    
      <ImageBackground source={images.places.home} style={{height: '100%', width: '100%'}}>
            <View style={styles.center}>
            <Username username={userProfile.username} />
            <View style={styles.credits}>
                <View style={{flexDirection: 'row'}}>
                    <Text style={{textAlign: 'center'}}>{userProfile.credits}</Text>
                    <Image source={images.resources.credits} alt='credits' style={{height: 20, width: 20}} />
                </View>
            </View>
            <View style={{...styles.stack, height: 200}}>
                <View style={styles.itemStack}>
                    <View style={{...styles.itemStack, flex: 1}}>
                        <Image source={images.resources.shipsCount} alt='shipCount' style={{height: 30, width: 30}} />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 20}}> {userProfile.shipCount} </Text>
                    </View>
                </View>
                <View style={styles.itemStack}>
                    <View style={{...styles.itemStack, flex: 1}}>
                        <Image source={images.resources.structures} alt='structureCount' style={{height: 30, width: 30}} />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 20}}> {userProfile.structureCount} </Text>
                    </View>
                </View>
                <View style={styles.itemStack}>
                    <View style={{...styles.itemStack, flex: 1}}>
                        <Image source={images.resources.joinedDate} alt='joinedAt' style={{height: 30, width: 30}} />
                    </View>
                    <View style={{flex: 1}}>
                        <Text style={{fontSize: 20}}> {userProfile.joinedAt.substring(0, 10)} </Text>
                    </View>
                </View>
            </View>
            <View>
                <Button title='Logout' onPress={() => logOut()} />
            </View>
        </View>
    </ImageBackground>
  )
}

let styles = StyleSheet.create({
    center: {
        flex: 1,
        paddingTop: 10,
        alignItems: 'center',
    },
    stack: {
        backgroundColor: 'lightgrey',
        borderWidth: 1,
        height: 100,
        margin: 10,
        width: 300,
    },
    itemStack: {
        alignItems: 'center',
        borderWidth: 0,
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 50,
        margin: 0,
        width: '100%',
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