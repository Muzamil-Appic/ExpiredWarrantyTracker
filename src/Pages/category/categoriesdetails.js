import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, Image, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './category.Styles'
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Entypo from 'react-native-vector-icons/Entypo'
import Loaders from '../../Components/Loaders';
import AutoHeightImage from 'react-native-auto-height-image';

const Categoriesdetails = ({ navigation, route }) => {
    console.log('====================================');
    console.log(route?.params.ID);
    console.log('====================================');

    const [record, setrecord] = useState([])
    const [imageloader, setimageloader] = useState(true)
    const [loader, setloader] = useState(true)

    useEffect(() => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        setloader(true)
        fetch(`https://waqarulhaq.com/expired-warranty-tracker/category-based-products.php?categoryID=${route?.params.ID}`, requestOptions)
            .then(response => response.json())
            .then(result => setrecord(result?.data),
                setloader(false))
            .catch(error => console.log('error', error));
    }, [])


    const imageheight = Dimensions.get('window').height
    const imagwidth = Dimensions.get('window').width


    const receiptsfunction = ({ item }) => {
        console.log(item)
        return (
            <View >
                <TouchableOpacity onPress={() => navigation.navigate('Receiptsdetails', item)}>
                    <View style={{ height: rh(17), marginHorizontal: rw(2), borderRadius: 10, flexDirection: "row", backgroundColor: '#EEEBEB', marginTop: rh(2), justifyContent: "flex-start", }}>
                        <Image source={{ uri: item.product_image }} style={{ height: 110, width: 100, borderRadius: 10 }} resizeMode={"center"} />

                        {/* <AutoHeightImage
                            resizeMode="stretch"
                            width={105}
                            style={{ borderRadius: 5 }}
                            source={{ uri: item.product_image }}
                        /> */}
                        <View style={{ marginLeft: rw(4) }}>
                            <Text style={{ fontSize: FontSize.font21, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium', marginTop: rh(3) }}>{item.name}</Text>
                            <View style={{ marginTop: rh(1) }}>
                                <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light', }}>{item.datediff}</Text>
                                <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light' }}>{item.expiry_date}</Text>
                            </View>
                        </View>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ height: rh(8), borderBottomWidth: 2, borderColor: Colors.bk, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: rw(3) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.font25, color: Colors.yellow, fontWeight: '500', fontFamily: 'Inter-Regular', left: rw(8), }}>{route?.params?.name}</Text>
                </View>
            </View>

            {loader ?
                <Loaders />
                :

                <FlatList data={record}
                    keyExtractor={item => item.id}
                    renderItem={receiptsfunction}
                    contentContainerStyle={{ bottom: 10 }}

                />


            }
        </SafeAreaView>

    )
}

export default Categoriesdetails