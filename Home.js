import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, ScrollView, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function Home({navigation}){
  return (
    <View style={styles.container}>
    <Text style={styles.logo}>JULIS</Text>
    <Image 
       source={{uri:'https://png.pngitem.com/pimgs/s/174-1749340_e-shop-shopping-cart-pictograms-hd-png-download.png'}}
       style= {styles.cart}
       />
    </View>
  )
}
  
const styles = StyleSheet.create({
  container:{
    height: 80,
    marginTop: 20,
    flexDirection:'row',
    justifyContent:'flex-start',
    alignItems: 'center',
    backgroundColor:'#fff',
    padding: 20,
    borderBottomWidth: 4,
    borderBottomColor:'#ccc'
  },
  cart:{
    width: 60,
    height: 60,
    marginLeft: 10,
  },
  logo:{
    fontSize: 30,
    fontStyle:'italic',
    marginLeft: 10,
    color:'#000080',
  },
}
)