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

const Editproductwarrantydetailsandnotifications = ({ navigation }) => {
    const [prductname, setprductname] = useState('')
    const [durationenabled, setdurationenabled] = useState(true)
    const [durationsyears, setdurationsyears] = useState(0)
    const [monthsdurations, setmonthsdurations] = useState(0)
    const [warrantydays, setwarrantydays] = useState('')
    const [multipletoggled, setmultipletoggled] = useState(true)
    const [additionalpart, setadditionalpart] = useState(false)
    const [allowexpirynotificationstoggled, setallowexpirynotificationstoggled] = useState(true)
    const [allowexpirynotifications, setallowexpirynotifications] = useState(false)
    const [extendwarrantyenabled, setextendwarrantyenabled] = useState(true)
    const [enabledextendwarranty, setenabledextendwarranty] = useState(false)
    const [multiparttoggles, setmultiparttoggles] = useState(false)
    const [multipartfirstenabled, setmultipartfirstenabled] = useState(false)
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
            <View style={{ marginHorizontal: rw(5) }}>

                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: rh(4), marginTop: rh(2) }}>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: rh(1) }}>

                            <Text style={Styles.secondhadding}>Warranty Details</Text>
                        </View>
                        <View style={Styles.dateandpurchasedouterview}>
                            <View style={Styles.dateandpurchasesdinnerview}>
                                <View>
                                    <Text style={[Styles.headingtext,]}>Date of Purchase</Text>
                                </View>
                                <TouchableOpacity>
                                    <Text style={[Styles.txtdate, { bottom: rh(0), borderBottomWidth: 1, borderbottomcolor: Colors.bk }]}>05-04-1999</Text>
                                </TouchableOpacity>
                            </View>
                            <View style={Styles.dateandpurchasesdinnerview}>
                                <Text style={Styles.headingtext}>Date of Expiry</Text>
                                <Text style={[Styles.txtdate, { bottom: rh(0), borderBottomWidth: 1, borderbottomcolor: Colors.bk }]}>05-04-1999</Text>
                            </View>
                        </View>

                        <View style={{ marginTop: rh(1.5), height: rh(4) }}>
                            <Text style={Styles.headingtext}>Warranty Period</Text>
                        </View>

                        <View style={{ marginTop: rh(2), flex: 1 }}>
                            {durationenabled ?



                                <View style={{ flex: 1 }}>
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

                                    <View style={Styles.lifetimewarrantindurations}>
                                        <TouchableOpacity onPress={() => setdurationenabled(false)}>
                                            <Entypo name='circle' size={20} color={Colors.black} />
                                        </TouchableOpacity>
                                        <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Lifetime Warranty</Text>
                                    </View>
                                    <View style={Styles.bottomlineview}>
                                    </View>




                                    <View style={{ flex: 1, }}>
                                        <View style={Styles.warrantymultipartexpiryview}>
                                            <View>
                                                <Text style={Styles.secondhadding}>Extended Warranty</Text>
                                            </View>
                                            {extendwarrantyenabled ?
                                                <View style={Styles.toggleouterviewmain}>
                                                    <TouchableOpacity onPress={() => { setextendwarrantyenabled(false), setenabledextendwarranty(true) }} style={{ justifyContent: 'center' }}>
                                                        <View style={Styles.toggleoffstyle}>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                                :
                                                <View style={Styles.toggleouterviewmain}>
                                                    <TouchableOpacity onPress={() => { { setextendwarrantyenabled(true), setenabledextendwarranty(false) } }} style={{ justifyContent: 'center' }}>
                                                        <View style={Styles.toggleonstyle}>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                            }

                                        </View>



                                        <View style={{ flex: 1 }}>
                                            {enabledextendwarranty ?
                                                <View style={{ flex: 1 }}>
                                                    <View style={Styles.addproductpartview}>
                                                        <Text style={Styles.addproductparttext}>Product Name</Text>
                                                        <TextInput style={Styles.addproductparttextinput} onChangeText={e => setprductname(e)} />
                                                    </View>

                                                    <View style={{ flex: 1 }}>

                                                        <View style={Styles.durationview}>
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










                                                    </View>
                                                </View>
                                                :
                                                null
                                            }

                                            <View style={{ flex: 1 }}>
                                                <View style={Styles.warrantymultipartexpiryview}>
                                                    <View style={{ top: 5 }}>
                                                        <Text style={[Styles.secondhadding]}>Multipart Warranty</Text>
                                                    </View>


                                                    {multiparttoggles ?

                                                        <View style={Styles.toggleouterviewmain}>
                                                            <TouchableOpacity onPress={() => { setmultiparttoggles(false), setadditionalpart(false) }}>
                                                                <View style={Styles.toggleonstyle}>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>
                                                        :

                                                        <View style={Styles.toggleouterviewmain}>
                                                            <TouchableOpacity onPress={() => { setmultiparttoggles(true), setadditionalpart(true) }}>
                                                                <View style={Styles.toggleoffstyle}>
                                                                </View>
                                                            </TouchableOpacity>
                                                        </View>

                                                    }


                                                </View>

                                            </View>


                                            {additionalpart ?
                                                <View style={Styles.addadditionalpartouterview}>
                                                    <TouchableOpacity style={{ alignContent: 'center', flexDirection: 'row' }} onPress={() => navigation.navigate('Editadditionalpart')}>
                                                        <View style={{ flexDirection: "row", width: rw(50), alignItems: "center", left: rw(5) }}>
                                                            <AntDesign name='pluscircle' size={siz * 0.02} color={Colors.yellow} />
                                                            <Text style={{ fontSize: siz * 0.02, color: Colors.black, left: rw(4) }}>Add additional part</Text>
                                                        </View>
                                                    </TouchableOpacity>
                                                </View>
                                                :
                                                null
                                            }



                                            <View style={{ height: rh(5), width: rw(89), marginTop: rh(2), justifyContent: 'space-between', flexDirection: "row", alignContent: 'center', alignItems: 'center' }}>
                                                <Text style={[Styles.secondhadding]}>Allow Expiry Notifications</Text>

                                                {allowexpirynotificationstoggled ?

                                                    <View style={Styles.toggleouterviewmain}>
                                                        <TouchableOpacity onPress={() => { setallowexpirynotificationstoggled(false), setallowexpirynotifications(true) }} style={{ justifyContent: 'center' }}>
                                                            <View style={Styles.toggleoffstyle}>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>
                                                    :

                                                    <View style={Styles.toggleouterviewmain}>
                                                        <TouchableOpacity onPress={() => { setallowexpirynotificationstoggled(true), setallowexpirynotifications(false) }}>
                                                            <View style={Styles.toggleonstyle}>
                                                            </View>
                                                        </TouchableOpacity>
                                                    </View>

                                                }



                                            </View>
                                            {allowexpirynotifications ?
                                                <View style={{ height: rh(29), width: rw(90) }}>
                                                    <View style={Styles.monthsandweeksouterview}>
                                                        <TouchableOpacity style={Styles.weeksandmonthsbtn} onPress={() => setwarrantydays('14')}>
                                                            <Text style={Styles.weeksmonthsinnertext}>2 weeks before</Text>
                                                        </TouchableOpacity>

                                                        <TouchableOpacity style={Styles.weeksandmonthsbtn} onPress={() => setwarrantydays('30')}>
                                                            <Text style={Styles.weeksmonthsinnertext}>1 month before</Text>
                                                        </TouchableOpacity>
                                                    </View>
                                                    <View style={Styles.monthsandweeksouterview}>
                                                        <TouchableOpacity style={Styles.weeksandmonthsbtn} onPress={() => setwarrantydays('60')}>
                                                            <Text style={Styles.weeksmonthsinnertext}>2 month before</Text>
                                                        </TouchableOpacity>
                                                        <TouchableOpacity style={Styles.weeksandmonthsbtn} onPress={() => setwarrantydays('90')}>
                                                            <Text style={Styles.weeksmonthsinnertext}>3 month before</Text>
                                                        </TouchableOpacity>
                                                    </View>

                                                    <View style={{ height: rh(8), width: rw(30), marginTop: rh(5) }}>
                                                        <Text>Number of Days</Text>
                                                        <View style={{ borderBottomColor: Colors.yellow, borderBottomWidth: 1, }}>
                                                            <TextInput value={warrantydays} placeholder={'0'} style={{ padding: 0, paddingTop: rh(2), fontSize: siz * 0.02 }} />
                                                        </View>
                                                    </View>
                                                </View>
                                                :
                                                null
                                            }



                                        </View>


                                    </View>

                                </View>








                                :
                                <View style={{ flex: 1, }}>
                                    <View style={Styles.durationview}>
                                        <TouchableOpacity onPress={() => setdurationenabled(true)}>
                                            <Entypo name='circle' size={20} color={Colors.black} />
                                        </TouchableOpacity>
                                        <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
                                    </View>
                                    <View style={{ flexDirection: "row", alignContent: "center", alignItems: 'center', height: rh(5) }}>
                                        <TouchableOpacity>
                                            <FontAwesome name='circle' size={22} color={Colors.yellow} />
                                        </TouchableOpacity>
                                        <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Life Time Warranty</Text>
                                    </View>
                                    <View style={Styles.bottomlineview}>
                                    </View>

                                    <View style={Styles.warrantymultipartexpiryview}>
                                        <View >
                                            <Text style={[Styles.secondhadding]}>Multipart Warranty</Text>
                                        </View>


                                        {multipletoggled ?

                                            <View style={Styles.toggleouterviewmain}>
                                                <TouchableOpacity onPress={() => { setmultipletoggled(false), setadditionalpart(true) }} style={{ justifyContent: 'center' }}>
                                                    <View style={Styles.toggleoffstyle}>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            :

                                            <View style={Styles.toggleouterviewmain}>
                                                <TouchableOpacity onPress={() => { setmultipletoggled(true), setadditionalpart(false) }}>
                                                    <View style={Styles.toggleonstyle}>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                        }


                                    </View>


                                    {additionalpart ?
                                        <View style={Styles.addadditionalpartouterview}>
                                            <TouchableOpacity style={{ alignContent: 'center', flexDirection: 'row' }} onPress={() => navigation.navigate('Addadditionalpart')}>
                                                <View style={{ flexDirection: "row", width: rw(50), alignItems: "center", left: rw(5) }}>
                                                    <AntDesign name='pluscircle' size={siz * 0.02} color={Colors.yellow} />
                                                    <Text style={{ fontSize: siz * 0.02, color: Colors.black, left: rw(4) }}>Add additional part</Text>
                                                </View>
                                            </TouchableOpacity>
                                        </View>
                                        :
                                        null
                                    }
                                    <View style={{ height: rh(5), width: rw(89), marginTop: rh(2), justifyContent: 'space-between', flexDirection: "row", alignContent: 'center', alignItems: 'center' }}>

                                        <Text style={[Styles.secondhadding]}>Allow Expiry Notifications</Text>


                                        {allowexpirynotificationstoggled ?

                                            <View style={Styles.toggleouterviewmain}>
                                                <TouchableOpacity onPress={() => { setallowexpirynotificationstoggled(false), setallowexpirynotifications(true) }} style={{ justifyContent: 'center' }}>
                                                    <View style={Styles.toggleoffstyle}>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>
                                            :

                                            <View style={Styles.toggleouterviewmain}>
                                                <TouchableOpacity onPress={() => { setallowexpirynotificationstoggled(true), setallowexpirynotifications(false) }}>
                                                    <View style={Styles.toggleonstyle}>
                                                    </View>
                                                </TouchableOpacity>
                                            </View>

                                        }




                                    </View>
                                    {allowexpirynotifications ?
                                        <View style={{ height: rh(29), width: rw(90) }}>
                                            <View style={Styles.monthsandweeksouterview}>
                                                <TouchableOpacity style={Styles.weeksandmonthsbtn} onPress={() => setwarrantydays('14')}>
                                                    <Text style={Styles.weeksmonthsinnertext}>2 weeks before</Text>
                                                </TouchableOpacity>

                                                <TouchableOpacity style={Styles.weeksandmonthsbtn} onPress={() => setwarrantydays('30')}>
                                                    <Text style={Styles.weeksmonthsinnertext}>1 month before</Text>
                                                </TouchableOpacity>
                                            </View>
                                            <View style={Styles.monthsandweeksouterview}>
                                                <TouchableOpacity style={Styles.weeksandmonthsbtn} onPress={() => setwarrantydays('60')}>
                                                    <Text style={Styles.weeksmonthsinnertext}>2 month before</Text>
                                                </TouchableOpacity>
                                                <TouchableOpacity style={Styles.weeksandmonthsbtn} onPress={() => setwarrantydays('90')}>
                                                    <Text style={Styles.weeksmonthsinnertext}>3 month before</Text>
                                                </TouchableOpacity>
                                            </View>

                                            <View style={{ height: rh(8), width: rw(30), marginTop: rh(5) }}>
                                                <Text>Number of Days</Text>
                                                <View style={{ borderBottomColor: Colors.yellow, borderBottomWidth: 1, }}>
                                                    <TextInput value={warrantydays} placeholder={'0'} style={{ padding: 0, paddingTop: rh(2), fontSize: siz * 0.02 }} />
                                                </View>
                                            </View>
                                        </View>
                                        :
                                        null
                                    }





                                </View>

                            }


                        </View>
                    </View>


                    <View style={{ height: rh(15), width: rw(90), }}>
                    </View>

                </ScrollView>
            </View >
            <View style={[Styles.nextanssavedbuttonview, { marginHorizontal: rw(3) }]}>
                <TouchableOpacity style={Styles.bottombtn} onPress={() => { console.log("Ok") }}>
                    <Text style={Styles.bottombtntext}>Save</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default Editproductwarrantydetailsandnotifications


