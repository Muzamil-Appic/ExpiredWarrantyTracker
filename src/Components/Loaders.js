import { View, Text, ActivityIndicator } from 'react-native'
import React from 'react'
import Colors from '../Global/Colors'

export default function Loaders() {
    return (
        <View style={{ flex: 1, justifyContent: 'center', alignSelf: "center" }}>
            <ActivityIndicator size={'large'} color={Colors.yellow} />
        </View>
    )
}