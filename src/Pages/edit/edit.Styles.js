import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet } from 'react-native'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    editouterview: { height: rh(8), justifyContent: 'center', alignContent: 'center', borderBottomColor: Colors.bk, borderBottomWidth: 2, width: rw(90), alignSelf: 'center' },
    btntext: { fontSize: FontSize.font18, color: Colors.black, left: rw(3) },

})
export default Styles;