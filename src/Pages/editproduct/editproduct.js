import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './addproduct.Styles'
import Loaders from '../../Components/Loaders';
import Toast from 'react-native-simple-toast';


const EditProductName = ({ navigation, route }) => {
    const [prductname, setprductname] = useState(route?.params?.name)
    const [buttonloader, setbuttonloader] = useState(false)
    const siz = Dimensions.get('window').height




    console.log("EditProductNAme", route?.params);
    console.log("EditProductNAme", route?.params?.ID);

    const updatedata = async () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        setbuttonloader(true),
            fetch(`https://waqarulhaq.com/expired-warranty-tracker/edit-product-name.php?ID=${route?.params?.ID}&name=${prductname}`, requestOptions)
                .then(response => response.json()).then(result => {
                    console.log("tttt", result.issuccess);
                    if (result.issuccess == true) {

                        console.log('====================================');
                        console.log(result);
                        console.log('====================================');
                        Toast.show("Name Updated Successfull")
                        setbuttonloader(false)
                        navigation.goBack()
                        // navigation.navigate('BottomTabNavigations')
                        // setbuttonloader(false),
                        // global.apiData = []
                    }
                    else {
                        alert("Name Not Updated"),
                            setbuttonloader(false)
                    }
                })
                .catch(error => console.log('error', error));


    }


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
                <Text style={Styles.addproductparttext}>Product Name</Text>
                <View style={Styles.addproductpartview}>
                    <TextInput value={prductname} style={Styles.addproductparttextinput} onChangeText={e => setprductname(e)} />
                </View>
                <View style={Styles.nextanssavedbuttonview}>
                    {buttonloader ?
                        <View style={{ height: rh(10) }}>
                            <Loaders />
                        </View>
                        :
                        <TouchableOpacity style={Styles.bottombtn} onPress={() => updatedata()}>
                            <Text style={Styles.bottombtntext}>Save</Text>
                        </TouchableOpacity>
                    }
                </View>
            </View>
        </SafeAreaView>
    )
}

export default EditProductName