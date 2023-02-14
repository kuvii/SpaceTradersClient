import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import { getSpaceShipByType } from '../utils/images'

const ShipContainer = ({item}) => {
    const {type, speed, weapons, maxCargo} = item
    const source = getSpaceShipByType(type)

    return (
        <View style={styles.container}>
            <View style={styles.image}>
                <Image source={source} alt='Nave' style={{width: '100%', height: '100%', resizeMode: 'center'}}/>
            </View>
            <View style={{flex: 2}}>
                <Text style={{fontSize: 16}}>Tipo: {' '}
                    <Text style={{fontWeight: 'bold'}}>
                        {type}
                    </Text>
                </Text>
                <Text>Velocidad: {' '}
                    <Text style={{fontWeight: 'bold'}}>
                        {speed}
                    </Text>
                </Text>
                <Text>Armamento: {' '}
                    <Text style={{fontWeight: 'bold'}}>
                        {weapons}
                    </Text>
                </Text>
                <Text>Carga: {' '}
                    <Text style={{fontWeight: 'bold'}}>
                        {maxCargo}
                    </Text>
                </Text>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        borderWidth: 1,
        borderColor: 'grey',
        borderRadius: 5,
        backgroundColor: 'lightgrey',
        flex: 1,
        flexDirection: 'row',
        margin: 10,
        padding: 10,
    },
    image: {
        flex: 1, 
        height: '100%',
        width: '100%',
        marginRight: 5,
    }
})

export default ShipContainer