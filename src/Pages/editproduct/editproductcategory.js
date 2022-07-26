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
import { useIsFocused } from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Loaders from '../../Components/Loaders';
import Toast from 'react-native-simple-toast';

const EditProductCategory = ({ navigation, route }) => {


  const [categorydata, setcategorydata] = useState([])
  const [receipcategoryname, setreceipcategoryname] = useState('')
  const [categorycolour, setcategorycolour] = useState('')
  const [categoryid, setcategoryid] = useState('')

  const isfocudes = useIsFocused()
  const [loader, setloader] = useState(false)
  const [buttonloader, setbuttonloader] = useState(false)
  const [useremail, setuseremail] = useState('')



  console.log(route?.params);

  useEffect(() => {
    asyncvalues()

  }, [isfocudes])






  const updatedata = async () => {
    var requestOptions = {
      method: 'POST',
      redirect: 'follow'
    };
    setbuttonloader(true),
      fetch(`https://waqarulhaq.com/expired-warranty-tracker/edit-product-category.php?ID=${route?.params?.ID}&categoryID=${categoryid}&category_name=${receipcategoryname}&category_color=${categorycolour}`, requestOptions)
        .then(response => response.json()).then(result => {
          console.log("tttt", result.issuccess);
          if (result.issuccess == true) {

            console.log('====================================');
            console.log(result);
            console.log('====================================');
            Toast.show("Category Updated Successfull"),
            setbuttonloader(false),
            navigation.goBack()
            // global.apiData = []
          }
          else {
            alert("Category Not Updated"),
              setbuttonloader(false)
          }
        })
        .catch(error => console.log('error', error));


  }






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



  const categoriesrenderfunction = ({ item, index }) => {
    // console.log(item);
    let muzamilkaconcate = '#' + item.color
    //console.log(muzamilkaconcate);



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
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <YellowBackSvg width={'20.67px'} height={'20.67px'} />
          </TouchableOpacity>
        </View>
        <View style={{ marginTop: rh(1) }}>
          {/* <Text style={Styles.textstep}>Step 4 of 4</Text> */}
          <Text style={Styles.secondhadding}>Category</Text>
        </View>
        <View style={{ height: rh(8), borderBottomColor: Colors.bk, borderBottomWidth: 2, marginTop: rh(1) }}>
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
            keyExtractor={item => item.id}
            contentContainerStyle={{ alignSelf: "center", }} showsVerticalScrollIndicator={false} />
        }
        <View style={{ marginBottom: rh(10) }}>
        </View>
        {/* </ScrollView> */}
        <View style={Styles.nextanssavedbuttonview}>
          {buttonloader ?
            <View style={{ height: rh(10) }}>
              <Loaders />
            </View>
            :
            <TouchableOpacity style={Styles.bottombtn} onPress={() => updatedata()}>
              <Text style={Styles.bottombtntext}>Save</Text>
            </TouchableOpacity>
          }
        </View>
      </View>
    </SafeAreaView>
  )
}

export default EditProductCategory