import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet } from 'react-native'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
const siz = Dimensions.get('window').fontScale

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.yellow,
    },
    loginsignupbutton: {
        top: rh(2),
        justifyContent: "flex-end",
        alignSelf: "flex-end",

    },
    loginsignuptext: { color: Colors.white, fontFamily: 'Inter-Regular', fontWeight: '500', fontSize: FontSize.font16 },
    txtinptinner: { borderBottomWidth: 2, borderColor: Colors.borderbottomcolor, padding: 0, paddingBottom: rh(1), fontSize: FontSize.font02, paddingLeft: rw(1), },
    txtinptouterview: { borderColor: Colors.borderbottomcolor, height: rh(8) },
    password: { padding: 0, width: rw(90), borderBottomWidth: 2, borderColor: Colors.borderbottomcolor, fontSize: FontSize.font02, paddingLeft: rw(1), paddingTop: rh(2), height: rh(8), },
    loginsignupbtn: { backgroundColor: Colors.yellow, justifyContent: "center", alignItems: 'center', height: rh(7), borderRadius: 8, marginHorizontal: rw(5) },
    loginsignupbtntext: { color: Colors.white, fontSize: FontSize.font16, fontWeight: '500', fontFamily: 'Inter-Regular' }

})
export default Styles;