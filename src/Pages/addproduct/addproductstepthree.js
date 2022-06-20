import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './addproduct.Styles'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'

const AddProductStepthree = ({ navigation }) => {
    const [prductname, setprductname] = useState('')
    const [durationenabled, setdurationenabled] = useState(true)
    const [durationsyears, setdurationsyears] = useState(0)
    const [monthsdurations, setmonthsdurations] = useState(0)
    const [multipletoggled, setmultipletoggled] = useState(false)
    const [additionalpart, setadditionalpart] = useState(false)
    const [allowexpirynotificationstoggled, setallowexpirynotificationstoggled] = useState(false)
    const [allowexpirynotifications, setallowexpirynotifications] = useState(false)
    const siz = Dimensions.get('window').height



    const addyears = () => {
        setdurationsyears(parseInt(durationsyears + 1))
    }
    const lessyears = () => {
        if (durationsyears === 0) {
            setdurationsyears(0)
        } else {
            setdurationsyears(parseInt(durationsyears - 1))
        }
    }

    const addmonth = () => {
        setmonthsdurations(parseInt(monthsdurations + 1))
    }

    const lessmonth = () => {
        if (monthsdurations === 0) {
            setmonthsdurations(0)
        } else {
            setmonthsdurations(parseInt(monthsdurations - 1))
        }
    }
    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView contentContainerStyle={{ marginHorizontal: rh(3), flexGrow: 1 }}>
                <View style={{ height: rh(4), marginTop: rh(2) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: rh(2) }}>
                    <Text style={Styles.textstep}>Step 3 of 4</Text>
                    <Text style={Styles.secondhadding}>Warranty Details</Text>
                </View>

                {/* <Text style={{ fontWeight: '400', fontSize: FontSize.fon15, color: Colors.gry, fontFamily: 'Inter-Regular' }}>Data of Purchase</Text> */}


                <View style={{ flexDirection: "row", justifyContent: "space-between", height: rh(10), marginTop: rh(2) }}>
                    <View style={{ height: rh(10), borderBottomWidth: 1, borderColor: Colors.gry, width: rw(33) }}>
                        <Text style={Styles.headingtext}>Data of Purchase</Text>
                        <TouchableOpacity>
                            <Text style={Styles.txtdate}>05-04-199</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: rh(10), borderBottomWidth: 1, borderColor: Colors.gry, width: rw(33) }}>
                        <Text style={Styles.headingtext}>Data of Expiry</Text>
                        <Text style={Styles.txtdate}>05-04-199</Text>
                    </View>
                </View>
                <View style={{ marginTop: rh(3) }}>
                    <Text style={Styles.headingtext}>Warranty Period</Text>
                </View>

                <View style={{ marginTop: rh(2) }}>
                    {durationenabled ?
                        <View style={{ height: rh(15), width: rw(100) }}>
                            <View style={{ justifyContent: 'center', alignContent: 'center', width: rw(100) }}>
                                <View style={{ flexDirection: "row", height: rh(4), justifyContent: 'flex-start', alignContent: "center", alignItems: 'center' }}>
                                    <TouchableOpacity onPress={() => setdurationenabled(false)}>
                                        <FontAwesome name='circle' size={25} color={Colors.yellow} />
                                    </TouchableOpacity>
                                    <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
                                </View>

                                <View style={{ height: rh(13), width: rw(100), justifyContent: 'space-between', marginTop: rh(2) }}>
                                    <View style={{ flexDirection: "row", height: rh(5), width: rw(100), justifyContent: "space-between", }}>
                                        <View style={{ width: rw(20), marginLeft: rw(7) }}>
                                            <Text style={Styles.headingtext}>{durationsyears} Years</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", height: rh(7), width: rw(25), justifyContent: 'space-between', right: rw(12) }}>
                                            <TouchableOpacity onPress={() => lessyears()}>
                                                <AntDesign name='minuscircleo' size={20} color={Colors.black} />
                                            </TouchableOpacity>
                                            <Text>{durationsyears}</Text>
                                            <TouchableOpacity onPress={() => addyears()}>
                                                <AntDesign name='pluscircleo' size={20} color={Colors.yellow} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>
                                    <View style={{ flexDirection: "row", height: rh(7), width: rw(100), justifyContent: "space-between", }}>
                                        <View style={{ width: rw(20), marginLeft: rw(7) }}>
                                            <Text style={Styles.headingtext}>{monthsdurations} Months</Text>
                                        </View>
                                        <View style={{ flexDirection: "row", height: rh(7), width: rw(25), justifyContent: 'space-between', right: rw(12) }}>
                                            <TouchableOpacity onPress={() => lessmonth()}>
                                                <AntDesign name='minuscircleo' size={20} color={Colors.black} />
                                            </TouchableOpacity>
                                            <Text>{monthsdurations}</Text>
                                            <TouchableOpacity onPress={() => addmonth()}>
                                                <AntDesign name='pluscircleo' size={20} color={Colors.yellow} />
                                            </TouchableOpacity>
                                        </View>
                                    </View>

                                </View>
                            </View>

                            <View style={{ flexDirection: "row", alignContent: "center", alignItems: 'center', height: rh(5) }}>
                                <TouchableOpacity onPress={() => setdurationenabled(false)}>
                                    <Entypo name='circle' size={25} color={Colors.black} />
                                </TouchableOpacity>
                                <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Lifetime Warranty</Text>
                            </View>
                            <View style={{ backgroundColor: Colors.borderbottomcolor, width: rw(100), height: rh(0.5), marginTop: rh(2) }}>
                            </View>


                        </View>
                        :
                        <View style={{ height: rh(30), }}>
                            <View style={{ flexDirection: "row", alignContent: "center", alignItems: 'center', height: rh(5) }}>
                                <TouchableOpacity onPress={() => setdurationenabled(true
                                )}>
                                    <Entypo name='circle' size={25} color={Colors.black} />
                                </TouchableOpacity>
                                <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
                            </View>
                            <View style={{ flexDirection: "row", alignContent: "center", alignItems: 'center', height: rh(5) }}>
                                <TouchableOpacity>
                                    <FontAwesome name='circle' size={25} color={Colors.yellow} />
                                </TouchableOpacity>
                                <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Life Time Warranty</Text>
                            </View>
                            <View style={{ backgroundColor: Colors.borderbottomcolor, width: rw(100), height: rh(0.3), marginTop: rh(2) }}>
                            </View>
                            <View style={{ height: rh(5), width: rw(100), marginTop: rh(2), justifyContent: 'space-between', flexDirection: "row", alignContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: rw(50) }}>
                                    <Text style={[Styles.secondhadding, { fontSize: FontSize.font20 }]}>Multipart Warranty</Text>
                                </View>

                                <View style={{ width: rw(10), right: rw(12.5) }}>
                                    {multipletoggled ?

                                        <View style={{ height: rh(3), width: rw(12), backgroundColor: '#C4C4C4', borderRadius: 13, }}>
                                            <TouchableOpacity onPress={() => { setmultipletoggled(false), setadditionalpart(true) }} style={{ justifyContent: 'center' }}>
                                                <View style={{ backgroundColor: '#717171', height: rh(4), width: rw(7), borderRadius: 100, bottom: rh(0.5) }}>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        :

                                        <View style={{ height: rh(3), width: rw(12), backgroundColor: '#C4C4C4', borderRadius: 13, }}>
                                            <TouchableOpacity onPress={() => { setmultipletoggled(true), setadditionalpart(false) }}>
                                                <View style={{ backgroundColor: Colors.yellow, height: rh(4), width: rw(7), borderRadius: 100, bottom: rh(0.7), alignSelf: 'flex-end' }}>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    }


                                </View>

                            </View>
                            {additionalpart ?
                                <View style={{ height: rh(5), backgroundColor: '#DCDBDB', width: rw(89), borderRadius: 5, justifyContent: 'center' }}>
                                    <TouchableOpacity style={{ alignContent: 'center', flexDirection: 'row' }}>
                                        <View style={{ flexDirection: "row", width: rw(50), alignItems: "center", left: rw(5) }}>
                                            <AntDesign name='pluscircle' size={siz * 0.02} color={Colors.yellow} />
                                            <Text style={{ fontSize: siz * 0.02, color: Colors.black, left: rw(4) }}>Add additional part</Text>
                                        </View>
                                    </TouchableOpacity>
                                </View>
                                :
                                null
                            }
                            <View style={{ height: rh(5), width: rw(100), marginTop: rh(2), justifyContent: 'space-between', flexDirection: "row", alignContent: 'center', alignItems: 'center' }}>
                                <View style={{ width: rw(70) }}>
                                    <Text style={[Styles.secondhadding, { fontSize: FontSize.font20 }]}>Allow Expiry Notifications?</Text>
                                </View>

                                <View style={{ width: rw(10), right: rw(12.5) }}>
                                    {allowexpirynotificationstoggled ?

                                        <View style={{ height: rh(3), width: rw(12), backgroundColor: '#C4C4C4', borderRadius: 13, }}>
                                            <TouchableOpacity onPress={() => { setallowexpirynotificationstoggled(false), setallowexpirynotifications(true) }} style={{ justifyContent: 'center' }}>
                                                <View style={{ backgroundColor: '#717171', height: rh(4), width: rw(7), borderRadius: 100, bottom: rh(0.5) }}>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        :

                                        <View style={{ height: rh(3), width: rw(12), backgroundColor: '#C4C4C4', borderRadius: 13, }}>
                                            <TouchableOpacity onPress={() => { setallowexpirynotificationstoggled(true), setallowexpirynotifications(false) }}>
                                                <View style={{ backgroundColor: Colors.yellow, height: rh(4), width: rw(7), borderRadius: 100, bottom: rh(0.7), alignSelf: 'flex-end' }}>
                                                </View>
                                            </TouchableOpacity>
                                        </View>

                                    }


                                </View>

                            </View>
                            {allowexpirynotifications ?
                                <View style={{ height: rh(20), width: rw(90) }}>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: rw(8) }}>
                                        <TouchableOpacity style={{ width: rw(30), height: rh(6), justifyContent: 'center', backgroundColor: Colors.bk, borderRadius: 5, }}>
                                            <Text style={{ textAlign: 'center', fontSize: siz * 0.02 }}>2 weeks before</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: rw(30), height: rh(6), justifyContent: 'center', backgroundColor: Colors.bk, borderRadius: 5, }}>
                                            <Text style={{ textAlign: 'center', fontSize: siz * 0.02 }}>1 month before</Text>
                                        </TouchableOpacity>
                                    </View>
                                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: rw(8), marginTop: rh(3) }}>
                                        <TouchableOpacity style={{ width: rw(30), height: rh(6), justifyContent: 'center', backgroundColor: Colors.bk, borderRadius: 5, }}>
                                            <Text style={{ textAlign: 'center', fontSize: siz * 0.02 }}>2 month before</Text>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ width: rw(30), height: rh(6), justifyContent: 'center', backgroundColor: Colors.bk, borderRadius: 5, }}>
                                            <Text style={{ textAlign: 'center', fontSize: siz * 0.02 }}>3 month before</Text>
                                        </TouchableOpacity>
                                    </View>

                                    <View style={{ height: rh(8), width: rw(30), marginTop: rh(5) }}>
                                        <Text>Number of Days</Text>
                                        <View style={{ borderBottomColor: Colors.yellow, borderBottomWidth: 1, }}>
                                            <TextInput placeholder='40' style={{ padding: 0, paddingTop: rh(2), fontSize: siz * 0.02 }} />
                                        </View>
                                    </View>
                                </View>
                                :
                                null
                            }
                        </View>

                    }





                </View>
                <View style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
                    <TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('AddProductStepthree')}>
                        <Text style={Styles.bottombtntext}>Next</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </SafeAreaView >
    )
}

export default AddProductStepthree


{/* <View style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
<TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('addproductsteptwo')}>
    <Text style={Styles.bottombtntext}>Next</Text>
</TouchableOpacity>
</View> */}