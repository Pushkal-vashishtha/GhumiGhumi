import {Image, StatusBar, StyleSheet, Text, View} from 'react-native';
import React, { useEffect } from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(()=>{
      navigation.replace('Home')
    },3000)
  
  }, [])
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'white',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <StatusBar hidden/>
      <Image style={{height:200 ,width:'auto',resizeMode:'contain'}}
      source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-tD7c5o_CPi8lJHvUXcLQQVZQTC69j_iwYs2pyk-TEQ&s'}}></Image>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
