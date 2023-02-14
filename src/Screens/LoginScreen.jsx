import { View, Text, StyleSheet, TextInput, Button } from 'react-native'
import { useState } from 'react'
import constants from '../secure/constants'

const LoginScreen = ({onLogin}) => {

  const [inputToken, setInputToken] = useState('')
  const [isIncorrect, setIsIncorrect] = useState(false)

  const handleSubmit = () => {
    if (inputToken.trim() != ''){
      onLogin(constants.STORED_TOKEN_KEY, inputToken)
    } else {
      setIsIncorrect(true)
      setTimeout(() => {
        setIsIncorrect(false)
      }, 2000)
    }
  }

  return (
    <View style={styles.centerItems}>
      <View style={{flex: 1, justifyContent: 'center'}}>
        <Text style={{fontSize: 30, marginVertical: 20}}>Login</Text>
      </View>
      <View style={{flex: 3, height: '100%', width: '100%', alignItems: 'center'}}>
        <View style={styles.loginForm}>
          <TextInput value={inputToken} onChangeText={setInputToken} placeholder='Token' style={isIncorrect ? styles.incorrectInputToken : styles.correctInputToken}/>
          {isIncorrect ? <Text style={{color: 'red'}}>Incorrect Token</Text> : <></>}
          <Button title='Login' onPress={handleSubmit}/>
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
  correctInputToken: {
    backgroundColor: 'lightgrey',
    width: 260,
    paddingHorizontal: 5,
    margin: 5,
  },
  incorrectInputToken: {
    backgroundColor: 'lightgrey',
    borderColor: 'red',
    borderWidth: 1,
    width: 260,
    paddingHorizontal: 5,
    margin: 5,
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