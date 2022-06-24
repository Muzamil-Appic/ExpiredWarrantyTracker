import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, Image, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './addproduct.Styles';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import CurrencySSvg from '../../Assets/Svg/CurrencySSvg.svg'
import CameraSvg from '../../Assets/Svg/CameraSvg.svg'
import Gallery from '../../Assets/Svg/Gallery.svg'
const Addproductstepfiveoptional = ({ navigation }) => {


    const [productinfoenabled, setproductinfoenabled] = useState(false)
    const [produtinfotoggled, setprodutinfotoggled] = useState(false)
    const [modelno, setmodelno] = useState('')
    const [serialno, setserialno] = useState('')
    const [currency, setcurrency] = useState('PKR')
    const [productprice, setproductprice] = useState('')
    const [productimagestoggles, setproductimagestoggles] = useState(false)
    const [productimagesenabled, setproductimagesenabled] = useState(false)
    const [merchanttoggle, setmerchanttoggle] = useState(false)
    const [merchantenabled, setmerchantenabled] = useState(false)
    const [merchantname, setmerchantname] = useState('')
    const [merchantlocation, setmerchantlocation] = useState('')
    const [merchantwebsite, setmerchantwebsite] = useState('')
    const [merchantcontactno, setmerchantcontactno] = useState('')
    const [notestoggle, setnotestoggle] = useState(false)
    const [notesenabled, setnotesenabled] = useState(false)


    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ marginHorizontal: rw(5) }}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{ height: rh(4), marginTop: rh(2) }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: rh(2) }}>
                        <Text style={Styles.textstep}>Optional Step</Text>
                        <Text style={Styles.secondhadding}>Add more information?</Text>
                    </View>

                    <View style={{ height: rh(5), width: rw(90), flexDirection: "row", alignContent: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: rh(2) }}>
                        <View>
                            <Text style={Styles.pagefiveheadings}>Product Info</Text>
                        </View>
                        {productinfoenabled ?


                            <View style={Styles.toggleouterviewmain}>
                                <TouchableOpacity onPress={() => { { setprodutinfotoggled(false), setproductinfoenabled(false) } }} style={{ justifyContent: 'center' }}>
                                    <View style={Styles.toggleonstyle}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={Styles.toggleouterviewmain}>
                                <TouchableOpacity onPress={() => { setprodutinfotoggled(true), setproductinfoenabled(true) }} style={{ justifyContent: 'center' }}>
                                    <View style={Styles.toggleoffstyle}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }



                    </View>
                    {productinfoenabled ?
                        <View style={{ flex: 1, }}>
                            <Text style={[Styles.addproductparttext, { top: 2 }]}>Model Number</Text>
                            <View style={Styles.productproductmerchantnotes}>
                                <View style={{ width: rw(80) }}>
                                    <TextInput style={Styles.addproductparttextinput} onChangeText={e => setmodelno(e)} />
                                </View>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name='line-scan' size={30} color={Colors.yellow} />
                                </TouchableOpacity>
                            </View>
                            <Text style={[Styles.addproductparttext, { marginTop: rh(0.5) }]}>Serial Number</Text>
                            <View style={Styles.productproductmerchantnotes}>
                                <View style={{ width: rw(80) }}>
                                    <TextInput style={Styles.addproductparttextinput} onChangeText={e => setserialno(e)} />
                                </View>
                                <TouchableOpacity>
                                    <MaterialCommunityIcons name='line-scan' size={30} color={Colors.yellow} />
                                </TouchableOpacity>
                            </View>
                            <View>
                                <View style={{ flexDirection: 'row', width: rw(90), justifyContent: 'space-between', marginTop: rh(0.5) }}>
                                    <Text style={[Styles.addproductparttext,]}>Price </Text>
                                    <Text style={Styles.addproductparttext}>Payment Method</Text>
                                </View>
                                <View style={{ flexDirection: 'row', width: rw(90), justifyContent: 'space-between', height: rh(5) }}>
                                    <TouchableOpacity style={{ width: rw(15), borderBottomWidth: 2, borderBottomColor: Colors.bk, height: rh(5), justifyContent: 'center', alignContent: 'center', flexDirection: "row", alignItems: 'center' }}>
                                        <Text style={{ color: Colors.black, textAlign: 'center' }}>{currency}</Text>
                                        <MaterialIcons name='arrow-drop-down' size={30} />
                                    </TouchableOpacity>
                                    <View style={{ width: rw(45), borderBottomWidth: 2, borderBottomColor: Colors.bk, height: rh(5), alignItems: 'center' }}>
                                        <TextInput style={{ fontSize: FontSize.font17, color: Colors.black, padding: 0 }} placeholder={"Price"} onChangeText={e => setproductprice(e)} />
                                    </View>
                                    <TouchableOpacity style={{ width: rw(18), borderRadius: 10, justifyContent: 'center', alignContent: 'center' }}>
                                        <MaterialCommunityIcons name='currency-usd' size={30} color={Colors.black} style={{ alignSelf: 'center' }} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        :
                        null
                    }

                    <View style={{ height: rh(5), width: rw(90), flexDirection: "row", alignContent: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: rh(1) }}>
                        <View>
                            <Text style={Styles.pagefiveheadings}>Product Images</Text>
                        </View>
                        {productimagestoggles ?


                            <View style={Styles.toggleouterviewmain}>
                                <TouchableOpacity onPress={() => { { setproductimagestoggles(false), setproductimagesenabled(false) } }} style={{ justifyContent: 'center' }}>
                                    <View style={Styles.toggleonstyle}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={Styles.toggleouterviewmain}>
                                <TouchableOpacity onPress={() => { setproductimagestoggles(true), setproductimagesenabled(true) }} style={{ justifyContent: 'center' }}>
                                    <View style={Styles.toggleoffstyle}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }

                    </View>
                    {productimagesenabled ?
                        <View style={{ flex: 1 }}>
                            <View style={{ flexDirection: "row", height: rh(10), marginTop: rh(3), justifyContent: 'center' }}>
                                <TouchableOpacity >
                                    <View style={{ borderRightWidth: 1, borderColor: Colors.gry, height: rh(10), width: rw(50), flexDirection: "row", alignItems: 'center', }}>
                                        <View style={{ marginLeft: rw(6) }}>
                                            <CameraSvg width={'55px'} height={'55px'} />
                                        </View>
                                        <Text style={{ color: Colors.gry, fontWeight: '500', fontSize: FontSize.font18, fontFamily: 'Inter-Medium', textAlign: 'center', marginLeft: rw(2) }}>Camera</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity >
                                    <View style={{ borderRightWidth: 1, borderColor: Colors.gry, height: rh(10), width: rw(50), flexDirection: "row", alignItems: 'center', }}>
                                        <View style={{ marginLeft: rw(5) }}>
                                            <Gallery width={'57px'} height={'55px'} />
                                        </View>
                                        <Text style={{ color: Colors.gry, fontWeight: '500', fontSize: FontSize.font18, fontFamily: 'Inter-Medium', textAlign: 'center', marginLeft: rw(2) }}>Import</Text>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            <View style={{ marginTop: rh(2), }}>
                                <TouchableOpacity style={{ position: 'absolute', right: rw(5), bottom: rw(80), top: rw(70), left: rw(80) }}>
                                    {/* <View style={{ backgroundColor: Colors.red, height: rw(10), width: rw(10), borderRadius: 100, bottom: rw(10), justifyContent: "center", alignItems: 'center' }}>
                            <View style={{ backgroundColor: Colors.white, width: rw(6), elevation: 5, height: rw(1) }}>
                            </View>
                        </View> */}
                                </TouchableOpacity>
                                <Image source={require('../../Assets/photos/Oicone.png')} style={{ width: rw(90), resizeMode: 'stretch' }} />
                            </View>

                        </View>
                        :
                        null

                    }
                    <View style={{ height: rh(5), width: rw(90), flexDirection: "row", alignContent: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: rh(2) }}>
                        <View>
                            <Text style={Styles.pagefiveheadings}>Merchant</Text>
                        </View>
                        {merchantenabled ?

                            <View style={Styles.toggleouterviewmain}>
                                <TouchableOpacity onPress={() => { { setmerchanttoggle(false), setmerchantenabled(false) } }} style={{ justifyContent: 'center' }}>
                                    <View style={Styles.toggleonstyle}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={Styles.toggleouterviewmain}>
                                <TouchableOpacity onPress={() => { setmerchanttoggle(true), setmerchantenabled(true) }} style={{ justifyContent: 'center' }}>
                                    <View style={Styles.toggleoffstyle}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }

                    </View>

                    {merchantenabled ?

                        <View style={{ flex: 1, justifyContent: 'space-around' }}>
                            <View style={Styles.merchantinputouterview}>
                                <Text style={Styles.addproductparttext}> Merchant</Text>
                                <TextInput style={Styles.addproductparttextinput} onChangeText={e => setmerchantname(e)} />
                            </View>
                            <View style={[Styles.merchantinputouterview, { marginTop: rh(0.5) }]}>
                                <Text style={[Styles.addproductparttext,]}> Location</Text>
                                <TextInput style={Styles.addproductparttextinput} onChangeText={e => setmerchantlocation(e)} />
                            </View>
                            <View style={[Styles.merchantinputouterview, { marginTop: rh(0.5) }]}>
                                <Text style={[Styles.addproductparttext,]}> Website</Text>
                                <TextInput style={Styles.addproductparttextinput} onChangeText={e => setmerchantwebsite(e)} />
                            </View>
                            <View style={[Styles.merchantinputouterview, { marginTop: rh(0.5) }]}>
                                <Text style={[Styles.addproductparttext,]}> Contact Number</Text>
                                <TextInput style={Styles.addproductparttextinput} onChangeText={e => setmerchantwebsite(e)} />
                            </View>
                        </View>
                        : null
                    }

                    <View style={{ height: rh(5), width: rw(90), flexDirection: "row", alignContent: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: rh(2) }}>
                        <View>
                            <Text style={Styles.pagefiveheadings}>Notes</Text>
                        </View>
                        {notesenabled ?

                            <View style={Styles.toggleouterviewmain}>
                                <TouchableOpacity onPress={() => { { setnotestoggle(false), setnotesenabled(false) } }} style={{ justifyContent: 'center' }}>
                                    <View style={Styles.toggleonstyle}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                            :
                            <View style={Styles.toggleouterviewmain}>
                                <TouchableOpacity onPress={() => { setnotestoggle(true), setnotesenabled(true) }} style={{ justifyContent: 'center' }}>
                                    <View style={Styles.toggleoffstyle}>
                                    </View>
                                </TouchableOpacity>
                            </View>
                        }

                    </View>
                    {notesenabled ?
                        <View style={{ flex: 1, justifyContent: 'center', alignSelf: 'center' }}>
                            <View style={{ width: rw(88), height: rh(25), borderColor: Colors.bk, borderWidth: 1, borderRadius: 10 }}>
                                <TextInput />
                            </View>
                        </View>
                        : null
                    }

                    <View style={{ height: rh(15), width: rw(90), }}>
                    </View>
                </ScrollView>

            </View>

            <View style={[Styles.nextanssavedbuttonview, { marginHorizontal: rw(3) }]}>
                <TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('Timeline')}>
                    <Text style={Styles.bottombtntext}>Next</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Addproductstepfiveoptional



