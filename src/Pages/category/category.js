import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './category.Styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
const Category = ({ navigation }) => {




  const useraddedcategories = [
    { id: 1, categoryname: 'All', categorycolor: 'black', noofitems: "2 items" },
    { id: 2, categoryname: 'Home', categorycolor: 'green', noofitems: "5 items" },
    { id: 3, categoryname: 'Expired', categorycolor: 'yellow', noofitems: "9 items" },
    { id: 4, categoryname: 'All', categorycolor: 'black', noofitems: "2 items" },
    { id: 5, categoryname: 'Home', categorycolor: 'green', noofitems: "5 items" },
    { id: 6, categoryname: 'Expired', categorycolor: 'yellow', noofitems: "9 items" },
    { id: 7, categoryname: 'All', categorycolor: 'black', noofitems: "2 items" },
    { id: 8, categoryname: 'Home', categorycolor: 'green', noofitems: "5 items" },
    { id: 0, categoryname: 'Expired', categorycolor: 'yellow', noofitems: "9 items" },
    { id: 11, categoryname: 'All', categorycolor: 'black', noofitems: "2 items" },
    { id: 22, categoryname: 'Home', categorycolor: 'green', noofitems: "5 items" },
    { id: 23, categoryname: 'Expired', categorycolor: 'pink', noofitems: "9 items" }



  ]
  const categoriesrenderfunction = ({ item }) => {
    return (
      <View style={{ height: rh(10), borderBottomColor: Colors.bk, borderBottomWidth: 1, justifyContent: 'center' }}>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", width: rw(90) }} onPress={() => navigation.navigate('Categoriesdetails', item.categoryname)} >
          <View>
            <MaterialIcons name='folder' size={45} color={item.categorycolor} />
          </View>
          <View style={{ left: rw(3) }}>
            <Text numberOfLines={1} style={{ fontSize: FontSize.font19, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', }}>{item.categoryname}</Text>
            <Text style={{ color: Colors.gry, fontSize: FontSize.font12, fontWeight: '500', fontFamily: 'Inter-Medium', }}>
              {item.noofitems}
            </Text>

          </View>
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ height: rh(8), borderBottomWidth: 2, borderColor: Colors.bk, alignItems: "center", alignContent: "center", justifyContent: "center" }}>
        <View style={{ flexDirection: 'row', width: rw(90), justifyContent: "space-between" }}>
          <Text style={{ fontSize: FontSize.font25, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Regular', }}>Category</Text>
          <TouchableOpacity onPress={() => navigation.navigate('Createcategory')}>
            <AntDesign name='plus' size={30} color={Colors.yellow} />
          </TouchableOpacity>
        </View>
      </View>


      <ScrollView showsVerticalScrollIndicator={false}>
        <FlatList data={useraddedcategories}
          renderItem={categoriesrenderfunction}
          keyExtractor={item => item.id}
          contentContainerStyle={{ alignSelf: "center" }} />
        <View style={{ marginBottom: rh(11) }}>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

export default Category