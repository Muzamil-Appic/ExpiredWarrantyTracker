import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet } from 'react-native'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    innertxt: { color: Colors.white, fontSize: FontSize.font13 },
    yellowtext: { color: Colors.yellow, fontSize: 17, fontFamily: 'Inter-Regular', fontWeight: '500', bottom: 3 },
    blacktext: { color: Colors.black, fontSize: 12, fontFamily: 'Inter-Regular', fontWeight: '500', },
    mainheight: { height: rh(10), borderBottomWidth: 1, borderColor: Colors.borderbottomcolor, flexDirection: 'row', marginTop: rh(1) },



})
export default Styles;