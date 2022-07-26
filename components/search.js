import React from 'react';
import {View, StyleSheet, Text, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import { FontAwesome, Ionicons} from '@expo/vector-icons'
import { TextInput } from 'react-native-paper';

export default function Search({ navigation}){
    return(
        <View style={styles.header}>
            <View style={{ top: 35, left:13, shadowColor: 'grey', shadowOffset: { width: 6, height: 6}, shadowOpacity: 0.6,}}>
                <Ionicons name="ios-arrow-back" size={25} color="white" onPress={() => navigation.goBack() } />
            </View>
            <View style={{
                backgroundColor: '#ccbcf4',
                width: '88%',
                left: 35,
                top: -1,
                height: 8,
                borderRadius: 30
            }}>
                <TextInput 
                placeholder="Search items..."
                style={{height: 40, borderColor: '#7a42f4',
                borderWidth: 1, borderColor: '#ccbcf4', borderBottomWidth: 1, borderBottomColor: '#ccbcf4'}}
                />
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={() => alert('Searching')} >
                     <FontAwesome name="search" size={24} color="#ccbcf4"/>
                </TouchableOpacity>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    header: {
        backgroundColor: '#ccbcf4',
       // flexDirection: 'row',
        width: "100%",
        height: 85,
        justifyContent: 'center',
        //alignItems: 'center'
        elevation: 3,
        
    },
    icons: {
        alignItems: 'flex-end',
        left: -20,
        shadowColor: 'grey',
        shadowOffset: { width: 6, height: 6},
        shadowOpacity: 0.3,
     },
    // input: {
    //     width: 300,
    //     height: 10,
    //     marginLeft: 20
    // }
})