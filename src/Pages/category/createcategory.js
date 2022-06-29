import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import MaterialIcons from 'react-native-vector-icons/Entypo'
const Createcategory = ({ navigation }) => {

    const [categoryname, setcategoryname] = useState('')


    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, marginHorizontal: rw(5) }}>
                <ScrollView style={{ flexGrow: 1 }}>
                    <View style={{ height: rh(4), marginTop: rh(2) }}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ marginTop: rh(2) }}>

                        <Text style={styles.secondhadding}>Create new category</Text>
                    </View>

                    <Text style={styles.addproductparttext}>Category Name</Text>
                    <View style={styles.addproductpartview}>
                        <TextInput style={styles.addproductparttextinput} onChangeText={e => setcategoryname(e)} />
                    </View>
                    <View style={{ height: rh(6), justifyContent: 'center', }}>
                        <Text style={styles.addproductparttext}>Pick a color</Text>
                    </View>
                    <View style={{ width: rw(87), marginTop: rh(2), flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }} >
                        < TouchableOpacity style={{ marginHorizontal: rw(2.5) }}>
                            <MaterialIcons name='folder' size={40} color={'#4DCB70'} />
                        </TouchableOpacity>
                        < TouchableOpacity style={{ marginHorizontal: rw(2.5) }}>
                            <MaterialIcons name='folder' size={40} color={'#6289D6'} />
                        </TouchableOpacity>
                        < TouchableOpacity style={{ marginHorizontal: rw(2.5) }}>
                            <MaterialIcons name='folder' size={40} color={'#CB4DBE'} />
                        </TouchableOpacity>

                        < TouchableOpacity style={{ marginHorizontal: rw(2.5) }}>
                            <MaterialIcons name='folder' size={40} color={'#EC525B'} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: rw(87), marginTop: rh(2), flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }} >
                        < TouchableOpacity style={{ marginHorizontal: rw(2.5) }}>
                            <MaterialIcons name='folder' size={40} color={'#9B4DCB'} />
                        </TouchableOpacity>
                        < TouchableOpacity style={{ marginHorizontal: rw(2.5) }}>
                            <MaterialIcons name='folder' size={40} color={'#F3A65F'} />
                        </TouchableOpacity>
                        < TouchableOpacity style={{ marginHorizontal: rw(2.5) }}>

                            <MaterialIcons name='folder' size={40} color={'#E2E45A'} />
                        </TouchableOpacity>

                        < TouchableOpacity style={{ marginHorizontal: rw(2.5) }}>

                            <MaterialIcons name='folder' size={40} color={'#52ECE3'} />
                        </TouchableOpacity>
                    </View>


                </ScrollView>
                <View style={styles.nextanssavedbuttonview}>
                    <TouchableOpacity style={styles.bottombtn} onPress={() => navigation.goBack()}>
                        <Text style={styles.bottombtntext}>Add</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </SafeAreaView>
    )
}

export default Createcategory

const styles = StyleSheet.create({

    container: {
        flex: 1,
    },
    secondhadding: { color: Colors.black, fontFamily: 'Inter-Medium', fontSize: FontSize.font24, fontWeight: '600' },
    addproductpartview: { height: rh(7), borderBottomWidth: 1, borderColor: Colors.yellow, alignContent: 'center', justifyContent: "center" },
    addproductparttext: { fontFamily: 'Inter-Light', fontSize: FontSize.font17, color: Colors.gry, marginTop: rh(3), },
    addproductparttextinput: { padding: 0, fontSize: FontSize.font21, color: Colors.black },
    bottombtn: { backgroundColor: Colors.yellow, height: rh(5), width: rw(20), justifyContent: "center", alignItems: 'center', marginBottom: rh(3), borderRadius: 5 },
    bottombtntext: { textAlign: 'center', color: Colors.white, fontSize: FontSize.fon15 },
    nextanssavedbuttonview: { flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end' },



})









