import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import Styles from './addreceipts.Styles';
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'

const Addrecipts = ({ navigation }) => {
  const [produtnameenabled, setprodutnameenabled] = useState(true)
  const [prductname, setprductname] = useState('')
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ flex: 1 }}>
        {/* {produtnameenabled?} */}
        <View style={{ margin: rh(2.5) }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <YellowBackSvg width={'20.67px'} height={'20.67px'} />
          </TouchableOpacity>
        </View>
        <View style={{ height: rh(8), margin: rh(2.5) }}>
          <Text style={{ color: Colors.black, fontWeight: '400', fontFamily: 'Inter-Regular', fontSize: FontSize.font16 }}>Step 1 of 4</Text>
          <Text style={{ color: Colors.black, fontFamily: 'Inter-Medium', fontSize: FontSize.font24 }}>Product Name</Text>
        </View>
        <View style={{ height: rh(8), marginHorizontal: rh(2.5), borderBottomWidth: 1, borderColor: Colors.yellow }}>
          <Text style={{ fontFamily: 'Inter-Light', fontSize: FontSize.font13, color: Colors.gry }}>Product Name</Text>
          <TextInput style={{ padding: 0, paddingTop: rh(1), fontSize: FontSize.font18 }} onChangeText={e => setprductname(e)} />
        </View>
        <TouchableOpacity style={{ backgroundColor: Colors.yellow, }}>
          <Text>Next</Text>
        </TouchableOpacity>

      </View>

    </SafeAreaView>
  )
}

export default Addrecipts