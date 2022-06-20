import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './addproduct.Styles'

const Addproductstepone = ({ navigation }) => {
    const [prductname, setprductname] = useState('')


    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ flex: 1, marginHorizontal: rh(3) }}>
                <View style={{ height: rh(4), marginTop: rh(2) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: rh(2) }}>
                    <Text style={Styles.textstep}>Step 1 of 4</Text>
                    <Text style={Styles.secondhadding}>Product Name</Text>
                </View>
                <View style={{ height: rh(8), borderBottomWidth: 1, borderColor: Colors.yellow, marginTop: rh(3) }}>
                    <Text style={{ fontFamily: 'Inter-Light', fontSize: FontSize.font13, color: Colors.gry }}>Product Name</Text>
                    <TextInput style={{ padding: 0, paddingTop: rh(1), fontSize: FontSize.font18 }} onChangeText={e => setprductname(e)} />
                </View>
                <View style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('addproductsteptwo')}>
                        <Text style={Styles.bottombtntext}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Addproductstepone