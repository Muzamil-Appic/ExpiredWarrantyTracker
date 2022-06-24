import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, Image, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import BlackBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import Styles from './receiptsdetails.Styles';
import AntDesign from 'react-native-vector-icons/AntDesign'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import AnimatedHeader from 'react-native-animated-header';
import FontAwesome from 'react-native-vector-icons/FontAwesome'
import EditPencilSvg from '../../Assets/Svg/EditPencilSvg.svg'
import ShareSvg from '../../Assets/Svg/ShareSvg.svg'
import BG from '../../Assets/photos/Oicone.png'

const Receiptsdetails = ({ navigation }) => {

    return (

        <SafeAreaView style={Styles.container}>
            <AnimatedHeader
                style={{ flex: 1 }}
                backStyle={{ marginleft: 400 }}
                renderLeft={() =>
                (
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: rw(3) }}>
                        <BlackBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                )
                }
                renderRight={() => (
                    <View style={{ width: rw(20), flexDirection: "row", justifyContent: 'space-around', right: rw(2) }}>
                        <TouchableOpacity>
                            <ShareSvg width={'24px'} height={'22px'} />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => navigation.navigate('Edit')}>
                            <EditPencilSvg width={'24px'} height={'26px'} />
                        </TouchableOpacity>

                    </View>
                )}

                headerMaxHeight={700}
                noBorder={false}
                imageSource={BG}
                //  toolbarColor='#FFF'
                disabled={false}
            //  parallax={false}
            >

                <ScrollView style={{ flexGrow: 1 }}>
                    <Text style={{ fontSize: 190 }}>oooo</Text>
                    <Text style={{ fontSize: 190 }}>oooo</Text>

                    <Text style={{ fontSize: 190 }}>oooo</Text>

                </ScrollView>
            </AnimatedHeader>
        </SafeAreaView>


    )
}

export default Receiptsdetails