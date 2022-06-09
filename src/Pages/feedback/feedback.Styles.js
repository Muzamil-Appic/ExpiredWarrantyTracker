import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet } from 'react-native'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    txtboxview: { height: rh(9), borderBottomWidth: 1, borderColor: Colors.borderbottomcolor, },
    txtboxinpt: { fontSize: FontSize.font16, fontFamily: 'Inter-Medium', fontWeight: '300', padding: 0, paddingTop: rh(4) },


})
export default Styles;