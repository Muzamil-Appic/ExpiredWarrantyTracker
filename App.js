import { View, Text } from 'react-native'
import React from 'react'
import {SafeAreaProvider} from 'react-native-safe-area-context'
import StackNavigations from './src/Navigations/StackNavigations'
const App = () => {
  console.disableYellowBox = true;
  return (
    <SafeAreaProvider>
      <StackNavigations/>
    </SafeAreaProvider>
  )
}

export default App