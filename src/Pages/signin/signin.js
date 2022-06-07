import { View, Text, TouchableOpacity, TextInput, ScrollView, KeyboardAvoidingView } from 'react-native'
import React, { useState, useEffect } from 'react'
import Styles from './signin.styles'
import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import Colors from '../../Global/Colors'
import Fonts from '../../Global/Fonts'
import FontSize from '../../Global/Fonts'
import { SafeAreaView } from 'react-native-safe-area-context';
import Signinsvg from '../../Assets/Svg/Signinsvg.svg'
import Evyiconopensvg from '../../Assets/Svg/Evyiconopensvg.svg'
const Signin = ({ navigation }) => {


  const [firstname, setfirstname] = useState('')
  const [signinenables, setsigninenables] = useState(true)
  return (
    <SafeAreaView style={Styles.container}>
      <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
        {signinenables ?
          <View style={Styles.loginsignupbutton}>
            <View style={{ flexDirection: "row", width: rw('40'), justifyContent: 'space-around' }}>
              <View style={{ borderBottomWidth: 1, borderColor: Colors.white, paddingBottom: 4 }}>
                <TouchableOpacity >
                  <Text style={Styles.loginsignuptext}>Sign in</Text>
                </TouchableOpacity>
              </View>
              <TouchableOpacity onPress={() => setsigninenables(false)}>
                <Text style={Styles.loginsignuptext}>Sign up</Text>
              </TouchableOpacity>
            </View>
          </View>
          :
          <View style={Styles.loginsignupbutton}>
            <View style={{ flexDirection: "row", width: rw(40), justifyContent: 'space-around' }}>
              <TouchableOpacity onPress={() => setsigninenables(true)}>
                <Text style={Styles.loginsignuptext}>Sign in</Text>
              </TouchableOpacity>
              <View style={{ borderBottomWidth: 1, borderColor: Colors.white, paddingBottom: 4 }}>
                <TouchableOpacity >
                  <Text style={Styles.loginsignuptext}>Sign up</Text>
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
                <TextInput placeholder='Email' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={[Styles.txtinptouterview, { flexDirection: 'row' }]}>
                <TextInput placeholder='Password' placeholderTextColor={Colors.borderbottomcolor} style={Styles.password} />
                <View style={{ right: rw(8), marginTop: rh(4) }}>
                  < Evyiconopensvg width={'22px'} height={'15px'} />
                </View>
              </View>
            </View>
            <View style={{ height: rh(9), marginTop: rh(5) }}>
              <TouchableOpacity style={Styles.loginsignupbtn} onPress={() => navigation.navigate('BottomTabNavigations')}>
                <Text style={Styles.loginsignuptext}>
                  Sign in
                </Text>
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
                <TextInput placeholder='First Name' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={Styles.txtinptouterview}>
                <TextInput placeholder='Sure Name' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>
              <View style={Styles.txtinptouterview}>
                <TextInput placeholder='Email' placeholderTextColor={Colors.borderbottomcolor} style={Styles.txtinptinner} />
              </View>

              <View style={[Styles.txtinptouterview, { flexDirection: 'row' }]}>
                <TextInput placeholder='Password' placeholderTextColor={Colors.borderbottomcolor} style={Styles.password} />
                <View style={{ right: rw(8), marginTop: rh(4), }}>
                  < Evyiconopensvg width={'22px'} height={'15px'} />
                </View>
              </View>

              <View style={[Styles.txtinptouterview, { flexDirection: 'row' }]}>
                <TextInput placeholder='Confirm Password' placeholderTextColor={Colors.borderbottomcolor} style={Styles.password} />
                <View style={{ right: rw(8), marginTop: rh(4) }}>
                  < Evyiconopensvg width={'22px'} height={'15px'} />
                </View>
              </View>

            </View>
            <View style={{ height: rh(9), marginTop: rh(5) }}>
              <TouchableOpacity style={Styles.loginsignupbtn} onPress={() => navigation.navigate('signin')}>
                <Text style={Styles.loginsignuptext}>
                  Sign up
                </Text>
              </TouchableOpacity>
            </View>

          </View>
        }
      </ScrollView>
    </SafeAreaView>
  )
}

export default Signin