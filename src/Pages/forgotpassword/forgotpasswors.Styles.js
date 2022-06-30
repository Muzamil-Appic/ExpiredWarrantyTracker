import Colors from "../../Global/Colors"
import FontSize from "../../Global/Fonts"
import { StyleSheet } from "react-native"
import { responsiveHeight as rh, responsiveScreenWidth as rw } from 'react-native-responsive-dimensions';

const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white
    },
    addproductpartview: { height: rh(7), borderBottomWidth: 1, borderColor: Colors.yellow, alignContent: 'center', justifyContent: "center" },
    addproductparttext: { fontFamily: 'Inter-Light', fontSize: FontSize.font14, color: Colors.gry, marginTop: rh(3), },
    bottombtntext: { textAlign: 'center', color: Colors.white, fontSize: FontSize.fon15 },
    bottombtn: { backgroundColor: Colors.yellow, height: rh(7), width: rw(90), justifyContent: "center", alignItems: 'center', borderRadius: 5, alignSelf: "center" },
    txtinptinner: { padding: 0, fontSize: FontSize.font02, paddingLeft: rw(1), marginTop: rh(2), height: rh(6), },
    txtinptouterview: { borderColor: Colors.borderbottomcolor, height: rh(7), alignContent: "center", borderBottomWidth: 2, },



})
export default Styles;