import {StyleSheet, Text, TextInput, View} from 'react-native';
import React from 'react';
import MapView, {PROVIDER_GOOGLE} from 'react-native-maps';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Entypo from 'react-native-vector-icons/Entypo';
const Home = () => {
  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View style={{flex: 0.7}}>
        <MapView
          style={{flex: 1}}
          provider={PROVIDER_GOOGLE}
          showsUserLocation
          showsMyLocationButton
          initialRegion={{
            latitude: 37.78825,
            longitude: -122.4324,
            latitudeDelta: 0.0922,
            longitudeDelta: 0.0421,
          }}
        />
        <View style={{position: 'absolute', right: 20, top: 35, left: 20, flexDirection:'row',alignItems:'center',gap:10}}>
          <View
            style={{
              height: 40,
              width: 40,
              borderRadius: 100,
              backgroundColor: 'white',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Ionicons name="menu" size={27} color="grey" />
          </View>
          <View style={{backgroundColor:'white',flex:1,borderRadius:20,paddingHorizontal:10,flexDirection:'row',alignItems:'center',gap:5}}>
            <Entypo name="circle" size={10} color='green'/>
            <TextInput  style={{}} value="" placeholder="Current Location"/>
            
          </View>
        </View>
      </View>
      <View></View>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({});
