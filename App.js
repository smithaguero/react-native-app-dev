
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import login from './screens/login';
import home from "./screens/home";

const Stack = createNativeStackNavigator();

export default function App() {

  return (
    <View style={styles.container}>
      <NavigationContainer>
      <Stack.Navigator>
      <Stack.Screen 
      name = "login" 
      component = {login}
      />
      <Stack.Screen 
      name = "home" 
      component = {home}
      />
      </Stack.Navigator>
      </NavigationContainer>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
