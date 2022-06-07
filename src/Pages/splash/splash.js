import { StyleSheet, Text, View } from 'react-native'
import React,{useState,useEffect} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import Splashsvg from '../../Assets/Svg/Splashsvg.svg'


const Splash = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('onboardingscreens')
        }, 3000);
    }, [])
    

   
  return (
    <View style={styles.container}>
     <Splashsvg height={'175px'} width={'175px'}/>
    </View>
  )
}

export default Splash

const styles = StyleSheet.create({
    container:{
        flex:1,
        justifyContent:"center",
        alignItems:"center"
    }
})