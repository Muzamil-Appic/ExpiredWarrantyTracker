import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, Image, View, Text, TouchableOpacity, TextInput, Linking, Platform, PermissionsAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import BlackBackSvg from '../../Assets/Svg/BlackBackSvg.svg'
import Styles from './receiptsdetails.Styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AnimatedHeader from 'react-native-animated-header';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EditPencilSvg from '../../Assets/Svg/EditPencilSvg.svg'
import ShareSvg from '../../Assets/Svg/ShareSvg.svg'
import EvilIcons from 'react-native-vector-icons/EvilIcons'
import BG from '../../Assets/photos/Oicone.png'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
const imageheight = Dimensions.get('window').height
const imagwidth = Dimensions.get('window').width
import AutoHeightImage from 'react-native-auto-height-image';
import { useIsFocused } from '@react-navigation/native';
import Loaders from '../../Components/Loaders';
import RNHTMLtoPDF from 'react-native-html-to-pdf';
const Receiptsdetails = ({ navigation, route }) => {

    console.log('====================================');
    console.log(route?.params?.receipt_img);
    console.log('====================================');

    console.log('====================================');
    console.log(route?.params?.receipt_img);
    console.log('====================================');
    const isfocudes = useIsFocused()
    const [imageloader, setimageloader] = useState(false)
    const [filePath, setFilePath] = useState('');


    const isPermitted = async () => {
        if (Platform.OS === 'android') {
            try {
                const granted = await PermissionsAndroid.request(
                    PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE,
                    {
                        title: 'External Storage Write Permission',
                        message: 'App needs access to Storage data',
                    },
                );
                return granted === PermissionsAndroid.RESULTS.GRANTED;
            } catch (err) {
                alert('Write permission err', err);
                return false;
            }
        } else {
            return true;
        }
    };


    const createPDF = async () => {
        if (await isPermitted()) {
            let options = {
                //Content to print
                html:
                    `

                    <html>
                   
                    <body>
                    <h1>Merchant Information</h1>
                    <h2 >Name:${route?.params?.name} </h2>
                    <h2 >Merchant Name:${route?.params?.merchant_name} </h2>
                    <h2 >Merchant Contact Number:${route?.params?.merchant_contact_no} </h2>
                    <h2 >Merchant Location:${route?.params?.merchant_location} </h2>
                    <h2 >Merchant Website:${route?.params?.merchant_website} </h2> 
                    <h2 >Merchant Website:${route?.params?.merchant_website} </h2> <br/>

                    <h1>Product Information</h1>
                    <h2 >Product Nameooooooooo:${route?.params?.name} </h2>
                    <h2 >Product Price:${route?.params?.product_price} </h2>
                    <h2 >Purchased Date:${route?.params?.purchase_date} </h2>
                    <h2 >Expiry Date:${route?.params?.expiry_date} </h2>  <br/>


                     <h1>Product Receipt Photo</h1>
                    <img src=${route?.params?.receipt_img} alt="Girl in a jacket" width="500" height="600">                    
                    </body>
                    </html>





                    
                   
                    





                  
    
                    `,                //File Name
                fileName: 'ExpiredWarrantyTrackerReceipt',
                //File directory
                directory: 'docs',
            };
            let file = await RNHTMLtoPDF.convert(options);
            console.log(file.filePath);
            setFilePath(file.filePath);
            navigation.navigate('PdfView', filePath)
        }
    };
















    useEffect(() => {
    }, [isfocudes])


    console.log('====================================');
    console.log(route?.params);
    console.log('====================================');
    const categoryfoldercolour = '#' + route.params.category_color











    const onPressMobileNumberClick = (number) => {

        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        } else {
            phoneNumber = `telprompt:${number}`;
        }

        Linking.openURL(phoneNumber);
    }

    { console.log("00000000000000", route?.params?.product_image) }
    return (
        <SafeAreaView style={Styles.container}>

            {route?.params?.product_image === '' ?

                <ImageHeaderScrollView
                    maxHeight={450}
                    minHeight={0}
                    renderHeader={() => <Image source={require('../../Assets/photos/DummyImage.png')} style={{ height: 450, width: rw(100), resizeMode: 'contain', }} />}
                    //   showsVerticalScrollIndicator={false}
                    //   minOverlayOpacity={0.5}
                    //   overlayColor={Colors.gry}
                    // disableHeaderGrow={true}
                    // renderHeader={() => <Image source={route?.params?.receipt_img} style={{
                    //     height: 100, width: 100, alignSelf: 'stretch',
                    //     resizeMode: 'cover',
                    // }} />}

                    // renderHeader={() =>
                    //  (
                    //     <View style={{ flex: 1 }}>
                    //         <Image source={route?.params?.receipt_img} style={{ height: 100, width: 100 }} />
                    //     </View>
                    //  )
                    // }


                    //  headerImage={{ uri: '../../Assets/photosDummyImage.png' }}
                    // headerImage={<Image source={route?.params?.receipt_img} style={{ height: 10, width: 10 }} />}
                    renderForeground={() => (
                        <View style={{ height: rh(8), flexDirection: "row", marginHorizontal: rw(2), width: rw(94), alignItems: 'center', justifyContent: 'space-between', bottom: rh(1), }} >
                            <View>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <BlackBackSvg width={'21px'} height={'21px'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", width: rw(20) }}>
                                <TouchableOpacity onPress={() => navigation.navigate('PdfView', route?.params)}>
                                    <ShareSvg width={'24px'} height={'22px'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Edit', route?.params)}>
                                    <EditPencilSvg width={'24px'} height={'26px'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                >



                    <ScrollView style={{ flexGrow: 1, backgroundColor: Colors.white, borderTopRightRadius: 24, borderTopLeftRadius: 24, marginBottom: rh(3) }}>
                        <View style={{ alignSelf: 'center', width: rw(20), borderBottomColor: '#C4C4C4', borderBottomWidth: 5, top: rh(1.5), borderRadius: 100 }}>
                        </View>
                        <View style={{ height: rh(10), borderBottomWidth: 1, borderColor: Colors.gry, marginHorizontal: rw(4), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }} >
                                <MaterialIcons name='folder' size={45} color={categoryfoldercolour} />
                                <Text style={{ fontSize: FontSize.font16, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium', left: rw(3) }}>{route?.params.category_name}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: FontSize.font16, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', marginTop: rh(1) }}>{route?.params?.purchase_date}</Text>
                                <Text style={{ color: Colors.gry, fontSize: FontSize.font12, }}>Purchase Date</Text>
                            </View>
                        </View>
                        <View style={{ width: rw(100), borderBottomColor: Colors.gry, borderBottomWidth: 3, }}>
                            <View style={{ marginHorizontal: rw(4), }}>
                                <View style={{ backgroundColor: Colors.red, width: rw(25), alignItems: 'center', marginTop: rh(1.5), borderRadius: 4 }}>
                                    {route?.params?.datediff === '9999-01-01' ?

                                        <Text style={{ color: Colors.white, fontSize: FontSize.font12 }}>Life Time</Text>
                                        :
                                        <Text style={{ color: Colors.white, fontSize: FontSize.font12 }}>{route?.params?.datediff} </Text>
                                    }
                                </View>
                                <View style={{ marginTop: rh(3), marginBottom: rh(2.5) }}>
                                    <Text style={Styles.boldheadding}>{route?.params?.name}</Text>
                                    {route?.params?.expiry_date === '9999-01-01' ?
                                        <Text style={Styles.textsubhadding}>Life Time Warranty</Text>
                                        :
                                        <Text style={Styles.textsubhadding}> Expires {route?.params?.expiry_date}</Text>
                                    }

                                </View>


                                {route?.params?.name_multipart != '' ?
                                    <View style={{ marginBottom: rh(2.5) }}>
                                        <Text style={Styles.boldheadding}>{route?.params?.name_multipart}</Text>
                                        {route?.params?.duration_multipart === '9999-01-01' ?
                                            <Text style={Styles.textsubhadding}>Life Time Warranty</Text>
                                            :
                                            // <Text style={Styles.textsubhadding}> Expires {route?.params?.expiry_date}</Text>
                                            <Text style={Styles.textsubhadding}> {route?.params?.duration_multipart}</Text>
                                        }
                                    </View>
                                    : null}

                                {route?.params?.warranty_provider_name != '' ?
                                    <View style={{ marginBottom: rh(2.5) }}>
                                        <Text style={Styles.boldheadding}>{route?.params?.warranty_provider_name}</Text>
                                        {route?.params?.duration_multipart === '9999-01-01' ?
                                            <Text style={Styles.textsubhadding}>Life Time Warranty</Text>
                                            :
                                            // <Text style={Styles.textsubhadding}> Expires {route?.params?.expiry_date}</Text>
                                            <Text style={Styles.textsubhadding}> {route?.params?.extended_warranty_provider_expirydate}</Text>
                                        }
                                    </View>
                                    : null}
                            </View>

                        </View>
                        <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1 }}>
                            <View style={{ marginTop: rh(2) }}>
                                <Text style={Styles.boldheadding}>Product Info</Text>
                                {route?.params?.model_number != '' ?
                                    <View>
                                        <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Modal Number</Text>
                                        <Text style={[Styles.lightbold,]}>{route?.params?.model_number}</Text>
                                    </View>
                                    :
                                    null}
                                {route?.params?.serial_number != '' ?
                                    <View>
                                        <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Serial Number</Text>
                                        <Text style={[Styles.lightbold,]}>{route?.params?.serial_number}</Text>
                                    </View>
                                    :
                                    null}
                                <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Price</Text>
                                <View style={{ flexDirection: "row", width: rw(90), justifyContent: "space-between" }}>
                                    <Text style={Styles.lightbold}> {route?.params?.pricecode_and_pricename} {route?.params?.product_price}</Text>
                                    <Image source={{ uri: route?.params?.paymentmethod_image }} style={{ height: 50, width: 50, bottom: rh(2) }} resizeMode={'contain'} resizeMethod={'resize'} />
                                </View>

                            </View>

                        </View>
                        <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                            <View style={{ marginTop: rh(2) }}>
                                <Text style={Styles.boldheadding}>Warranty Details</Text>
                            </View>
                            <View style={{ marginTop: rh(0.5), flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                <Text style={Styles.textsubhadding}>Purchased Date</Text>
                                <Text style={Styles.textsubhadding}>Duration</Text>
                            </View>
                            <View style={{ flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                <Text style={[Styles.lightbold,]}>{route?.params?.purchase_date}</Text>
                                <Text style={[Styles.lightbold,]}>{route?.params?.warranty_details_duration}</Text>
                            </View>
                            <View style={{ height: rh(2) }}>
                            </View>
                        </View>
                        {route?.params?.extended_warranty_duration != '' ?
                            <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                                <View style={{ marginTop: rh(2) }}>
                                    <Text style={Styles.boldheadding}>Extended Warranty</Text>
                                </View>
                                <View style={{ marginTop: rh(0.5), flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                    <Text style={Styles.textsubhadding}>Provider</Text>
                                    <Text style={Styles.textsubhadding}>Duration</Text>
                                </View>
                                <View View style={{ flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.warranty_provider_name}</Text>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.extended_warranty_duration}</Text>
                                </View>
                                <View style={{ height: rh(2) }}>
                                </View>
                            </View>
                            :
                            null


                        }
                        {route?.params?.no_of_days_before_expiry_warning != '' ?

                            <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                                <View style={{ marginTop: rh(2) }}>
                                    <Text style={Styles.boldheadding}>Reminder</Text>
                                </View>
                                <View style={{ marginTop: rh(0.5), flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.no_of_days_before_expiry_warning} Days ,Before The Warrant Expired</Text>
                                </View>

                                <View style={{ height: rh(2) }}>
                                </View>
                            </View>
                            : null}


                        <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                            <View style={{ marginTop: rh(2) }}>
                                <Text style={Styles.boldheadding}>Merchant</Text>
                            </View>
                            {route?.params?.merchant_name != '' ?

                                <View>
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Name</Text>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.merchant_name}</Text>
                                </View>
                                :
                                null}
                            {route?.params?.merchant_location != '' ?
                                <View>
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Location</Text>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.merchant_location}</Text>
                                </View>
                                :
                                null}
                            {route?.params?.merchant_website != '' ?
                                // <View>
                                //     <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Website</Text>
                                //     <Text style={[Styles.lightbold,]}>{route?.params?.merchant_website}</Text>
                                // </View>
                                <View >
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Website</Text>
                                    <View style={{ flexDirection: "row", width: rw(90), justifyContent: 'space-between', alignItems: "center", alignContent: "center", }}>
                                        <Text style={[Styles.lightbold,]}>{route?.params?.merchant_website}</Text>
                                        <TouchableOpacity onPress={() => Linking.openURL(`${route?.params?.merchant_website}`)}>
                                            <EvilIcons name='external-link' size={30} color={Colors.yellow} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                :
                                null}
                            {route?.params?.merchant_contact_no != '' ?

                                <View >
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Contact Number</Text>
                                    <View style={{ flexDirection: "row", width: rw(90), justifyContent: 'space-between', alignItems: "center", alignContent: "center", }}>
                                        <Text style={[Styles.lightbold,]}>{route?.params?.merchant_contact_no}</Text>
                                        <TouchableOpacity onPress={() => onPressMobileNumberClick(route?.params?.merchant_contact_no)}>
                                            <MaterialIcons name='call' size={30} color={Colors.yellow} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                : null}



                            <View style={{ height: rh(2) }}>
                            </View>
                        </View>


                        {route?.params?.notes === '' ?
                            null :
                            <View View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                                <Text style={[Styles.boldheadding, { marginVertical: rh(2) }]}>Notes</Text>
                                <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(0), lineHeight: 19 }]}>{route?.params?.notes}</Text>
                                </View>
                                <View style={{ height: rh(1) }}>
                                </View>
                            </View>

                        }
                        {route?.params?.product_image != '' ?
                            <View style={{ marginHorizontal: rw(4), justifyContent: "center", alignContent: "center", paddingBottom: rh(2) }}>
                                <Text style={[Styles.boldheadding, { marginTop: rh(1) }]}>Product Images</Text>
                                {/* <TouchableOpacity style={{ alignSelf: 'center', marginTop: rh(3) }}> */}
                                <View style={{ bottom: rh(2) }}>
                                    <View style={{ justifyContent: "center", alignItems: "center", top: rh(2), bottom: rh(2) }}>
                                        <AutoHeightImage
                                            resizeMode="stretch"
                                            width={300}
                                            style={{ borderRadius: 10 }}
                                            source={{ uri: route?.params?.product_image }}
                                        />
                                        {/* <Image source={{ uri: route?.params?.product_image }} style={{ height: 500, width: 300, }} /> */}
                                        {/* <Image source={{ uri: route?.params?.receipt_img }} style={{ height: 500, width: 300, }} /> */}
                                    </View>
                                </View>
                                {/* </TouchableOpacity> */}
                            </View>
                            : null}
                        {route?.params?.receipt_img != '' ?
                            <View style={{ marginHorizontal: rw(4), justifyContent: "center", alignContent: "center" }}>
                                <Text style={[Styles.boldheadding, { marginTop: rh(1) }]}>Receipts</Text>
                                {/* <TouchableOpacity style={{ alignSelf: 'center', marginTop: rh(3) }}> */}

                                <View style={{ justifyContent: "center", alignItems: "center", top: rh(2), bottom: rh(2) }}>
                                    <AutoHeightImage
                                        resizeMode="stretch"
                                        width={300}
                                        style={{ borderRadius: 10 }}
                                        source={{ uri: route?.params?.receipt_img }}
                                    />

                                    {/* <Image source={{ uri: route?.params?.product_image }} style={{ height: 500, width: 300, }} /> */}
                                </View>
                                {/* </TouchableOpacity> */}
                            </View>
                            : null
                        }

                    </ScrollView>
                </ImageHeaderScrollView>

                :

                <ImageHeaderScrollView
                    maxHeight={450}
                    minHeight={0}
                    renderHeader={() => <Image source={{ uri: route?.params?.product_image }} style={{ height: 450, width: rw(100), resizeMode: 'contain', }} />}
                    //   showsVerticalScrollIndicator={false}
                    //   minOverlayOpacity={0.5}
                    //   overlayColor={Colors.gry}
                    // disableHeaderGrow={true}
                    // renderHeader={() => <Image source={route?.params?.receipt_img} style={{
                    //     height: 100, width: 100, alignSelf: 'stretch',
                    //     resizeMode: 'cover',
                    // }} />}

                    // renderHeader={() =>
                    //  (
                    //     <View style={{ flex: 1 }}>
                    //         <Image source={route?.params?.receipt_img} style={{ height: 100, width: 100 }} />
                    //     </View>
                    //  )
                    // }


                    // headerImage={{ uri: route?.params?.product_image }}
                    // headerImage={<Image source={route?.params?.receipt_img} style={{ height: 10, width: 10 }} />}
                    renderForeground={() => (
                        <View style={{ height: rh(8), flexDirection: "row", marginHorizontal: rw(2), width: rw(94), alignItems: 'center', justifyContent: 'space-between', bottom: rh(1), }} >
                            <View>
                                <TouchableOpacity onPress={() => navigation.goBack()}>
                                    <BlackBackSvg width={'21px'} height={'21px'} />
                                </TouchableOpacity>
                            </View>
                            <View style={{ flexDirection: 'row', justifyContent: "space-between", width: rw(20) }}>
                                <TouchableOpacity onPress={() => navigation.navigate('PdfView', route?.params)}>
                                    <ShareSvg width={'24px'} height={'22px'} />
                                </TouchableOpacity>
                                <TouchableOpacity onPress={() => navigation.navigate('Edit', route?.params)}>
                                    <EditPencilSvg width={'24px'} height={'26px'} />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                >



                    <ScrollView style={{ flexGrow: 1, backgroundColor: Colors.white, borderTopRightRadius: 24, borderTopLeftRadius: 24, marginBottom: rh(3) }}>
                        <View style={{ alignSelf: 'center', width: rw(20), borderBottomColor: '#C4C4C4', borderBottomWidth: 5, top: rh(1.5), borderRadius: 100 }}>
                        </View>
                        <View style={{ height: rh(10), borderBottomWidth: 1, borderColor: Colors.gry, marginHorizontal: rw(4), flexDirection: 'row', justifyContent: 'space-between', alignItems: "center" }}>
                            <View style={{ flexDirection: 'row', alignItems: "center", justifyContent: 'space-between' }} >
                                <MaterialIcons name='folder' size={45} color={categoryfoldercolour} />
                                <Text style={{ fontSize: FontSize.font16, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium', left: rw(3) }}>{route?.params.category_name}</Text>
                            </View>
                            <View>
                                <Text style={{ fontSize: FontSize.font16, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', marginTop: rh(1) }}>{route?.params?.purchase_date}</Text>
                                <Text style={{ color: Colors.gry, fontSize: FontSize.font12, }}>Purchase Date</Text>
                            </View>
                        </View>
                        <View style={{ width: rw(100), borderBottomColor: Colors.gry, borderBottomWidth: 3, }}>
                            <View style={{ marginHorizontal: rw(4), }}>
                                <View style={{ backgroundColor: Colors.red, width: rw(25), alignItems: 'center', marginTop: rh(1.5), borderRadius: 4 }}>
                                    {route?.params?.datediff === '9999-01-01' ?

                                        <Text style={{ color: Colors.white, fontSize: FontSize.font12 }}>{route?.params?.datediff}</Text>
                                        :
                                        <Text style={{ color: Colors.white, fontSize: FontSize.font12 }}>{route?.params?.datediff} days</Text>
                                    }
                                </View>
                                <View style={{ marginTop: rh(3), marginBottom: rh(2.5) }}>
                                    <Text style={Styles.boldheadding}>{route?.params?.name}</Text>
                                    {route?.params?.expiry_date === '9999-01-01' ?
                                        <Text style={Styles.textsubhadding}>Life Time Warranty</Text>
                                        :
                                        <Text style={Styles.textsubhadding}> Expires {route?.params?.expiry_date}</Text>
                                    }

                                </View>
                                {route?.params?.name_multipart != '' ?
                                    <View style={{ marginBottom: rh(2.5) }}>
                                        <Text style={Styles.boldheadding}>{route?.params?.name_multipart}</Text>
                                        {route?.params?.duration_multipart === '9999-01-01' ?
                                            <Text style={Styles.textsubhadding}>Life Time Warranty</Text>
                                            :
                                            <Text style={Styles.textsubhadding}> Expires {route?.params?.duration_multipart}</Text>
                                        }
                                    </View>
                                    : null}

                                {route?.params?.warranty_provider_name != '' ?
                                    <View style={{ marginBottom: rh(2.5) }}>
                                        <Text style={Styles.boldheadding}>{route?.params?.warranty_provider_name}</Text>
                                        {route?.params?.duration_multipart === '9999-01-01' ?
                                            <Text style={Styles.textsubhadding}>Life Time Warranty</Text>
                                            :
                                            // <Text style={Styles.textsubhadding}> Expires {route?.params?.expiry_date}</Text>
                                            <Text style={Styles.textsubhadding}> {route?.params?.extended_warranty_provider_expirydate}</Text>
                                        }
                                    </View>
                                    : null}
                            </View>

                        </View>
                        <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1 }}>
                            <View style={{ marginTop: rh(2) }}>
                                <Text style={Styles.boldheadding}>Product Info</Text>
                                {route?.params?.model_number != '' ?
                                    <View>
                                        <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Modal Number</Text>
                                        <Text style={[Styles.lightbold,]}>{route?.params?.model_number}</Text>
                                    </View>
                                    :
                                    null}
                                {route?.params?.serial_number != '' ?
                                    <View>
                                        <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Serial Number</Text>
                                        <Text style={[Styles.lightbold,]}>{route?.params?.serial_number}</Text>
                                    </View>
                                    :
                                    null}
                                <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Price</Text>
                                <View style={{ flexDirection: "row", width: rw(90), justifyContent: "space-between" }}>
                                    <Text style={Styles.lightbold}> {route?.params?.pricecode_and_pricename} {route?.params?.product_price}</Text>
                                    <Image source={{ uri: route?.params?.paymentmethod_image }} style={{ height: 50, width: 50, bottom: rh(2) }} resizeMode={'contain'} resizeMethod={'resize'} />
                                </View>

                            </View>

                        </View>
                        <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                            <View style={{ marginTop: rh(2) }}>
                                <Text style={Styles.boldheadding}>Warranty Details</Text>
                            </View>
                            <View style={{ marginTop: rh(0.5), flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                <Text style={Styles.textsubhadding}>Purchased Date</Text>
                                <Text style={Styles.textsubhadding}>Duration</Text>
                            </View>
                            <View style={{ flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                <Text style={[Styles.lightbold,]}>{route?.params?.purchase_date}</Text>
                                <Text style={[Styles.lightbold,]}>{route?.params?.warranty_details_duration}</Text>
                            </View>
                            <View style={{ height: rh(2) }}>
                            </View>
                        </View>
                        {route?.params?.extended_warranty_duration != '' ?
                            <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                                <View style={{ marginTop: rh(2) }}>
                                    <Text style={Styles.boldheadding}>Extended Warranty</Text>
                                </View>
                                <View style={{ marginTop: rh(0.5), flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                    <Text style={Styles.textsubhadding}>Provider</Text>
                                    <Text style={Styles.textsubhadding}>Duration</Text>
                                </View>
                                <View View style={{ flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.warranty_provider_name}</Text>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.extended_warranty_duration}</Text>
                                </View>
                                <View style={{ height: rh(2) }}>
                                </View>
                            </View>
                            :
                            null


                        }
                        {route?.params?.no_of_days_before_expiry_warning != '' ?

                            <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                                <View style={{ marginTop: rh(2) }}>
                                    <Text style={Styles.boldheadding}>Reminder</Text>
                                </View>
                                <View style={{ marginTop: rh(0.5), flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.no_of_days_before_expiry_warning} Days ,Before The Warrant Expired</Text>
                                </View>

                                <View style={{ height: rh(2) }}>
                                </View>
                            </View>
                            : null}


                        <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                            <View style={{ marginTop: rh(2) }}>
                                <Text style={Styles.boldheadding}>Merchant</Text>
                            </View>
                            {route?.params?.merchant_name != '' ?

                                <View>
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Name</Text>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.merchant_name}</Text>
                                </View>
                                :
                                null}
                            {route?.params?.merchant_location != '' ?
                                <View>
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Location</Text>
                                    <Text style={[Styles.lightbold,]}>{route?.params?.merchant_location}</Text>
                                </View>
                                :
                                null}
                            {route?.params?.merchant_website != '' ?
                                // <View>
                                //     <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Website</Text>
                                //     <Text style={[Styles.lightbold,]}>{route?.params?.merchant_website}</Text>
                                // </View>
                                <View >
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Website</Text>
                                    <View style={{ flexDirection: "row", width: rw(90), justifyContent: 'space-between', alignItems: "center", alignContent: "center", }}>
                                        <Text style={[Styles.lightbold,]}>{route?.params?.merchant_website}</Text>
                                        <TouchableOpacity onPress={() => Linking.openURL(`${route?.params?.merchant_website}`)}>
                                            <EvilIcons name='external-link' size={30} color={Colors.yellow} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                :
                                null}
                            {route?.params?.merchant_contact_no != '' ?

                                <View >
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Contact Number</Text>
                                    <View style={{ flexDirection: "row", width: rw(90), justifyContent: 'space-between', alignItems: "center", alignContent: "center", }}>
                                        <Text style={[Styles.lightbold,]}>{route?.params?.merchant_contact_no}</Text>
                                        <TouchableOpacity onPress={() => onPressMobileNumberClick(route?.params?.merchant_contact_no)}>
                                            <MaterialIcons name='call' size={30} color={Colors.yellow} />
                                        </TouchableOpacity>
                                    </View>
                                </View>
                                : null}



                            <View style={{ height: rh(2) }}>
                            </View>
                        </View>


                        {route?.params?.notes === '' ?
                            null :
                            <View View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                                <Text style={[Styles.boldheadding, { marginVertical: rh(2) }]}>Notes</Text>
                                <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                                    <Text style={[Styles.textsubhadding, { marginTop: rh(0), lineHeight: 19 }]}>{route?.params?.notes}</Text>
                                </View>
                                <View style={{ height: rh(1) }}>
                                </View>
                            </View>

                        }
                        {route?.params?.product_image != '' ?
                            <View style={{ marginHorizontal: rw(4), justifyContent: "center", alignContent: "center", borderBottomColor: Colors.gry, borderBottomWidth: 1, paddingBottom: rh(2) }}>
                                <Text style={[Styles.boldheadding, { marginTop: rh(1) }]}>Product Images</Text>
                                {/* <TouchableOpacity style={{ alignSelf: 'center', marginTop: rh(3) }}> */}
                                <View style={{ justifyContent: "center", alignItems: "center", top: rh(2), bottom: rh(2) }}>
                                    <AutoHeightImage
                                        resizeMode="stretch"
                                        width={300}
                                        style={{ borderRadius: 10 }}
                                        source={{ uri: route?.params?.product_image }}
                                    />
                                    {/* <Image source={{ uri: route?.params?.product_image }} style={{ height: 500, width: 300, }} /> */}
                                    {/* <Image source={{ uri: route?.params?.receipt_img }} style={{ height: 500, width: 300, }} /> */}
                                </View>
                                {/* </TouchableOpacity> */}
                            </View>
                            : null}
                        {route?.params?.receipt_img != '' ?
                            <View style={{ marginHorizontal: rw(4), justifyContent: "center", alignContent: "center" }}>
                                <Text style={[Styles.boldheadding, { marginTop: rh(1) }]}>Receipts</Text>
                                {/* <TouchableOpacity style={{ alignSelf: 'center', marginTop: rh(3) }}> */}

                                <View style={{ justifyContent: "center", alignItems: "center", top: rh(2) }}>
                                    <AutoHeightImage
                                        resizeMode="stretch"
                                        width={300}
                                        style={{ borderRadius: 10 }}
                                        source={{ uri: route?.params?.receipt_img }}
                                    />

                                    {/* <Image source={{ uri: route?.params?.product_image }} style={{ height: 500, width: 300, }} /> */}
                                </View>
                                {/* </TouchableOpacity> */}
                            </View>
                            : null
                        }

                    </ScrollView>
                </ImageHeaderScrollView>
            }
        </SafeAreaView >


    )
}

export default Receiptsdetails






























