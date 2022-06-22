import * as React from 'react';
import { Dimensions, Text, View } from 'react-native';
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
const siz = Dimensions.get('window').height
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
                                        <TimeLineYellow height={siz * 0.05} width={siz * 0.05} />
                                        <Text style={{ color: '#000000' }} >Timeline</Text>
                                    </View>
                                ) : (

                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <TimeLineWhite height={siz * 0.04} width={siz * 0.04} />
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
                                        <CategoryYellow height={siz * 0.04} width={siz * 0.05} />
                                        <Text style={{ color: '#000000' }} >Category</Text>
                                    </View>
                                ) : (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <CategoryWhite height={siz * 0.04} width={siz * 0.05} />
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
                                    bottom: rh(3.5),
                                    width: rw(22),
                                    justifyContent: 'center',
                                    alignItems: 'center',
                                }}>
                                <View>
                                    <AddRecipts height={siz * 0.08} width={siz * 0.08} />
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
                                        <SearchYellow height={siz * 0.05} width={siz * 0.05} />
                                        <Text style={{ color: '#000000' }} >Search</Text>
                                    </View>
                                ) : (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <SearchWhite height={siz * 0.05} width={siz * 0.05} />
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
                                        <SettingsYellow height={siz * 0.05} width={siz * 0.05} />
                                        <Text style={{ color: '#000000' }} >Settings</Text>
                                    </View>
                                ) : (
                                    <View style={{ alignSelf: "center", justifyContent: 'center', alignItems: 'center' }}>
                                        <SettingsWhite height={siz * 0.05} width={siz * 0.05} />
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