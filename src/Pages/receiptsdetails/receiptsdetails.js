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

const Receiptsdetails = ({ navigation }) => {

    const dd = "03452163841"

    const openDialScreen = () => {
        let number = '';
        if (Platform.OS === 'ios') {
            number = 'telprompt:${091123456789}';
        } else {
            number = 'tel:${091123456789}';
        }
        Linking.openURL(number);
    };



    return (
        <SafeAreaView style={Styles.container}>
            <ImageHeaderScrollView
                maxHeight={350}
                minHeight={0}
                showsVerticalScrollIndicator={false}
                // minOverlayOpacity={0.5}
                // overlayColor={Colors.gry}
                //  disableHeaderGrow={true}
                // headerImage={() => <Image source={require('../../Assets/photos/Oicone.png')} style={{ height: rh(20), width: rw(20) }} resizeMode={'cover'} />}

                headerImage={require('../../Assets/photos/Oicone.png')}
                renderForeground={() => (
                    <View style={{ height: rh(8), flexDirection: "row", marginHorizontal: rw(2), width: rw(94), alignItems: 'center', justifyContent: 'space-between', bottom: rh(1), }} >
                        <View>
                            <TouchableOpacity onPress={() => navigation.goBack()}>
                                <BlackBackSvg width={'21px'} height={'21px'} />
                            </TouchableOpacity>
                        </View>
                        <View style={{ flexDirection: 'row', justifyContent: "space-between", width: rw(20) }}>
                            <ShareSvg width={'24px'} height={'22px'} />
                            <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
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
                            <MaterialIcons name='folder' size={45} color={'red'} />
                            <Text style={{ fontSize: FontSize.font16, color: Colors.black, fontWeight: '700', fontFamily: 'Inter-Medium', left: rw(3) }}>Personal</Text>
                        </View>
                        <View>
                            <Text style={{ fontSize: FontSize.font16, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', marginTop: rh(1) }}>7 Feb 2022</Text>
                            <Text style={{ color: Colors.gry, fontSize: FontSize.font12, }}>Purchase Date</Text>
                        </View>
                    </View>
                    <View style={{ width: rw(100), borderBottomColor: Colors.gry, borderBottomWidth: 3, }}>
                        <View style={{ marginHorizontal: rw(4), }}>
                            <View style={{ backgroundColor: Colors.red, width: rw(25), alignItems: 'center', marginTop: rh(1.5), borderRadius: 4 }}>
                                <Text style={{ color: Colors.white, fontSize: FontSize.font12 }}>360 days left</Text>
                            </View>
                            <View style={{ marginTop: rh(3), marginBottom: rh(2.5) }}>
                                <Text style={Styles.boldheadding}>Itel itel L6006</Text>
                                <Text style={Styles.textsubhadding}>1 year warranty . Expires on 6 Feb 2023</Text>
                            </View>
                        </View>

                    </View>
                    <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1 }}>
                        <View style={{ marginTop: rh(2) }}>
                            <Text style={Styles.boldheadding}>Product Info</Text>
                            <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Modal Number</Text>
                            <Text style={[Styles.lightbold,]}>Itel L6006</Text>
                            <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Price</Text>
                            <Text style={Styles.lightbold}>0</Text>
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
                            <Text style={[Styles.lightbold,]}>7 Feb 2022</Text>
                            <Text style={[Styles.lightbold,]}>15 year</Text>
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
                            <Text style={[Styles.lightbold,]}>stratapro</Text>
                            <Text style={[Styles.lightbold,]}>1 year</Text>
                        </View>
                        <View style={{ height: rh(2) }}>
                        </View>
                    </View>




                    <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                        <View style={{ marginTop: rh(2) }}>
                            <Text style={Styles.boldheadding}>Merchant</Text>
                        </View>

                        <Text style={[Styles.textsubhadding, { marginTop: rh(1) }]}>Provider</Text>
                        <Text style={[Styles.lightbold,]}>stratapro</Text>

                        <View>
                            <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Location</Text>
                            <Text style={[Styles.lightbold,]}>1912 Sampson Street,Denver</Text>
                        </View>

                        <View >
                            <Text style={[Styles.textsubhadding, { marginTop: rh(2) }]}>Contact Number</Text>
                            <View style={{ flexDirection: "row", width: rw(90), justifyContent: 'space-between', alignItems: "center", alignContent: "center", }}>
                                <Text style={[Styles.lightbold,]}>454-454-655</Text>
                                <TouchableOpacity onPress={() => openDialScreen()}>
                                    <MaterialIcons name='call' size={30} color={Colors.yellow} />
                                </TouchableOpacity>
                            </View>
                        </View>



                        <View style={{ height: rh(2) }}>
                        </View>
                    </View>



                    <View style={{ marginHorizontal: rw(4), borderBottomColor: Colors.gry, borderBottomWidth: 1, }}>
                        <Text style={[Styles.boldheadding, { marginVertical: rh(2) }]}>Notes</Text>
                        <View style={{ paddingLeft: 10, paddingRight: 10, paddingBottom: 10 }}>
                            <Text style={[Styles.textsubhadding, { marginTop: rh(0), lineHeight: 19 }]}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of typescrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into
                                electronic typesetting, remaining essentially unchanged. It was popularised
                            </Text>
                        </View>
                        <View style={{ height: rh(1) }}>
                        </View>
                    </View>


                    <View style={{ marginHorizontal: rw(4), justifyContent: "center", alignContent: "center", borderBottomColor: Colors.gry, borderBottomWidth: 1, paddingBottom: rh(2) }}>
                        <Text style={[Styles.boldheadding, { marginTop: rh(1) }]}>Product Images</Text>
                        <TouchableOpacity style={{ alignSelf: 'center', marginTop: rh(3) }}>
                            <Image source={require('../../Assets/photos/PhonePhoto.jpeg')} resizeMode={'contain'} resizeMethod={'resize'} style={{ height: imageheight / 1.5, width: imagwidth / 1.4, borderLeftWidth: 1, borderRadius: 10 }} />
                        </TouchableOpacity>
                    </View>

                    <View style={{ marginHorizontal: rw(4), justifyContent: "center", alignContent: "center" }}>
                        <Text style={[Styles.boldheadding, { marginTop: rh(1) }]}>Receipts</Text>
                        <TouchableOpacity style={{ alignSelf: 'center', marginTop: rh(3) }}>
                            <Image source={require('../../Assets/photos/PhonePhoto.jpeg')} resizeMode={'contain'} resizeMethod={'resize'} style={{ height: imageheight / 1.5, width: imagwidth / 1.4, borderLeftWidth: 1, borderRadius: 10 }} />
                        </TouchableOpacity>
                    </View>


                </ScrollView>
            </ImageHeaderScrollView>
        </SafeAreaView>


    )
}

export default Receiptsdetails






























