import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useState } from 'react'
import constants from '../secure/constants'

const LoginScreen = ({onLogin}) => {

  const [inputToken, setInputToken] = useState('')

  return (
    <View style={styles.centerItems}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30, marginVertical: 20}}>Login</Text>
      </View>
      <View style={{flex: 3, height: '100%', width: '100%', alignItems: 'center'}}>
        <View style={styles.loginForm}>
          <TextInput value={inputToken} onChangeText={setInputToken} style={styles.inputToken}/>
          <Button title='Login' onPress={() => onLogin(constants.STORED_TOKEN_KEY, inputToken)}/>
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
  inputToken: {
    backgroundColor: 'lightgrey',
    width: 200
  },
  loginForm: {
    alignItems: 'center',
    flex: 2, 
    height: 200, 
    justifyContent: 'flex-start',
    width: 200, 
  },
})

export default LoginScreen