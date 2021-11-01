import React, { useEffect }  from 'react';
import {
  StyleSheet,Text,View,TextInput,
    Keyboard, 
    TouchableOpacity} from 'react-native'; 
import {Icon} from 'react-native-elements';
import { Button } from 'react-native-elements/dist/buttons/Button';
 
export default function Login({navigation}) {
  return(
  <View style={styles.container}>
  <View style={styles.authBox}>
  <View style={styles.logoBox}>
    <Icon
      color='#fff'
      name='comments'
      type='font-awesome'
      size={50}
      />
  </View>
  <Text style={styles.loginTitleText}>Login</Text>
   <View style={styles.hr}></View>
   <View style={styles.inputBox}>
   <Text style={styles.inputLabel}>Email</Text>
    <TextInput
      style={styles.input}
      autoCapitalize={false}
      keyboardType='email-address'
      textContentType='emailAddress'
    />
    </View>
    <View style={styles.inputBox}>
    <Text style={styles.inputLabel}>Password</Text>
    <TextInput
      style={styles.input}
      autoCapitalize={false}
      secureTextEntry={true}
      textContentType='password'
    />
    <TouchableOpacity style={styles.loginButton}>
     <Text style={styles.loginButtonText}>Login</Text>
     <Button 
      onPress= {() => 
      navigation.navigate('Home')}
      />
    </TouchableOpacity> 
    <TouchableOpacity>
        <Text style={styles.registerText}>
            Don't have an account?
          </Text>
    </TouchableOpacity>
    <TouchableOpacity style ={styles.signUpText}>
     <Text style={styles.loginButtonText}>Sign Up</Text>
     </TouchableOpacity>
        <TouchableOpacity>
          <Text style={styles.forgotPasswordText}>Forgot Password?</Text>
        </TouchableOpacity>
        </View>
        </View>
      </View>
    );
  }
const styles = StyleSheet.create({
  container: {
  flex: 1,
  position: 'relative',
  },
  authBox: {
    width: '80%',
    backgroundColor: '#fafafa',
    borderRadius: 20,
    alignSelf: 'center',
    paddingHorizontal: 14,
    paddingBottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  logoBox: {
    width: 100,
    height: 100,
    backgroundColor: '#eb4d4b',
    borderRadius: 1000,
    alignSelf: 'center',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    top: -50,
    marginBottom: -50,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 2,
  },
  loginTitleText: {
    fontSize: 26,
    fontWeight: 'bold',
    marginTop: 10,
  },
  hr: {
    width: '100%',
    height: 0.5,
    backgroundColor: '#444',
    marginTop: 6,
  },
  inputBox: {
    marginTop: 10,
  },
  inputLabel: {
    fontSize: 18,
    marginBottom: 6,
  },
  input: {
    width: '100%',
    height: 40,
    backgroundColor: '#dfe4ea',
    borderRadius: 4,
    paddingHorizontal: 10,
  },
  loginButton: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
  },
  signUpText: {
    backgroundColor: '#ff4757',
    marginTop: 10,
    paddingVertical: 10,
    borderRadius: 4,
    alignItems:'center',
  },
  loginButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 20,
    fontWeight: 'bold',
  },
  registerText: {
    textAlign: 'center',
    marginTop: 20,
    fontSize: 16,
  },
  forgotPasswordText: {
    textAlign: 'center',
    marginTop: 12,
    fontSize: 16,
  },
});
