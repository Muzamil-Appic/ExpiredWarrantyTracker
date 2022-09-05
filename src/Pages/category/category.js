import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Alert, Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput, Button } from 'react-native'
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
import Loaders from '../../Components/Loaders';
import Foundation from 'react-native-vector-icons/Foundation'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import { TouchableRipple } from 'react-native-paper';
import Toast from 'react-native-simple-toast';
const Category = ({ navigation }) => {

  const [categorydata, setcategorydata] = useState([])
  const [loader, setloader] = useState(false)
  const [modalVisible, setModalVisible] = useState(false)
  const [selecteditem, setselecteditem] = useState(false)
  const isfocudes = useIsFocused()


  useEffect(() => {
    asyncvalues()
  }, [isfocudes])


  const deletereceipts = (item) => {
    let idfordelete = item.ID
    console.log(item.ID);
    Alert.alert(
      'Category Delete',
      'Are You Sure You Want To Delte Category & All Receipt',
      [
        {
          text: 'Cancel',
          onPress: () => console.warn('Cancel Pressed'),
          style: 'cancel',
        },
        { text: 'OK', onPress: () => deletecategorywithreceipt(idfordelete) },
      ],
      { cancelable: false }
    )

  }





  const asyncvalues = async () => {
    await AsyncStorage.getItem('userdetails').then(async value => {
      let data = JSON.parse(value);
      console.log("------>", data);
      getcategories(data?.useremail)
    })
  }

  const getcategories = async (useremail) => {
    setloader(true)
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    };
    await fetch(`http://waqarulhaq.com/expired-warranty-tracker/get-categories.php?email=${useremail}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        // console.log("--------------->", result);
        setcategorydata(result.data),
          setloader(false)
      })
      .catch((error) => {
        alert(error.code),
          setloader(false)
        console.log(error);
      })
  }
  const handlerLongClick = (item, index) => {
    return (
      <View style={{ height: rh(2), width: rw(20), backgroundColor: Colors.black }}>
        <Text>ok</Text>
      </View>
    )

  };


  const hitsize = (item) => {
    let temp = [...categorydata];
    for (let i = 0; i < categorydata.length; i++) {
      if (categorydata[i].code == item.code) {
        temp[i] = {
          seleced: true,
          code: categorydata[i].code,
          name: categorydata[i].name,
          items: categorydata[i].items,
          ID: categorydata[i].ID

        };
      } else {
        temp[i] = {
          seleced: false,
          code: categorydata[i].code,
          name: categorydata[i].name,
          items: categorydata[i].items,
          ID: categorydata[i].ID

        };
      }

    }
    setcategorydata(temp);


  }


  const categoriesrenderfunction = ({ item, index }) => {
    console.log(item);
    let muzamilkaconcate = '#' + item.color
    console.log(muzamilkaconcate);
    return (
      <View style={{ height: rh(10), borderBottomColor: Colors.bk, borderBottomWidth: 1, justifyContent: 'center' }}>
        {item.seleced == true ?
          <View>
            <View style={{ flexDirection: "row", alignItems: "center", width: rw(90) }}>
              <View>
                <MaterialIcons name='folder' size={45} color={muzamilkaconcate} />
              </View>

              <View style={{ left: rw(3) }}>
                <Text numberOfLines={1} style={{ fontSize: FontSize.font19, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', }}>{item.name}</Text>
                <Text style={{ color: Colors.gry, fontSize: FontSize.font12, fontWeight: '500', fontFamily: 'Inter-Medium', }}>
                  {item.items} Items
                </Text>
              </View>

              <View style={{ height: rh(9.5), width: rw(90), position: "absolute", backgroundColor: '#252525', flexDirection: "row", justifyContent: "center", opacity: 0.3, alignContent: 'center', alignItems: "center" }}>
                <View style={{ flexDirection: "row", width: rw(25), justifyContent: "space-between", left: rw(10) }}>
                  <TouchableOpacity onPress={() => deletereceipts(item)}>
                    <MaterialCommunityIcons name='delete' size={40} color={Colors.black} />
                  </TouchableOpacity>
                  <TouchableOpacity onPress={() => navigation.navigate('EditCategory', item)} >
                    <Foundation name='page-edit' size={40} color={Colors.black} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
          :
          <View>
            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", width: rw(90) }} onPress={() => navigation.navigate('Categoriesdetails', item)} onLongPress={() => hitsize(item)} activeOpacity={0.6}  >
              <View>
                <MaterialIcons name='folder' size={45} color={muzamilkaconcate} />
              </View>
              <View style={{ left: rw(3) }}>
                <Text numberOfLines={1} style={{ fontSize: FontSize.font19, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', }}>{item.name}</Text>
                <Text style={{ color: Colors.gry, fontSize: FontSize.font12, fontWeight: '500', fontFamily: 'Inter-Medium', }}>
                  {item.items} Items
                </Text>
              </View>

            </TouchableOpacity>
          </View>

        }
      </View>
    )
  }




  const deletecategorywithreceipt = async (id) => {
    console.log("id", id);
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify()
    };
    fetch(`https://waqarulhaq.com/expired-warranty-tracker/delete-category.php?id=${id}`, requestOptions)
      .then(response => response.text())
      .then(result => {
        console.log(result);
        Toast.show("Deleted")
        asyncvalues()
      })
      .catch((error) => {
        alert(error.code)
        console.log(error);
      })
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


      {loader ?
        <View style={{ flex: 1, alignSelf: "center" }}>
          <Loaders />
        </View>
        :
        <FlatList data={categorydata}
          renderItem={categoriesrenderfunction}
          keyExtractor={(item, index) => index}
          contentContainerStyle={{ alignSelf: "center" }} />
      }
      <View style={{ marginBottom: rh(11) }}>
      </View>





    </SafeAreaView>
  )
}

export default Category






// const categoriesrenderfunction = ({ item, index }) => {
//   console.log(item);
//   let muzamilkaconcate = '#' + item.color
//   console.log(muzamilkaconcate);

//   return (
//     <View style={{ height: rh(10), borderBottomColor: Colors.bk, borderBottomWidth: 1, justifyContent: 'center' }}>

// {item.seleced?
// <TouchableOpacity onPress={ } style={{ flexDirection: "row", alignItems: "center", width: rw(90) }}>

// <View>
// <MaterialIcons name='folder' size={45} color={muzamilkaconcate} />
// </View>

// <View style={{ left: rw(3) }}>
// <Text numberOfLines={1} style={{ fontSize: FontSize.font19, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', }}>{item.name}</Text>
// <Text style={{ color: Colors.gry, fontSize: FontSize.font12, fontWeight: '500', fontFamily: 'Inter-Medium', }}>
//   {item.items} Items
// </Text>
// </View>

// <View style={{ height: rh(9.5), width: rw(90), position: "absolute", backgroundColor: '#252525', flexDirection: "row", justifyContent: "center", opacity: 0.3, alignContent: 'center', alignItems: "center" }}>
// <View style={{ flexDirection: "row", width: rw(25), justifyContent: "space-between", left: rw(10) }}>
//   <TouchableOpacity onPress={() => deletereceipts(item)}>
//     <MaterialCommunityIcons name='delete' size={40} color={Colors.black} />
//   </TouchableOpacity>
//   <TouchableOpacity onPress={() => navigation.navigate('EditCategory', item)} >
//     <Foundation name='page-edit' size={40} color={Colors.black} />
//   </TouchableOpacity>
// </View>
// </View>

// <TouchableOpacity />

// :



//       <TouchableOpacity style={{ flexDirection: "row", alignItems: "center", width: rw(90) }} delayLongPress={10} onLongPress={() => hitsize(item)} activeOpacity={0.6} onPress={() => navigation.navigate('Categoriesdetails', item)} >
//         <View>
//           <MaterialIcons name='folder' size={45} color={muzamilkaconcate} />
//         </View>
//         <View style={{ left: rw(3) }}>
//           <Text numberOfLines={1} style={{ fontSize: FontSize.font19, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', }}>{item.name}</Text>
//           <Text style={{ color: Colors.gry, fontSize: FontSize.font12, fontWeight: '500', fontFamily: 'Inter-Medium', }}>
//             {item.items} Items
//           </Text>
//         </View>
//         {/* <View style={{ height: rh(9.5), width: rw(90), position: "absolute", backgroundColor: '#252525', flexDirection: "row", justifyContent: "center", opacity: 0.3, alignContent: 'center', alignItems: "center" }}>
//             <View style={{ flexDirection: "row", width: rw(25), justifyContent: "space-between", left: rw(10) }}>
//               <TouchableOpacity>
//                 <MaterialCommunityIcons name='delete' size={40} color={Colors.black} />
//               </TouchableOpacity>
//               <TouchableOpacity onPress={() => navigation.navigate('EditCategory', item)} >
//                 <Foundation name='page-edit' size={40} color={Colors.black} />
//               </TouchableOpacity>
//             </View>
//           </View> */}
//       </TouchableOpacity>
// }
//     </View>
//   )
// }
