import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import Styles from './upgradetoexpiredpro.Styles';
import { SafeAreaView } from 'react-native-safe-area-context'
import LinearGradient from 'react-native-linear-gradient';
import BackWhiteSvg from '../../Assets/Svg/BackWhiteSvg.svg'
import MobilePhoneSvg from '../../Assets/Svg/MobilePhoneSvg.svg'
import GoogleBackSvg from '../../Assets/Svg/GoogleBackSvg.svg'
import EmailSvg from '../../Assets/Svg/EmailSvg.svg'
import DeveloperHelpSvg from '../../Assets/Svg/DeveloperHelpSvg'

const Upgradetoexpiredpro = ({ navigation }) => {
  return (
    <SafeAreaView style={Styles.container}>


      <View style={{ height: rh(20), backgroundColor: '#7A73CB', alignItems: 'center' }}>
        <View style={{ flexDirection: "row", justifyContent: "center", marginTop: rh(2), alignContent: 'center' }}>
          <View style={{ justifyContent: "center", right: rw(6.5) }}>
            <BackWhiteSvg width={'21px'} height={'21px'} />
          </View>
          <View>
            <Text style={{ color: Colors.white, fontSize: FontSize.font26, fontWeight: '600', fontFamily: 'Inter-Medium' }}>Upgrade to Expired Pro</Text>
          </View>
        </View>

        <View style={{ marginHorizontal: rw(10), marginTop: rh(3.5), width: rw(68), justifyContent: "center", alignContent: "center" }}>
          <View style={{ flexDirection: "row", }}>
            <Text style={Styles.innertxt}>Upgrade today and get</Text>
            <Text style={[Styles.innertxt, { color: Colors.yellow }]}> full access </Text>
            <Text style={Styles.innertxt}> to features</Text>
          </View>
          <View style={{ flexDirection: 'row', justifyContent: 'center' }}>
            <Text style={[Styles.innertxt, { fontFamily: 'Inter-ExtraLight', fontWeight: '700', paddingRight: rw(1) }]}>ONLY</Text>
            <Text style={[Styles.innertxt]}>available exclusively on PRO!</Text>
          </View>
        </View>
      </View>












      <View style={{ marginTop: rh(3), flex: 1, marginHorizontal: rw(6), }}>
        <View style={Styles.mainheight}>
          <View style={{ width: rw(19), marginTop: rh(1) }}>
            < MobilePhoneSvg width={'55px'} height={'55px'} />
          </View>
          <View style={{ paddingTop: rh(1) }} >
            <Text style={Styles.yellowtext}>Unlimited Warranty Tracking</Text>
            <Text style={Styles.blacktext}>Track unlimited items. free version only</Text>
            <Text style={Styles.blacktext}>limit to 10 items</Text>
          </View>
        </View>
        <View style={Styles.mainheight}>
          <View style={{ width: rw(19), marginTop: rh(1) }}>
            < GoogleBackSvg width={'55px'} height={'55px'} />
          </View>
          <View style={{ paddingTop: rh(1) }} >
            <Text style={Styles.yellowtext}>Google Drive Backup</Text>
            <Text style={Styles.blacktext}>If you lose your phone or switch to a</Text>
            <Text style={Styles.blacktext}>new one, your record is safe </Text>
          </View>
        </View>
        <View style={Styles.mainheight}>
          <View style={{ width: rw(19), marginTop: rh(1) }}>
            < EmailSvg width={'55px'} height={'55px'} />
          </View>
          <View style={{ paddingTop: rh(1) }} >
            <Text style={Styles.yellowtext}>Priority Support</Text>
            <Text style={Styles.blacktext}>Only available exclusively for Pro users</Text>
          </View>
        </View>
        <View style={[Styles.mainheight, { borderBottomWidth: 0 }]}>
          <View style={{ width: rw(19), marginTop: rh(1) }}>
            < DeveloperHelpSvg width={'55px'} height={'55px'} />
          </View>
          <View style={{ paddingTop: rh(1) }} >
            <Text style={Styles.yellowtext}>Support the developer</Text>
            <Text style={Styles.blacktext}>Your support will encourage us to roll</Text>
            <Text style={Styles.blacktext}>out more features</Text>
          </View>
        </View>

      </View>
      <View style={{ marginHorizontal: rw(6), }}>
        <TouchableOpacity style={{ backgroundColor: Colors.yellow, height: rh(8.5), justifyContent: 'center', alignItems: 'center', bottom: rh(1), borderRadius: 6 }}>
          <Text style={{ color: Colors.white, fontSize: 12, padding: 2 }}>Upgrade now</Text>
          <Text style={{ color: Colors.white, fontSize: 18, padding: 2 }}>Rs 879.00</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

export default Upgradetoexpiredpro