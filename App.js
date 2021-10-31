
import React from 'react';
import App from './src/App';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const MainNavigator = createNativeStackNavigator();

function LoginScreen () {
  return (
    <View>
    <Text>Login</Text>
    </View>
  )
}

function HomeScreen () {
  return (
    <View>
    <Text>Home</Text>
    </View>
  )
}
 function App() {
return (
  <View>
  <NavigationContainer>
  <MainNavigator.navigator>
  <Navigator.Screen 
  name = "Login" 
  component={LoginScreen} />
  <Navigator.Screen
   name = "Home" 
   component={HomeScreen} />
  </MainNavigator.navigator>
  </NavigationContainer>
  </View>
)
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default function MyApp() {
  return (
    <App/>
  );
}
