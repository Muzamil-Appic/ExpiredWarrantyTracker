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
    const [categorykacolour, setcategorykacolour] = useState("")
    const [loaders, setloaders] = useState(false)
    const [email, setemail] = useState('')
    const [records, setrecords] = useState([])


    useEffect(() => {
        asyncvalues()
        getcolours()
    }, [])



    const getcolours = () => {
        setloaders(true)
        fetch('https://waqarulhaq.com/expired-warranty-tracker/get-category-colors.php')
            .then((response) => response.json())
            .then((responseJson) => {
                setloaders(false)
                setrecords(responseJson.data);
            })
            .catch((error) => {
                setloaders(false)
                console.error(error);
            });
    }
    const asyncvalues = async () => {
        await AsyncStorage.getItem('userdetails').then(async value => {
            let data = JSON.parse(value);
            console.log("------>", data);
            setemail(data?.useremail)
        })
    }

    const empty = () => {
        setemail('')
        setcategorykacolour('')
        setcategoryname('')
    }

    const AddCategory = async () => {
        console.log('====================================');
        console.log(categoryname, categorykacolour);
        console.log('====================================');
        if (categoryname === '') {
            alert("Please Enter Category First")
            return;
        }
        if (email === '') {
            alert("Please Login Again And Enter ")
            return;
        }
        if (categorykacolour === '') {
            alert("colour")
            return;

        }

        console.log("-------->", email, categorykacolour, categoryname);

        const ss = categorykacolour.split('#')
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




    const renderfunction = ({ item }) => {
        console.log(item)
        return (
            <View style={{ marginTop: rh(3), flexDirection: "row", marginHorizontal: rw(3) }} >
                {item.seleced == true ?
                    <TouchableOpacity style={{ height: rh(9), width: rw(18), bottom: rh(1) }} onPress={() => { setcategoryname(item.name), hitsize(item) }}>
                        <MaterialIcons name='folder' size={50} color={item.code} />
                    </TouchableOpacity>
                    :
                    <TouchableOpacity style={{ height: rh(10), width: rw(18) }} onPress={() => hitsize(item)}>
                        <MaterialIcons name='folder' size={30} color={item.code} />
                    </TouchableOpacity>
                }

            </View >
        )
    }



    const hitsize = (item) => {

        let temp = [...records];
        for (let i = 0; i < records.length; i++) {
            if (records[i].code == item.code) {
                temp[i] = {
                    seleced: true,
                    code: records[i].code,
                    name: records[i].name,

                };
                setcategorykacolour(records[i].code)
            } else {
                temp[i] = {
                    seleced: false,
                    code: records[i].code,
                    name: records[i].name,

                };
            }

        }
        setrecords(temp);


    }



    return (
        <SafeAreaView style={styles.container}>
            <View style={{ flex: 1, marginHorizontal: rw(5) }}>
               
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

                    {loaders ?
                        <View style={{ flex: 1, alignSelf: "center", justifyContent: 'center' }}>
                            <Loaders />
                        </View>
                        :
                        <FlatList
                            data={records}
                            renderItem={renderfunction}
                            keyExtractor={item => item.code}
                            numColumns={4}
                            contentContainerStyle={{ width: rw(90), justifyContent: 'center', }}

                        />
                    }




              
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









