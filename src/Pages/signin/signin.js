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
import auth from '@react-native-firebase/auth';
import { firebase } from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import {
  GoogleSignin,
  GoogleSigninButton,
  statusCodes,
} from '@react-native-google-signin/google-signin';





const Signin = ({ navigation }) => {




  useEffect(() => {
    GoogleSignin.configure({
      webClientId: '107511410686-rkub5qroeu5qv7hrpkegedurrccf5tci.apps.googleusercontent.com',

    });
  }, [])


  const firestorereference = firestore().collection('Users')

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
      .then(data => console.log(data))




    signinempty()
    setloginloader(false)
    navigation.replace('BottomTabNavigations')
    console.log("DONE dona DOne")
      // await firebase
      //   .auth()
      //   .signInWithEmailAndPassword(signemail.trim(), signinpasswprd)
      //   .then((user) => {
      // console.log("user login information----->", user.user.email)
      // AsyncStorage.setItem(
      //   'userdetails',
      //   JSON.stringify({
      //     email: user.user.email,
      //     id: user.user.email,
      //   })
      // )

      // }
      // ).
      .then(() => {
        signinempty()
        setsigninenables(true)
        setsignuploader(false)
      })
      .catch((error) => {
        signinempty()
        setloginloader(false)
        alert(error.code)
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
    setsigninpasswprd('')
    setsignemail('')

  }

  const SignupFunction = async () => {
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

    if (signupconfirmpassword !== signuppassword) {
      alert("Passwords Are Not Same")
      return;
    }

    setsignuploader(true)
    // var uniq = 'id-' + (new Date()).getTime();
    //console.log(uniq);
    await firebase
      .auth()
      .createUserWithEmailAndPassword(signupemail.trim(), signuppassword)
      .then((loggeduser) => {
        const userdata = firestorereference.doc(signupemail)
        console.log(loggeduser);




        const requestOptions = {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify()
        };
        fetch(`http://waqarulhaq.com/expired-warranty-tracker/signup.php?email=${signupemail}&password=${signuppassword}&fname=${firstname}&lname=${surename}`, requestOptions)
          .then(response => response.json())
          .then(data => console.log(data))


          // userdata.set({
          //   firstname: firstname,
          //   surename: surename,
          //   email: signupemail,
          //   userid: signupemail + uniq

          // }).

          .then(() => {
            signupempty();
            setsigninenables(true)
            setsignuploader(false)

          })
      })
      .catch((error) => {
        setsignuploader(false)
        alert(error)
        console.log("Signup Error---->", error);
      })




  }





  // async function onGoogleButtonPress() {
  //   // Get the users ID token
  //   const { idToken } = await GoogleSignin.signIn();
  //   console.log("ok");
  //   // Create a Google credential with the token
  //   const googleCredential = auth.GoogleAuthProvider.credential(idToken);

  //   // Sign-in the user with the credential
  //   return auth().signInWithCredential(googleCredential);
  // }


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
        console.log(loggeduser);
        if (loggeduser.additionalUserInfo.isNewUser === true) {
          console.log("New User");
          console.log(loggeduser.user.email)
          console.log(loggeduser?.additionalUserInfo?.profile?.family_name)
          console.log(loggeduser?.additionalUserInfo?.profile?.given_name)

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




  // async function onGoogleButtonPress() {
  //   try {
  //     await GoogleSignin.hasPlayServices();
  //     const userInfo = await GoogleSignin.signIn();
  //     console.log('====================================');
  //     console.log(userInfo);
  //     console.log('====================================');
  //   } catch (error) {
  //     if (error.code === statusCodes.SIGN_IN_CANCELLED) {
  //       // user cancelled the login flow
  //     } else if (error.code === statusCodes.IN_PROGRESS) {
  //       // operation (e.g. sign in) is in progress already
  //     } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
  //       // play services not available or outdated
  //     } else {
  //       // some other error happened
  //     }
  //   }
  // };





  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
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
                <TextInput onChangeText={e => setsignemail(e)} keyboardType='email-address' placeholder='Email' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={[Styles.txtinptouterview, { flexDirection: 'row', }]}>
                <TextInput onChangeText={e => setsigninpasswprd(e)} placeholder='Password' secureTextEntry={signineye} placeholderTextColor={Colors.borderbottomcolor} style={[Styles.txtinptinner, { width: rw(90) }]} />
                {signineye ?


                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setsignineye(true)}>
                    < Evyiconopensvg width={'22px'} height={'15px'} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setsignineye(false)}>
                    < Evyiconopensvg width={'22px'} height={'15px'} />
                  </TouchableOpacity>
                }

              </View>
            </View>
            <View style={{ height: rh(9), marginTop: rh(5) }}>
              {loginloader ?
                <Loaders />
                :
                <TouchableOpacity style={Styles.loginsignupbtn} onPress={() => LoginFunction()}>
                  <Text style={Styles.loginsignuptext}>
                    Sign In
                  </Text>
                </TouchableOpacity>
              }
            </View>

            <View style={{ flex: 1, justifyContent: 'center', alignItems: "center" }}>
              <Text style={{ color: Colors.black, fontSize: FontSize.font14 }}>or continue with</Text>
              <TouchableOpacity style={{ marginTop: rh(2), backgroundColor: Colors.green }} onPress={() => onGoogleButtonPress()}>
                <Text>Google</Text>
              </TouchableOpacity>
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
                <TextInput onChangeText={e => setsignuppassword(e)} placeholder='Password' secureTextEntry={signineye} placeholderTextColor={Colors.borderbottomcolor} style={[Styles.txtinptinner, { width: rw(90) }]} />
                {signupeye ?

                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setsignupeye(true)}>
                    < Evyiconopensvg width={'22px'} height={'15px'} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setsignupeye(false)}>
                    < Evyiconopensvg width={'22px'} height={'15px'} />
                  </TouchableOpacity>
                }

              </View>

              <View style={[Styles.txtinptouterview, { flexDirection: 'row', }]}>
                <TextInput onChangeText={e => setsignupconfirmpassword(e)} placeholder='Confirm Password' secureTextEntry={signineye} placeholderTextColor={Colors.borderbottomcolor} style={[Styles.txtinptinner, { width: rw(90) }]} />
                {signupeye ?


                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setsignupeye(true)}>
                    < Evyiconopensvg width={'22px'} height={'15px'} />
                  </TouchableOpacity>
                  :
                  <TouchableOpacity style={{ right: rw(8), alignSelf: "center", marginTop: rh(3) }} onpress={() => setsignupeye(false)}>
                    < Evyiconopensvg width={'22px'} height={'15px'} />
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