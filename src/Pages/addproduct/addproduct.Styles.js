import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet } from 'react-native'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    textstep: { color: Colors.black, fontWeight: '400', fontFamily: 'Inter-Regular', fontSize: FontSize.font16 },
    secondhadding: { color: Colors.black, fontFamily: 'Inter-Medium', fontSize: FontSize.font24 },
    bottombtn: { backgroundColor: Colors.yellow, height: rh(6), width: rw(20), justifyContent: "center", alignItems: 'center', marginBottom: rh(3), borderRadius: 5 },
    bottombtntext: { textAlign: 'center', color: Colors.white, fontSize: FontSize.fon15 },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
    },
    txtdate: { fontWeight: '400', fontSize: FontSize.font18, color: Colors.black, fontFamily: 'Inter-Regular', paddingTop: rh(3), textAlign: 'center' },
    headingtext: { fontWeight: '400', fontSize: FontSize.fon15, color: Colors.gry, fontFamily: 'Inter-Regular' },
})
export default Styles;