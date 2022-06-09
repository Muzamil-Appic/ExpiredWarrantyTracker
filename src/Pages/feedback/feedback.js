import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, TextInput, Modal, StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import Styles from './feedback.Styles';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'

const Feedback = ({ navigation }) => {
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView contentContainerStyle={{ flexGrow: 1 }} >
                <View style={{ flexDirection: "row", marginTop: rw(3) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ justifyContent: 'center', marginHorizontal: rw(5) }}>
                        <YellowBackSvg width={'20px'} height={'20px'} />
                    </TouchableOpacity>
                    <View style={{ marginLeft: rw(2) }}>
                        <Text style={{ fontSize: FontSize.font24, color: Colors.black, fontFamily: 'Inter-Medium', fontWeight: '700', }}>Feedback</Text>
                    </View>
                </View>
                <View style={{ borderBottomColor: Colors.borderbottomcolor, borderWidth: 0.5, marginTop: rh(2) }}>
                </View>
                <View style={{ flex: 1, marginTop: rh(1), marginHorizontal: rw(6) }}>
                    <View style={Styles.txtboxview}>
                        <TextInput placeholder='Name' numberOfLines={1} placeholderTextColor={Colors.gry} style={Styles.txtboxinpt} />
                    </View>
                    <View style={Styles.txtboxview}>
                        <TextInput placeholder='Email' numberOfLines={1} placeholderTextColor={Colors.gry} style={Styles.txtboxinpt} />
                    </View>
                    <View style={{ height: rh(25), borderWidth: 1, borderRadius: 7, borderColor: Colors.borderbottomcolor, marginTop: rh(4) }}>
                        <TextInput numberOfLines={10}
                            multiline={true} placeholder='Type your message here...' placeholderTextColor={Colors.borderbottomcolor} style={{ padding: 10, fontSize: FontSize.font16, color: Colors.black, textAlignVertical: 'top' }} />
                    </View>

                </View>
                <View style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={{ backgroundColor: Colors.yellow, margin: rh(2), height: rh(7), justifyContent: 'center', width: rw(25), borderRadius: 7 }}>
                        <Text style={{ textAlign: 'center', color: Colors.white, fontSize: FontSize.font16 }}>Send</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>


        </SafeAreaView>
    )
}

export default Feedback