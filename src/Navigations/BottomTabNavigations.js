import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timeline from '../Pages/timeline/timeline';
import Category from '../Pages/category/category';
import Search from '../Pages/search/search';
import Settings from '../Pages/settings/settings';

const Tab = createBottomTabNavigator();

const BottomTabNavigations = () => {
    return (

        <Tab.Navigator
            screenOptions={{ headerShown: false }}
        >
            <Tab.Screen name='timeline' component={Timeline} />
            <Tab.Screen name='category' component={Category} />
            <Tab.Screen name='search' component={Search} />
            <Tab.Screen name='settings' component={Settings} />
        </Tab.Navigator>

    )
}

export default BottomTabNavigations