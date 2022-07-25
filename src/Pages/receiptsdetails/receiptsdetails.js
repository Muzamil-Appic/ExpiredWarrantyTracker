import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, Image, View, Text, TouchableOpacity, TextInput, Linking, Platform } from 'react-native'
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
import BG from '../../Assets/photos/Oicone.png'
import { ImageHeaderScrollView, TriggeringView } from 'react-native-image-header-scroll-view';
const imageheight = Dimensions.get('window').height
const imagwidth = Dimensions.get('window').width
import AutoHeightImage from 'react-native-auto-height-image';
import { useIsFocused } from '@react-navigation/native';
import Loaders from '../../Components/Loaders';
const Receiptsdetails = ({ navigation, route }) => {

    const isfocudes = useIsFocused()
    const [imageloader, setimageloader] = useState(false)


    useEffect(() => {

    }, [isfocudes])

    const categoryfoldercolour = '#' + route.params.category_color

    console.log('====================================');
    console.log(route?.params?.ID);
    console.log('====================================');
    const kk = "03452163841"

    const openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
            number = 'telprompt:${route?.params}';
        } else {
            number = 'tel:${091123456789}';
        }
        Linking.openURL(number);
    };



    const onPressMobileNumberClick = (number) => {

        let phoneNumber = '';
        if (Platform.OS === 'android') {
            phoneNumber = `tel:${number}`;
        } else {
            phoneNumber = `telprompt:${number}`;
        }

        Linking.openURL(phoneNumber);
    }


    return (
        <SafeAreaView style={Styles.container}>
            <ImageHeaderScrollView
                maxHeight={350}
                minHeight={0}
                //   showsVerticalScrollIndicator={false}
                //   minOverlayOpacity={0.5}
                //   overlayColor={Colors.gry}
                //   disableHeaderGrow={true}
                headerImage={{ uri: route?.params?.product_image }}
                // headerImage={<Image source={route?.params?.receipt_img} style={{ height: 20, width: Dimensions.get('window').width }} />}
                renderForeground={() => (
                    <View style={{ height: rh(8), flexDirection: "row", marginHorizontal: rw(2), width: rw(94), alignItems: 'center', justifyContent: 'space-between', bottom: rh(1), }} >
                        <View>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <BlackBackSvg width={'21px'} height={'21px'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: rw(20) }}>
                            <ShareSvg width={'24px'} height={'22px'} />
                            <TouchableOpacity onPress={() => navigation.navigate('Edit', route?.params?.ID)}>
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
                                <Text style={{ color: Colors.white, fontSize: FontSize.font12 }}>{route?.params?.datediff} days left</Text>
                            </View>
                            <View style={{ marginTop: rh(3), marginBottom: rh(2.5) }}>
                                <Text style={Styles.boldheadding}>{route?.params?.name}</Text>
                                <Text style={Styles.textsubhadding}>{route?.params?.duration_years} Expires {route?.params?.expiry_date}</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1 }}>
                        <View style={{ marginTop: rh(2) }}>
                            <Text style={Styles.boldheadding}>Product Info</Text>

                            <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Modal Number</Text>
                            <Text style={[Styles.lightbold,]}>{route?.params?.model_number}</Text>

                            <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Price</Text>
                            <Text style={Styles.lightbold}>{route?.params?.product_price}</Text>
                            <View style={{ height: rh(2) }}>
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
                    <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                        <View style={{ marginTop: rh(2) }}>
                            <Text style={Styles.boldheadding}>Extended Warranty</Text>
                        </View>
                        <View style={{ marginTop: rh(0.5), flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                            <Text style={Styles.textsubhadding}>Provider</Text>
                            <Text style={Styles.textsubhadding}>Duration</Text>
                        </View>
                        <View style={{ flexDirection: "row", width: rw(80), justifyContent: 'space-between' }}>
                            <Text style={[Styles.lightbold,]}>{route?.params?.warranty_provider_name}</Text>
                            <Text style={[Styles.lightbold,]}>{route?.params?.extended_warranty_duration}</Text>
                        </View>
                        <View style={{ height: rh(2) }}>
                        </View>
                    </View>




                    <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                        <View style={{ marginTop: rh(2) }}>
                            <Text style={Styles.boldheadding}>Merchant</Text>
                        </View>

                        <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Name</Text>
                        <Text style={[Styles.lightbold,]}>{route?.params?.merchant_name}</Text>
                        <View>
                            <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Location</Text>
                            <Text style={[Styles.lightbold,]}>{route?.params?.merchant_location}</Text>
                        </View>

                        <View >
                            <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Contact Number</Text>
                            <View style={{ flexDirection: "row", width: rw(90), justifyContent: 'space-between', alignItems: "center", alignContent: "center", }}>
                                <Text style={[Styles.lightbold,]}>{route?.params?.merchant_contact_no}</Text>
                                <TouchableOpacity onPress={() => onPressMobileNumberClick(route?.params?.merchant_contact_no)}>
                                    <MaterialIcons name='call' size={30} color={Colors.yellow} />
                                </TouchableOpacity>
                            </View>
                        </View>



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


                    <View style={{ marginHorizontal: rw(4), justifyContent: "center", alignContent: "center", borderBottomColor: Colors.gry, borderBottomWidth: 1, paddingBottom: rh(2) }}>
                        <Text style={[Styles.boldheadding, { marginTop: rh(1) }]}>Product Images</Text>
                        <TouchableOpacity style={{ alignSelf: 'center', marginTop: rh(3) }}>
                            <View style={{ justifyContent: "center", alignItems: "center" }}>
                                <AutoHeightImage
                                    resizeMode="stretch"
                                    width={300}
                                    style={{ borderRadius: 10 }}
                                    source={{ uri: route?.params?.product_image }}
                                />

                                {/* <Image source={{ uri: route?.params?.product_image }} style={{ height: 500, width: 300, }} /> */}
                                {/* <Image source={{ uri: route?.params?.receipt_img }} style={{ height: 500, width: 300, }} /> */}
                            </View>
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: rw(4), justifyContent: "center", alignContent: "center" }}>
                        <Text style={[Styles.boldheadding, { marginTop: rh(1) }]}>Receipts</Text>
                        {/* <TouchableOpacity style={{ alignSelf: 'center', marginTop: rh(3) }}> */}

                            <View style={{ justifyContent: "center", alignItems: "center" }}>
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


                </ScrollView>
            </ImageHeaderScrollView>
        </SafeAreaView >


    )
}

export default Receiptsdetails






























