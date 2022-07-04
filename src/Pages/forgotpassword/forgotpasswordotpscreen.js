import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import MaterialIcons from 'react-native-vector-icons/Entypo'
import Styles from './forgotpasswors.Styles';
import OTPTextInput from 'react-native-otp-textinput'
import Loaders from '../../Components/Loaders';
const Forgotpasswordotpscreen = ({ navigation, route }) => {



    console.log("route", route?.params);
    const [otp, setotp] = useState('')

    const [optloader, setoptloader] = useState(false)

    const otpInput = useRef(null);

    const clearText = () => {
        otpInput.current.clear();
    }

    const setText = () => {
        otpInput.current.setValue("1234");
    }




    const forgotemailfunction = async () => {
        if (otp === '') {
            alert("Please Enter OTP First")
            return;
        }
        setoptloader(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        fetch(`http://waqarulhaq.com/expired-warranty-tracker/verify-otp.php?email=${route?.params}&otp=${otp}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.msg === "Wrong OTP!") {
                    alert("Wrong OTP!")
                    setoptloader(false)
                } else {
                    navigation.navigate('Forgotpasswordchangepasswordscreen', route?.params)
                }
            })
            .catch((error) => {
                // signinempty()
                alert(error.code)
                console.log(error);
            })
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ flex: 1, marginHorizontal: rw(5) }}>



                <View style={{ marginTop: rh(2) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                </View>


                <View style={{ justifyContent: 'center', alignContent: 'center', alignSelf: "center", marginTop: rh(5) }}>
                    <Text style={{ color: Colors.yellow, fontSize: FontSize.font30, fontWeight: '400', fontFamily: 'Inter-Medium' }}>Forgot Password</Text>
                </View>


                <View style={{ marginTop: rh(10), justifyContent: 'center', alignItems: 'center' }}>
                    <Text style={{ color: Colors.black, fontSize: FontSize.font21, fontWeight: '700', fontFamily: 'Inter-Medium', }}>OTP Verification</Text>
                    <Text style={{ color: Colors.black, fontSize: FontSize.font16, marginTop: rh(1), fontFamily: 'Inter-Medium', }}>Verification code will be sent to your email</Text>
                </View>

                <View style={{ alignSelf: "center", }}>
                    <OTPTextInput textInputStyle={{ fontSize: 20, color: Colors.black }} handleTextChange={(value) => setotp(value)} inputCount={4} tintColor={Colors.bk} />
                </View>
                <View style={{ marginTop: rh(5) }}>
                    {optloader ?
                        <Loaders />
                        :

                        <TouchableOpacity style={Styles.bottombtn} onPress={() => forgotemailfunction()}>
                            <Text style={Styles.bottombtntext}>Submit</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Forgotpasswordotpscreen