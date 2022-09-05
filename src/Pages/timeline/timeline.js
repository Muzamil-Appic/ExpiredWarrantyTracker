import { View, Text, TouchableOpacity, TextInput, StyleSheet, FlatList, Image } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../Global/Colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontSize from '../../Global/Fonts'
import Styles from './timeline.Styles'
import AsyncStorage from '@react-native-async-storage/async-storage';

import { useIsFocused } from '@react-navigation/native'
import Loaders from '../../Components/Loaders'

const Timeline = ({ navigation }) => {
  const [record, setrecord] = useState([])
  const [loader, setloader] = useState(true)

  const isfocudes = useIsFocused()


  const asyncvalues = async () => {
    await AsyncStorage.getItem('userdetails').then(async value => {
      let data = JSON.parse(value);
      console.log("------>", data);
      getitemsvalues(data?.useremail)
    })
  }


  const longpressedmethod = () => {
    console.log("Still WOrikin");
  }


  useEffect(() => {
    asyncvalues()
  }, [isfocudes])

  const getitemsvalues = async (useremail) => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    setloader(true)
    await fetch(`https://waqarulhaq.com/expired-warranty-tracker/year-based-products.php?email=${useremail}`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setrecord(result?.data)
      },
        setloader(false))
      // .then(result =>
      //   setapirecord(result))
      // .then(jssss())

      .catch(error => console.log('error', error));
  }


  const receiptsfunction = ({ item }) => {
    console.log(item)

    return (
      // <View >
      //   <TouchableOpacity onPress={() => navigation.navigate('Receiptsdetails', item)}>
      //     <View style={{ height: rh(17), marginHorizontal: rw(2), borderRadius: 10, flexDirection: "row", backgroundColor: '#EEEBEB', marginTop: rh(2), justifyContent: "flex-start", }}>
      //       <Image source={{ uri: imk }} style={{ height: 110, width: 100, borderRadius: 10 }} resizeMode={"center"} />
      //       {/* <AutoHeightImage
      //                   resizeMode="stretch"
      //                   width={105}
      //                   style={{ borderRadius: 5 }}
      //                   source={{ uri: item.product_image }}
      //               /> */}
      //       <View style={{ marginLeft: rw(4) }}>
      //         <Text style={{ fontSize: FontSize.font21, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium', marginTop: rh(3) }}>{item.name}</Text>
      //         <View style={{ marginTop: rh(1) }}>
      //           <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light', }}>{item.datediff} days left</Text>
      //           <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light' }}>Expires on {item.expiry_date}</Text>
      //         </View>
      //       </View>
      //     </View>
      //   </TouchableOpacity>
      // </View>
      <View style={{ marginBottom: rh(2) }}>
        {item.data[0].expiry_year === '9999' ?
          <Text style={{ color: Colors.red, textAlign: "center", fontWeight: '500', fontSize: 20 }}>Life Time Warranty</Text>
          :
          <Text style={{ color: Colors.red, textAlign: "center", fontWeight: '500', fontSize: 20 }}>{item.data[0].expiry_year}</Text>
        }
        <Text style={{ textAlign: "center", fontSize: FontSize.font16, color: '#909090' }}>{item.count} item</Text>
        {item.count == '1' ?

          <View >
            <TouchableOpacity onPress={() => navigation.navigate('Receiptsdetails', item?.data[0])}  >
              <View style={{ height: rh(17), marginHorizontal: rw(2), borderRadius: 10, flexDirection: "row", backgroundColor: '#EEEBEB', justifyContent: "flex-start", }}>
                {item.data[0].product_image == '' ?
                  <Image source={require('../../Assets/photos/DummyImage.png')} style={{ resizeMode: 'cover', borderRadius: 10, height: rh(17), width: rw(27) }} />
                  :
                  <Image source={{ uri: item.data[0].product_image }} style={{ resizeMode: 'cover', borderRadius: 10, height: rh(17), width: rw(27) }} />
                }
                {/* <AutoHeightImage
                        resizeMode="stretch"
                        width={105}
                        style={{ borderRadius: 5 }}
                        source={{ uri: item.product_image }}
                    /> */}
                <View style={{ marginLeft: rw(4) }}>
                  <Text style={{ fontSize: FontSize.font21, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium', marginTop: rh(3) }}>{item.data[0].name}</Text>
                  <View style={{ marginTop: rh(1) }}>
                    {item.data[0].datediff <= 0 ?
                      <Text style={{ color: Colors.red, fontSize: FontSize.font14, fontWeight: '500', fontFamily: 'Inter-Light', }}>
                        Expired</Text>
                      :
                      <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light', }}>{item.data[0].datediff} </Text>
                    }
                    {item.data[0].expiry_date === "9999-01-01" ?
                      <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light' }}>Life Time Warranty</Text>
                      :
                      <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light' }}>{item.data[0].expiry_date}</Text>
                    }
                  </View>
                </View>
              </View>
            </TouchableOpacity>
          </View>
          :
          <View>
            {item.data.map((user) => (
              <View>
                <TouchableOpacity onPress={() => navigation.navigate('Receiptsdetails', user)} >
                  <View style={{ height: rh(17), marginHorizontal: rw(2), borderRadius: 10, flexDirection: "row", backgroundColor: '#EEEBEB', marginTop: rh(2), justifyContent: "flex-start", }}>
                    {user.product_image === '' ?
                      <Image source={require('../../Assets/photos/DummyImage.png')} style={{ resizeMode: 'contain', borderRadius: 10, height: rh(17), width: rw(27) }} />
                      :
                      <Image source={{ uri: user.product_image }} style={{ resizeMode: 'contain', borderRadius: 10, height: rh(17), width: rw(27) }} />
                    }
                    {/* <AutoHeightImage
                        resizeMode="stretch"
                        width={105}
                        style={{ borderRadius: 5 }}
                        source={{ uri: item.product_image }}
                    /> */}
                    <View style={{ marginLeft: rw(4) }}>
                      <Text style={{ fontSize: FontSize.font21, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium', marginTop: rh(3) }}>{user.name}</Text>
                      <View style={{ marginTop: rh(1) }}>

                        {user.datediff <= 0 ?
                          <Text style={{ color: Colors.red, fontSize: FontSize.font14, fontWeight: '500', fontFamily: 'Inter-Light', }}>
                            Expired</Text>
                          :
                          <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light', }}>{user.datediff}</Text>
                        }

                        {user.expiry_date === "9999-01-01" ?
                          <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light' }}>Life Time Warranty</Text>
                          :
                          <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light' }}>{user.expiry_date}</Text>
                        }

                      </View>
                    </View>
                  </View>
                </TouchableOpacity>
              </View>
            ))}
          </View>
        }
      </View>
    )
  }


  return (
    <SafeAreaView style={Styles.container}>

      <View style={{ height: rh(8), borderBottomWidth: 2, borderColor: Colors.bk, justifyContent: 'center' }}>
        {/* <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: rw(3) }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <YellowBackSvg width={'20.67px'} height={'20.67px'} />
          </TouchableOpacity> */}
        <Text style={{ fontSize: FontSize.font25, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Regular', left: rw(8) }}>Timeline</Text>
        {/* </View> */}
      </View>

      {loader ?
        <Loaders />
        :
        <FlatList
          data={record}
          // keyExtractor={item => item.data}
          renderItem={receiptsfunction}
          // keyExtractor={(item, index) => index.toString()}
          keyExtractor={(item, index) => index}
        // contentContainerStyle={{ justifyContent: 'center', alignContent: 'center', alignSelf: "center" }}
        />
      }

    </SafeAreaView>
  )
}

export default Timeline



// renderimage:{ resizeMode:'cover'  , height: rh(17), borderTopLeftRadius: 10, borderBottomLeftRadius: 10 ,width:rw(27)}