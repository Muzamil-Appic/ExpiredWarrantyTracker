import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import Onboardingsvgone from '../../Assets/Svg/Onboardingsvgone.svg'
import { responsiveHeight as rh, responsiveWidth as rw } from 'react-native-responsive-dimensions'

import Colors from '../../Global/Colors'
import FontSize from '../../Global/Fonts'
const Onboardingone = () => {
    return (
        <SafeAreaView style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
            <View>
                <Onboardingsvgone width={'335px'} height={'327px'} />
            </View>
            <View>
                <Text style={{ color: Colors.yellow, fontSize: FontSize.font22, textAlign: "center", padding: 10 }}>
                    All of your warranty datetails
                    in one place
                </Text>
            </View>
            <View>
                <Text style={{ color: Colors.black, fontSize: FontSize.font18, textAlign: "center", padding: 10 }}>
                    Access your warranty documents at
                    anywhere, and anytime!
                </Text>
            </View>


            <View>
                <TouchableOpacity style={{ height: rh(5), width: rw(20),backgroundColor:Colors.yellow,justifyContent:"center",alignContent:'center',borderRadius:5 }}>
                    <Text style={{textAlign:"center",color:Colors.white}}>Skip</Text>
                </TouchableOpacity>
            </View>

        </SafeAreaView>
    )
}

export default Onboardingone

const styles = StyleSheet.create({})