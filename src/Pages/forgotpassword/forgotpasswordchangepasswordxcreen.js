import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import MaterialIcons from 'react-native-vector-icons/Entypo'
import Styles from './forgotpasswors.Styles';
import Evyiconopensvg from '../../Assets/Svg/Evyiconopensvg.svg'
import { ToastProvider } from 'react-native-toast-notifications'
import Loaders from '../../Components/Loaders';
import Toast from 'react-native-simple-toast';
import ClosedEyeSvg from '../../Assets/Svg/ClosedEyeSvg'
const Forgotpasswordchangepasswordscreen = ({ navigation, route }) => {


    const [passowrdicon, setpassowrdicon] = useState(true)
    const [confirmpasswordicon, setconfirmpasswordicon] = useState(true)
    const [password, setpassword] = useState('')
    const [confirmpassword, setconfirmpassword] = useState('')
    const [loader, setloader] = useState(false)



    const changepasssowrd = async () => {
        console.log("ok");

        if (password === '') {
            alert("Please Enter Password First")
            return;
        }
        if (confirmpassword === '') {
            alert("Please Enter  COnfirm Password First")
            return;
        }


        if (confirmpassword !== password) {
            alert("Password and Confirm Passwords Are Not Same")
            return;
        }
        setloader(true)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };

        fetch(`http://waqarulhaq.com/expired-warranty-tracker/change-password.php?email=${route?.params}&password=${password}`, requestOptions)
            .then(response => response.json())
            .then(result => {

                if (result.msg === "Password changed successfully!") {
                    navigation.navigate('signin')
                    setloader(false)
                    Toast.show("Password changed successfully")
                    console.log(result);
                } else {
                    alert("Password Not Changed")
                    navigation.navigate('signin')
                    console.log(result);
                }
            })
            .catch((error) => {
                alert(error.code)
                console.log(error);
            })
    }



    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ marginHorizontal: rw(5), flex: 1 }}>
                <View style={{ marginTop: rh(1), flexDirection: "row", }}>
                    <View style={{ width: rw(10), justifyContent: 'center' }}>
                        <TouchableOpacity onPress={() => navigation.goBack()} style={{ position: 'absolute', alignSelf: 'flex-start' }}>
                            <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: rw(70), justifyContent: "center", }}>
                        <Text style={{ fontFamily: 'Inter-Medium', color: Colors.black, fontSize: FontSize.font24, textAlign: 'center' }}>Reset Password</Text>
                    </View>
                </View>



                <View style={{ marginTop: rh(10) }}>
                    <View style={[Styles.txtinptouterview, { flexDirection: 'row', }]}>
                        <TextInput onChangeText={e => setpassword(e)} placeholder='New Password' secureTextEntry={passowrdicon} placeholderTextColor={Colors.borderbottomcolor} style={[Styles.txtinptinner, { width: rw(90) }]} />
                        {passowrdicon ?
                            <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setpassowrdicon(false)}>
                                < Evyiconopensvg width={'22px'} height={'15px'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setpassowrdicon(false)}>
                                < ClosedEyeSvg width={'22px'} height={'17px'} />
                            </TouchableOpacity>
                        }

                    </View>
                    <View style={[Styles.txtinptouterview, { flexDirection: 'row', marginTop: rh(3) }]}>
                        <TextInput onChangeText={e => setconfirmpassword(e)} placeholder='Confirm Password' secureTextEntry={confirmpasswordicon} placeholderTextColor={Colors.borderbottomcolor} style={[Styles.txtinptinner, { width: rw(90) }]} />
                        {confirmpasswordicon ?

                            <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setconfirmpassword(true)}>
                                < Evyiconopensvg width={'22px'} height={'15px'} />
                            </TouchableOpacity>
                            :
                            <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setconfirmpassword(false)}>
                                < ClosedEyeSvg width={'22px'} height={'17px'} />
                            </TouchableOpacity>
                        }

                    </View>
                </View>

                <View style={{ marginTop: rh(5) }}>
                    {loader ?
                        <Loaders />
                        :

                        <TouchableOpacity style={Styles.bottombtn} onPress={() => changepasssowrd()}>
                            <Text style={Styles.bottombtntext}>Submit</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Forgotpasswordchangepasswordscreen