import { View, Text, StyleSheet, Image, Pressable, Alert } from 'react-native'
import React from 'react'
import { images } from '../utils/images'
import { postLoan } from '../api/api'
import { useNavigation } from '@react-navigation/core'
import Toast from 'react-native-root-toast'

const LoanContainer = ({item, token, setDataChanged}) => {
    const navigation = useNavigation()

    const {amount, rate, termInDays, type} = item

    const fetchPostTakeOutLoan = async (type) => {
        try {
            const result = await postLoan(token, type)
            console.log(result)
            if (result?.error) {
                Toast.show('Already took a loan')
                return
            }
            setDataChanged(true)
            setTimeout(() => {
                navigation.navigate('Home')
            }, 2000)
        } catch (error) {
            console.error(error)
        }
    }

    return (
        <View style={styles.loanContainer}>
            <View style={{flex: 1}}>
            <View style={{flexDirection: 'row'}}>
                <Text style={{fontSize: 16, fontWeight: 'bold'}}>{amount} </Text>
                <Image source={images.resources.credits} style={{width: 20, height: 20}} alt='creditos'/>
            </View>
            <Text>Interest: {rate}%</Text>
            <Text>Term: {termInDays}</Text>
            <Text>Type: {type}</Text>
            </View>
            <View style={{flex: 1}}>
                <Pressable style={[styles.button, styles.centerItems]} onPress={() => fetchPostTakeOutLoan(type)} >
                    <Text style={{textAlign: 'center', color: 'white'}}>Aceptar {'\n'}Préstamo</Text>
                </Pressable>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    centerItems: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center',
    },
    loanContainer: {
      backgroundColor: 'rgba(0, 255, 255, 0.5)',
      borderColor: 'rgb(140, 255, 255)',
      borderRadius: 5,
      borderWidth: 1,
      flex: 1,
      flexDirection: 'row',
      height: '100%',
      padding: 10,
      width: '100%',
    },
    button: {
        alignSelf: 'center',
        backgroundColor: 'blue', 
        borderRadius: 15,
        height: '50%', 
        width: '100%', 
    },
})

export default LoanContainer