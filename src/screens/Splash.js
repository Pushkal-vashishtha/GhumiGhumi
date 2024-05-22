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
      source={{uri:'https://imgs.search.brave.com/5MRaVWeqYlYTNFdZs1x70j2jJFWPgsja0vJWqJ6od5Y/rs:fit:860:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMueW91cnN0b3J5/LmNvbS9jcy93b3Jk/cHJlc3MvMjAxOS8w/MS9yYXBpZG8tYmlr/ZS10YXhpLmpwZWc_/Zm09cG5nJmF1dG89/Zm9ybWF0Jnc9ODAw'}}></Image>
    </View>
  );
};

export default Splash;

const styles = StyleSheet.create({});
