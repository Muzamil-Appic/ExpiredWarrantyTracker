import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import MaterialIcons from 'react-native-vector-icons/Entypo'
import Styles from './forgotpasswors.Styles';
import Toast from 'react-native-simple-toast';
import Loaders from '../../Components/Loaders';
const Forgotpasswordemailscreen = ({ navigation }) => {

    const [forgotemail, setforgotemail] = useState('')
    const [forgotemailloader, setforgotemailloader] = useState(false)



    const forgotemailfunction = async () => {
        if (forgotemail === '') {
            alert("Please Enter Email First")
            return;
        }
        setforgotemailloader(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        fetch(`http://waqarulhaq.com/expired-warranty-tracker/send-otp.php?email=${forgotemail}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                if (result.msg === "The user with this email address does not exist!") {
                    alert("The user with this email address does not exist!")
                    setforgotemailloader(false)
                } else {
                    navigation.navigate('Forgotpasswordotpscreen', forgotemail),
                        setforgotemail('')
                    setforgotemailloader(false)
                    Toast.show("OTP Send")
                }
            })
            .catch((error) => {
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

                <View style={{ justifyContent: 'center', alignSelf: 'center', marginTop: rh(1) }} >
                    <Text style={{ fontSize: FontSize.font18, color: Colors.black, padding: 10, lineHeight: 21, fontWeight: '400', fontFamily: 'Inter-Regular', textAlign: "center" }}>Please enter your emil sddress, and we
                        will generate a new password for you
                        and send it straight to your inbox</Text>
                </View>
                <View style={{ marginTop: rh(2) }}>
                    <View style={Styles.txtinptouterview}>
                        <TextInput onChangeText={e => setforgotemail(e)} keyboardType='email-address' placeholder='Email' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
                    </View>
                </View>
                <View style={{ marginTop: rh(5) }}>
                    {forgotemailloader ?
                        <Loaders />
                        :
                        // <TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('Forgotpasswordotpscreen')}>

                        <TouchableOpacity style={Styles.bottombtn} onPress={() => forgotemailfunction()}>
                            <Text style={Styles.bottombtntext}>Send</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Forgotpasswordemailscreen