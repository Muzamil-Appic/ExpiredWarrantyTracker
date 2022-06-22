import { View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Alert, Dimensions } from 'react-native'
import React, { useState, useEffect } from 'react'
import Styles from './signin.styles'
import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import Colors from '../../Global/Colors'
import FontSize from '../../Global/Fonts'
import { SafeAreaView } from 'react-native-safe-area-context';
import Signinsvg from '../../Assets/Svg/Signinsvg.svg'
import Evyiconopensvg from '../../Assets/Svg/Evyiconopensvg.svg'
import Loaders from '../../Components/Loaders'

// import auth from '@react-native-firebase/auth';
// import { firebase } from '@react-native-firebase/auth'
// import firestore from '@react-native-firebase/firestore'


const Signin = ({ navigation }) => {


  // const firestorereference = firestore().collection('Users')

  const [firstname, setfirstname] = useState('')
  const [signinenables, setsigninenables] = useState(true)
  const [signemail, setsignemail] = useState('')
  const [signinpasswprd, setsigninpasswprd] = useState('')
  const [surename, setsurename] = useState('')
  const [signupemail, setsignupemail] = useState('')
  const [signuppassword, setsignuppassword] = useState('')
  const [signupconfirmpassword, setsignupconfirmpassword] = useState('')
  const [signupeye, setsignupeye] = useState(true)
  const [signupconfirmeye, setsignupconfirmeye] = useState(true)
  const [signineye, setsignineye] = useState(true)
  const [signuploader, setsignuploader] = useState(false)
  const [loginloader, setloginloader] = useState(false)



  const LoginFunction = async () => {
    if (signemail === '') {
      alert("Please Enter Email First")
      return;
    }
    if (signinpasswprd === "") {
      alert("Please Enter Password First")
    }

    setloginloader(true)
    await firebase
      .auth()
      .signInWithEmailAndPassword(signemail.trim(), signinpasswprd)
      .then((user) => {
        console.log("user login information----->", user.user.email)
        // AsyncStorage.setItem(
        //   'userdetails',
        //   JSON.stringify({
        //     email: user.user.email,
        //     id: user.user.email,
        //   })
        // )
        signinempty()
        setloginloader(false)
        navigation.replace('BottomTabNavigations')
        console.log("DONE dona DOne");
      }
      )
      .catch((error) => {
        console.log('====================================');
        console.log(error);
        console.log('====================================');
      })




  }



  const signupempty = () => {
    setsignupemail('')
    setfirstname('')
    setsurename('')
    setsignuppassword('')
    setsignupconfirmpassword('')
  }

  const signinempty = () => {
    setsigninpasswprd('')
    setsignemail('')

  }

  // const SignupFunction = async () => {
  //   if (firstname === '') {
  //     alert("Please Enter First Name")
  //     return;
  //   }
  //   if (surename === '') {
  //     alert("Please Enter Sure Name")
  //     return;
  //   }
  //   if (signupemail === '') {
  //     alert("Please Enter Email")
  //     return;
  //   }
  //   if (signuppassword === '') {
  //     alert("Please Enter Password")
  //     return;
  //   }
  //   if (signupconfirmpassword === '') {
  //     alert("Please Enter Confirm Password")
  //     return;
  //   }

  //   if (signupconfirmpassword !== signuppassword) {
  //     alert("Passwords Are Not Same")
  //     return;
  //   }

  //   setsignuploader(true)
  //   await firebase
  //     .auth()
  //     .createUserWithEmailAndPassword(signupemail.trim(), signuppassword)
  //     .then((loggeduser) => {
  //       const userdata = firestorereference.doc(signupemail)
  //       userdata.set({
  //         firstname: firstname,
  //         surename: surename,
  //         email: signupemail,
  //         userid: signupemail

  //       }).then(() => {
  //         signupempty();
  //         setsigninenables(true)
  //         setsignuploader(false)

  //       })
  //     })
  //     .catch((error) => {
  //       setsignuploader(false)
  //       alert(error)
  //       console.log("Signup Error---->", error);
  //     })




  // }



  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
        {signinenables ?
          <View style={Styles.loginsignupbutton}>
            <View style={{ flexDirection: "row", width: rw('40'), justifyContent: 'space-around' }}>
              <View style={{ borderBottomWidth: 1, borderColor: Colors.white, paddingBottom: 4 }}>
                <TouchableOpacity >
                  <Text style={Styles.loginsignuptext}>Sign In</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setsigninenables(false)}>
                <Text style={Styles.loginsignuptext}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={Styles.loginsignupbutton}>
            <View style={{ flexDirection: "row", width: rw(40), justifyContent: 'space-around' }}>
              <TouchableOpacity onPress={() => setsigninenables(true)}>
                <Text style={Styles.loginsignuptext}>Sign In</Text>
              </TouchableOpacity>
              <View style={{ borderBottomWidth: 1, borderColor: Colors.white, paddingBottom: 4 }}>
                <TouchableOpacity >
                  <Text style={Styles.loginsignuptext}>Sign Up</Text>
                </TouchableOpacity>
              </View>
            </View>
          </View>
        }
        <View style={{ height: rh(20), justifyContent: "center", alignSelf: 'center' }}>
          <Signinsvg height={'116px'} width={'116px'} />
        </View>
        {signinenables ?
          <View style={{ flex: 1, backgroundColor: Colors.white, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
            <View style={{ height: rh(7), justifyContent: 'center', paddingLeft: rw('8'), paddingTop: rh('2'), }}>
              <Text style={{ color: Colors.black, fontSize: FontSize.font20, fontWeight: '700' }}>Login To Your Account</Text>
            </View>

            <View style={{ height: rh(12), marginTop: rh(7), marginHorizontal: rw(5), justifyContent: "space-evenly" }}>
              <View style={Styles.txtinptouterview}>
                <TextInput onChangeText={e => setsignemail(e)} keyboardType='email-address' placeholder='Email' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={[Styles.txtinptouterview, { flexDirection: 'row' }]}>
                <TextInput onChangeText={e => setsigninpasswprd(e)} placeholder='Password' secureTextEntry={signineye} placeholderTextColor={Colors.borderbottomcolor} style={Styles.password} />
                <View style={{ right: rw(8), marginTop: rh(4) }}>
                  < Evyiconopensvg width={'22px'} height={'15px'} />
                </View>
              </View>
            </View>
            <View style={{ height: rh(9), marginTop: rh(5) }}>
              {loginloader ?
                <Loaders />
                :
                <TouchableOpacity style={Styles.loginsignupbtn} onPress={() => navigation.navigate('BottomTabNavigations')}>
                  <Text style={Styles.loginsignuptext}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              }
            </View>
          </View>
          :
          <View style={{ flex: 1, backgroundColor: Colors.white, borderTopRightRadius: 30, borderTopLeftRadius: 30 }}>
            <View style={{ height: rh(7), justifyContent: 'center', paddingLeft: rw(8), paddingTop: rh(2) }}>
              <Text style={{ color: Colors.black, fontSize: FontSize.font20, fontWeight: '700' }}>Create Your Account</Text>
            </View>

            <View style={{ flex: 1, marginTop: rh(7), marginHorizontal: rw(5), justifyContent: "space-around" }}>
              <View style={Styles.txtinptouterview}>
                <TextInput onChangeText={e => setfirstname(e)} placeholder='First Name' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={Styles.txtinptouterview}>
                <TextInput onChangeText={e => setsurename(e)} placeholder='Sure Name' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={Styles.txtinptouterview}>
                <TextInput onChangeText={e => setsignupemail(e)} keyboardType='email-address' placeholder='Email' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>

              <View style={[Styles.txtinptouterview, { flexDirection: 'row', }]}>
                <TextInput onChangeText={e => setsignuppassword(e)} placeholder='Password' secureTextEntry={signupeye} placeholderTextColor={Colors.borderbottomcolor} style={Styles.password} />
                {signupeye ?
                  <TouchableOpacity onpress={() => setsignupeye(true)}>
                    <View style={{ right: rw(8), marginTop: rh(4) }}>
                      < Evyiconopensvg width={'22px'} height={'15px'} />
                    </View>
                  </TouchableOpacity>
                  :
                  <TouchableOpacity onpress={() => setsignupeye(false)}>
                    <View style={{ right: rw(8), marginTop: rh(4) }}>
                      < Evyiconopensvg width={'22px'} height={'15px'} />
                    </View>
                  </TouchableOpacity>
                }

              </View>

              <View style={[Styles.txtinptouterview, { flexDirection: 'row' }]}>
                <TextInput onChangeText={e => setsignupconfirmpassword(e)} placeholder='Confirm Password' secureTextEntry={true} placeholderTextColor={Colors.borderbottomcolor} style={Styles.password} />
                <View style={{ right: rw(8), marginTop: rh(4) }}>
                  < Evyiconopensvg width={'22px'} height={'15px'} />
                </View>
              </View>

            </View>
            <View style={{ height: rh(9), marginTop: rh(5) }}>
              {signuploader ?

                <Loaders />
                :
                <TouchableOpacity style={Styles.loginsignupbtn} onPress={() => SignupFunction()}>
                  <Text style={Styles.loginsignuptext}>
                    Sign Up
                  </Text>
                </TouchableOpacity>
              }
            </View>

          </View>
        }
      </ScrollView>
    </SafeAreaView >
  )
}

export default Signin