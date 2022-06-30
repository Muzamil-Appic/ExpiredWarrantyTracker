import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import MaterialIcons from 'react-native-vector-icons/Entypo'
import Styles from './forgotpasswors.Styles';

const Forgotpasswordotpscreen = ({ navigation }) => {


    const otpInput = useRef(null);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }

    return (
        <SafeAreaView style={Styles.container}>

            <View style={{ flex: 1, marginHorizontal: rw(5) }}>
                <View style={{ marginTop: rh(1), flexDirection: "row", }}>
                    <View style={{ width: rw(10), justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', alignSelf: 'flex-start' }}>
                            <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: rw(75), justifyContent: "center", }}>
                        <Text style={{ fontFamily: 'Inter-Medium', color: Colors.black, fontSize: FontSize.font24, textAlign: 'center' }}>Forgot password</Text>
                    </View>
                </View>


                <View style={{ marginTop: rh(15), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: FontSize.font21, fontWeight: '700', fontFamily: 'Inter-Medium', }}>OTP Verification</Text>
                    <Text style={{ color: Colors.black, fontSize: FontSize.font16, marginTop: rh(1), fontFamily: 'Inter-Medium', }}>Verification code will be sent to your email</Text>
                </View>

                {/* <OTPTextInput ref={e => (otpInput = e)} /> */}
                <View style={{ marginTop: rh(5) }}>
                    <TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('Forgotpasswordchangepasswordscreen')}>
                        <Text style={Styles.bottombtntext}>Submit</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Forgotpasswordotpscreen