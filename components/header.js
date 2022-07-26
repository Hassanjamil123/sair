import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, ActivityIndicator } from 'react-native';
import { FontAwesome } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function Header(){
    const navigation = useNavigation();
    return(
        <View style={styles.header}>
            <View style={{top: 28, left:20}}>
                <Text style={{color: '#fff', fontSize: 28, fontWeight: '400'}}>
                    S A I R
                </Text>
            </View>
            <View style={styles.icons}>
                <TouchableOpacity onPress={() => navigation.navigate('Search')} >
                     <FontAwesome name="search" size={23} color="#fff"/>
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
        left: -15,
        shadowColor: 'grey',
        shadowOffset: { width: 6, height: 6},
        shadowOpacity: 0.6,
    
    }
});