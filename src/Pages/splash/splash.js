import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Splashsvg from '../../Assets/Svg/Splashsvg.svg'
import AsyncStorage from '@react-native-async-storage/async-storage';


const Splash = ({ navigation }) => {
    const asyncfunction = async () => {
        await AsyncStorage.getItem('onboardingscreen').then(async value => {
            let data = JSON.parse(value);
            console.log("---------->", data);
            let bits = data?.onboardingbit;
            console.log('====================================');
            console.log(bits);
            console.log('====================================');
            if (bits) {
                console.log("kuch hay");
                await AsyncStorage.getItem('userdetails').then(async value => {
                    let data = JSON.parse(value);
                    console.log("new async---------->", data);
                    let newbits = data?.useremail;
                    if (newbits) {
                        setTimeout(() => {
                            console.log('====================================');
                            console.log(newbits);
                            console.log('====================================');
                            navigation.replace('BottomTabNavigations')
                        }, 2000);
                    }
                    else {
                        setTimeout(() => {
                            navigation.replace('signin')
                        }, 2000);
                    }
                })
            }
            else {

                setTimeout(() => {
                    AsyncStorage.setItem(
                        'onboardingscreen',
                        JSON.stringify({
                            onboardingbit: 1,
                        })
                    )
                    console.log('====================================');
                    console.log("Kuch nahi");
                    console.log('====================================');
                    navigation.replace('onboardingscreens')
                }, 3000);
            }

            // setTimeout(() => {
            //     navigation.replace('onboardingscreens')
            //     AsyncStorage.setItem(
            //         'onboardingscreen',
            //         JSON.stringify({
            //             firsttimebit: 1,
            //         })
            //     )
            // }, 3000);
        })
    }





    useEffect(() => {
        asyncfunction()
    }, [])

    console.disableYellowBox = true;
    return (
        <View style={styles.container}>
            <Splashsvg height={'175px'} width={'175px'} />
        </View>
    )
}

export default Splash

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    }
})