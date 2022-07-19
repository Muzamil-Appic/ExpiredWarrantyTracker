import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'
import { Dimensions, FlatList, ScrollView, Modal, StyleSheet, } from 'react-native'
import Colors from '../../Global/Colors';
import FontSize from '../../Global/Fonts';
const siz = Dimensions.get('window').height
const Styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Colors.white,

    },
    textstep: { color: Colors.black, fontWeight: '400', fontFamily: 'Inter-Regular', fontSize: FontSize.font16 },
    secondhadding: { color: Colors.black, fontFamily: 'Inter-Medium', fontSize: FontSize.font24, fontWeight: '600' },
    innersecondhadding: { color: Colors.black, fontFamily: 'Inter-Medium', fontSize: FontSize.font18, fontWeight: '600' },

    bottombtn: { backgroundColor: Colors.yellow, height: rh(5), width: rw(20), justifyContent: "center", alignItems: 'center', marginBottom: rh(3), borderRadius: 5 },
    bottombtntext: { textAlign: 'center', color: Colors.white, fontSize: FontSize.fon15 },
    imageStyle: {
        width: 200,
        height: 200,
        margin: 5,
    },
    txtdate: { fontWeight: '400', fontSize: FontSize.font18, color: Colors.black, fontFamily: 'Inter-Regular', textAlign: 'center', },
    headingtext: { fontWeight: '600', fontSize: FontSize.fon15, color: Colors.gry, fontFamily: 'Inter-Regular' },
    nextanssavedbuttonview: { flex: 1, alignSelf: 'flex-end', justifyContent: 'flex-end' },
    lifetimewarrantindurations: { flexDirection: "row", alignContent: "center", alignItems: 'center', height: rh(5) },
    dateandpurchasedouterview: { width: rw(88), marginTop: rh(2) },
    dateandpurchasesdinnerview: { flexDirection: "row", justifyContent: "space-between", width: rw(88), },
    durationview: { flexDirection: "row", height: rh(4), justifyContent: 'flex-start', alignContent: "center", alignItems: 'center', },
    monthandyearbuttonouterview: { height: rh(12), width: rw(100), justifyContent: 'space-between', marginTop: rh(2) },
    monthsandyearbuttoninerview: { flexDirection: "row", width: rw(100), justifyContent: "space-between" },
    inneryellewbuttons: { flexDirection: "row", height: rh(7), width: rw(25), justifyContent: 'space-between', right: rw(12) },
    bottomlineview: { backgroundColor: Colors.borderbottomcolor, width: rw(88), height: rh(0.5), marginTop: rh(2) },
    toggleouterviewmain: { height: rw(5), width: rw(10), backgroundColor: Colors.togglebackgroundcolor, borderRadius: 20, justifyContent: 'center', alignContent: 'center' },
    toggleoffstyle: { backgroundColor: Colors.gry, height: rw(5), width: rw(5), borderRadius: 100, },
    toggleonstyle: { backgroundColor: Colors.yellow, height: rw(5), width: rw(5), borderRadius: 100, alignSelf: 'flex-end', },
    monthsandweeksouterview: { flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: rw(8), marginTop: rh(2) },
    weeksandmonthsbtn: { width: rw(33), height: rh(5), justifyContent: 'center', backgroundColor: Colors.bk, borderRadius: 5, },
    weeksmonthsinnertext: { textAlign: 'center', fontSize: FontSize.fon15 },
    addproductpartview: { height: rh(7), borderBottomWidth: 1, borderColor: Colors.yellow, alignContent: 'center', justifyContent: "center" },
    addproductparttext: { fontFamily: 'Inter-Light', fontSize: FontSize.font14, color: Colors.gry, marginTop: rh(3), },
    addproductparttextinput: { padding: 0, fontSize: FontSize.font21, color: Colors.black },
    warrantymultipartexpiryview: { height: rh(5), width: rw(89), flexDirection: "row", alignContent: 'center', alignItems: 'center', justifyContent: "space-between", top: rh(0.5) },
    addadditionalpartouterview: { height: rh(5), backgroundColor: '#DCDBDB', width: rw(89), borderRadius: 5, justifyContent: 'center', top: rh(2) },
    productproductmerchantnotes: { flexDirection: 'row', borderBottomWidth: 2, borderColor: Colors.bk, width: rw(90), height: rh(6), },
    merchantinputouterview: { borderBottomColor: Colors.bk, width: rw(90), borderBottomWidth: 2, height: rh(6), justifyContent: 'center' },
    pagefiveheadings: { color: Colors.black, fontWeight: '600', fontFamily: 'Inter-Regular', fontSize: FontSize.font17 },
    input: {

        padding: 20,
        fontSize: FontSize.font21, color: Colors.black

    },
    txtinputsheaddings: { fontFamily: 'Inter-Light', fontSize: FontSize.font14, color: Colors.gry, marginTop: rh(0.5) },

    datePickerStyle: {
        width: rh(50),
        marginTop: 25,
    },
    itemStyle: {
        padding: 10,
      },
}
)
export default Styles;