import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet } from 'react-native'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,
    },
    textsubhadding: { fontSize: FontSize.font13, color: Colors.gry, fontWeight: '400', fontFamily: 'Inter-Regular', },
    boldheadding: { fontSize: FontSize.font18, color: Colors.black, fontFamily: 'Inter-Medium', fontWeight: "700" },
    lightbold: { fontSize: FontSize.font16, color: Colors.black, fontWeight: '500', fontFamily: 'Inter-Medium', marginTop: rh(0.5) }

})
export default Styles;