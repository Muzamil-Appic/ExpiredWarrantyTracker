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
    const [extendwarrantyenabled, setextendwarrantyenabled] = useState(true)
    const [durationenabled, setdurationenabled] = useState(true)
    const [adddurationyers, setadddurationyers] = useState(0)
    const [adddurationmonths, setadddurationmonths] = useState(0)
    const [expirydate, setexpirydate] = useState(new Date().getDate())
    const [durationsyears, setdurationsyears] = useState(new Date().getFullYear())
    const [monthsdurations, setmonthsdurations] = useState(new Date().getMonth() + 1)
    const [showdurationyears, setshowdurationyears] = useState('')




    const adddata = () => {

        if (durationenabled == true) {
            let temp = {
                ...global.apiData, name_multipart: addpart, duration_multipart: durationsyears + '-' + monthsdurations + '-' + expirydate,
            }
            global.apiData = temp
            navigation.navigate('AddProductStepthree')
        }
        else {
            let temp = {
                ...global.apiData, duration_multipart: "Life Time Warranty", name_multipart: addpart,
            }
            global.apiData = temp
            navigation.navigate('AddProductStepthree')
        }
    }



    const addyears = () => {
        setadddurationyers(parseInt(adddurationyers + 1))
        setdurationsyears(durationsyears + 1)
    }



    const lessyears = () => {
        if (adddurationyers === 0) {
            setadddurationyers(0)
        }
        // if (monthsdurations === 13) {
        //     setexpiryyear(expiryyear + 1) 
        // }

        else {
            setadddurationyers(parseInt(adddurationyers - 1))
            setdurationsyears(durationsyears - 1)
        }
    }

    const addmonth = () => {
        setmonthsdurations(parseInt(monthsdurations + 1))
        setadddurationmonths(adddurationmonths + 1)
    }

    const lessmonth = () => {
        if (adddurationmonths === 0) {
            setadddurationmonths(0)
        }
        // if (monthsdurations === 13) {
        //     setexpiryyear(expiryyear + 1) 
        // }

        else {
            setmonthsdurations(parseInt(monthsdurations - 1))
            setadddurationmonths(adddurationmonths - 1)
        }
    }

    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ flex: 1, marginHorizontal: rw(5) }}>
                <View style={{ height: rh(8), marginTop: rh(2), width: rw(100) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ right: 6 }}>
                        <Entypo name='cross' size={30} color={Colors.yellow} />
                    </TouchableOpacity>
                    <View style={{ width: rw(50), marginTop: rh(1) }}>
                        <Text style={[Styles.secondhadding]}>Add Multipart</Text>
                    </View>
                </View>
                <Text style={Styles.addproductparttext}>Product Name</Text>
                <View style={Styles.addproductpartview}>
                    <TextInput style={Styles.addproductparttextinput} onChangeText={e => setaddpart(e)} />
                </View>

                <View style={{ width: rw(100), flex: 1, marginTop: rh(5) }}>

                    {durationenabled ?
                        <View style={{ width: rw(100), flex: 1 }}>

                            <View style={Styles.durationview}>
                                <TouchableOpacity onPress={() => setdurationenabled(true)}>
                                    <FontAwesome name='circle' size={20} color={Colors.yellow} />
                                </TouchableOpacity>
                                <Text style={[Styles.innersecondhadding, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
                            </View>

                            <View style={Styles.monthandyearbuttonouterview}>
                                <View style={Styles.monthsandyearbuttoninerview}>
                                    <View style={{ width: rw(20), marginLeft: rw(7) }}>
                                        <Text style={Styles.headingtext}>{adddurationyers} Years</Text>
                                    </View>
                                    <View style={Styles.inneryellewbuttons}>
                                        <TouchableOpacity onPress={() => lessyears()}>
                                            <AntDesign name='minuscircleo' size={20} color={Colors.black} />
                                        </TouchableOpacity>
                                        <Text>{adddurationyers}</Text>
                                        <TouchableOpacity onPress={() => addyears()}>
                                            <AntDesign name='pluscircleo' size={20} color={Colors.yellow} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                <View style={Styles.monthsandyearbuttoninerview}>
                                    <View style={{ width: rw(20), marginLeft: rw(7) }}>
                                        <Text style={Styles.headingtext}>{adddurationmonths} Months</Text>
                                    </View>
                                    <View style={Styles.inneryellewbuttons}>
                                        <TouchableOpacity onPress={() => lessmonth()}>
                                            <AntDesign name='minuscircleo' size={20} color={Colors.black} />
                                        </TouchableOpacity>
                                        <Text>{adddurationmonths}</Text>
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
                                <Text style={[Styles.innersecondhadding, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Lifetime Warranty</Text>
                            </View>


                            <View style={{ height: rh(10), marginTop: rh(2) }}>
                                <Text style={Styles.headingtext}>Date OF Expiry</Text>
                                <Text style={[Styles.txtdate, { textAlign: 'left' }]}>{[expirydate, '/', monthsdurations, '/', durationsyears]}</Text>

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
                    <TouchableOpacity style={Styles.bottombtn} onPress={() => adddata()}>
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