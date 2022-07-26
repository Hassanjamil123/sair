import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import TutsHeader from '../components/tutsheader';
//import { render } from 'react-dom';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import Header from '../components/header';
require('firebase/auth');
import {  Entypo } from '@expo/vector-icons'

export default class Tips extends Component {
    render(){
        return(
            <View style = {styles.container}>
                <TutsHeader />
                <View style={styles.searchTut}>
                        <Text style={{
                            fontSize: 17,
                            fontWeight: '500',
                            left: 7,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 1 },
                            shadowOpacity: 0.3,
                            shadowRadius: 1,
                        }}>
                            Search for your favourite makeup tutorials.  
                        </Text>
                </View>
                <View style={styles.suggestedVids}>
                <Text style={{
                            fontSize: 24,
                            fontWeight: '500',
                            left: 7,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,
                        }}>
                            Suggested Videos...   
                        </Text> 
                    </View>
                    <TouchableOpacity>

                    <View style={styles.videoView}>
                        <View style={{
                             backgroundColor: 'white',  
                             height: 110, 
                             width: 116,
                             borderRightWidth: 1,
                             borderRightColor: 'white'
                             }}>
                            <Image
                            source={require('../assets/eyelash.jpeg')}
                            style={{
                                resizeMode: 'cover',
                                height: 110,
                                width: 116
                            }}
                            />
                        </View>
                        <View style={{backgroundColor: 'white', height: 110, width: 205}}>
                            <View style={{

                            }}>
                            <Text
                            style={{
                            fontSize: 18,
                            margin: 3,
                            left: 5,
                            textDecorationLine: 'underline',
                            fontWeight: '500'
                            }}
                            >
                             How to put on our new Faux Mink Lashes
                            </Text>
                            <Text
                            style={{
                            fontSize: 13,
                            margin: 3,
                            left: 5,
                            fontWeight: '400',
                            color: 'grey'
                        }}
                            >
                                Description
                            </Text>

                            <Text
                            style={{
                            fontSize: 14,
                            margin: 3,
                            left: 5,
                            //textDecorationLine: 'underline',
                            fontWeight: '400',
                            top: 12,
                            color: 'grey'
                            }}
                            >
                                1 week ago...
                            </Text>
                            </View>
                        </View>
                        <View style={{backgroundColor: 'white', width: 60, height: 110, justifyContent: 'center', alignItems: 'center'}}>
                            <Entypo name="controller-play" size={30} color="black" />
                        </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>

<View style={styles.videoView}>
    <View style={{
         backgroundColor: 'white',  
         height: 110, 
         width: 116,
         borderRightWidth: 1,
         borderRightColor: 'white'
         }}>
        <Image
        source={require('../assets/eyelash.jpeg')}
        style={{
            resizeMode: 'cover',
            height: 110,
            width: 116
        }}
        />
    </View>
    <View style={{backgroundColor: 'white', height: 110, width: 205}}>
        <View style={{

        }}>
        <Text
        style={{
        fontSize: 18,
        margin: 3,
        left: 5,
        textDecorationLine: 'underline',
        fontWeight: '500'
        }}
        >
         Trying our new Hydra Eyeliner
        </Text>
        <Text
        style={{
        fontSize: 13,
        margin: 3,
        left: 5,
        fontWeight: '400',
        color: 'grey'
    }}
        >
            Description
        </Text>

        <Text
        style={{
        fontSize: 14,
        margin: 3,
        left: 5,
        //textDecorationLine: 'underline',
        fontWeight: '400',
        top: 12,
        color: 'grey'
        }}
        >
            3 days ago...
        </Text>
        </View>
    </View>
    <View style={{backgroundColor: 'white', width: 60, height: 110, justifyContent: 'center', alignItems: 'center'}}>
        <Entypo name="controller-play" size={30} color="black" />
    </View>
</View>
</TouchableOpacity>

<TouchableOpacity>

<View style={styles.videoView}>
    <View style={{
         backgroundColor: 'white',  
         height: 110, 
         width: 116,
         borderRightWidth: 1,
         borderRightColor: 'white'
         }}>
        <Image
        source={require('../assets/eyelash.jpeg')}
        style={{
            resizeMode: 'cover',
            height: 110,
            width: 116
        }}
        />
    </View>
    <View style={{backgroundColor: 'white', height: 110, width: 205}}>
        <View style={{

        }}>
        <Text
        style={{
        fontSize: 18,
        margin: 3,
        left: 5,
        textDecorationLine: 'underline',
        fontWeight: '500'
        }}
        >
         Unboxing our first Faux Mink Lashes
        </Text>
        <Text
        style={{
        fontSize: 13,
        margin: 3,
        left: 5,
        fontWeight: '400',
        color: 'grey'
    }}
        >
            Description
        </Text>

        <Text
        style={{
        fontSize: 14,
        margin: 3,
        left: 5,
        //textDecorationLine: 'underline',
        fontWeight: '400',
        top: 12,
        color: 'grey'
        }}
        >
            1 week ago...
        </Text>
        </View>
    </View>
    <View style={{backgroundColor: 'white', width: 60, height: 110, justifyContent: 'center', alignItems: 'center'}}>
        <Entypo name="controller-play" size={30} color="black" />
    </View>
</View>
</TouchableOpacity>

<TouchableOpacity>

<View style={styles.videoView}>
    <View style={{
         backgroundColor: 'white',  
         height: 110, 
         width: 116,
         borderRightWidth: 1,
         borderRightColor: 'white'
         }}>
        <Image
        source={require('../assets/eyelash.jpeg')}
        style={{
            resizeMode: 'cover',
            height: 110,
            width: 116
        }}
        />
    </View>
    <View style={{backgroundColor: 'white', height: 110, width: 205}}>
        <View style={{

        }}>
        <Text
        style={{
        fontSize: 18,
        margin: 3,
        left: 5,
        textDecorationLine: 'underline',
        fontWeight: '500'
        }}
        >
         Just got the new Hydra Eyeliner
        </Text>
        <Text
        style={{
        fontSize: 13,
        margin: 3,
        left: 5,
        fontWeight: '400',
        color: 'grey'
    }}
        >
            Description
        </Text>

        <Text
        style={{
        fontSize: 14,
        margin: 3,
        left: 5,
        //textDecorationLine: 'underline',
        fontWeight: '400',
        top: 12,
        color: 'grey'
        }}
        >
            1 week ago...
        </Text>
        </View>
    </View>
    <View style={{backgroundColor: 'white', width: 60, height: 110, justifyContent: 'center', alignItems: 'center'}}>
        <Entypo name="controller-play" size={30} color="black" />
    </View>
</View>
</TouchableOpacity>

            </View>
        );
    }
}

const styles = StyleSheet.create ({
    container: {
        flex:1,
        backgroundColor: '#fff'
    },
    searchTut: {
        backgroundColor: 'white',
        height: 55,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.2,
        shadowRadius: 0.3, 
        elevation: 1,
    },
    suggestedVids: {
        top: 2,
        backgroundColor: 'white',
        height: 70,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1.5 },
        //shadowOpacity: 0.2,
        //shadowRadius: 0.3, 
       // elevation: 1,
    },
    videoView: {
        backgroundColor: 'white',
      //  height: 110,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.2,
        shadowRadius: 0.2, 
        elevation: 3,
        borderWidth: 0.2,
        borderColor: 'grey'
    }
 });