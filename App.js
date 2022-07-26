import React from 'react';
import { StyleSheet, Text, View, AppRegistry } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import Options from './screens/options'
import Signup from './screens/signup'
import Login from './screens/login'
import Dashboard from './screens/dashboard'
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import * as Facebook from 'expo-facebook';

var firebaseConfig = {
  apiKey: "AIzaSyC2t_hTT44YFnnrtgsbWd_-7xcPnHtLmYY",
  authDomain: "sair-1d9b1.firebaseapp.com",
  databaseURL: "https://sair-1d9b1.firebaseio.com",
  projectId: "sair-1d9b1",
  storageBucket: "sair-1d9b1.appspot.com",
  messagingSenderId: "788900573402",
  appId: "1:788900573402:web:b0e82f66575df9de5675e3",
  measurementId: "G-S54Y8E18DC"
};
// Initialize Firebase
if (!firebase.apps.length) {
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  //firebase.analytics();
}
const Stack = createStackNavigator();

export default function App(){
  return(
    <NavigationContainer>
      <Stack.Navigator headerMode="none">

        <Stack.Screen name="Options" component={Options} /> 
        <Stack.Screen name="Signup" component={Signup} />      
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        
      </Stack.Navigator>
    </NavigationContainer>
  );
}


AppRegistry.registerComponent('Point', () => Point);