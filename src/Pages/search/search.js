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
import Loaders from '../../Components/Loaders'









const Search = ({ navigation }) => {

  const isfocudes = useIsFocused()
  const [loader, setloader] = useState(false)

  const [searchbox, setsearchbox] = useState('')
  const [crossenabled, setcrossenabled] = useState(false)
  const [apirecord, setapirecord] = useState([])
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState([]);
  const [search, setSearch] = useState('');

  const asyncvalues = async () => {
    await AsyncStorage.getItem('userdetails').then(async value => {
      let data = JSON.parse(value);
      console.log("------>", data);
      const recorddd = data?.useremail
      getitemsvalues()
    })
  }





  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      >
        {/* <Text>{item.country}</Text> */}
      </View>
    );
  };

  useEffect(() => {
    asyncvalues()
  }, [isfocudes])

  const getitemsvalues = async () => {
    var requestOptions = {
      method: 'GET',
      redirect: 'follow'
    };
    setloader(true)
    await fetch(`https://waqarulhaq.com/expired-warranty-tracker/category-based-products.php?categoryID=41`, requestOptions)
      .then(response => response.json())
      .then(result => {
        setFilteredDataSource(result?.data),
          setMasterDataSource(result?.data)
      },
        setloader(false))
      // .then(result =>
      //   setapirecord(result))
      // .then(jssss())

      .catch(error => console.log('error', error));
  }



  const searchFilterFunction = (text) => {
    // Check if searched text is not blank
    if (text) {
      // Inserted text is not blank
      // Filter the masterDataSource
      // Update FilteredDataSource
      const newData = masterDataSource.filter(
        function (item) {
          const itemData = item.name
            ? item.name.toUpperCase()
            : ''.toUpperCase();
          const textData = text.toUpperCase();
          return itemData.indexOf(textData) > -1;
        });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };






  const serarchrecordrendorfunction = ({ item }) => {
    console.log(item);
    // const dd = JSON.parse(item.data)
    // console.log("909090909090909090900909", dd.dataofexpiry);
    return (
      <View>

        <TouchableOpacity onPress={() => navigation.navigate('Receiptsdetails', item)}>
          <View style={{ width: rw(90), height: rh(11), borderBottomColor: Colors.bk, borderBottomWidth: 2, marginTop: rh(1), alignContent: "center", justifyContent: "center", }}>
            <Text style={{ fontSize: FontSize.font18, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium' }}>{item.name}</Text>
            <View style={{ flexDirection: 'row', marginTop: rh(1) }}>
              <Text style={{ color: Colors.gry, fontSize: FontSize.font14, fontWeight: '500', fontFamily: 'Inter-Light', }}>
                {item.datediff} days left</Text>
              <Text style={{ color: Colors.gry, fontSize: FontSize.font14, fontWeight: '500', fontFamily: 'Inter-Light', left: rw(3) }}>
                Expires on {item.expiry_date}
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
        {/* <View style={{ width: rw(90), height: rh(6), backgroundColor: '#D6D2D2', alignSelf: 'center', justifyContent: 'center', borderRadius: 8, flexDirection: "row", alignItems: 'center', }}>
          <TextInput value={searchbox} placeholder="Search item" placeholderTextColor={Colors.gry} style={{ width: rw(80), fontSize: FontSize.font17, color: Colors.black }} onChangeText={e => setsearchbox(e)} />
          <TouchableOpacity onPress={() => { setsearchbox(''), setcrossenabled(false) }}>
            <Entypo name='cross' color={Colors.yellow} size={20} />
          </TouchableOpacity>
        </View> */}
        <View style={{ width: rw(90), height: rh(6), backgroundColor: '#D6D2D2', borderRadius: 8, flexDirection: "row", alignSelf: "center" }}>
          <TextInput placeholder='Search Receipt' style={{ padding: 0, fontSize: FontSize.font17, color: Colors.black, paddingLeft: rw(4) }} onChangeText={(text) => searchFilterFunction(text)}
            value={search} />
        </View>
      </View>

      {/* <ScrollView style={{ flexGrow: 1 }} showsHorizontalScrollIndicator={false}> */}

      {loader ?

        <View style={{ flex: 1, justifyContent: "center", alignItems: "center", alignSelf: "center", alignContent: "center" }}>
          <Loaders />
        </View>
        :


        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={serarchrecordrendorfunction}
          contentContainerStyle={{ justifyContent: 'center', alignContent: 'center', alignSelf: "center" }} />




      }
      {/* </ScrollView> */}
    </SafeAreaView>
  )
}

export default Search