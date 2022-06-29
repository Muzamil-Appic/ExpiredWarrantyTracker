import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './addproduct.Styles'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'

const Addproductstepfourcategory = ({ navigation }) => {

  const useraddedcategories = [
    { id: 1, categoryname: 'All', categorycolor: 'black' },
    { id: 2, categoryname: 'Home', categorycolor: 'green' },
    { id: 2, categoryname: 'Expired', categorycolor: 'yellow' }
  ]




  const categoriesrenderfunction = ({ item }) => {
    return (
      <View style={{ height: rh(10), borderBottomColor: Colors.bk, borderBottomWidth: 1, flexDirection: "row", alignItems: "center", justifyContent: "space-between", }}>
        <View style={{ flexDirection: "row", alignItems: 'center', width: rw(84) }}>
          <MaterialIcons name='folder' size={40} color={item.categorycolor} />
          <Text numberOfLines={1} style={{ fontSize: FontSize.font20, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', left: rw(4) }}>{item.categoryname}</Text>
        </View>
        < TouchableOpacity style={{ width: rw(10) }}>
          <Entypo name='circle' size={20} />
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ flex: 1, marginHorizontal: rw(5) }}>
        <ScrollView style={{ flexGrow: 1 }}>
          <View style={{ height: rh(4), marginTop: rh(2) }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <YellowBackSvg width={'20.67px'} height={'20.67px'} />
            </TouchableOpacity>
          </View>
          <View style={{ marginTop: rh(2) }}>
            <Text style={Styles.textstep}>Step 4 of 4</Text>
            <Text style={Styles.secondhadding}>Select a Category</Text>
          </View>


          <View style={{ height: rh(8), borderBottomColor: Colors.bk, borderBottomWidth: 2, marginTop: rh(2) }}>
            <TouchableOpacity style={{ flexDirection: 'row', paddingTop: rh(3), alignItems: "center" }} onPress={() => navigation.navigate('Createcategory')}>
              <AntDesign name='pluscircle' size={20} color={Colors.yellow} />
              <Text style={[Styles.headingtext, { left: rw(2), fontSize: FontSize.font20 }]}>Add new category</Text>
            </TouchableOpacity>
          </View>



          <FlatList data={useraddedcategories}
            renderItem={categoriesrenderfunction}
            keyExtractor={item => item.id}
            contentContainerStyle={{ alignSelf: "center" }} />


        </ScrollView>
        <View style={Styles.nextanssavedbuttonview}>
          <TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('Addproductstepfiveoptional')}>
            <Text style={Styles.bottombtntext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Addproductstepfourcategory