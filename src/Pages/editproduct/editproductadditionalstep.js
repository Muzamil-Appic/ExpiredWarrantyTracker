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
import { decode as atob, encode as btoa } from 'base-64'
import Toast from 'react-native-simple-toast';
import ImagePicker from 'react-native-image-crop-picker';
import Entypo from 'react-native-vector-icons/Entypo'
import AntDesign from 'react-native-vector-icons/AntDesign'
import AutoHeightImage from 'react-native-auto-height-image';
import Loaders from '../../Components/Loaders'
import AsyncStorage from '@react-native-async-storage/async-storage';


const EditProductAddtionalStep = ({ navigation, route }) => {


    useEffect(() => {
        getcurrencyimages()
        getcurrencylist()
    }, []);


    const [modelno, setmodelno] = useState(route?.params?.model_number)
    const [serialno, setserialno] = useState(route?.params?.serial_number)
    const [countrycurrentcode, setcountrycurrentcode] = useState(route?.params?.pricecode_and_pricename)
    const [productprice, setproductprice] = useState(route?.params?.product_price)
    const [showdumyimage, setshowdumyimage] = useState(route?.params?.paymentmethod_image)
    const [Img, setImg] = useState(route?.params?.product_image)
    const [merchantname, setmerchantname] = useState(route?.params?.merchant_name)
    const [merchantlocation, setmerchantlocation] = useState(route?.params?.merchant_location)
    const [merchantwebsite, setmerchantwebsite] = useState(route?.params?.merchant_website)
    const [merchantcontactno, setmerchantcontactno] = useState(route?.params?.merchant_contact_no)
    const [notes, setnotes] = useState(route?.params?.notes)

    const [buttonloader, setbuttonloader] = useState(false)
    const [search, setSearch] = useState('');
    const [filteredDataSource, setFilteredDataSource] = useState([]);
    const [masterDataSource, setMasterDataSource] = useState([]);
    const [countrycurrency, setcountrycurrency] = useState('')
    const [currencyimages, setcurrencyimages] = useState([])
    const [productinfoenabled, setproductinfoenabled] = useState(true)
    const [produtinfotoggled, setprodutinfotoggled] = useState(false)
    const [productimagestoggles, setproductimagestoggles] = useState(true)
    const [productimagesenabled, setproductimagesenabled] = useState(true)
    const [merchanttoggle, setmerchanttoggle] = useState(false)
    const [merchantenabled, setmerchantenabled] = useState(true)
    const [notestoggle, setnotestoggle] = useState(false)
    const [notesenabled, setnotesenabled] = useState(true)
    const [currencymodal, setcurrencymodal] = useState(false)
    const [paymentmethodmodal, setpaymentmethodmodal] = useState(false)
    const [imageloader, setimageloader] = useState(false)
    const [isCamera, setisCamera] = useState('')
    const [images, setimages] = useState('')
    const [receiptspath, setreceiptspath] = useState('')






    console.log('====================================');
    console.log(route?.params?.ID);
    console.log('====================================');





    const Addrecord = async () => {
        await AsyncStorage.getItem('userdetails').then(async value => {
            let data = JSON.parse(value);
            console.log("------>", data);
            apihit(data?.useremail)
        })
    }

    const getcurrencyimages = () => {
        fetch('http://waqarulhaq.com/expired-warranty-tracker/get-payment-options.php')
            .then((response) => response.json())
            .then((responseJson) => {
                setcurrencyimages(responseJson.data);
                //   setcurrencyimages(responseJson.da);
            })
            .catch((error) => {
                console.error(error);
            })
    }

    const getcurrencylist = () => {
        fetch('http://waqarulhaq.com/expired-warranty-tracker/get-currency-list.php')
            .then((response) => response.json())
            .then((responseJson) => {
                setFilteredDataSource(responseJson.data);
                setMasterDataSource(responseJson.data);
            })
            .catch((error) => {
                console.error(error);
            });
    }

    const searchFilterFunction = (text) => {
        // Check if searched text is not blank
        if (text) {
            // Inserted text is not blank
            // Filter the masterDataSource
            // Update FilteredDataSource
            const newData = masterDataSource.filter(
                function (item) {
                    const itemData = item.country
                        ? item.country.toUpperCase()
                        : ''.toUpperCase();
                    const textData = text.toUpperCase();
                    return itemData.indexOf(textData) > -1;
                });
            setFilteredDataSource(newData);
            setSearch(text);
        } else {
            // Inserted text is blank
            // Update FilteredDataSource with masterDataSource
            setFilteredDataSource(masterDataSource);
            setSearch(text);
        }
    };

    const ItemView = ({ item }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => { setcountrycurrency(item.currency_code), setenabledmarkdtick(item), setcountrycurrentcode(item.currency_code) }}>
                    <View style={{ flexDirection: "row", borderBottomWidth: 1, borderColor: '#909090', height: rh(6), alignItems: 'center', justifyContent: 'space-between' }}>

                        <View style={{ flexDirection: 'row' }}>
                            <Text style={{ fontSize: FontSize.font16, color: Colors.black }}>{item.currency_code}</Text>
                            <Text> - </Text>
                            <Text style={{ width: rw(60), fontSize: FontSize.font16, color: Colors.black }}>{item.country.toUpperCase()}</Text>
                        </View>
                        <View>
                            {item.seleced == true ?
                                <View style={{ right: rw(2) }}>
                                    <AntDesign name='checkcircleo' size={20} color={Colors.yellow} />
                                </View>
                                :
                                <View style={{ right: rw(2) }}>
                                    <Entypo name='circle' size={20} color={Colors.black} />
                                </View>
                            }
                        </View>
                    </View>
                </TouchableOpacity>
            </View>


        );
    };

    const ItemSeparatorView = () => {
        return (
            // Flat List Item Separator
            <View
                style={{
                    height: 0.5,
                    width: '100%',
                    backgroundColor: '#C8C8C8',
                }}
            >
                {/* <Text>{item.country}</Text> */}
            </View>
        );
    };

    const setenabledmarkdtick = (item) => {
        let temp = [...filteredDataSource];
        for (let i = 0; i < filteredDataSource.length; i++) {
            if (filteredDataSource[i].country == item.country) {
                temp[i] = {
                    seleced: true,
                    country: filteredDataSource[i].country,
                    currency_code: filteredDataSource[i].currency_code,

                };
            } else {
                temp[i] = {
                    seleced: false,
                    country: filteredDataSource[i].country,
                    currency_code: filteredDataSource[i].currency_code,
                };
            }
        }
        setFilteredDataSource(temp);
        setcurrencymodal(false)
    }

    const setmarkenabledcashimage = (item) => {
        let temp = [...currencyimages];
        for (let i = 0; i < currencyimages.length; i++) {
            if (currencyimages[i].ID == item.ID) {
                temp[i] = {
                    seleced: true,
                    method: currencyimages[i].method,
                    ID: currencyimages[i].ID,
                    image: currencyimages[i].image,

                };
            } else {
                temp[i] = {
                    seleced: false,
                    method: currencyimages[i].method,
                    ID: currencyimages[i].ID,
                    image: currencyimages[i].image,
                };
            }
        }
        setcurrencyimages(temp);
        setpaymentmethodmodal(false)
    }

    const currencyimagesrenderfunction = ({ item }) => {
        console.log(item);
        return (
            <View >
                <TouchableOpacity style={{ flexDirection: 'row', justifyContent: "space-between", height: rh(8), borderBottomColor: Colors.bk, borderBottomWidth: 1, alignItems: 'center' }} onPress={() => { setmarkenabledcashimage(item), setshowdumyimage(item.image) }}>
                    <View style={{ flexDirection: "row", alignItems: 'center' }}>
                        <Image source={{ uri: item.image }} style={{ height: 60, width: 60 }} resizeMode={'contain'} resizeMethod={'resize'} />
                        <Text style={{ fontSize: FontSize.font16, color: Colors.black, marginLeft: rw(3) }}>{item.method}</Text>
                    </View>
                    <View>
                        {item.seleced == true ?
                            <View style={{ right: rw(2) }}>
                                <AntDesign name='checkcircleo' size={20} color={Colors.yellow} />
                            </View>
                            :
                            <View style={{ right: rw(2) }}>
                                <Entypo name='circle' size={20} color={Colors.black} />
                            </View>
                        }
                    </View>
                </TouchableOpacity>
            </View>

        )

    }

    const selectimagefromgallery = () => {
        setTimeout(() => {
            ImagePicker.openPicker({
                width: 500,
                height: 500,
                cropping: true,
                //  compressImageQuality: 0.4,
            }).then(async image => {
                setImg(image.path);
                setisCamera(false);
                setimages(image)
                uplodFile(image);
            });
        }, 400);
    };


    // const uplodFile = async (image) => {
    //     console.log("yes entered");
    //     var formdata = new FormData();
    //     var filename = image.path.replace(/^.*[\\\/]/, '');
    //     formdata.append('file', {
    //         uri: image.path,
    //         name: filename, type: image.mime
    //     });
    //     // console.log({
    //     //     uri: image.path,
    //     //     name: filename, type: image.mime
    //     // });

    //     var requestOptions = {
    //         method: 'POST',
    //         body: formdata,
    //         redirect: 'follow'
    //     };
    //     setimageloader(true)
    //     await fetch("http://waqarulhaq.com/expired-warranty-tracker/upload-img.php?", requestOptions)
    //         .then(response => response.json())
    //         .then(result => { setreceiptspath(result), setimageloader(false), console.log(result) })
    //         .catch(error => console.log('error', error),);
    // };




    const uplodFile = async (image) => {
        console.log("yes entered");
        var formdata = new FormData();
        var filename = image.path.replace(/^.*[\\\/]/, '');
        formdata.append('file', {
            uri: image.path,
            name: filename, type: image.mime
        });
        console.log({
            uri: image.path,
            name: filename, type: image.mime
        });
        setbuttonloader(true)
        console.log(buttonloader);
        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        // console.log("requestOptions", requestOptions);


        await fetch("http://waqarulhaq.com/expired-warranty-tracker/upload-img.php?", requestOptions)
            .then(response => response.json())
            .then(result => { setreceiptspath(result), console.log(result), setbuttonloader(false) })
            .catch(error => { console.log('error', error), setbuttonloader(true) });

    };




    const opencamera = () => {
        ImagePicker.openCamera({
            width: 500,
            height: 500,
            cropping: true,
        }).then(async image => {
            setImg(image.path)
            setisCamera(false);
            const ref = new Date().getTime();
            setimages(image)
            uplodFile(image);
        });
    }

    const apihit = () => {


        let parameters = {
            model_number: modelno, serial_number: serialno,
            merchant_name: merchantname,
            merchant_location: merchantlocation, merchant_website: merchantwebsite,
            merchant_contact_no: merchantcontactno, notes: notes, paymentmethod_image: showdumyimage,
            product_price: productprice, pricecode_and_pricename: countrycurrency, product_image: receiptspath
        }

        let jsonrecord = JSON.stringify(parameters)
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        setbuttonloader(true),
            fetch(`https://waqarulhaq.com/expired-warranty-tracker/edit-other-info.php?ID=${route?.params?.ID}&data=${jsonrecord}`, requestOptions)
                .then(response => response.json()).then(result => {
                    console.log("tttt", result.issuccess);
                    if (result.issuccess == true) {

                        console.log('====================================');
                        console.log(result);
                        console.log('====================================');
                        Toast.show("Record Updated Successfull"),
                            navigation.goBack(),
                            setbuttonloader(false)

                    }
                    else {
                        alert("Record Not Updated"),
                            setbuttonloader(false)
                    }
                })
                .catch(error => console.log('error', error));


    }


    return (
        <SafeAreaView style={Styles.container}>
            <View style={{ marginHorizontal: rw(5) }}>
                <ScrollView showsVerticalScrollIndicator={false} keyboardDismissMode='on-drag'>
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
                            <Text style={Styles.innersecondhadding}>Product Info</Text>
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
                            <Text style={[Styles.addproductparttext, { marginTop: rh(1), }]}>Model Number</Text>
                            <View style={Styles.productproductmerchantnotes}>
                                <View style={{ width: rw(80) }}>
                                    <TextInput value={modelno} style={Styles.addproductparttextinput} onChangeText={e => setmodelno(e)} />
                                </View>
                                {/* <TouchableOpacity>
                                    <MaterialCommunityIcons name='line-scan' size={30} color={Colors.yellow} />
                                </TouchableOpacity> */}
                            </View>
                            <Text style={[Styles.addproductparttext, { marginTop: rh(1), }]}>Serial Number</Text>
                            <View style={Styles.productproductmerchantnotes}>
                                <View style={{ width: rw(80) }}>
                                    <TextInput value={serialno} style={Styles.addproductparttextinput} onChangeText={e => setserialno(e)} />
                                </View>
                                {/* <TouchableOpacity>
                                    <MaterialCommunityIcons name='line-scan' size={30} color={Colors.yellow} />
                                </TouchableOpacity> */}
                            </View>
                            <View style={{ marginTop: rh(1) }} >

                                <View style={{ flexDirection: 'row', width: rw(90), justifyContent: 'space-between', }}>
                                    <Text style={[Styles.addproductparttext, { marginTop: rh(0.5), }]}>Price </Text>
                                    <Text style={[Styles.addproductparttext, { marginTop: rh(0.5), }]}>Payment Method</Text>
                                </View>

                                <View style={{ flexDirection: 'row', width: rw(90), justifyContent: 'space-between', height: rh(5), marginTop: rh(1) }}>
                                    <TouchableOpacity style={{ width: rw(15), borderBottomWidth: 2, borderBottomColor: Colors.bk, height: rh(5), flexDirection: "row", alignItems: 'center' }} onPress={() => setcurrencymodal(true)}>
                                        <Text style={{ color: Colors.black, textAlign: 'center' }}>{countrycurrentcode}</Text>
                                        <MaterialIcons name='arrow-drop-down' size={30} />
                                    </TouchableOpacity>

                                    <View style={{ width: rw(40), borderBottomWidth: 2, borderBottomColor: Colors.bk, height: rh(5), alignItems: 'center' }}>
                                        <TextInput value={productprice} style={Styles.addproductparttextinput} placeholder={"Price"} onChangeText={e => setproductprice(e)} />
                                    </View>

                                    <TouchableOpacity onPress={() => setpaymentmethodmodal(true)} style={{ bottom: rh(1) }}>
                                        <Image source={{ uri: showdumyimage }} style={{ height: 50, width: 50 }} resizeMode={'contain'} resizeMethod={'resize'} />
                                    </TouchableOpacity>
                                </View>
                            </View>
                        </View>
                        :
                        null
                    }

                    <View style={{ height: rh(5), width: rw(90), flexDirection: "row", alignContent: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: rh(1) }}>
                        <View>
                            <Text style={Styles.innersecondhadding}>Product Image</Text>
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
                        <View>

                            <View style={{ flexDirection: "row", height: rh(10), marginTop: rh(3), justifyContent: 'center' }}>
                                <TouchableOpacity onPress={() => opencamera()}>
                                    <View style={{ borderRightWidth: 1, borderColor: Colors.gry, height: rh(10), width: rw(50), flexDirection: "row", alignItems: 'center', }}>
                                        <View style={{ marginLeft: rw(6) }}>
                                            <CameraSvg width={'55px'} height={'55px'} />
                                        </View>
                                        <Text style={{ color: Colors.gry, fontWeight: '500', fontSize: FontSize.font18, fontFamily: 'Inter-Medium', textAlign: 'center', marginLeft: rw(2) }}>Camera</Text>
                                    </View>
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => selectimagefromgallery()}>
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
                                {Img === '' ?
                                    <View>
                                    </View>
                                    :

                                    // <Image source={{ uri: Img }} style={{ width: rw(90), resizeMode: 'stretch', height: rh(40) }} />
                                    <View style={{ justifyContent: "center", alignItems: "center" }}>
                                        <AutoHeightImage
                                            resizeMode="stretch"
                                            width={200}
                                            style={{ borderRadius: 10 }}
                                            source={{ uri: Img }}
                                        />
                                    </View>
                                }

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
                            <Text style={Styles.txtinputsheaddings}>Merchant</Text>
                            <View style={Styles.merchantinputouterview}>
                                <TextInput value={merchantname} style={Styles.addproductparttextinput} onChangeText={e => setmerchantname(e)} />
                            </View>
                            <Text style={Styles.txtinputsheaddings}>Location</Text>
                            <View style={Styles.merchantinputouterview}>
                                <TextInput value={merchantlocation} style={Styles.addproductparttextinput} onChangeText={e => setmerchantlocation(e)} />
                            </View>
                            <Text style={Styles.txtinputsheaddings}>Website</Text>
                            <View style={[Styles.merchantinputouterview]}>
                                <TextInput value={merchantwebsite} style={Styles.addproductparttextinput} onChangeText={e => setmerchantwebsite(e)} keyboardType={'url'} />
                            </View>
                            <Text style={Styles.txtinputsheaddings}>Contact Number</Text>
                            <View style={[Styles.merchantinputouterview]}>
                                <TextInput value={merchantcontactno} style={Styles.addproductparttextinput} onChangeText={e => setmerchantcontactno(e)} keyboardType={'phone-pad'} />
                            </View>
                        </View>
                        : null
                    }

                    <View style={{ height: rh(5), width: rw(90), flexDirection: "row", alignContent: 'center', alignItems: 'center', justifyContent: "space-between", marginTop: rh(2) }}>
                        <View>
                            <Text style={Styles.innersecondhadding}>Notes</Text>
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
                        <View style={{ flex: 1, borderWidth: 1, borderColor: Colors.bk, borderRadius: 10, justifyContent: "flex-start", alignContent: "flex-start" }}>
                            <TextInput
                                multiline
                                numberOfLines={10}
                                style={Styles.input}
                                onChangeText={e => setnotes(e)}
                                value={notes}
                            //keyboardType={"email-address"}
                            />
                        </View>
                        : null
                    }

                    <View style={{ height: rh(15), width: rw(90), }}>
                    </View>
                </ScrollView>

            </View>
            <View style={[Styles.nextanssavedbuttonview, { marginHorizontal: rw(3) }]}>

                {buttonloader ?
                    <Loaders />
                    :

                    <TouchableOpacity style={Styles.bottombtn} onPress={() => Addrecord()}>
                        <Text style={Styles.bottombtntext}>Save</Text>
                    </TouchableOpacity>
                }
            </View>


            {currencymodal ?
                <Modal>
                    <View style={{ flex: 1, marginHorizontal: rw(5) }}>
                        <View style={{ marginTop: rh(2), }}>
                            <TouchableOpacity onPress={() => setcurrencymodal(false)} style={{ right: 6 }}>
                                <Entypo name='cross' size={30} color={Colors.yellow} />
                            </TouchableOpacity>
                            <View style={{ marginTop: rh(1) }}>
                                <Text style={{ fontSize: FontSize.font19, color: Colors.gry }}>What was the currency used?</Text>
                            </View>
                            <View style={{ height: rh(6), width: rw(90), backgroundColor: '#D6D2D2', borderRadius: 7, alignContent: 'center', justifyContent: "center", marginTop: rh(0.5) }}>
                                <TextInput placeholder='Search' style={{ padding: 0, fontSize: FontSize.font17, color: Colors.black, paddingLeft: rw(4) }} onChangeText={(text) => searchFilterFunction(text)}
                                    value={search} />
                            </View>


                            <View>
                                <FlatList
                                    data={filteredDataSource}
                                    keyExtractor={(item, index) => index.toString()}
                                    ItemSeparatorComponent={ItemSeparatorView}
                                    renderItem={ItemView}
                                />
                            </View>

                        </View>
                    </View>
                </Modal>
                :
                null}

            {paymentmethodmodal ?
                <Modal>
                    <View style={{ flex: 1, marginHorizontal: rw(5) }}>
                        <View style={{ marginTop: rh(2), }}>
                            <TouchableOpacity onPress={() => setpaymentmethodmodal(false)} style={{ right: 6 }}>
                                <Entypo name='cross' size={30} color={Colors.yellow} />
                            </TouchableOpacity>
                            <View style={{ marginTop: rh(1) }}>
                                <Text style={{ fontSize: FontSize.font19, color: Colors.gry }}>How did you pay for your item?</Text>
                            </View>




                            <FlatList
                                data={currencyimages}
                                keyExtractor={item => item.id}
                                renderItem={currencyimagesrenderfunction}
                                contentContainerStyle={{ marginTop: rh(2), justifyContent: "center" }}
                            />


                        </View>
                    </View>
                </Modal>
                :
                null}

        </SafeAreaView>
    )
}

export default EditProductAddtionalStep







