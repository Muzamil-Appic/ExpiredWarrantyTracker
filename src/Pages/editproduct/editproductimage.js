import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Image, Alert, Dimensions, FlatList, ScrollView, Modal, StyleSheet, View, Text, TouchableOpacity, TextInput, PermissionsAndroid } from 'react-native'
import React, { useState, useEffect } from 'react'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import { SafeAreaView } from 'react-native-safe-area-context'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import CameraSvg from '../../Assets/Svg/CameraSvg.svg'
import Gallery from '../../Assets/Svg/Gallery.svg'
import Styles from './addproduct.Styles'
import Loaders from '../../Components/Loaders'
import Toast from 'react-native-simple-toast';


import ImagePicker from 'react-native-image-crop-picker';
import AutoHeightImage from 'react-native-auto-height-image';
const EditReceiptImage = ({ navigation, route }) => {
    const [Img, setImg] = useState(route?.params?.receipt_img)
    const [isCamera, setisCamera] = useState('')
    const [images, setimages] = useState('')
    const [receiptspath, setreceiptspath] = useState('')
    const [imageloader, setimageloader] = useState(false)
    const [buttonloader, setbuttonloader] = useState(false)
    const imageheight = Dimensions.get('window').height
    const imagwidth = Dimensions.get('window').width

    const win = Dimensions.get('window');




    console.log(route?.params?.ID);




    const updatedata = async () => {
        var requestOptions = {
            method: 'POST',
            redirect: 'follow'
        };
        setbuttonloader(true),
            fetch(`https://waqarulhaq.com/expired-warranty-tracker/edit-receipt-image.php?ID=${route?.params?.ID}&receipt_img=${receiptspath}`, requestOptions)
                .then(response => response.json()).then(result => {
                    console.log("tttt", result.issuccess);
                    if (result.issuccess == true) {

                        console.log('====================================');
                        console.log(result);
                        console.log('====================================');
                        Toast.show("Receipt Image Updated Successfull")
                        setbuttonloader(false),
                            navigation.goBack()

                    }
                    else {
                        alert("Receipt Image Not Updated"),
                            setbuttonloader(false)
                    }
                })
                .catch(error => console.log('error', error));


    }





    const selectimagefromgallery = () => {
        setTimeout(() => {
            ImagePicker.openPicker({
                width: 200,
                height: 200,
                cropping: true,
                // compressImageQuality: 0.4,
            }).then(async image => {
                setImg(image.path);
                setisCamera(false);
                setimages(image)
                uplodFile(image);
            });
        }, 400);
    };


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

        var requestOptions = {
            method: 'POST',
            body: formdata,
            redirect: 'follow'
        };
        // console.log("requestOptions", requestOptions);
        setimageloader(true)
        await fetch("http://waqarulhaq.com/expired-warranty-tracker/upload-img.php?", requestOptions)
            .then(response => response.json())
            .then(result => { setreceiptspath(result), setimageloader(false) })
            .catch(error => console.log('error', error),);


    };

    const opencamera = () => {

        setTimeout(() => {
            ImagePicker.openCamera({
                width: 200,
                height: 200,
                cropping: true,
                compressImageQuality: 0.4,
            }).then(async image => {
                setImg(image.path)
                setisCamera(false);
                const ref = new Date().getTime();
                setimages(image)
                uplodFile(image);
            });
        }, 400);
    }

















    return (
        <SafeAreaView style={Styles.container}>

            <View style={{ flex: 1, marginHorizontal: rh(3) }}>

                <View style={{ height: rh(4), marginTop: rh(2) }}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                </View>
                <View style={{ marginTop: rh(1) }}>
                    {/* <Text style={Styles.textstep}>Step 2 of 4</Text>
                    <Text style={Styles.secondhadding}>Capture your receipt and </Text>
                    <Text style={[Styles.secondhadding,]}>warranty card</Text> */}
                    <Text style={[Styles.secondhadding,]}>Receipts</Text>
                </View>

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


                    {/* < Image source={require('../../Assets/photos/Oicone.png')} style={{ width: rw(90), resizeMode: 'stretch' }} /> */}

                    {Img === '' ?
                        <View>

                        </View>
                        :

                        // <Image source={{ uri: Img }} resizeMode={'contain'} resizeMethod={'resize'} style={{ height: imageheight / 2, width: imagwidth / 2, borderLeftWidth: 1, borderRadius: 5, alignSelf: "center" }} />
                        // <FullWidthImage  source={{ uri: Img }} ratio={3/3} />
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




                {/* <Image
                    source={{ uri: filePath.uri }}
                    style={Styles.imageStyle}
                /> */}

                {imageloader ?

                    <Loaders /> :
                    <View style={Styles.nextanssavedbuttonview}>
                        {buttonloader ?
                            <View style={{ height: rh(10) }}>
                                <Loaders />
                            </View>
                            :
                            <TouchableOpacity style={Styles.bottombtn} onPress={() => updatedata()}>
                                <Text style={Styles.bottombtntext}>Save</Text>
                            </TouchableOpacity>
                        }
                    </View>
                }
            </View>

        </SafeAreaView >
    )
}

export default EditReceiptImage