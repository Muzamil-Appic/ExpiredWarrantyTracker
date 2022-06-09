import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Colors from '../../Global/Colors'
import Styles from './defaultcurrency.Styles'

import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import FontSize from '../../Global/Fonts'

const Defaultcurrency = ({ navigation }) => {


    const CurrencyFunction = ({ item }) => {
        console.log(item);
        return (
            <View style={{ height: rh(8), flexDirection: 'row', borderBottomWidth: 1, borderColor: Colors.borderbottomcolor, justifyContent: "space-between", paddingTop: rh(4) }}>
                <TouchableOpacity>
                    <Text style={{ color: Colors.black, fontSize: FontSize.fon15 }}>{item.currency}</Text>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={{ height: rw(5), width: rw(5), backgroundColor: '#CAC3C3', borderRadius: 100 }}>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }

    const currencylist = [
        {
            id: 0,
            currency: 'Pakistani rupee - pakistan'
        },
        {
            id: 1,
            currency: 'Afghan afghani - Afghanistan'
        },
        {
            id: 2,
            currency: 'Albanian lek - Albania'
        },
        {
            id: 3,
            currency: 'IND - Indian rupee'
        }
    ]

    return (
        <SafeAreaView style={Styles.container}  >
            <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
                <View style={{ flexDirection: "row", marginTop: rw(3) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', marginHorizontal: rw(5), }}>
                        <YellowBackSvg width={'20px'} height={'20px'} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: rw(2) }}>
                        <Text style={{ fontSize: FontSize.font24, color: Colors.black, fontFamily: 'Inter-Medium', fontWeight: '700', }}>Default Currency</Text>
                    </View>
                </View>

                <View style={{ height: rh(6), marginHorizontal: rw(4), backgroundColor: '#D6D2D2', borderRadius: 7, marginTop: rh(3), justifyContent: 'center' }}>
                    <View style={{ justifyContent: "center", marginLeft: rw(5) }}>
                        <TextInput placeholder='Search' placeholderTextColor={'#000000AD'} style={{ fontSize: FontSize.font16, color: Colors.black, padding: 0 }} />
                    </View>
                </View>

                <View style={{ borderBottomColor: Colors.borderbottomcolor, borderWidth: 0.5, marginTop: rh(3) }}>
                </View>
                <View style={{ flex: 1, marginHorizontal: rw(6) }}>
                    <FlatList data={currencylist}
                        keyExtractor={item => item.id}
                        renderItem={CurrencyFunction}
                    />
                </View>
            </ScrollView>
        </SafeAreaView>

    )
}

export default Defaultcurrency