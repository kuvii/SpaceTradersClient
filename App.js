import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/Screens/HomeScreen';
import ShipsScreen from './src/Screens/ShipsScreen';
import LoansScreen from './src/Screens/LoansScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

import { useEffect, useState } from 'react';

import storeController from './src/secure/controllers'
import constants from './src/secure/constants'

const Drawer = createDrawerNavigator();

export default function App() {

  const [userToken, setUserToken] = useState('')

  useEffect(() => {
    const retrieveStoreToken = async () => {
      const storedToken = await storeController.getValueFor(constants.STORED_TOKEN_KEY)
      setUserToken(storedToken)
    }

    retrieveStoreToken()
  }, [])

  return (
    <NavigationContainer>
      <Drawer.Navigator>
        {
          userToken === '' ? 
          <>
            <Drawer.Screen name="Login">
              {() => <LoginScreen onLogin={storeController.storeToken} setUserToken={setUserToken}/>}
            </Drawer.Screen>
            <Drawer.Screen name="Register" component={RegisterScreen}/>
          </>
          : 
          <>
            <Drawer.Screen name="Home" component={HomeScreen}/>
            <Drawer.Screen name="Ships" component={ShipsScreen} />
            <Drawer.Screen name="Loans" component={LoansScreen}/>
          </>
        }
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
