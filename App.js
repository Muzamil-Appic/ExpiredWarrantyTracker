import { View, Text, Platform } from 'react-native'
import React, { useState, useEffect } from 'react'

import { SafeAreaProvider } from 'react-native-safe-area-context'
import StackNavigations from './src/Navigations/StackNavigations'
import OneSignal from 'react-native-onesignal';
import firebase, { messaging } from '@react-native-firebase/app';
const App = () => {

  {
    Platform.OS === 'android' ?

    useEffect(() => {
      OneSignal.setAppId("d957e2a3-5db6-480a-a522-d5e80ff58209");
      OneSignal.promptForPushNotificationsWithUserResponse();



      //Method for handling notifications received while app in foreground
      OneSignal.setNotificationWillShowInForegroundHandler(notificationReceivedEvent => {
        console.log("OneSignal: notification will show in foreground:", notificationReceivedEvent);
        let notification = notificationReceivedEvent.getNotification();
        console.log("notification: ", notification);
        const data = notification.additionalData
        console.log("additionalData: ", data);
        // Complete with null means don't show a notification.
        notificationReceivedEvent.complete(notification);
      });


      OneSignal.setNotificationOpenedHandler(notification => {
        console.log("OneSignal: notification opened:", notification);
      });





    }, [])
    :
    null
  }

  console.disableYellowBox = true;
  return (
    <SafeAreaProvider>
      <StackNavigations />
    </SafeAreaProvider>
  )
}

export default App

