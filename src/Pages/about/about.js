import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, TextInput, Linking, Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import Styles from './about.Styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import ExpiredLogoSvgAboutPage from '../../Assets/Svg/ExpiredLogoSvgAboutPage.svg'

const About = ({ navigation }) => {
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >

                <View style={{ flexDirection: "row", marginTop: rw(3) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', marginHorizontal: rw(5) }}>
                        <YellowBackSvg width={'20px'} height={'20px'} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: rw(2) }}>
                        <Text style={{ fontSize: FontSize.font24, color: Colors.black, fontFamily: 'Inter-Medium', fontWeight: '700', }}>About</Text>
                    </View>
                </View>

                <View style={{ borderBottomColor: Colors.borderbottomcolor, borderWidth: 0.5, marginTop: rh(2) }}>
                </View>
                <View style={{ flex: 1, marginTop: rh(4), marginHorizontal: rw(6) }}>
                    <View style={{ alignItems: 'center', height: rh(20), justifyContent: "space-around" }}>
                        <ExpiredLogoSvgAboutPage width={'66px'} height={'66px'} />
                        <Text style={{ fontSize: FontSize.font22, color: Colors.yellow, fontFamily: '600', fontFamily: 'Roboto-Medium' }}>EXPIRED</Text>
                        <Text style={{ fontSize: FontSize.font13, color: Colors.black, fontFamily: 'Inter-Light', fontWeight: '300' }}>Version 1.0.0</Text>
                    </View>
                    {/* <View style={{ borderWidth: 0.5, borderColor: Colors.borderbottomcolor, marginTop: rh(2) }}>
                    </View> */}


                    <View style={{ height: rh(10), borderBottomWidth: 1, borderTopWidth: 1, marginTop: rh(3) }}>
                        <TouchableOpacity style={{ paddingTop: rh(4) }} onPress={() => {
                            Linking.openURL('https://waqarulhaq.com/expired-warranty-tracker/privacy-policy.php');
                        }}>
                            <Text style={{ fontSize: FontSize.fon15, color: Colors.black, fontFamily: 'Inter-Regular', fontWeight: '400' }}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: rh(10), borderBottomWidth: 1, }}>
                        <TouchableOpacity style={{ paddingTop: rh(4) }} onPress={() => {
                            Linking.openURL('https://waqarulhaq.com/expired-warranty-tracker/terms-and-conditions.php');
                        }}>
                            <Text style={{ fontSize: FontSize.fon15, color: Colors.black, fontFamily: 'Inter-Regular', fontWeight: '400' }}>Terms and Conditions</Text>
                        </TouchableOpacity>
                    </View>
                    {/* <View style={{ height: rh(10), borderBottomWidth: 1, }}>
                        <TouchableOpacity style={{ paddingTop: rh(4) }}>
                            <Text style={{ fontSize: FontSize.fon15, color: Colors.black, fontFamily: 'Inter-Regular', fontWeight: '400' }}>Open Source Attributions</Text>
                        </TouchableOpacity>
                    </View> */}
                </View>
                <View style={{ flex: 1, justifyContent: 'flex-end' }}>
                    <View style={{ marginBottom: rh(2) }}>
                        <Text style={{ textAlign: 'center', color: Colors.gry, fontSize: FontSize.fon15, fontWeight: '400', fontFamily: 'Inter-Regular' }}>MADE IN PAKISTAN</Text>
                    </View>
                </View>
            </ScrollView>
        </SafeAreaView>
    )
}

export default About