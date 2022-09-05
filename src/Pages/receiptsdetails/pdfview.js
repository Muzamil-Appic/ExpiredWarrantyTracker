import { View, Text, StyleSheet, Dimensions, TouchableOpacity, Platform, PermissionsAndroid, ActivityIndicator } from 'react-native'
import React, { useState, useEffect } from 'react'
import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import YellowBackSvg from '../../Assets/Svg/YellowBackSvg.svg'
import ShareSvg from '../../Assets/Svg/ShareSvg.svg'
import RNHTMLtoPDF from 'react-native-html-to-pdf';
import Pdf from 'react-native-pdf';
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
import Loaders from '../../Components/Loaders'
import Share from 'react-native-share';
import moment from 'moment'
const PdfView = ({ navigation, route }) => {
    const iii = route?.params?.receipt_img
    const [loader, setloader] = useState(true)
    const [exp, setexp] = useState('')
    const [todaydate, settodaydate] = useState(moment(new Date()).format('DD-MM-YYYY'))
    const [filePath, setFilePath] = useState('');
    const [uris, seturis] = useState('')




    useEffect(() => {
        createPDF()

    }, [])



    const myCustomShare = async () => {
        const shareOptions = {

            message: 'Expired Warranty Tracker Receipt',
            // url: filePath
            url: `file://${filePath}`
        }

        try {
            const ShareResponse = await Share.open(shareOptions);
            console.log(JSON.stringify(ShareResponse));
        } catch (error) {
            console.log('Error => ', error);
        }
    };
    console.log('====================================');
    console.log(route?.params);
    console.log('====================================');

    const createPDF = async () => {

        if (route?.params?.expiry_date === '9999-01-01') {
            var dd = "Life Time Warranty"
            console.log("Ok");
        }
        else {
            var dd = route?.params?.expiry_date
        }
        setloader(true)
        if (await isPermitted()) {
            let options = {
                //Content to print
                html:
                    `
                    <html>
                    <body>
                    <h1>Warranty Information</h1>
                    <h1>Receipt Created Date:${todaydate}</h1>
                    <h2>Merchant Information</h2>
                    <h4>Merchant Name:${route?.params?.merchant_name} </h4>
                    <h4 >Merchant Contact Number:${route?.params?.merchant_contact_no} </h4>
                    <h4 >Merchant Location:${route?.params?.merchant_location} </h4>
                    <h4 >Merchant Website:${route?.params?.merchant_website} </h4> <br/>
                    <h2>Product Information</h2>
                    <h4 >Product Name:${route?.params?.name} </h4>
                    <h4 >Product Price:${route?.params?.product_price} </h4>
                    <h4>Purchased Date:${route?.params?.purchase_date} </h4>
                    <h4 >Model Number:${route?.params?.model_number} </h4>
                    <h4>Serial Number:${route?.params?.serial_number} </h4>
                    <h4>Warranty Duration:${route?.params?.warranty_details_duration} </h4>
                    <h4>Expiry Date:${dd} </h4>  <br/>


                    <h2>Notes</h2>
                    <h4 >${route?.params?.notes} </h4> <br/>
                    
                     <script>

                    
                    
                   
                    <h2>Product Receipt Photo</h2>
                    <img src=${route?.params?.receipt_img} alt=${route?.params?.receipt_img} width="500" height="600">


                    <div/>
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
            let sour = { uri: file.filePath };
            seturis(sour)
        }
        setloader(false)
    };



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


    return (
        <View style={styles.container}>
            <View style={{ height: rh(8), borderBottomWidth: 2, borderColor: Colors.bk, justifyContent: 'center' }}>
                <View style={{ flexDirection: 'row', alignContent: 'center', alignItems: 'center', justifyContent: "space-between" }}>
                    <TouchableOpacity onPress={() => navigation.goBack()} style={{ left: rw(3) }}>
                        <YellowBackSvg width={'20.67px'} height={'20.67px'} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: FontSize.font25, color: Colors.yellow, fontWeight: '500', fontFamily: 'Inter-Regular', }}>Preview</Text>

                    <TouchableOpacity onPress={() => myCustomShare()} style={{ right: rw(3) }}>
                        <ShareSvg width={'24px'} height={'22px'} />
                    </TouchableOpacity>
                </View>

            </View>

            {loader ?
                <View style={{ flex: 1, justifyContent: "center" }}>
                    <ActivityIndicator size={'large'} color={Colors.yellow} />
                    <Text style={{ textAlign: 'center', top: 5 }}>Please Wait ...</Text>
                </View>
                :

                <Pdf
                    source={uris}
                    onLoadComplete={(numberOfPages, filePath) => {
                        console.log(`Number of pages: ${numberOfPages}`);
                    }}
                    onPageChanged={(page, numberOfPages) => {
                        console.log(`Current page: ${page}`);
                    }}
                    onError={(error) => {
                        console.log(error);
                    }}
                    onPressLink={(uri) => {
                        console.log(`Link pressed: ${uri}`);
                    }}
                    style={styles.pdf} />
            }
        </View>
    )
}


const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    pdf: {
        flex: 1,
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').height,
    }
});

export default PdfView