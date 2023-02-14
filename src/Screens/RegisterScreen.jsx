import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useEffect, useState } from 'react'

import { postUser } from '../api/api'

import storeController from '../secure/controllers'
import constants from '../secure/constants'

const RegisterScreen = ({navigation}) => {

  const [inputUser, setInputUser] = useState('')
  const [isIncorrect, setIsIncorrect] = useState(false)

  const fetchPostUser = async user => {
    try {
      const response = await postUser(user)
      if (response != undefined){
        if (response.token != undefined){
          storeController.storeToken(constants.STORED_TOKEN_KEY, response.token)
          navigation.navigate('Login')
        } else {
          setIsIncorrect(true)
          setTimeout(() => {
            setIsIncorrect(false)
          }, 2000)
        }
      } 
    } catch (error) {
      console.error(error)
    }
  }

  const handleSubmit = () => {
    if (inputUser.trim() != '') {
      fetchPostUser(inputUser)
    }
  }

  return (
    <View style={styles.centerItems}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30, marginVertical: 20}}>Register</Text>
      </View>
      <View style={{flex: 3, height: '100%', width: '100%', alignItems: 'center'}}>
        <View style={styles.registerForm}>
          <TextInput value={inputUser} placeholder='User' onChangeText={setInputUser} style={isIncorrect ? styles.incorrectInputUser : styles.correctInputUser}/>
          {isIncorrect ? <Text style={{color: 'red'}}>Username Incorrect</Text> : <></>}
          <Button title='Register' onPress={handleSubmit}/>
        </View>
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
  correctInputUser: {
    backgroundColor: 'lightgrey',
    width: 200,
    paddingHorizontal: 5,
    margin: 5,
  },
  incorrectInputUser: {
    backgroundColor: 'lightgrey',
    borderColor: 'red',
    borderWidth: 1,
    width: 200,
    paddingHorizontal: 5,
    margin: 5,
  },
  registerForm: {
    alignItems: 'center',
    flex: 2, 
    height: 200, 
    justifyContent: 'flex-start',
    width: 200, 
  },
})

export default RegisterScreen