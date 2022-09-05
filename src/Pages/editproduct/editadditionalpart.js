// import { View, Text, TouchableOpacity, TextInput, StyleSheet } from 'react-native'
// import React, { useState, useEffect } from 'react'
// import Styles from './addproduct.Styles'
// import { SafeAreaView } from 'react-native-safe-area-context'
// import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
// import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
// import Entypo from 'react-native-vector-icons/Entypo'
// import Colors from '../../Global/Colors'
// import FontAwesome from 'react-native-vector-icons/FontAwesome'
// import AntDesign from 'react-native-vector-icons/AntDesign'
// import FontSize from '../../Global/Fonts'
// import Loaders from '../../Components/Loaders'
// import Toast from 'react-native-simple-toast';
// import moment from 'moment'
// const Editadditionalpart = ({ navigation, route }) => {
//     const [addpart, setaddpart] = useState(route?.params?.name_multipart)
//     const [extendwarrantyenabled, setextendwarrantyenabled] = useState(true)
//     const [durationenabled, setdurationenabled] = useState(true)
//     const [adddurationyers, setadddurationyers] = useState(0)
//     const [adddurationmonths, setadddurationmonths] = useState(0)
//     const [expirydate, setexpirydate] = useState(new Date().getDate())
//     const [durationsyears, setdurationsyears] = useState(new Date().getFullYear())
//     const [monthsdurations, setmonthsdurations] = useState(new Date().getMonth() + 1)
//     const [showdurationyears, setshowdurationyears] = useState('')
//     const [buttonloader, setbuttonloader] = useState(false)








//     const [dateofpurchased, setdateofpurchased] = useState(moment(new Date()).format('D-M-YYYY'))
//     const [dateofexpiry, setdateofexpiry] = useState('Set Date')
//     const [addyaerssecond, setaddyaerssecond] = useState('')
//     const [addyearssecondwtoutlessdate, setaddyearssecondwtoutlessdate] = useState(new Date())
//     const [extendeddurationsyears, setextendeddurationsyears] = useState('')
//     const [setnewextendeddurationsyears, setsetnewextendeddurationsyears] = useState('')



//     const UpdateData = async () => {
//         var requestOptions = {
//             method: 'POST',
//             redirect: 'follow'
//         };
//         setbuttonloader(true)


//         if (durationenabled == true) {

//             const expiry = moment(moment(dateofexpiry, 'D-M-YYYY')).format('YYYY-MM-DD')

//             var duration_multipart = expiry


//             console.log("Han g");
//         }
//         else {
//             var duration_multipart = "Life Time Warranty"

//             console.log("Na g");
//         }

//         fetch(`http://waqarulhaq.com/expired-warranty-tracker/edit-multipart-data.php?ID=${route?.params?.ID}&name_multipart=${addpart}&duration_multipart=${duration_multipart}`, requestOptions)
//             .then(response => response.json()).then(result => {
//                 console.log("tttt", result.issuccess);
//                 if (result.issuccess == true) {

//                     console.log('====================================');
//                     console.log(result);
//                     console.log('====================================');
//                     Toast.show(" Updated Successfull")
//                     setbuttonloader(false)
//                     navigation.goBack()
//                     // navigation.navigate('BottomTabNavigations')
//                     // setbuttonloader(false),
//                     // global.apiData = []
//                 }
//                 else {
//                     alert("Name Not Updated"),
//                         setbuttonloader(false)
//                 }
//             })
//             .catch(error => console.log('error', error));


//     }



//     const addyears = () => {

//         setdurationsyears(parseInt(durationsyears + 1))
//         let d = addyearssecondwtoutlessdate
//         d.setFullYear(d.getFullYear(), d.getMonth() + 12);
//         setdateofexpiry(moment(d).format('D-M-YYYY'))
//         setextendeddurationsyears(moment(d).format('D-M-YYYY'))
//         setsetnewextendeddurationsyears(d)

//         setaddyearssecondwtoutlessdate(d)
//         console.log('====================================', dateofexpiry);


//     }



//     const lessyears = () => {


//         if (durationsyears === 0) {
//             return;
//         }
//         else {
//             setdurationsyears(parseInt(durationsyears - 1))
//             let d = addyearssecondwtoutlessdate
//             d.setFullYear(d.getFullYear(), d.getMonth() - 12);
//             setdateofexpiry(moment(d).format('D-M-YYYY'))
//             setaddyearssecondwtoutlessdate(d)
//             setsetnewextendeddurationsyears(d)
//             setextendeddurationsyears(moment(d).format('D-M-YYYY'))
//             console.log('====================================', dateofexpiry);
//         }

//     }



//     const addmonth = () => {

//         setmonthsdurations(parseInt(monthsdurations + 1))
//         let d = addyearssecondwtoutlessdate
//         d.setFullYear(d.getFullYear(), d.getMonth() + 1);
//         setdateofexpiry(moment(d).format('D-M-YYYY'))
//         setaddyearssecondwtoutlessdate(d)
//         setsetnewextendeddurationsyears(d)
//         setextendeddurationsyears(moment(d).format('D-M-YYYY'))
//         console.log('====================================', dateofexpiry);


//     }


//     const lessmonth = () => {


//         if (monthsdurations === 0) {
//             return;
//         }
//         else {
//             setmonthsdurations(parseInt(monthsdurations - 1))
//             let d = addyearssecondwtoutlessdate
//             d.setFullYear(d.getFullYear(), d.getMonth() - 1);
//             setdateofexpiry(moment(d).format('D-M-YYYY'))
//             setaddyearssecondwtoutlessdate(d)
//             setsetnewextendeddurationsyears(d)
//             setextendeddurationsyears(moment(d).format('D-M-YYYY'))
//             console.log('====================================', dateofexpiry);

//         }
//     }


//     return (
//         <SafeAreaView style={Styles.container}>
//             <View style={{ flex: 1, marginHorizontal: rw(5) }}>
//                 <View style={{ height: rh(8), marginTop: rh(2), width: rw(100) }}>
//                     <TouchableOpacity onPress={() => navigation.goBack()} style={{ right: 6 }}>
//                         <Entypo name='cross' size={30} color={Colors.yellow} />
//                     </TouchableOpacity>
//                     <View style={{ width: rw(50), marginTop: rh(1) }}>
//                         <Text style={[Styles.secondhadding]}>Add Multipart</Text>
//                     </View>
//                 </View>
//                 <Text style={Styles.addproductparttext}>Product Name</Text>
//                 <View style={Styles.addproductpartview}>
//                     <TextInput value={addpart} style={Styles.addproductparttextinput} onChangeText={e => setaddpart(e)} />
//                 </View>

//                 <View style={{ width: rw(100), flex: 1, marginTop: rh(5) }}>

//                     {durationenabled ?
//                         <View style={{ width: rw(100), flex: 1 }}>

//                             <View style={Styles.durationview}>
//                                 <TouchableOpacity onPress={() => setdurationenabled(true)}>
//                                     <FontAwesome name='circle' size={20} color={Colors.yellow} />
//                                 </TouchableOpacity>
//                                 <Text style={[Styles.innersecondhadding, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
//                             </View>

//                             <View style={Styles.monthandyearbuttonouterview}>
//                                 <View style={Styles.monthsandyearbuttoninerview}>
//                                     <View style={{ width: rw(20), marginLeft: rw(7) }}>
//                                         <Text style={Styles.headingtext}>{adddurationyers} Years</Text>
//                                     </View>
//                                     <View style={Styles.inneryellewbuttons}>
//                                         <TouchableOpacity onPress={() => lessyears()}>
//                                             <AntDesign name='minuscircleo' size={20} color={Colors.black} />
//                                         </TouchableOpacity>
//                                         <Text>{adddurationyers}</Text>
//                                         <TouchableOpacity onPress={() => addyears()}>
//                                             <AntDesign name='pluscircleo' size={20} color={Colors.yellow} />
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>
//                                 <View style={Styles.monthsandyearbuttoninerview}>
//                                     <View style={{ width: rw(20), marginLeft: rw(7) }}>
//                                         <Text style={Styles.headingtext}>{adddurationmonths} Months</Text>
//                                     </View>
//                                     <View style={Styles.inneryellewbuttons}>
//                                         <TouchableOpacity onPress={() => lessmonth()}>
//                                             <AntDesign name='minuscircleo' size={20} color={Colors.black} />
//                                         </TouchableOpacity>
//                                         <Text>{adddurationmonths}</Text>
//                                         <TouchableOpacity onPress={() => addmonth()}>
//                                             <AntDesign name='pluscircleo' size={20} color={Colors.yellow} />
//                                         </TouchableOpacity>
//                                     </View>
//                                 </View>

//                             </View>
//                             <View>
//                             </View>

//                             <View style={Styles.lifetimewarrantindurations}>
//                                 <TouchableOpacity onPress={() => setdurationenabled(false)}>
//                                     <Entypo name='circle' size={25} color={Colors.black} />
//                                 </TouchableOpacity>
//                                 <Text style={[Styles.innersecondhadding, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Lifetime Warranty</Text>
//                             </View>


//                             <View style={{ height: rh(10), marginTop: rh(2) }}>
//                                 <Text style={Styles.headingtext}>Date OF Expiry</Text>
//                                 <Text style={[Styles.txtdate, { textAlign: 'left' }]}>{dateofexpiry}</Text>

//                             </View>





//                         </View>
//                         :


//                         <View style={{ flex: 1 }}>
//                             <View style={Styles.durationview}>
//                                 <TouchableOpacity onPress={() => setdurationenabled(true)}>
//                                     <Entypo name='circle' size={25} color={Colors.black} />
//                                 </TouchableOpacity>
//                                 <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Duration</Text>
//                             </View>
//                             <View style={[Styles.lifetimewarrantindurations, { marginTop: rh(2) }]}>
//                                 <TouchableOpacity onPress={() => setdurationenabled(false)}>
//                                     <FontAwesome name='circle' size={25} color={Colors.yellow} />
//                                 </TouchableOpacity>
//                                 <Text style={[Styles.txtdate, { paddingTop: rh(0), paddingLeft: rw(2) }]}>Lifetime Warranty</Text>
//                             </View>
//                             <View style={{ height: rh(10), marginTop: rh(2) }}>
//                                 <Text style={Styles.headingtext}>Date OF Expiry</Text>
//                                 <Text style={styless.dat} >Life Time Warranty</Text>
//                             </View>
//                         </View>
//                     }

//                 </View>
//                 <View style={Styles.nextanssavedbuttonview}>
//                     {buttonloader ?
//                         <View style={{ height: rh(10) }}>
//                             <Loaders />
//                         </View>
//                         :
//                         <TouchableOpacity style={Styles.bottombtn} onPress={() => UpdateData()}>
//                             <Text style={Styles.bottombtntext}>Save</Text>
//                         </TouchableOpacity>
//                     }
//                 </View>
//             </View>
//         </SafeAreaView >
//     )
// }




// const styless = StyleSheet.create({
//     dat: { fontWeight: '400', fontSize: FontSize.font18, color: Colors.black, fontFamily: 'Inter-Regular', top: rh(1) }
// })

// export default Editadditionalpart








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
import moment from 'moment';
import Toast from 'react-native-simple-toast';
const Editadditionalpart = ({ navigation, route }) => {
    const [addpart, setaddpart] = useState(route?.params?.name_multipart)
    const [extendwarrantyenabled, setextendwarrantyenabled] = useState(true)
    const [durationenabled, setdurationenabled] = useState(true)
    const [adddurationyers, setadddurationyers] = useState(0)
    const [adddurationmonths, setadddurationmonths] = useState(0)
    const [expirydate, setexpirydate] = useState(new Date().getDate())
    const [durationsyears, setdurationsyears] = useState(new Date().getFullYear())
    const [monthsdurations, setmonthsdurations] = useState(new Date().getMonth() + 1)
    const [showdurationyears, setshowdurationyears] = useState('')


    const [date, setDate] = useState(new Date())
    const [dateofpurchased, setdateofpurchased] = useState(moment(new Date()).format('D-M-YYYY'))
    const [dateofexpiry, setdateofexpiry] = useState('Set Date')
    const [addyaerssecond, setaddyaerssecond] = useState('')
    const [addyearssecondwtoutlessdate, setaddyearssecondwtoutlessdate] = useState(new Date())
    const [extendeddurationsyears, setextendeddurationsyears] = useState('')
    const [setnewextendeddurationsyears, setsetnewextendeddurationsyears] = useState('')
    const [buttonloader, setbuttonloader] = useState(false)

    const UpdateData = async () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        setbuttonloader(true)

        if (durationenabled == true) {

            const expiry = moment(moment(dateofexpiry, 'D-M-YYYY')).format('YYYY-MM-DD')

            var duration_multipart = expiry



        }
        else {
            var duration_multipart = "Life Time Warranty"

            console.log("Na g");
        }

        fetch(`http://waqarulhaq.com/expired-warranty-tracker/edit-multipart-data.php?ID=${route?.params?.ID}&name_multipart=${addpart}&duration_multipart=${duration_multipart}`, requestOptions)
            .then(response => response.json()).then(result => {
                console.log("tttt", result.issuccess);
                if (result.issuccess == true) {

                    console.log('====================================');
                    console.log(result);
                    console.log('====================================');
                    Toast.show(" Updated Successfull")
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




    const addyears = () => {

        setadddurationyers(parseInt(adddurationyers + 1))
        let d = addyearssecondwtoutlessdate
        d.setFullYear(d.getFullYear(), d.getMonth() + 12);
        setdateofexpiry(moment(d).format('D-M-YYYY'))
        setextendeddurationsyears(moment(d).format('D-M-YYYY'))
        setsetnewextendeddurationsyears(d)

        setaddyearssecondwtoutlessdate(d)
        console.log('====================================', dateofexpiry);


    }



    const lessyears = () => {


        if (durationsyears === 0) {
            return;
        }
        else {
            setadddurationyers(parseInt(adddurationyers - 1))
            let d = addyearssecondwtoutlessdate
            d.setFullYear(d.getFullYear(), d.getMonth() - 12);
            setdateofexpiry(moment(d).format('D-M-YYYY'))
            setaddyearssecondwtoutlessdate(d)
            setsetnewextendeddurationsyears(d)
            setextendeddurationsyears(moment(d).format('D-M-YYYY'))
            console.log('====================================', dateofexpiry);
        }

    }



    const addmonth = () => {



        setadddurationmonths(parseInt(adddurationmonths + 1))
        let d = addyearssecondwtoutlessdate
        d.setFullYear(d.getFullYear(), d.getMonth() + 1);
        setdateofexpiry(moment(d).format('D-M-YYYY'))
        setaddyearssecondwtoutlessdate(d)
        setsetnewextendeddurationsyears(d)
        setextendeddurationsyears(moment(d).format('D-M-YYYY'))
        console.log('====================================', dateofexpiry);


    }


    const lessmonth = () => {


        if (monthsdurations === 0) {
            return;
        }
        else {
            setadddurationmonths(parseInt(adddurationmonths - 1))
            let d = addyearssecondwtoutlessdate
            d.setFullYear(d.getFullYear(), d.getMonth() - 1);
            setdateofexpiry(moment(d).format('D-M-YYYY'))
            setaddyearssecondwtoutlessdate(d)
            setsetnewextendeddurationsyears(d)
            setextendeddurationsyears(moment(d).format('D-M-YYYY'))
            console.log('====================================', dateofexpiry);

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
                    <TextInput value={addpart} style={Styles.addproductparttextinput} onChangeText={e => setaddpart(e)} />
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
                                    <View style={{ width: rw(25), marginLeft: rw(7) }}>
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
                                    <View style={{ width: rw(25), marginLeft: rw(7) }}>
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
                                <Text style={[Styles.txtdate, { textAlign: 'left' }]}>{dateofexpiry}</Text>

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
                    <TouchableOpacity style={Styles.bottombtn} onPress={() => UpdateData()}>
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

export default Editadditionalpart

