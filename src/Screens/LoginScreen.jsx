import { View, Text, StyleSheet, TextInput, Button, ImageBackground } from 'react-native'
import { useState } from 'react'
import { images } from '../utils/images'

const LoginScreen = ({onLogin}) => {

  const [inputToken, setInputToken] = useState('')
  const [isIncorrect, setIsIncorrect] = useState(false)

  const handleSubmit = () => {
    if (inputToken.trim() != ''){
      onLogin(inputToken)
    } else {
      setIsIncorrect(true)
      setTimeout(() => {
        setIsIncorrect(false)
      }, 2000)
    }
  }

  return (
    <ImageBackground source={images.places.login} resizeMode='cover' style={{height: '100%', width: '100%'}}>
      <View style={styles.centerItems}>
        <View style={{flex: 1, justifyContent: 'center'}}>
          <Text style={{fontSize: 30, marginVertical: 20, color: 'aqua'}}>Login</Text>
        </View>
        <View style={{flex: 3, height: '100%', width: '100%', alignItems: 'center'}}>
          <View style={styles.loginForm}>
            <TextInput value={inputToken} onChangeText={setInputToken} placeholder='Token' placeholderTextColor={isIncorrect ? 'red' : 'aqua'} style={isIncorrect ? styles.incorrectInputToken : styles.correctInputToken}/>
            {isIncorrect ? <Text style={{color: 'red'}}>Incorrect Token</Text> : <></>}
            <Button title='Login' onPress={handleSubmit}/>
          </View>
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
  correctInputToken: {
    backgroundColor: 'rgba(0, 22, 255, 0.5)',
    borderColor: 'rgb(113, 171, 255)',
    borderWidth: 1,
    borderRadius: 5,
    color: 'aqua',
    width: 260,
    paddingHorizontal: 5,
    margin: 5,
  },
  incorrectInputToken: {
    backgroundColor: 'rgba(0, 22, 255, 0.5)',
    borderColor: 'red',
    borderRadius: 5,
    borderWidth: 1,
    color: 'red',
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