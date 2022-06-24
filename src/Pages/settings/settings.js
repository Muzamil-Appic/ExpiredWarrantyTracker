import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import Styles from './settings.Styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';
import AntDesign from 'react-native-vector-icons/AntDesign'
import Ionicons from 'react-native-vector-icons/Ionicons'
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5'
import FeedbackSvg from '../../Assets/Svg/FeedbackSvg.svg'
import StarSvg from '../../Assets/Svg/StarSvg.svg'
import InfooSvg from '../../Assets/Svg/InfooSvg.svg'
import CurrencySvg from '../../Assets/Svg/CurrencySvg.svg'
import ExpiryBellSvg from '../../Assets/Svg/ExpiryBellSvg.svg'
import DownloadSvg from '../../Assets/Svg/DownloadSvg.svg'

const Settings = ({ navigation }) => {

  const [taogelenabled, settaogelenabled] = useState(true)

  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ height: rh(9), justifyContent: "center", borderBottomColor: Colors.bk, borderBottomWidth: 2 }}>
        <Text style={{ fontFamily: 'Inter-Medium', fontWeight: '700', fontSize: FontSize.font24, color: Colors.black, paddingLeft: rw(5) }}>Settings</Text>
      </View>

      <LinearGradient colors={['#F205DBB2', '#9411E8B2', '#0B23FBB2']} style={{ marginTop: rh(1.5), marginHorizontal: rw(5), height: rh(19), borderRadius: 12 }}>
        <View style={{ justifyContent: 'space-evenly', height: rh(19), alignItems: 'center' }}>
          <Text style={{ fontFamily: 'Inter-Medium', fontWeight: '500', fontSize: FontSize.font22, color: Colors.white, textAlign: 'center' }}>EXPIRED PRO</Text>
          <TouchableOpacity style={{ backgroundColor: Colors.green, height: rh(7), width: rw(35), justifyContent: 'center', borderRadius: 10, elevation: 5 }} onPress={() => navigation.navigate('upgradetoexpiredpro')}>
            <Text style={{ textAlign: 'center', color: Colors.white, fontSize: FontSize.fon15 }}>Upgrade Now</Text>
          </TouchableOpacity>
        </View>
      </LinearGradient>
      <View style={{ flex: 1, marginTop: rh(3) }}>
        <View style={[Styles.innerview,]}>
          <View style={{ width: rw(6) }}>
            <DownloadSvg height={'20px'} width={'20px'} />
          </View>
          <View style={{ width: rw(65) }}>
            <Text style={Styles.innertext}>Backup & Restore</Text>
          </View>
          <Text style={{ textAlign: 'right', fontSize: FontSize.font12, color: Colors.yellow, }}>Requires Pro</Text>
        </View>
        <View style={[Styles.innerview,]}>
          <ExpiryBellSvg height={'25px'} width={'25px'} />
          <View style={{ width: rw(71) }}>

            <Text style={Styles.innertext}>Expiry Notifications</Text>
          </View>
          {taogelenabled ?

            <View style={{ height: rh(3.5), width: rw(12), backgroundColor: '#C4C4C4', borderRadius: 13, }}>
              <TouchableOpacity onPress={() => settaogelenabled(false)}>
                <View style={{ backgroundColor: '#717171', height: rh(3.5), width: rw(7), borderRadius: 100, }}>
                </View>
              </TouchableOpacity>
            </View>
            :

            <View style={{ height: rh(3.5), width: rw(12), backgroundColor: '#C4C4C4', borderRadius: 13, alignItems: "flex-end" }}>
              <TouchableOpacity onPress={() => settaogelenabled(true)}>
                <View style={{ backgroundColor: Colors.yellow, height: rh(3.5), width: rw(7.5), borderRadius: 100, }}>
                </View>
              </TouchableOpacity>
            </View>

          }
        </View>
        <View style={[Styles.innerview,]}>
          <CurrencySvg width={'22px'} height={'22px'} />
          <View style={{ width: rw(72) }}>
            <TouchableOpacity onPress={() => navigation.navigate('defaultcurrency')}>
              <Text style={Styles.innertext}>Default Currency</Text>
            </TouchableOpacity>
          </View>
          <Text style={{ textAlign: 'right', fontSize: FontSize.font12, color: Colors.yellow, }}>Not Set</Text>
        </View>
        <View style={[Styles.innerview]}>
          <View>
            <FeedbackSvg height={'20.5'} width={'21'} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('feedback')}>
            <Text style={Styles.innertext}>Feedback</Text>
          </TouchableOpacity>
        </View>
        <View style={[Styles.innerview]}>
          <View>
            <StarSvg height={'20'} width={'21'} />
          </View>
          <Text style={Styles.innertext}>Rate & Submit a Review </Text>
        </View>
        <View style={[Styles.innerview,]}>
          <View>
            <  InfooSvg height={'20'} width={'21'} />
          </View>
          <TouchableOpacity onPress={() => navigation.navigate('about')}>
            <Text style={Styles.innertext}>About</Text>
          </TouchableOpacity>
        </View>
        <TouchableOpacity style={{ marginLeft: rw(5), marginTop: rh(2) }} onPress={() => navigation.navigate('signin')}>
          <Text style={{ color: Colors.yellow, fontSize: 20, fontFamily: 'Inter-Regular', fontWeight: '600', }}>Log Out </Text>
        </TouchableOpacity>
      </View>



    </SafeAreaView >
  )
}

export default Settings


