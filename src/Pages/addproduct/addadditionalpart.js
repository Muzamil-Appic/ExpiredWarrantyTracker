import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
import React, { useState, useEffect } from 'react'
import Styles from './addproduct.Styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import Entypo from 'react-native-vector-icons/Entypo'
import Colors from '../../Global/Colors'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import FontSize from '../../Global/Fonts'
const Addadditionalpart = ({ navigation }) => {
    const [addpart, setaddpart] = useState('')
    const [durationsyears, setdurationsyears] = useState(true)
    const [monthsdurations, setmonthsdurations] = useState(true)
    const [extendwarrantyenabled, setextendwarrantyenabled] = useState(true)
    const [durationenabled, setdurationenabled] = useState(true)








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
            <View style={{ flex: 1, marginHorizontal: rh(3) }}>
                <View style={{ height: rh(8), marginTop: rh(2), width: rw(100), }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <Entypo name='cross' size={30} color={Colors.yellow} />
                    </TouchableOpacity>
                    <View style={{ width: rw(50), marginTop: rh(1) }}>
                        <Text style={[Styles.secondhadding]}>Add Multipart</Text>
                    </View>
                </View>
                <View style={[Styles.addproductpartview, { top: rh(3) }]}>
                    <Text style={Styles.addproductparttext}>Part Name</Text>
                    <TextInput placeholder='Part Name' style={Styles.addproductparttextinput} onChangeText={e => setaddpart(e)} />
                </View>

                <View style={{ width: rw(100), flex: 1, marginTop: rh(5) }}>

                    {durationenabled ?
                        <View style={{ width: rw(100), flex: 1 }}>

                            <View style={Styles.durationview}>
                                <TouchableOpacity onPress={() => setdurationenabled(true)}>
                                    <FontAwesome name='circle' size={25} color={Colors.yellow} />
                                </TouchableOpacity>
                                <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
                            </View>

                            <View style={Styles.monthandyearbuttonouterview}>
                                <View style={Styles.monthsandyearbuttoninerview}>
                                    <View style={{ width: rw(20), marginLeft: rw(7) }}>
                                        <Text style={Styles.headingtext}>{durationsyears} Years</Text>
                                    </View>
                                    <View style={Styles.inneryellewbuttons}>
                                        <TouchableOpacity onPress={() => lessyears()}>
                                            <AntDesign name='minuscircleo' size={20} color={Colors.black} />
                                        </TouchableOpacity>
                                        <Text>{durationsyears}</Text>
                                        <TouchableOpacity onPress={() => addyears()}>
                                            <AntDesign name='pluscircleo' size={20} color={Colors.yellow} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={Styles.monthsandyearbuttoninerview}>
                                    <View style={{ width: rw(20), marginLeft: rw(7) }}>
                                        <Text style={Styles.headingtext}>{monthsdurations} Months</Text>
                                    </View>
                                    <View style={Styles.inneryellewbuttons}>
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
                            <View>
                            </View>

                            <View style={Styles.lifetimewarrantindurations}>
                                <TouchableOpacity onPress={() => setdurationenabled(false)}>
                                    <Entypo name='circle' size={25} color={Colors.black} />
                                </TouchableOpacity>
                                <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Lifetime Warranty</Text>
                            </View>


                            <View style={{ height: rh(10), marginTop: rh(2) }}>
                                <Text style={Styles.headingtext}>Date OF Expiry</Text>
                                <Text style={styless.dat} >05-04-199Fß</Text>
                            </View>





                        </View>
                        :


                        <View style={{ flex: 1 }}>
                            <View style={Styles.durationview}>
                                <TouchableOpacity onPress={() => setdurationenabled(true)}>
                                    <Entypo name='circle' size={25} color={Colors.black} />
                                </TouchableOpacity>
                                <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
                            </View>
                            <View style={[Styles.lifetimewarrantindurations, { marginTop: rh(2) }]}>
                                <TouchableOpacity onPress={() => setdurationenabled(false)}>
                                    <FontAwesome name='circle' size={25} color={Colors.yellow} />
                                </TouchableOpacity>
                                <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Lifetime Warranty</Text>
                            </View>
                            <View style={{ height: rh(10), marginTop: rh(2) }}>
                                <Text style={Styles.headingtext}>Date OF Expiry</Text>
                                <Text style={styless.dat} >Life Time Warranty</Text>
                            </View>
                        </View>
                    }

                </View>
                <View style={Styles.nextanssavedbuttonview}>
                    <TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('addproductsteptwo')}>
                        <Text style={Styles.bottombtntext}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView >
    )
}




const styless = StyleSheet.create({
    dat: { fontWeight: '400', fontSize: FontSize.font18, color: Colors.black, fontFamily: 'Inter-Regular', top: rh(1) }
})

export default Addadditionalpart