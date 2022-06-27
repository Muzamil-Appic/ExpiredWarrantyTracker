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
import Addproduct from '../Pages/addproduct/addproduct';
import Addproductsteptwo from '../Pages/addproduct/addproductsteptwo';
import AddProductStepthree from '../Pages/addproduct/addproductstepthree';
import Addadditionalpart from '../Pages/addproduct/addadditionalpart';
import Addproductstepfourcategory from '../Pages/addproduct/addproductstepfourcategory';
import Addproductstepfiveoptional from '../Pages/addproduct/addproductstepfiveoptional';
import Createcategory from '../Pages/category/createcategory';
import Categoriesdetails from '../Pages/category/categoriesdetails';
import Receiptsdetails from '../Pages/receiptsdetails/receiptsdetails';
import Edit from '../Pages/edit/edit';
import Editproduct from '../Pages/editproduct/editproduct';
import Editproductimage from '../Pages/editproduct/editproductimage';
import Editproductcategory from '../Pages/editproduct/editproductcategory';
import EditproductName from '../Pages/editproduct/editproduct';
import Editproductwarrantydetailsandnotifications from '../Pages/editproduct/editproductwarrantydetailsandnotifications';
import Editadditionalpart from '../Pages/editproduct/editadditionalpart';
import Editproductadditionalstep from '../Pages/editproduct/editproductadditionalstep';


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
        <Stack.Screen name='addproductsteptwo' component={Addproductsteptwo} />
        <Stack.Screen name='AddProductStepthree' component={AddProductStepthree} />
        <Stack.Screen name='Addadditionalpart' component={Addadditionalpart} />
        <Stack.Screen name='Addproductstepfourcategory' component={Addproductstepfourcategory} />
        <Stack.Screen name='Createcategory' component={Createcategory} />
        <Stack.Screen name='Addproductstepfiveoptional' component={Addproductstepfiveoptional} />
        <Stack.Screen name='Categoriesdetails' component={Categoriesdetails} />
        <Stack.Screen name='Receiptsdetails' component={Receiptsdetails} />
        <Stack.Screen name='Edit' component={Edit} />
        <Stack.Screen name='EditproductName' component={EditproductName} />
        <Stack.Screen name='Editproductimage' component={Editproductimage} />
        <Stack.Screen name='Editproductcategory' component={Editproductcategory} />
        <Stack.Screen name='Editproductwarrantydetailsandnotifications' component={Editproductwarrantydetailsandnotifications} />
        <Stack.Screen name='Editadditionalpart' component={Editadditionalpart} />
        <Stack.Screen name='Editproductadditionalstep' component={Editproductadditionalstep} />


      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default StackNavigations