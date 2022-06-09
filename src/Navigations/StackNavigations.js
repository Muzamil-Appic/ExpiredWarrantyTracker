import * as React from 'react';
import { View, Text } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Splash from '../Pages/splash/splash';
import Signin from '../Pages/signin/signin';
import BottomTabNavigations from './BottomTabNavigations';
import OnBoarding from '../Pages/onboardingscreens/onboardingscreens';
import Upgradetoexpiredpro from '../Pages/upgradetoexpiredpro/upgradetoexpiredpro';
import Defaultcurrency from '../Pages/defaultcurrency/defaultcurrency';
import Feedback from '../Pages/feedback/feedback'
import About from '../Pages/about/about';


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
        <Stack.Screen name='onboardingscreens' component={OnBoarding} />
        <Stack.Screen name='upgradetoexpiredpro' component={Upgradetoexpiredpro} />
        <Stack.Screen name='defaultcurrency' component={Defaultcurrency} />
        <Stack.Screen name="feedback" component={Feedback} />
        <Stack.Screen name='about' component={About} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigations