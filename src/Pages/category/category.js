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
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useIsFocused } from '@react-navigation/native';
const Category = ({ navigation }) => {

  const [categorydata, setcategorydata] = useState([])
  const isfocudes = useIsFocused()
  useEffect(() => {
    asyncvalues()
    getcategories()
  }, [isfocudes])




  const asyncvalues = async () => {
    await AsyncStorage.getItem('userdetails').then(async value => {
      let data = JSON.parse(value);
      console.log("------>", data);
      setuseremail(data?.useremail)
    })
  }



  const [useremail, setuseremail] = useState('')

  const getcategories = async () => {

    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    };
    await fetch(`http://waqarulhaq.com/expired-warranty-tracker/get-categories.php?email=${useremail}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log("--------------->", result);
        setcategorydata(result.data)
      })
      .catch((error) => {
        alert(error.code)
        console.log(error);
      })
  }



  const categoriesrenderfunction = ({ item }) => {
    console.log(item);
    let muzamilkaconcate = '#' + item.color
    console.log(muzamilkaconcate);
    return (
      <View style={{ height: rh(10), borderBottomColor: Colors.bk, borderBottomWidth: 1, justifyContent: 'center' }}>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", width: rw(90), }} onPress={() => navigation.navigate('Categoriesdetails', item.name)} >
          <View>
            <MaterialIcons name='folder' size={45} color={muzamilkaconcate} />
          </View>
          <View style={{ left: rw(3) }}>
            <Text numberOfLines={1} style={{ fontSize: FontSize.font19, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', }}>{item.name}</Text>
            <Text style={{ color: Colors.gry, fontSize: FontSize.font12, fontWeight: '500', fontFamily: 'Inter-Medium', }}>
              5 Items
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
        <FlatList data={categorydata}
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