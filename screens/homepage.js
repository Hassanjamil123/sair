import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
require('firebase/auth');
import Header from '../components/header'
import MainBody from '../components/mainbody';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import Search from '../components/search'
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

const Main = () => {
    return(
        <View style={styles.container}>
              {/* Header  */}
              <Header />

             {/* Main Body */}
            <MainBody />

            </View>
    );
}

export default class Home extends Component {
    render(){
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="Main" component={Main}/>
                    <Stack.Screen name="Search" component={Search}/>
                </Stack.Navigator>
            </NavigationContainer>            
        );
    }
}
            
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    }
});
 