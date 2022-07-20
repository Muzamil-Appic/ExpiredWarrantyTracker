import { View, Text, TouchableOpacity, TextInput, StyleSheet, ScrollView, FlatList } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../Global/Colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontSize from '../../Global/Fonts'
import Styles from './search.Styles'
import { useIsFocused } from '@react-navigation/native'
import AsyncStorage from '@react-native-async-storage/async-storage';







const Search = ({ navigation }) => {
  const [newapireoced, setnewapireoced] = useState('')


  const isfocudes = useIsFocused()


  const [useremail, setuseremail] = useState('')
  const asyncvalues = async () => {
    await AsyncStorage.getItem('userdetails').then(async value => {
      let data = JSON.parse(value);
      console.log("------>", data);
      setuseremail(data?.useremail)
    })
  }

  useEffect(() => {
    asyncvalues()
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };

    fetch(`http://waqarulhaq.com/expired-warranty-tracker/get-products.php?email=${useremail}`, requestOptions)
      .then(response => response.json())
      .then(result => setapirecord(result.data))
      // .then(result =>
      //   setapirecord(result))
      // .then(jssss())
      .catch(error => console.log('error', error));
  }, [isfocudes])


  const jssss = () => {
    console.log("entered");

    console.log(apirecord);
    const obj = JSON.parse(apirecord);
    setnewapireoced(obj)


  }



  const [searchbox, setsearchbox] = useState('')
  const [crossenabled, setcrossenabled] = useState(false)
  const [apirecord, setapirecord] = useState([])


  const serarchrecordrendorfunction = ({ item }) => {

    const dd = JSON.parse(item.data)
    console.log("909090909090909090900909", dd.dataofexpiry);
    return (
      <View>

        <TouchableOpacity onPress={() => navigation.navigate('Receiptsdetails', dd)}>
          <View style={{ width: rw(90), height: rh(11), borderBottomColor: Colors.bk, borderBottomWidth: 2, marginTop: rh(1), alignContent: "center", justifyContent: "center", }}>
            <Text style={{ fontSize: FontSize.font18, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium' }}>{dd.productkaname}</Text>
            <View style={{ flexDirection: 'row', marginTop: rh(1) }}>
              <Text style={{ color: Colors.gry, fontSize: FontSize.font14, fontWeight: '500', fontFamily: 'Inter-Light', }}>
                {dd.dateofpurchaseditem}</Text>
              <Text style={{ color: Colors.gry, fontSize: FontSize.font14, fontWeight: '500', fontFamily: 'Inter-Light', left: rw(3) }}>
                {dd.dataofexpiry}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </View>

    )
  }
  return (
    <SafeAreaView style={Styles.container}>
      <View style={{
        height: rh(10), backgroundColor: Colors.white, justifyContent: 'center',
        borderBottomColor: Colors.bk, borderBottomWidth: 2
      }}>
        <View style={{ width: rw(90), height: rh(6), backgroundColor: '#D6D2D2', alignSelf: 'center', justifyContent: 'center', borderRadius: 8, flexDirection: "row", alignItems: 'center', }}>
          <TextInput value={searchbox} placeholder="Search item" placeholderTextColor={Colors.gry} style={{ width: rw(80), fontSize: FontSize.font17, color: Colors.black }} onChangeText={e => setsearchbox(e)} />
          <TouchableOpacity onPress={() => { setsearchbox(''), setcrossenabled(false) }}>
            <Entypo name='cross' color={Colors.yellow} size={20} />
          </TouchableOpacity>
        </View>
      </View>

      <ScrollView style={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false}>
        <FlatList data={apirecord}
          // keyExtractor={item => item.id}
          renderItem={serarchrecordrendorfunction}
          contentContainerStyle={{ justifyContent: 'center', alignContent: 'center', alignSelf: "center" }} />
      </ScrollView>
    </SafeAreaView>
  )
}

export default Search