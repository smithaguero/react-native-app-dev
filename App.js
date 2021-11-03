import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Login from './screens/Login';
import Home from './screens/Home';
import SignUp from './screens/SignUp';


export default function app({navigation}) {
const Stack =  createNativeStackNavigator();
  return (
    <View>
    <NavigationContainer>
    <Stack.Navigator initialRouteName='Login'>
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="SignUp" component={SignUp} />
      </Stack.Navigator>
    </NavigationContainer>
    </View>
  );
}

const styles = StyleSheet.create({
  body:{ 
    alignItems: 'center',
    justifyContent: 'center',
  },
  text:{
    fontSize: 40,
    fontWeight: 'bold',
    margin:10,
  }
});
