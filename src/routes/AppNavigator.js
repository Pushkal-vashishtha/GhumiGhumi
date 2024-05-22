import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from '../screens/Home';
import SplashScreen from '../screens/Splash';


const Stack = createNativeStackNavigator();

const AppNavigator = () => {
  return (
    <Stack.Navigator initialRouteName= 'Home'screenOptions={{headerShown:false}}>
       <Stack.Screen name="Splash" component={SplashScreen} />
       <Stack.Screen name="Home" component={Home} />
    </Stack.Navigator>
  )
}

export default AppNavigator

const styles = StyleSheet.create({})