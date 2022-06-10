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

const AddProductStepthree = ({ navigation }) => {
    const [prductname, setprductname] = useState('')
    const [durationenabled, setdurationenabled] = useState(true)


    return (
        <SafeAreaView style={Styles.container}>
            <ScrollView contentContainerStyle={{ marginHorizontal: rh(3), flexGrow: 1 }}>
                <View style={{ height: rh(4), marginTop: rh(2) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: rh(2) }}>
                    <Text style={Styles.textstep}>Step 3 of 4</Text>
                    <Text style={Styles.secondhadding}>Warranty Details</Text>
                </View>

                {/* <Text style={{ fontWeight: '400', fontSize: FontSize.fon15, color: Colors.gry, fontFamily: 'Inter-Regular' }}>Data of Purchase</Text> */}


                <View style={{ flexDirection: "row", justifyContent: "space-between", height: rh(10), marginTop: rh(2) }}>
                    <View style={{ height: rh(10), borderBottomWidth: 1, borderColor: Colors.gry, width: rw(33) }}>
                        <Text style={Styles.headingtext}>Data of Purchase</Text>
                        <TouchableOpacity>
                            <Text style={Styles.txtdate}>05-04-199</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={{ height: rh(10), borderBottomWidth: 1, borderColor: Colors.gry, width: rw(33) }}>
                        <Text style={Styles.headingtext}>Data of Expiry</Text>
                        <Text style={Styles.txtdate}>05-04-199</Text>
                    </View>
                </View>
                <View style={{ marginTop: rh(3) }}>
                    <Text style={Styles.headingtext}>Warranty Period</Text>
                </View>

                <View style={{ marginTop: rh(3) }}>
                    <View style={{ flexDirection: "row", alignContent: "center", alignItems: 'center', height: rh(5) }}>
                        <TouchableOpacity>
                            <FontAwesome name='circle' size={30} color={Colors.yellow} />
                        </TouchableOpacity>
                        <Text style={[Styles.txtdate, { paddingTop: rh(0),paddingLeft:rw(2) }]}>Duration</Text>
                    </View>

                    <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                        <TouchableOpacity>
                            <Entypo name='circle' size={30} color={Colors.black} />
                        </TouchableOpacity>
                        <Text style={[Styles.txtdate, { paddingTop: rh(0),paddingLeft:rw(2) }]}>Duration</Text>

                    </View>

                </View>

            </ScrollView>
        </SafeAreaView >
    )
}

export default AddProductStepthree


{/* <View style={{ flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end' }}>
<TouchableOpacity style={Styles.bottombtn} onPress={() => navigation.navigate('addproductsteptwo')}>
    <Text style={Styles.bottombtntext}>Next</Text>
</TouchableOpacity>
</View> */}