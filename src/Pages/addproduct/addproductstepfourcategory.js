import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Alert, Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
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
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loaders from '../../Components/Loaders';
const Addproductstepfourcategory = ({ navigation }) => {


  const [categorydata, setcategorydata] = useState([])
  const [receipcategoryname, setreceipcategoryname] = useState('')
  const [categorycolour, setcategorycolour] = useState('')
  const isfocudes = useIsFocused()
  const [loader, setloader] = useState(false)

  useEffect(() => {
    asyncvalues()
  }, [isfocudes])

  const backfunction = () => {
    Alert.alert(
      'Alert',
      'Are You Sure You Want To Exit',
      [
        { text: 'Cancel', onPress: () => console.warn("You Backed") },
        { text: 'OK', onPress: () => { navigation.navigate('BottomTabNavigations', { screen: 'Timeline' }), global.apiData = [] } },
      ],
      { cancelable: false }
    )
  }

  const [useremail, setuseremail] = useState('')
  const [categoryid, setcategoryid] = useState('')


  const asyncvalues = async () => {
    await AsyncStorage.getItem('userdetails').then(async value => {
      let data = JSON.parse(value);
      console.log("------>", data);
      getcategories(data?.useremail)
    })
  }















  const getcategories = async (useremailaddress) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    };
    setloader(true)
    await fetch(`http://waqarulhaq.com/expired-warranty-tracker/get-categories.php?email=${useremailaddress}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log("--------------->", result);
        setcategorydata(result.data),
          setloader(false)
      })
      .catch((error) => {
        alert(error.code)
        console.log(error);
        setloader(false)
      })

  }








  console.log('====================================', "This is Our Global Record 4");
  console.log(global.apiData);
  console.log('====================================');






  const enablemark = (item, index) => {

    // const newarraydata = categorydata.map((e, index) => {
    //   console.log(e)
    //   if (item.id == e.id) {
    //     return {
    //       ...e,
    //       seleced: true
    //     }
    //   }
    //   return {
    //     ...e,
    //     seleced: false
    //   }
    // })
    // setcategorydata(newarraydata)

    // // setreceipcategoryname(item.name),
    // //  setcategorycolour(muzamilkaconcate)



    let temp = [...categorydata];
    for (let i = 0; i < categorydata.length; i++) {
      if (categorydata[i].ID == item.ID) {
        temp[i] = {
          seleced: true,
          name: categorydata[i].name,
          color: categorydata[i].color,
          ID: categorydata[i].ID,
        };
      } else {
        temp[i] = {
          seleced: false,
          name: categorydata[i].name,
          color: categorydata[i].color,
          ID: categorydata[i].ID,
        };
      }
    }
    setcategorydata(temp);




  }


  const datachangedagain = () => {

    if (receipcategoryname === '') {
      alert("Please seletect category first")
      return;
    }
    let temp = { ...global.apiData, category_name: receipcategoryname, category_color: categorycolour, categoryID: categoryid }
    global.apiData = temp
    navigation.navigate('Addproductstepfiveoptional')
  }

  const categoriesrenderfunction = ({ item, index }) => {
    console.log(item);
    let muzamilkaconcate = '#' + item.color
    console.log(muzamilkaconcate);
    return (
      <View style={{ height: rh(10), borderBottomColor: Colors.bk, borderBottomWidth: 1, justifyContent: 'center' }}>
        <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", width: rw(90), justifyContent: "space-between" }} onPress={() => { enablemark(item, index), setreceipcategoryname(item.name), setcategorycolour(item.color), setcategoryid(item.ID) }} >
          <View style={{ flexDirection: "row", alignItems: "center", width: rw(80) }}>
            <MaterialIcons name='folder' size={45} color={muzamilkaconcate} />
            <Text numberOfLines={2} style={{ fontSize: FontSize.font19, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', left: rw(3), width: rw(60) }}>{item.name}</Text>
          </View>
          {item.seleced == true ?
            <View style={{ right: rw(2) }}>
              <AntDesign name='checkcircleo' size={20} color={Colors.yellow} />
            </View>
            :
            <View style={{ right: rw(2) }}>
              <Entypo name='circle' size={20} color={Colors.black} />
            </View>
          }
        </TouchableOpacity>
      </View>
    )
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{ flex: 1, marginHorizontal: rw(5) }}>
        <View style={{ height: rh(4), marginTop: rh(2) }}>
          <TouchableOpacity onPress={() => backfunction()}>
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

        {/* <ScrollView style={{ flexGrow: 1 }} showsVerticalScrollIndicator={false}> */}
        {loader ?
          <Loaders />
          :
          <FlatList data={categorydata}
            renderItem={categoriesrenderfunction}
            keyExtractor={(item, index) => index}
            contentContainerStyle={{ alignSelf: "center", }} />
        }
        <View style={{ marginBottom: rh(10) }}>
        </View>
        {/* </ScrollView> */}

        <View style={Styles.nextanssavedbuttonview}>
          <TouchableOpacity style={Styles.bottombtn} onPress={() => datachangedagain()}>
            <Text style={Styles.bottombtntext}>Next</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  )
}

export default Addproductstepfourcategory