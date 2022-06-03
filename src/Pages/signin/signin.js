import { View, Text } from 'react-native'
import React,{useState,useEffect} from 'react'

const Signin = ({navigation}) => {

    useEffect(() => {
        setTimeout(() => {
            navigation.navigate('BottomTabNavigations')
        }, 3000);
    }, [])

  return (
    <View>
      <Text style={{fontSize:40,fontFamily:'Inter-Black'}}>signin</Text>
    </View>
  )
}

export default Signin