import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './addproduct.Styles'

const Addproductstepone = ({ navigation }) => {
    const [prductname, setprductname] = useState('')
    const siz = Dimensions.get('window').height

    const nextscreendata = () => {
        if (prductname === '') {
            alert("Please Enter Product Name Please")
            return;
        }
        {
            global.apiData = { name: prductname },
                navigation.navigate('addproductsteptwo',)
            setprductname('')
        }

    }



    const backfunction = () => {
        console.log('====================================');
        console.log("Ok");
        console.log('====================================');
        // navigation.navigate('BottomTabNavigations')
        navigation.jumpTo('Timeline')
        // Alert.alert(
        //     'Alert',
        //     'Are You Sure You Want TO Exit',
        //     [
        //         { text: 'Cancel', onPress: () => console.warn("You Backed") },
        //         { text: 'OK', onPress: () => { navigation.navigate('BottomTabNavigations'), global.apiData = [] } },
        //     ],
        //     { cancelable: false }
        // )
    }



    const empty = () => {
        setprductname('')
    }






    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ flex: 1, marginHorizontal: rh(3) }}>
                <View style={{ height: rh(4), marginTop: rh(2) }}>
                    <TouchableOpacity onPress={() => navigation.jumpTo('Timeline')} style={{ width: rw(80) }}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: rh(2) }}>
                    <Text style={Styles.textstep}>Step 1 of 4</Text>
                    <Text style={Styles.secondhadding}>Product Name</Text>
                </View>
                <Text style={Styles.addproductparttext}>Product Name</Text>
                <View style={Styles.addproductpartview}>
                    <TextInput value={prductname} style={Styles.addproductparttextinput} onChangeText={e => setprductname(e)} />
                </View>
                <View style={Styles.nextanssavedbuttonview}>
                    <TouchableOpacity style={Styles.bottombtn} onPress={() => nextscreendata()}>
                        <Text style={Styles.bottombtntext}>Next</Text>
                    </TouchableOpacity>
                </View>
            </View>

        </SafeAreaView>
    )
}

export default Addproductstepone