import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './addproduct.Styles'

const EditproductName = ({ navigation }) => {
    const [prductname, setprductname] = useState('')
    const siz = Dimensions.get('window').height

    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ flex: 1, marginHorizontal: rh(3) }}>
                <View style={{ height: rh(4), marginTop: rh(2) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: rh(1) }}>
                    <Text style={Styles.secondhadding}>Product Name</Text>
                </View>
                <View style={Styles.addproductpartview}>
                    <Text style={Styles.addproductparttext}>Product Name</Text>
                    <TextInput style={Styles.addproductparttextinput} onChangeText={e => setprductname(e)} />
                </View>
                <View style={Styles.nextanssavedbuttonview}>
                    <TouchableOpacity style={Styles.bottombtn} onPress={() => { console.log("DOne"); }}>
                        <Text style={Styles.bottombtntext}>Save</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default EditproductName