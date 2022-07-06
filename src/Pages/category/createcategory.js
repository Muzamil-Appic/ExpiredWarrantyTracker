import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import MaterialIcons from 'react-native-vector-icons/Entypo'
import Loaders from '../../Components/Loaders';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Createcategory = ({ navigation }) => {

    const [categoryname, setcategoryname] = useState('')
    const [loader, setloader] = useState(false)
    const [categorycolour, setcategorycolour] = useState('')
    const [email, setemail] = useState('')


    useEffect(() => {
        asyncvalues()
    }, [])







    const asyncvalues = async () => {
        await AsyncStorage.getItem('userdetails').then(async value => {
            let data = JSON.parse(value);
            console.log("------>", data);
            setemail(data?.useremail)
        })
    }

    const empty = () => {
        setemail('')
        setcategorycolour('')
        setcategoryname('')
    }

    const AddCategory = async () => {
        if (categoryname === '') {
            alert("Please Enter Category First")
            return;
        }
        if (categorycolour === '') {
            alert("Please Select  Category Colour First")
            return;
        }
        if (email === '') {
            alert("email is not added")
            return;
        }

        console.log("-------->", email, categorycolour, categoryname);

        const ss = categorycolour.split('#')
        console.log(ss[1]);
        const clr = ss[1]
        //  https://waqarulhaq.com/expired-warranty-tracker/create-category.php?email=soohaibster@gmail.com&name=Home&color=#f54e42

        setloader(true)
        // const requestOptions = {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify({
        //         email: "muzamilappic@gmail.com",
        //         name: "Brown",
        //         color: '#ffff'
        //     }),
        // };
        // fetch(`http://waqarulhaq.com/expired-warranty-tracker/create-category.php?}`, requestOptions)
        //     .then(response => response.json())
        //     .then(result => {
        //     console.log("--------------->", result);
        // })
        //     if (response.status == '200') {
        //         console.log("Sub Ok HY");
        //         setloader(false)
        //         console.log('====================================');
        //         console.log(response);
        //         console.log('====================================');
        //         Toast.show("Cayegory Added Successfull")
        //         empty()
        //         navigation.goBack()
        //     }
        //     else {
        //         alert(response)
        //         setloader(false)
        //     }
        // }

        // .catch((error) => {
        //     alert(error.code)
        //     console.log(error);
        // })



        // await fetch('http://waqarulhaq.com/expired-warranty-tracker/create-category.php', {
        //     method: 'POST',
        //     headers: {
        //         Accept: 'application/json',
        //         'Content-Type': 'application/json'
        //     },
        //     body: JSON.stringify({
        //         email: 'muzamilappic@gmail.com',
        //         name: 'Brown',
        //         design: 'ffff'
        //     }),
        // }).then((response) =>
        //     response.json()).then(result =>
        //         console.log(result)
        //     )





        const requestOptions = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify()
        };
        fetch(`http://waqarulhaq.com/expired-warranty-tracker/create-category.php?email=${email}&name=${categoryname}&color=${clr}`, requestOptions)
            .then(response => response.json())
            .then(result => {

                console.log(result);
                if (result.msg === "Category created successfully!") {
                    empty()
                    navigation.goBack()
                    Toast.show("Category Added")
                }

            })
            .catch((error) => {
                alert(error.code)
                console.log(error);
            })

    }





    //     <View style={{ width: rw(87), marginTop: rh(2), flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }} >
    //     < TouchableOpacity style={{ marginHorizontal: rw(2.5) }} onPress={() => setcategorycolour('#4DCB70')}>
    //         <MaterialIcons name='folder' size={40} color={'#4DCB70'} />
    //     </TouchableOpacity>
    //     < TouchableOpacity style={{ marginHorizontal: rw(2.5) }} onPress={() => setcategorycolour('#6289D6')}>
    //         <MaterialIcons name='folder' size={40} color={'#6289D6'} />
    //     </TouchableOpacity>
    //     < TouchableOpacity style={{ marginHorizontal: rw(2.5) }} onPress={() => setcategorycolour('#CB4DBE')}>
    //         <MaterialIcons name='folder' size={40} color={'#CB4DBE'} />
    //     </TouchableOpacity>

    //     < TouchableOpacity style={{ marginHorizontal: rw(2.5) }} onPress={() => setcategorycolour('#EC525B')}>
    //         <MaterialIcons name='folder' size={40} color={'#EC525B'} />
    //     </TouchableOpacity>
    // </View>
    // <View style={{ width: rw(87), marginTop: rh(2), flexDirection: 'row', justifyContent: 'space-between', alignSelf: 'center' }} >
    //     < TouchableOpacity style={{ marginHorizontal: rw(2.5) }} onPress={() => setcategorycolour('#9B4DCB')}>
    //         <MaterialIcons name='folder' size={40} color={'#9B4DCB'} />
    //     </TouchableOpacity>
    //     < TouchableOpacity style={{ marginHorizontal: rw(2.5) }} onPress={() => setcategorycolour('#F3A65F')}>
    //         <MaterialIcons name='folder' size={40} color={'#F3A65F'} />
    //     </TouchableOpacity>
    //     < TouchableOpacity style={{ marginHorizontal: rw(2.5) }} onPress={() => setcategorycolour('#E2E45A')}>
    //         <MaterialIcons name='folder' size={40} color={'#E2E45A'} />
    //     </TouchableOpacity>

    //     < TouchableOpacity style={{ marginHorizontal: rw(2.5) }} onPress={() => setcategorycolour('#52ECE3')}>
    //         <MaterialIcons name='folder' size={40} color={'#52ECE3'} />
    //     </TouchableOpacity>
    // </View>


    const datas = [
        { categoryname: 'green', categorycolour: '#4DCB70', id: '0' },
        { categoryname: 'blue', categorycolour: '#6289D6', id: '1' },
        { categoryname: 'pink', categorycolour: '#CB4DBE', id: '2' },
        { categoryname: 'orange', categorycolour: '#EC525B', id: '3' },
        { categoryname: 'jaman', categorycolour: '#9B4DCB', id: '4' },
        { categoryname: 'wooden', categorycolour: '#F3A65F', id: '5' },
        { categoryname: 'halfyellow', categorycolour: '#E2E45A', id: '6' },
        { categoryname: 'mzml', categorycolour: '#52ECE3', id: '7' },

    ]
    const renderfunction = ({ item }) => {
        // console.log(item)
        return (
            <View style={{ marginTop: rh(3), flexDirection: "row", marginHorizontal: rw(3) }} >
                <TouchableOpacity style={{ height: rh(7), width: rw(18) }} onPress={() => setcategorycolour(item.categorycolour)}>
                    <MaterialIcons name='folder' size={40} color={item.categorycolour} />
                </TouchableOpacity>

            </View >
        )
    }







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

                    <FlatList
                        data={datas}
                        renderItem={renderfunction}
                        keyExtractor={item => item.id}
                        numColumns={4}
                        contentContainerStyle={{ width: rw(90), justifyContent: 'center', }}

                    />




                </ScrollView>
                <View style={styles.nextanssavedbuttonview}>
                    {loader ?
                        <Loaders />
                        :
                        <TouchableOpacity style={styles.bottombtn} onPress={() => AddCategory()}>
                            <Text style={styles.bottombtntext}>Add</Text>
                        </TouchableOpacity>
                    }
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









