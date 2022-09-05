import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, Image, View, Text, TouchableOpacity, TextInput, Alert } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import BlackBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import AntDesign from 'react-native-vector-icons/AntDesign'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import ProductNameSvg from '../../Assets/Svg/ProductNameSvg.svg'
import CategorySvg from '../../Assets/Svg/CategorySvg.svg'
import DeleteSvg from '../../Assets/Svg/DeleteSvg.svg'
import ReceiptSvg from '../../Assets/Svg/ReceiptSvg.svg'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import Styles from './edit.Styles';
import Toast from 'react-native-simple-toast';
import WarrantyDetailsSvg from '../../Assets/Svg/WarrantyDetailsSvg.svg'
import { useIsFocused } from '@react-navigation/native';
import Loaders from '../../Components/Loaders';
const Edit = ({ navigation, route }) => {
    const isfocudes = useIsFocused()
    const [loader, setloader] = useState(true)

    const [data, setdata] = useState([])


    useEffect(() => {
        getrecordonid()
    }, [isfocudes])


    const deleteitem = () => {
        var requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };
        fetch(`https://waqarulhaq.com/expired-warranty-tracker/delete-product.php?id=${route?.params.ID}`, requestOptions)
            .then(response => response.text())
            .then(result => {
                if (result.isssuccess != false) {
                    Toast.show("Receipt Deleted")
                    navigation.navigate('BottomTabNavigations')
                } else {
                    alert("Record Not Deleted Something Wrong")
                }
            }
            )

            .catch(error => console.log('error', error));
    }

    const getrecordonid = async () => {
        setloader(false)
        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        setloader(true)
        await fetch(`https://waqarulhaq.com/expired-warranty-tracker/id-based-product.php?ID=${route?.params.ID}`, requestOptions)
            .then(response => response.json())
            .then(result => {
                // console.log("--------------->", result);
                setdata(result.data),
                    setloader(false)
            })
            .catch((error) => {
                alert(error.code)
                console.log(error);
                setloader(false)
            })
    }


    
    return (
        <SafeAreaView style={Styles.container}>
            {loader ?

                <Loaders />
                :
                <View>
                    <View style={{ height: rh(8), borderBottomWidth: 2, borderColor: Colors.bk, justifyContent: 'center' }}>
                        <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', marginLeft: rw(3) }}>
                            <TouchableOpacity onPress={() => navigation.navigate('BottomTabNavigations')}>
                                <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                            </TouchableOpacity>
                            <Text style={{ fontSize: FontSize.font25, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Regular', left: rw(8) }}>Edit</Text>
                        </View>
                    </View>
                    <Text style={{ textAlign: "center", fontSize: FontSize.font19, color: Colors.gry, marginTop: rh(1), fontWeight: '500', fontFamily: 'Inter-SemiBold' }}>What would you like to chang or add?</Text>
                    <View style={{ flex: 1, marginTop: rh(3) }}>
                        <View style={Styles.editouterview}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate('EditProductName', data[0])}>
                                <ProductNameSvg width={'24px'} height={'24px'} />
                                <Text style={Styles.btntext}>Product Name </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.editouterview}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate('EditProductCategory', data[0])}>
                                <CategorySvg width={'24px'} height={'24px'} />
                                <Text style={Styles.btntext}>Category </Text>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.editouterview}>

                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate('EditReceiptImage', data[0])}>
                                <ReceiptSvg width={'24px'} height={'24px'} />
                                <Text style={Styles.btntext}>Receipts </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={Styles.editouterview}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate('EditProductWarrantyDetailsAndNotification', data[0])}>
                                <WarrantyDetailsSvg width={'24px'} height={'24px'} />
                                <Text style={Styles.btntext}>Warranty Details & Notification </Text>
                            </TouchableOpacity>
                        </View>

                        <View style={[Styles.editouterview, { height: rh(12) }]}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }} onPress={() => navigation.navigate('EditProductAddtionalStep', data[0])}>
                                <View style={{ marginBottom: rw(3) }}>
                                    <ReceiptSvg width={'24px'} height={'24px'} />
                                </View>
                                <View style={{ left: rw(3), }}>
                                    <Text style={[Styles.btntext, { left: rw(0) }]}>Others </Text>
                                    <Text style={{ fontSize: FontSize.font12, color: Colors.black }}>Product Info, Product Images, Merchant Detail
                                    </Text>
                                    <Text style={{ fontSize: FontSize.font12, color: Colors.black }}>and note</Text>
                                </View>
                            </TouchableOpacity>
                        </View>
                        <View style={Styles.editouterview}>
                            <TouchableOpacity style={{ flexDirection: "row", alignItems: "center" }}

                                onPress={() => Alert.alert(
                                    'Alert',
                                    'Are You Sure You Want To Delete This Receipt',

                                    [
                                        { text: 'Cancel', onPress: () => console.warn("Cancel") },
                                        { text: 'OK', onPress: () => deleteitem() },

                                    ],
                                    { cancelable: false }
                                )}
                            >
                                <DeleteSvg width={'24px'} height={'24px'} />
                                <Text style={[Styles.btntext, { color: Colors.red }]}>Delete Item </Text>
                            </TouchableOpacity>
                        </View>
                    </View >
                </View>
            }
        </SafeAreaView >
    )
}

export default Edit