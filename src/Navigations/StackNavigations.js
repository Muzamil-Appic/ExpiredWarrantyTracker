import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Splash from '../Pages/splash/splash';
import Signin from '../Pages/signin/signin';
import BottomTabNavigations from './BottomTabNavigations';



const Stack = createNativeStackNavigator();
const StackNavigations = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="splash"
        screenOptions={{ headerShown: false }}
        mode={'modal'}>
        <Stack.Screen name='splash' component={Splash} />
        <Stack.Screen name='signin' component={Signin} />
        <Stack.Screen name='BottomTabNavigations' component={BottomTabNavigations} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigations