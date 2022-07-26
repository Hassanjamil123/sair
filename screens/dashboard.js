import React, {Component} from 'react';
import {View, Stylesheet, Text} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
require('firebase/auth');
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';

import Homepage from './homepage'
import Tips from './tips'
import Search from '../components/search'
import Profile from './profile'
import Favourites from './favourites'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'
const Tab = createMaterialBottomTabNavigator();
const Stack = createStackNavigator();

const rootHome = ({ navigation }) => {
    return(
                <Tab.Navigator
                screenOptions={({ route }) => ({
                    tabBarIcon: ({ color }) => {
                      let iconName;
          
                      if (route.name === 'Home') {
                        iconName = 'home';
                      } else if (route.name === 'Tutorials') {
                        iconName = 'folder';
                      } else if (route.name === 'Favourites') {
                        iconName = 'heart';
                      } else if (route.name === 'Profile') {
                        iconName = 'user';
                      }
          
                      // You can return any component that you like here!
                      return <Entypo name={iconName} size={24} color={color} />;
                    },
                  })}
                  tabBarOptions={{
                    activeTintColor: '#ccbcf4',
                    inactiveTintColor: 'black',
                  }}
                  barStyle={{ backgroundColor: '#ccbcf4' }}
                  activeColor="#fff"
                  inactiveColor="gray"
                >
                    <Tab.Screen name="Home" component={Homepage}  />
                    <Tab.Screen name="Tutorials" component={Tips} />
                    <Tab.Screen name="Favourites" component={Favourites} />
                    <Tab.Screen name="Profile" component={Profile} />


                </Tab.Navigator>
    );
}

export default class Dashboard extends Component {
    
    render(){
        return(
            <NavigationContainer independent={true}>
                <Stack.Navigator headerMode="none">
                    <Stack.Screen name="rootHome" component={rootHome} />
                    <Stack.Screen name="search" component={Search} />    
                </Stack.Navigator>                
            </NavigationContainer>
        );
    }
}
