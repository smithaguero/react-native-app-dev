import { StatusBar } from 'expo-status-bar';
import React, {useState,useEffect} from 'react';
import { StyleSheet, Text,ScrollView, View,Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Feather as Icon } from '@expo/vector-icons';
import { Icon as RNEIcon } from 'react-native-elements';
import { useFonts } from 'expo-font';
import { Button } from 'react-native-elements/dist/buttons/Button';

export default function Cart({navigation}){
   return(
      <View Style={styles.container}
      >
      <View Style={{flexDirection:'row'}}>
      <View style={{ flex: 1, paddingHorizontal: 8}}>
      
      <Image
        style={{ width: 100, height: 100, marginTop: 20}}
        source={{ uri: 'https://i.pinimg.com/originals/1f/56/56/1f5656c7f84087e461a6bc991bef3b01.jpg'}}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 20, color:'#000080' }}> Nike Men's Sportswear T-Shirt</Text>
        
        <View 
        style={{
         marginTop: 4 }}
         >
         <Text style={{fontFamily: 'SSBold', fontSize: 20}}> Price: 100 Ghana Cedis</Text>
        </View>
        <View Style={{flexDirection:'row'}}></View>
        <View style={{flex: 1,}}>
        <Image 
        style={{width: 100, 
        height: 100, 
        marginTop: 20}}
        source={{uri:'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRWJsu-2-jNTbh2QMjHc01IGYwo1V2SQeOn3Q&usqp=CAU'}}
        />
        <Text style={{ fontWeight: 'bold', fontSize: 10}}> React native Unisex Half Sleeve T-Shirt</Text>
        <View 
        style={{
         marginTop: 10 }}
         >
         <Text style={{ fontSize: 20}}> Price: 70 Ghana Cedis</Text>
        </View>
        </View>
    </View>
    </View>
      </View>
   )
}

const styles = StyleSheet.create({
    container:{
      flex: 1,
      justifyContent: "space-between",
      backgroundColor: "#fff",
      padding: 20,
      margin: 10,
    }
})