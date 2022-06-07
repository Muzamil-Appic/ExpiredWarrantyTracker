import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import Colors from '../../Global/Colors'
import { responsiveHeight as rh, responsiveScreenWidth as rw } from 'react-native-responsive-dimensions';
import AppIntroSlider from 'react-native-app-intro-slider';
import FontSize from '../../Global/Fonts';

import { SafeAreaView } from 'react-native-safe-area-context';


const slides = [
    {
        key: 1,
        title: "All of your warranty datetails \n in one place",
        text: 'Access your warranty documents at \n anywhere, and anytime!',
        image: require('../../Assets/photos/boardingone.png'),
    },
    {
        key: 2,
        title: "Say goodbye to missing \n receipts",
        text: 'We help you to feel organized and \n secured wherever you go!',
        image: require('../../Assets/photos/boardingtwo.png'),
    },
    {
        key: 3,
        title: 'Complex warranties made \n simple',
        text: 'Too many different warranties? We’ve go \n everything covered!',
        image: require('../../Assets/photos/boardingthree.png'),
    },


];
const renderfunction = ({ item }) => {
    return (
        <View style={{ flex: 1, }}>
            <View style={{ marginTop: rh(10), justifyContent: 'center', alignItems: 'center' }}>
                <Image source={item.image} style={{ height: rw(64), width: rw(65) }} />
            </View>
            <View style={{ marginTop: rw(15) }}>
                <Text style={{ color: Colors.yellow, fontSize: FontSize.font20, textAlign: 'center', fontFamily: 'Roboto-Medium', fontWeight: '500' }}>{item.title}</Text>
            </View>
            <View style={{ padding: rw(3) }}>
                <Text style={{ color: Colors.black, textAlign: 'center', fontSize: FontSize.fon15 }}>{item.text}</Text>
            </View>
        </View>
    )
}

const renderDoneButton = () => {
    return (
        <View style={{ height: rh(10), marginTop: rh(2) }}>
            <Text style={{ color: Colors.yellow, fontSize: FontSize.font18 }}>Done</Text>
        </View>
    )
}


const renderNextButton = () => {
    return (
        <View style={{ height: rh(10), marginTop: rh(2) }}>
            <Text style={{ color: Colors.yellow, fontSize: FontSize.font18 }}>Next</Text>
        </View>
    )
}

const renderskipbutton = () => {
    return (
        <View style={{ height: rh(10), marginTop: rh(2) }}>
            <Text style={{ color: Colors.yellow, fontSize: FontSize.font18 }}>Skip</Text>
        </View>
    )
}
const OnBoarding = ({ navigation }) => {
    return (
        <SafeAreaView style={{ flex: 1, backgroundColor: Colors.white }}>
            <AppIntroSlider data={slides}
                renderItem={renderfunction}
                activeDotStyle={{ backgroundColor: Colors.yellow, width: 20 }}
                renderDoneButton={renderDoneButton}
                renderNextButton={renderNextButton}
                renderSkipButton={renderskipbutton}
                showSkipButton={true}
                onSkip={() => navigation.navigate('signin')}
                onDone={() => navigation.navigate('signin')}
            />
        </SafeAreaView>
    )
}

export default OnBoarding

const styles = StyleSheet.create({})