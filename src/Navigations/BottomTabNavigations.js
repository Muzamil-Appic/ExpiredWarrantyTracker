import * as React from 'react';
import { Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Timeline from '../Pages/timeline/timeline';
import Category from '../Pages/category/category';
import Search from '../Pages/search/search';
import Settings from '../Pages/settings/settings';
import Colors from '../Global/Colors';
import { responsiveHeight as rh, responsiveScreenWidth as rw } from 'react-native-responsive-dimensions';
import Styles from './BottomTabs.Styles'

import TimeLineYellow from '../Assets/Svg/TimeLineYellow.svg'
import SearchWhite from '../Assets/Svg/SearchWhite.svg'
import SettingsWhite from '../Assets/Svg/SettingsWhite.svg'
import CategoryWhite from '../Assets/Svg/CategoryWhite.svg'
import CategoryYellow from '../Assets/Svg/CategoryYellow.svg'
import TimeLineWhite from '../Assets/Svg/TimeLineWhite.svg'
import SearchYellow from '../Assets/Svg/SearchYellow.svg'
import SettingsYellow from '../Assets/Svg/SettingsYellow.svg'
import AddRecipts from '../Assets/Svg/AddRecipts.svg'
import Addproduct from '../Pages/addproduct/addproduct';
import Addproductstepone from '../Pages/addproduct/addproduct';
const Tab = createBottomTabNavigator();

const BottomTabNavigations = () => {
    return (

        <Tab.Navigator screenOptions={{
            headerShown: false, tabBarStyle: {
                position: 'absolute',
                elevation: 10,
                height: rh(10),
                backgroundColor: Colors.white,
                // borderTopColor: '#E7E7E7',
            },
        }}

            tabBarOptions={{
                // inactiveBackgroundColor:'red',

                // activeTintColor: Colors.black,
                activeTintColor: Colors.yellow,
                inactiveTintColor: 'gray',
                keyboardHidesTabBar: true,
                //  tabBarIcon: { focused: false, color: '#F7A34E' },
            }}
        >
            <Tab.Screen
                name="Timeline"
                component={Timeline}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: tintcolor => {
                        return (
                            <View
                                style={Styles.bottommainview}>
                                {tintcolor.focused ? (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <TimeLineYellow height={'37px'} width={'37px'} />
                                        <Text style={{ color: '#000000' }} >Timeline</Text>
                                    </View>
                                ) : (

                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <TimeLineWhite height={'28px'} width={'29px'} />
                                        <Text style={{ color: Colors.tabebartext, top: 2 }} >Timeline</Text>
                                    </View>
                                )}
                            </View>
                        );
                    },
                }}
            />
            <Tab.Screen
                name="Category"
                component={Category}
                options={{
                    tabBarLabel: '',

                    tabBarIcon: tintcolor => {
                        return (
                            <View
                                style={Styles.bottommainview}>
                                {tintcolor.focused ? (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <CategoryYellow width={'32px'} height={'27.5px'} />
                                        <Text style={{ color: '#000000' }} >Category</Text>
                                    </View>
                                ) : (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <CategoryWhite width={'32px'} height={'27.5px'} />
                                        <Text style={{ color: Colors.tabebartext, top: 2 }} >Category</Text>
                                    </View>
                                )}
                            </View>
                        );
                    },
                }}
            />


            <Tab.Screen
                name="Addproductstepone"
                component={Addproductstepone}
                options={{
                    tabBarLabel: '',
                    tabBarStyle: { display: "none" },
                    tabBarIcon: tintcolor => {
                        return (
                            <View
                                style={{
                                    height: rw(22),
                                    bottom: rh(3),
                                    width: rw(22),
                                    justifyContent: 'center',
                                    alignItems: 'center',

                                }}>

                                <View>
                                    <AddRecipts width={'53px'} height={'53px'} />
                                </View>
                            </View>
                        );
                    },
                }}
            />


            <Tab.Screen
                name="Search"
                component={Search}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: tintcolor => {
                        return (
                            <View
                                style={Styles.bottommainview}>

                                {tintcolor.focused ? (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <SearchYellow width={'30.21px'} height={'30px'} />
                                        <Text style={{ color: '#000000' }} >Search</Text>
                                    </View>
                                ) : (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <SearchWhite width={'32px'} height={'27.5px'} />
                                        <Text style={{ color: Colors.tabebartext }} >Search</Text>
                                    </View>
                                )}
                            </View>
                        );
                    },
                }}
            />

            <Tab.Screen
                name="Settings"
                component={Settings}
                options={{
                    tabBarLabel: '',
                    tabBarIcon: tintcolor => {
                        return (
                            <View
                                style={Styles.bottommainview}>
                                {tintcolor.focused ? (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <SettingsYellow width={'30.21px'} height={'30px'} />
                                        <Text style={{ color: '#000000' }} >Settings</Text>
                                    </View>
                                ) : (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <SettingsWhite width={'28.80px'} height={'29.5px'} />
                                        <Text style={{ color: Colors.tabebartext, }} >Settings</Text>
                                    </View>
                                )}
                            </View>
                        );
                    },
                }}
            />


        </Tab.Navigator>
    );
}


export default BottomTabNavigations