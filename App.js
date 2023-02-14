import 'react-native-gesture-handler';
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import HomeScreen from './src/Screens/HomeScreen';
import ShipsScreen from './src/Screens/ShipsScreen';
import LoginScreen from './src/Screens/LoginScreen';
import RegisterScreen from './src/Screens/RegisterScreen';

const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator>
        <Drawer.Screen name="Home" component={HomeScreen}/>
        <Drawer.Screen name="Ships" component={ShipsScreen} />
        <Drawer.Screen name="Login" component={LoginScreen}/>
        <Drawer.Screen name="Register" component={RegisterScreen}/>
      </Drawer.Navigator>
    </NavigationContainer>
  );
}
