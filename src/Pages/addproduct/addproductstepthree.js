import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, Alert, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput, TouchableHighlight, TouchableOpacityBase } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './addproduct.Styles'
import Entypo from 'react-native-vector-icons/Entypo'
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import AntDesign from 'react-native-vector-icons/AntDesign'
import DateTimePickerModal from "react-native-modal-datetime-picker";
import DatePicker from 'react-native-date-picker'
import moment from 'moment';
const AddProductStepthree = ({ navigation }) => {


    console.log('====================================', "This is Our Global Record 3");
    console.log(global.apiData);
    console.log('====================================');
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
    const [calenderdat, setcalenderdat] = useState('')

    const [open, setOpen] = useState(false)
    const [providername, setprovidername] = useState('')
    const [isDatePickerVisible, setDatePickerVisibility] = useState(false);
    const [expirydate, setexpirydate] = useState(new Date().getDate())
    const [expirymonth, setexpirymonth] = useState(new Date().getMonth() + 1)
    const [expiryyear, setexpiryyear] = useState(new Date().getFullYear())
    const [newdate, setnewdate] = useState('');
    const [extenddurationsyears, setextenddurationsyears] = useState('0')
    const [extenddurationsmonths, setextenddurationsmonths] = useState('0')
    const [newextenddurationsyears, setnewextenddurationsyears] = useState(new Date().getFullYear())
    const [newextenddurationsmonths, setnewextenddurationsmonths] = useState(new Date().getMonth() + 1)





    const [date, setDate] = useState(new Date())
    const [first, setfirst] = useState("Select Date")
    const [expiryreceiptdate, setexpiryreceiptdate] = useState(new Date())




    const addyears = () => {

        setdurationsyears(parseInt(durationsyears + 1))
        setexpiryyear(expiryyear + 1)
        setnewextenddurationsyears(newextenddurationsyears + 1)
    }
    const lessyears = () => {
        if (durationsyears === 0) {
            setdurationsyears(0)
        } else {
            setdurationsyears(parseInt(durationsyears - 1))
            setnewextenddurationsyears(newextenddurationsyears - 1)
            setexpiryyear(expiryyear - 1)
        }
    }



    const extenddurationsyearsaddyears = () => {
        setextenddurationsyears(parseInt(extenddurationsyears + 1))
        setnewextenddurationsyears(newextenddurationsyears + 1)
        setexpiryyear(expiryyear + 1)
    }
    const extenddurationsyearslessyears = () => {
        if (extenddurationsyears === 0) {
            setdurationsyears(0)
        } else {
            setextenddurationsyears(parseInt(extenddurationsyears - 1))
            setnewextenddurationsyears(newextenddurationsyears - 1)
            setexpiryyear(expiryyear - 1)
        }
    }




    const extenddurationsmonthsaddmonth = () => {
        setextenddurationsmonths(parseInt(extenddurationsmonths + 1))
        setnewextenddurationsmonths(newextenddurationsmonths + 1)
        setexpirymonth(expirymonth + 1)
    }

    const extenddurationsmonthslessmonth = () => {
        if (extenddurationsmonths === 0) {
            setextenddurationsmonths(0)
        }
        // if (monthsdurations === 13) {
        //     setexpiryyear(expiryyear + 1) 
        // }

        else {
            setextenddurationsmonths(parseInt(extenddurationsmonths - 1))
            setnewextenddurationsmonths(newextenddurationsmonths - 1)
            setexpirymonth(expirymonth - 1)
        }
    }


    const addmonth = () => {
        setmonthsdurations(parseInt(monthsdurations + 1))
        setexpirymonth(expirymonth + 1)
        setnewextenddurationsmonths(newextenddurationsmonths + 1)
    }

    const lessmonth = () => {
        if (monthsdurations === 0) {
            setmonthsdurations(0)
        }
        // if (monthsdurations === 13) {
        //     setexpiryyear(expiryyear + 1) 
        // }

        else {
            setmonthsdurations(parseInt(monthsdurations - 1))
            setexpirymonth(expirymonth - 1)
            setnewextenddurationsmonths(newextenddurationsmonths - 1)
        }
    }






    const showDatePicker = () => {
        setDatePickerVisibility(true);
    };

    const hideDatePicker = () => {
        setDatePickerVisibility(false);
    };

    const handleConfirm = (date) => {
        setfirst(moment(date).format('DD-MM-YYYY'))
        console.log(date);
        setDate(date)
        setdurationsyears(0)
        setmonthsdurations(0)
        console.log(date.getDate());
        setexpirydate(date.getDate() - 1)
        setexpirymonth(date.getMonth() + 1)
        setexpiryyear(date.getFullYear())


        hideDatePicker();
    };




    const backfunction = () => {
        Alert.alert(
            'Alert',
            'Are You Sure You Want TO Exit',
            [
                { text: 'Cancel', onPress: () => console.warn("You Backed") },
                { text: 'OK', onPress: () => { navigation.navigate('BottomTabNavigations'), global.apiData = [] } },
            ],
            { cancelable: false }
        )
    }




    const nextscreen = () => {

        if (durationenabled == true) {
            let temp = {
                ...global.apiData, purchase_date: moment(date).format('YYYY-MM-DD'), expiry_date: expiryyear + '-' + expirymonth + '-' + expirydate,
                warranty_provider_name: providername, extended_warranty_duration: extenddurationsyears + ' Years ' + extenddurationsmonths + ' Months',
                no_of_days_before_expiry_warning: warrantydays,
                warranty_details_duration: durationsyears + ' Years ' + monthsdurations + ' Months ', expiry_year: expiryyear
            }
            global.apiData = temp
            navigation.navigate('Addproductstepfourcategory')
        }
        else {
            let temp = {
                ...global.apiData, purchase_date: moment(date).format('DD-MM-YYYY'), expiry_date: expiryyear + '-' + expirymonth + '-' + expirydate,
                no_of_days_before_expiry_warning: warrantydays
            }
            global.apiData = temp
            navigation.navigate('Addproductstepfourcategory')
        }


    }





    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ marginHorizontal: rw(5) }}>
                <ScrollView showsVerticalScrollIndicator={false} contentContainerStyle={{ flexGrow: 1 }}>
                    <View style={{ flex: 1 }}>
                        <View style={{ height: rh(4), marginTop: rh(2) }}>
                            <TouchableOpacity onPress={() => backfunction()}>
                                <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ marginTop: rh(2) }}>
                            <Text style={Styles.textstep}>Step 3 of 4</Text>
                            <Text style={Styles.secondhadding}>Warranty Details</Text>
                        </View>

                        <View style={Styles.dateandpurchasedouterview}>

                            <View style={Styles.dateandpurchasesdinnerview}>
                                <Text style={[Styles.headingtext,]}>Date of Purchase</Text>
                                <Text style={Styles.headingtext}>Date of Expiry</Text>
                            </View>
                            <View style={[Styles.dateandpurchasesdinnerview, { marginTop: rh(2) }]}>
                                <TouchableOpacity onPress={() => showDatePicker()} >
                                    <Text style={[Styles.txtdate, { bottom: rh(0), borderBottomWidth: 1, borderbottomcolor: Colors.bk }]}>{first}</Text>
                                </TouchableOpacity>
                                <Text style={[Styles.txtdate, { bottom: rh(0), borderBottomWidth: 1, borderbottomcolor: Colors.bk }]}>{[expirydate, '/', expirymonth, '/', expiryyear]}</Text>
                            </View>
                        </View>


                        <DateTimePickerModal
                            date={date}
                            maximumDate={moment().toDate()}
                            isVisible={isDatePickerVisible}
                            mode="date"
                            onConfirm={handleConfirm}
                            onCancel={hideDatePicker}
                        />


                        <View style={{ marginTop: rh(2.5) }}>
                            <Text style={Styles.headingtext}>Warranty Period</Text>
                        </View>

                        <View style={{ marginTop: rh(2), flex: 1 }}>
                            {durationenabled ?



                                <View style={{ flex: 1 }}>
                                    <View style={Styles.durationview}>
                                        <TouchableOpacity onPress={() => setdurationenabled(true)}>
                                            <FontAwesome name='circle' size={25} color={Colors.yellow} />
                                        </TouchableOpacity>
                                        <Text style={[Styles.innersecondhadding, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
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
                                                <Text style={Styles.innersecondhadding}>Extended Warranty</Text>
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
                                                    <Text style={Styles.addproductparttext}>Provider name</Text>
                                                    <View style={Styles.addproductpartview}>
                                                        <TextInput style={Styles.addproductparttextinput} onChangeText={e => setprovidername(e)} />
                                                    </View>

                                                    <View style={{ flex: 1 }}>

                                                        <View style={Styles.durationview}>
                                                            <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
                                                        </View>

                                                        <View style={Styles.monthandyearbuttonouterview}>
                                                            <View style={Styles.monthsandyearbuttoninerview}>
                                                                <View style={{ width: rw(20), marginLeft: rw(2) }}>
                                                                    <Text style={Styles.headingtext}>{extenddurationsyears} Years</Text>
                                                                </View>
                                                                <View style={Styles.inneryellewbuttons}>
                                                                    <TouchableOpacity onPress={() => extenddurationsyearslessyears()}>
                                                                        <AntDesign name='minuscircleo' size={20} color={Colors.black} />
                                                                    </TouchableOpacity>
                                                                    <Text>{extenddurationsyears}</Text>
                                                                    <TouchableOpacity onPress={() => extenddurationsyearsaddyears()}>
                                                                        <AntDesign name='pluscircleo' size={20} color={Colors.yellow} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>
                                                            <View style={Styles.monthsandyearbuttoninerview}>
                                                                <View style={{ width: rw(20), marginLeft: rw(2) }}>
                                                                    <Text style={Styles.headingtext}>{extenddurationsmonths} Months</Text>
                                                                </View>
                                                                <View style={Styles.inneryellewbuttons}>
                                                                    <TouchableOpacity onPress={() => extenddurationsmonthslessmonth()}>
                                                                        <AntDesign name='minuscircleo' size={20} color={Colors.black} />
                                                                    </TouchableOpacity>
                                                                    <Text>{extenddurationsmonths}</Text>
                                                                    <TouchableOpacity onPress={() => extenddurationsmonthsaddmonth()}>
                                                                        <AntDesign name='pluscircleo' size={20} color={Colors.yellow} />
                                                                    </TouchableOpacity>
                                                                </View>
                                                            </View>

                                                        </View>

                                                        <View style={{ left: rw(2) }}>
                                                            <Text>Date of Expiry</Text>
                                                            <Text style={[Styles.txtdate, { textAlign: 'left', marginTop: rh(1) }]}>{[expirydate, '/', newextenddurationsmonths, '/', newextenddurationsyears]}</Text>
                                                        </View>









                                                    </View>
                                                </View>
                                                :
                                                null
                                            }

                                            <View style={{ flex: 1, }}>
                                                <View style={Styles.warrantymultipartexpiryview}>
                                                    <View style={{ top: 7 }}>
                                                        <Text style={[Styles.innersecondhadding]}>Multipart Warranty</Text>
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
                                                <Text style={[Styles.innersecondhadding]}>Allow Expiry Notifications</Text>

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
                                        <Text style={[Styles.innersecondhadding, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Life Time Warranty</Text>
                                    </View>
                                    <View style={Styles.bottomlineview}>
                                    </View>

                                    <View style={Styles.warrantymultipartexpiryview}>
                                        <View >
                                            <Text style={[Styles.innersecondhadding]}>Multipart Warranty</Text>
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

                                        <Text style={[Styles.innersecondhadding]}>Allow Expiry Notifications</Text>


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
                <TouchableOpacity style={Styles.bottombtn} onPress={() => nextscreen()}>
                    <Text style={Styles.bottombtntext}>Next</Text>
                </TouchableOpacity>
            </View>
        </SafeAreaView >
    )
}

export default AddProductStepthree


