import { View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView, Alert, Dimensions, Platform } from 'react-native'
import React, { useState, useEffect, } from 'react'
import Styles from './signin.styles'
import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import Colors from '../../Global/Colors'
import FontSize from '../../Global/Fonts'
import { SafeAreaView } from 'react-native-safe-area-context';
import Signinsvg from '../../Assets/Svg/Signinsvg.svg'
import Evyiconopensvg from '../../Assets/Svg/Evyiconopensvg.svg'
import Loaders from '../../Components/Loaders'
import auth from '@react-native-firebase/auth';
import { GoogleSignin } from '@react-native-google-signin/google-signin';
import GOogleGSvg from '../../Assets/Svg/GOogleGSvg.svg'
import Toast from 'react-native-simple-toast';
import ClosedEyeSvg from '../../Assets/Svg/ClosedEyeSvg.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';
import { AppleButton } from '@invertase/react-native-apple-authentication';
import { appleAuth } from '@invertase/react-native-apple-authentication';
import OneSignal from 'react-native-onesignal';
const Signin = ({ navigation }) => {

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
  const [googleloader, setfirst] = useState(false)


  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '41658588833-26s33sig9lsbc405jdss6r333fqcdbm3.apps.googleusercontent.com',
    });
  }, [])

  async function onAppleButtonPress() {
    // Start the sign-in request
    console.log("Step 1---->");
    const appleAuthRequestResponse = await appleAuth.performRequest({
      requestedOperation: appleAuth.Operation.LOGIN,
      requestedScopes: [appleAuth.Scope.EMAIL, appleAuth.Scope.FULL_NAME],
    });

    // Ensure Apple returned a user identityToken
    if (!appleAuthRequestResponse.identityToken) {
      throw new Error('Apple Sign-In failed - no identify token returned');
    }
    console.log("Step 2---->");
    //  Create a Firebase credential from the response
    const { identityToken, nonce } = appleAuthRequestResponse;
    const appleCredential = auth.AppleAuthProvider.credential(identityToken, nonce);
    console.log('====================================');
    console.log(appleCredential);
    console.log('====================================');
    //  Sign the user in with the credential
    await auth().signInWithCredential(appleCredential)
      .then((loggeduser) => {
        console.log("Step 3---->", loggeduser)
        // console.log('====================================');
        // console.log("----->", loggeduser.additionalUserInfo);
        // console.log('====================================');
        // console.log("Step 4---->");
        // console.log('====================================');
        // console.log("----->", loggeduser.user);
        // console.log('====================================');
        // const userdata = firestore_ref.doc(loggeduser.user.email)
        // userdata.set({
        //   email: loggeduser.user.email,
        //   id: loggeduser.user.email,
        //   name: '',
        //   phonenumber: '',
        //   country: '',
        //   city: '',
        //   address: '',
        // }, { merge: true }).then(
        // AsyncStorage.setItem(
        //   'userdetails',
        //   JSON.stringify({
        //     useremail: loggeduser.user.email,
        //     userid: loggeduser.user.email,
        //     //  onboardingbit: 1,
        //   })
        // )



        if (loggeduser.additionalUserInfo?.isNewUser === true) {
          console.log("New User");
          console.log(loggeduser?.user?.email)
          const userkamail = loggeduser?.user?.email;
          // console.log(loggeduser?.additionalUserInfo?.profile?.family_name)
          // console.log(loggeduser?.additionalUserInfo?.profile?.given_name)
          //  OneSignal.sendTag("usermail", loggeduser.user.email);

          AsyncStorage.setItem(
            'userdetails',
            JSON.stringify({
              useremail: userkamail,
              userid: userkamail,
              //  onboardingbit: 1,
            })
          )
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
          };
          fetch(`http://waqarulhaq.com/expired-warranty-tracker/save-user-info.php?email=${userkamail}&fname=${''}&lname=${''}&joinType=apple`, requestOptions)
            .then(response => response.json())
            .then(data => console.log("--------------kkkkkk>", data))

          navigation.replace('BottomTabNavigations')
        }
        else {
          console.log(loggeduser?.user?.email)
          //  OneSignal.sendTag("usermail", loggeduser?.user?.email);

          const userkamail = loggeduser?.user?.email;
          console.log("Old user");
          AsyncStorage.setItem(
            'userdetails',
            JSON.stringify({
              useremail: userkamail,
              userid: userkamail,
              //  onboardingbit: 1,
            })
          )
          navigation.replace('BottomTabNavigations')
        }





      })
      .catch((error) => {
        alert(error)
        console.log("Error---->", error);
      })


  }

  const LoginFunction = async () => {
    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const emailresult = (pattern.test(signemail))
    if (emailresult === false) {
      alert("Email Type must be Email")
      return;
    }
    if (signemail === '') {
      alert("Please Enter Email First")
      return;

    }


    if (signinpasswprd === "") {
      alert("Please Enter Password First")
      return;
    }

    setloginloader(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    };
    fetch(`http://waqarulhaq.com/expired-warranty-tracker/login.php?email=${signemail}&password=${signinpasswprd}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        console.log(result);
        if (result.msg === "User does not exist!") {
          alert("User does not exist!")
          signinempty()
          setloginloader(false)
        }
        if (result.msg === "Wrong password!") {
          alert("Wrong password!")
          signinempty()
          setloginloader(false)
        }
        if (result.msg === "Signed in successfully!") {
          signinempty()
          OneSignal.sendTag("usermail", result.data?.email)
          AsyncStorage.setItem(
            'userdetails',
            JSON.stringify({
              useremail: result.data?.email,
              userid: result.data?.email,
              // onboardingbit: 1,
            })
          )
          navigation.navigate('BottomTabNavigations')
          signinempty()
          setloginloader(false)
          Toast.show("Login Successfull")
        }

      })
      .catch((error) => {
        signinempty()
        setloginloader(false)
        alert(error)
        console.log(error);
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
    setsigninpasswprd("")
    setsignemail("")

  }

  const SignupFunction = async () => {


    const pattern = /[a-zA-Z0-9]+[\.]?([a-zA-Z0-9]+)?[\@][a-z]{3,9}[\.][a-z]{2,5}/g;
    const emailresult = (pattern.test(signupemail))
    if (emailresult === false) {
      alert("Email Type must be Email")
    }


    if (firstname === '') {
      alert("Please Enter First Name")
      return;
    }
    if (surename === '') {
      alert("Please Enter Sure Name")
      return;
    }
    if (signupemail === '') {
      alert("Please Enter Email")
      return;
    }
    if (signuppassword === '') {
      alert("Please Enter Password")
      return;
    }
    if (signupconfirmpassword === '') {
      alert("Please Enter Confirm Password")
      return;
    }

    if (signuppassword.length < 4) {
      alert("Password should be minimum 4 Numbers")
      return;
    }
    if (signupconfirmpassword !== signuppassword) {
      alert("Passwords Are Not Same")
      return;
    }

    setsignuploader(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    };
    fetch(`http://waqarulhaq.com/expired-warranty-tracker/signup.php?email=${signupemail}&password=${signuppassword}&fname=${firstname}&lname=${surename}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        if (result.msg === "Signed up successfully!") {
          signupempty()
          setsignuploader(false)
          setsigninenables(true)
          Toast.show("Signup Successfull")
        }
        if (result.msg === "User already exists!") {
          signupempty()
          setsignuploader(false)
          alert("User already exists!")

        }

      })
      .catch((error) => {
        signupempty()
        setsignuploader(false)
       
        alert(error)
        console.log(error);
      })
  }

  async function onGoogleButtonPress() {
    console.log("Step 1");
    // setgoogleloader(true)
    console.log("Step 2");
    await GoogleSignin.hasPlayServices();
    console.log("Step 3");
    const userinfo = await GoogleSignin.signIn()
    //   console.log("------->user infooooo909090", userinfo)

    console.log("Step 4");
    // console.log("------->user infooooo909090", userinfo)
    const googleCredential = auth.GoogleAuthProvider.credential(userinfo.idToken);
    //  console.log("googlecredential9090909", googleCredential)
    const loggeduser = auth().signInWithCredential(googleCredential)
      ///   console.log(userinfo)
      // Sign-in the user with the credential
      .then((loggeduser) => {
        //  console.log("9", loggeduser.user.email);
        AsyncStorage.setItem(
          'userdetails',
          JSON.stringify({
            useremail: loggeduser.user.email,
            userid: loggeduser.user.email,
            //  onboardingbit: 1,
          })
        )
        OneSignal.sendTag("usermail", loggeduser.user.email);
        if (loggeduser.additionalUserInfo.isNewUser === true) {
          console.log("New User");
          console.log(loggeduser.user.email)
          console.log(loggeduser?.additionalUserInfo?.profile?.family_name)
          console.log(loggeduser?.additionalUserInfo?.profile?.given_name)
          AsyncStorage.setItem(
            'userdetails',
            JSON.stringify({
              useremail: loggeduser.user.email,
              userid: loggeduser.user.email,
              //  onboardingbit: 1,
            })
          )
          const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
          };
          fetch(`http://waqarulhaq.com/expired-warranty-tracker/save-user-info.php?email=${loggeduser.user.email}&fname=${loggeduser?.additionalUserInfo?.profile?.given_name}&lname=${loggeduser?.additionalUserInfo?.profile?.family_name}&joinType=google`, requestOptions)
            .then(response => response.json())
            .then(data => console.log(data))
          navigation.replace('BottomTabNavigations')
        }

        else {
          navigation.replace('BottomTabNavigations')
        }



      })
      .catch((error) => {
        //  setgoogleloader(false)
        alert(error)
        console.log("Error---->", error);
      })
  }

  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }} keyboardDismissMode='on-drag' >
        {signinenables ?
          <View style={Styles.loginsignupbutton}>
            <View style={{ flexDirection: "row", width: rw('40'), justifyContent: 'space-around', }}>
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

            <View style={{ height: rh(14), marginTop: rh(8), marginHorizontal: rw(5), justifyContent: 'space-around', }}>
              <View style={Styles.txtinptouterview}>
                <TextInput onChangeText={e => setsignemail(e)} value={signemail} keyboardType='email-address' placeholder='Email' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={[Styles.txtinptouterview, { flexDirection: 'row', marginTop: rh(3) }]}>
                <TextInput value={signinpasswprd} onChangeText={e => setsigninpasswprd(e)} placeholder='Password' secureTextEntry={signineye} placeholderTextColor={Colors.borderbottomcolor} style={[Styles.txtinptinner, { width: rw(90) }]} />
                {signineye ?
                  <View>
                    <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(4), height: rh(8), width: rw(8) }} onPress={() => { setsignineye(false), console.log("Eye opne") }}>
                      < Evyiconopensvg width={'22px'} height={'15px'} />
                    </TouchableOpacity>
                  </View>
                  :
                  <View>
                    <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(4), height: rh(8), width: rw(8) }} onPress={() => { setsignineye(true), console.log("eye closed") }}>
                      < ClosedEyeSvg width={'22px'} height={'17px'} />
                    </TouchableOpacity>
                  </View>
                }

              </View>
            </View>
            <View style={{ height: rh(9), marginTop: rh(4), }}>
              {loginloader ?
                <Loaders />
                :
                <TouchableOpacity style={Styles.loginsignupbtn} onPress={() => LoginFunction()}>
                  <Text style={Styles.loginsignuptext}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              }
              <TouchableOpacity style={{ marginHorizontal: rw(5), marginTop: rh(1), }} onPress={() => navigation.navigate('Forgotpasswordemailscreen')}>
                <Text style={{ textAlign: 'right', fontSize: FontSize.font14, color: Colors.yellow, fontWeight: '400', fontFamily: 'Inter-Regular' }}>Forgot Password</Text>
              </TouchableOpacity>

            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>

              {Platform.OS === 'ios' && Platform.Version >= 13 ?
                <View style={{ justifyContent: "center", alignItems: "center", }} >
                  <View style={{ bottom: rh(5) }}>
                    <Text style={{ color: Colors.black, fontSize: FontSize.font14 }}>or continue with</Text>
                  </View>
                  <View style={{ height: rh(15), justifyContent: "space-between" }}>
                    <AppleButton
                      buttonStyle={AppleButton.Style.WHITE}
                      buttonType={AppleButton.Type.SIGN_IN}
                      style={{
                        width: 160,
                        height: 45,
                        borderRadius: 6,
                        borderWidth: 1
                      }}
                      onPress={() => onAppleButtonPress()}
                    />
                    <TouchableOpacity style={{
                      width: 160,
                      height: 45,
                      flexDirection: 'row',
                      backgroundColor: Colors.white,
                      justifyContent: "center",
                      alignContent: 'center',
                      alignItems: 'center',
                      borderRadius: 6,
                      borderWidth: 1,

                    }}
                      onPress={() => onGoogleButtonPress()}
                    >
                      <View>
                        <GOogleGSvg height={'12px'} width={'12px'} />
                      </View>
                      <Text style={Styles.fbgoogletext}>Sign in With Google</Text>
                    </TouchableOpacity>
                  </View>

                </View>
                :
                <View style={{ justifyContent: "center", alignItems: "center", }} >
                  <View style={{ bottom: rh(5) }}>
                    <Text style={{ color: Colors.black, fontSize: FontSize.font14 }}>or continue with</Text>
                  </View>
                  {googleloader ?
                    <Loaders />
                    :
                    <TouchableOpacity style={{
                      width: 180,
                      height: 45,
                      flexDirection: 'row',
                      backgroundColor: Colors.white,
                      justifyContent: "center",
                      alignContent: 'center',
                      alignItems: 'center',
                      borderRadius: 6,
                      borderWidth: 1,
                    }}
                      onPress={() => onGoogleButtonPress()}
                    >
                      <View style={{ right: rw(0.6), top: rh(0.1) }}>
                        <GOogleGSvg height={'15px'} width={'15px'} />
                      </View>
                      <Text style={Styles.fbgoogletext}>Continue with Google</Text>
                    </TouchableOpacity>
                  }

                </View>
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
                <TextInput value={firstname} onChangeText={e => setfirstname(e)} placeholder='First Name' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={Styles.txtinptouterview}>
                <TextInput value={surename} onChangeText={e => setsurename(e)} placeholder='SurName' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={Styles.txtinptouterview}>
                <TextInput value={signupemail} onChangeText={e => setsignupemail(e)} keyboardType='email-address' placeholder='Email' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>

              <View style={[Styles.txtinptouterview, { flexDirection: 'row', }]}>
                <TextInput value={signuppassword} onChangeText={e => setsignuppassword(e)} placeholder='Password' secureTextEntry={signupeye} placeholderTextColor={Colors.borderbottomcolor} style={[Styles.txtinptinner, { width: rw(90) }]} />
                {signupeye ?

                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onPress={() => setsignupeye(false)}>
                    < Evyiconopensvg width={'22px'} height={'15px'} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onPress={() => setsignupeye(true)}>
                    < ClosedEyeSvg width={'22px'} height={'17px'} />
                  </TouchableOpacity>
                }

              </View>

              <View style={[Styles.txtinptouterview, { flexDirection: 'row', }]}>
                <TextInput value={signupconfirmpassword} onChangeText={e => setsignupconfirmpassword(e)} placeholder='Confirm Password' secureTextEntry={signupconfirmeye} placeholderTextColor={Colors.borderbottomcolor} style={[Styles.txtinptinner, { width: rw(90) }]} />
                {signupconfirmeye ?
                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onPress={() => setsignupconfirmeye(false)}>
                    < Evyiconopensvg width={'22px'} height={'15px'} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onPress={() => setsignupconfirmeye(true)}>
                    < ClosedEyeSvg width={'22px'} height={'17px'} />
                  </TouchableOpacity>
                }

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