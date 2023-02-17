import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import { RootSiblingParent } from 'react-native-root-siblings';

import HomeScreen from './src/Screens/HomeScreen';
import ShipsScreen from './src/Screens/ShipsScreen';
import LoansScreen from './src/Screens/LoansScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

import { useEffect, useState } from 'react';

import { getUserProfile } from './src/api/api';
import storeController from './src/secure/controllers'
import constants from './src/secure/constants'
import { userModel } from './src/models/user';
import { StatusBar } from 'react-native';

const Drawer = createDrawerNavigator();

export default function App() {

  const [userToken, setUserToken] = useState('')
  const [userProfile, setUserProfile] = useState(userModel)

  useEffect(() => {
    const retrieveStoreToken = async () => {
      const storedToken = await storeController.getValueFor(constants.STORED_TOKEN_KEY)
      setUserToken(storedToken)
      if (storedToken != ''){
        const data = await getUserProfile(storedToken)
        setUserProfile(data.user)
      }
    }

    retrieveStoreToken()
  }, [])

  const logIn = async (token) => {
    try {
      const data = await getUserProfile(token)
      setUserProfile(data.user)
      if(data.user != undefined){
        if (userProfile.username.length >= 18){
          setUserProfile({...userProfile, username: (userProfile.username.substring(0, 15) + '...')})
        }
        setUserToken(token)
        storeController.storeToken(constants.STORED_TOKEN_KEY, token)
      }
    } catch (error) {
        console.error(error)
    }
  }

  const newUser = (token) => {
    setUserToken(token)
    storeController.storeToken(constants.STORED_TOKEN_KEY, token)
  }

  const logOut = () => {
    setUserToken('')
    storeController.deleteToken(constants.STORED_TOKEN_KEY)
  }

  return (
    <RootSiblingParent>
      <StatusBar />
      <NavigationContainer>
        <Drawer.Navigator screenOptions={{headerShown: false}}>
          {
            userToken === '' ? 
            <>
              <Drawer.Screen name="Login">
                {() => <LoginScreen onLogin={logIn}/>}
              </Drawer.Screen>
              <Drawer.Screen name="Register">
                {() => <RegisterScreen onRegister={newUser}/>}
              </Drawer.Screen>
            </>
            : 
            <>
              <Drawer.Screen name="Home" >
                {() => <HomeScreen logOut={logOut} userProfile={userProfile}/>}
              </Drawer.Screen>
              <Drawer.Screen name="Ships" >
                {() => <ShipsScreen token={userToken} />}
              </Drawer.Screen>
              <Drawer.Screen name="Loans">
                {() => <LoansScreen token={userToken} />}
              </Drawer.Screen>
            </>
          }
        </Drawer.Navigator>
      </NavigationContainer>
    </RootSiblingParent>
  );
}
