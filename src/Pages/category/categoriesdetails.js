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

const Categoriesdetails = ({ navigation, route }) => {
    console.log('====================================');
    console.log(route?.params);
    console.log('====================================');



    const imageheight = Dimensions.get('window').height
    const imagwidth = Dimensions.get('window').width
    const receipts = [
        {
            receiptid: 0,
            // receiptsimage: '../../Assets/photos/PhonePhoto.jpeg',
            recipedexpirydate: "364 days left",
            receiptsdatecompleted: 'Expires on 6 Feb 2023',
            receipttitle: 'Mobile',
        },
        {
            receiptid: '1',
            receiptsimage: 'img',
            recipedexpirydate: "364 days left",
            receiptsdatecompleted: 'Expires on 6 Feb 2023',
            receipttitle: 'Washing Machine',
        }
    ]



    const receiptsfunction = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => navigation.navigate('Receiptsdetails')}>
                    <View style={{ height: rh(17), marginHorizontal: rw(2), borderRadius: 10, flexDirection: "row", backgroundColor: '#EEEBEB', marginTop: rh(2), justifyContent: "flex-start", }}>
                        <Image source={require('../../Assets/photos/PhonePhoto.jpeg')} resizeMode={'contain'} resizeMethod={'resize'} style={{ height: imageheight / 5.9, width: imagwidth / 5, borderLeftWidth: 1, borderRadius: 10 }} />
                        <View style={{ marginLeft: rw(4) }}>
                            <Text style={{ fontSize: FontSize.font21, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium', marginTop: rh(3) }}>{item.receipttitle}</Text>
                            <View style={{ marginTop: rh(1) }}>
                                <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light', }}>{item.recipedexpirydate}</Text>
                                <Text style={{ fontSize: FontSize.font17, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Light' }}>{item.receiptsdatecompleted}</Text>
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
                    <Text style={{ fontSize: FontSize.font25, color: Colors.yellow, fontWeight: '500', fontFamily: 'Inter-Regular', left: rw(8), }}>{route?.params}</Text>
                </View>
            </View>

            <ScrollView contentContainerStyle={{ flexGrow: 1, }}>
                <FlatList data={receipts}
                    keyExtractor={item => item.id}
                    renderItem={receiptsfunction}

                />
            </ScrollView>
        </SafeAreaView>

    )
}

export default Categoriesdetails