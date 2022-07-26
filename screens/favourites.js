import React, { Component } from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Button, ActivityIndicator, Image } from 'react-native';
import { TextInput, ScrollView } from 'react-native-gesture-handler';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import Header from '../components/header';
require('firebase/auth');
import {  AntDesign, FontAwesome } from '@expo/vector-icons'


export default class Favourites extends Component {
    render(){
        return(
            <View style={styles.container}>
                <Header />
               <View style={styles.mainView}>
                    <View style={styles.favouriteHeader}>
                        <Text style={{
                            fontSize: 27,
                            fontWeight: '500',
                            left: 7,
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.4,
                            shadowRadius: 2,
                        }}>
                            Favourites    
                        </Text>       
                    </View>
                    <ScrollView showsVerticalScrollIndicator={false}>
                    <TouchableOpacity>

                    <View style={styles.favouriteView}>
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
                                Faux Mink Lashes
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
                            <View style={{
                                flexDirection: 'row'
                            }}>
                            <AntDesign name="star" size={20} color="gold" style={{left: 5}}/>
                            <AntDesign name="star" size={20} color="gold" style={{left: 6}}/>
                            <AntDesign name="star" size={20} color="gold" style={{left: 7}}/>
                            <AntDesign name="star" size={20} color="gold" style={{left: 8}}/>
                            <AntDesign name="staro" size={20} color="gold" style={{left: 9}}/>
                            </View>
                            <Text
                            style={{
                            fontSize: 16,
                            margin: 3,
                            left: 5,
                            //textDecorationLine: 'underline',
                            fontWeight: '500',
                            top: 5
                            }}
                            >
                                US $10.00 
                            </Text>
                            </View>
                        </View>
                        <View style={{backgroundColor: 'white', width: 60, height: 110, justifyContent: 'center', alignItems: 'center'}}>
                            <FontAwesome name="bookmark" size={30} color="black" />
                        </View>
                    </View>
                    </TouchableOpacity>

                    <TouchableOpacity>

<View style={styles.favouriteView}>
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
            Faux Mink Lashes
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
        <View style={{
            flexDirection: 'row'
        }}>
        <AntDesign name="star" size={20} color="gold" style={{left: 5}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 6}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 7}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 8}}/>
        <AntDesign name="staro" size={20} color="gold" style={{left: 9}}/>
        </View>
        <Text
        style={{
        fontSize: 16,
        margin: 3,
        left: 5,
        //textDecorationLine: 'underline',
        fontWeight: '500',
        top: 5
        }}
        >
            US $10.00 
        </Text>
        </View>
    </View>
    <View style={{backgroundColor: 'white', width: 60, height: 110, justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesome name="bookmark" size={30} color="black" />
    </View>
</View>
</TouchableOpacity>

<TouchableOpacity>

<View style={styles.favouriteView}>
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
            Faux Mink Lashes
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
        <View style={{
            flexDirection: 'row'
        }}>
        <AntDesign name="star" size={20} color="gold" style={{left: 5}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 6}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 7}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 8}}/>
        <AntDesign name="staro" size={20} color="gold" style={{left: 9}}/>
        </View>
        <Text
        style={{
        fontSize: 16,
        margin: 3,
        left: 5,
        //textDecorationLine: 'underline',
        fontWeight: '500',
        top: 5
        }}
        >
            US $10.00 
        </Text>
        </View>
    </View>
    <View style={{backgroundColor: 'white', width: 60, height: 110, justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesome name="bookmark" size={30} color="black" />
    </View>
</View>
</TouchableOpacity>

<TouchableOpacity>

<View style={styles.favouriteView}>
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
            Faux Mink Lashes
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
        <View style={{
            flexDirection: 'row'
        }}>
        <AntDesign name="star" size={20} color="gold" style={{left: 5}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 6}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 7}}/>
        <AntDesign name="star" size={20} color="gold" style={{left: 8}}/>
        <AntDesign name="staro" size={20} color="gold" style={{left: 9}}/>
        </View>
        <Text
        style={{
        fontSize: 16,
        margin: 3,
        left: 5,
        //textDecorationLine: 'underline',
        fontWeight: '500',
        top: 5
        }}
        >
            US $10.00 
        </Text>
        </View>
    </View>
    <View style={{backgroundColor: 'white', width: 60, height: 110, justifyContent: 'center', alignItems: 'center'}}>
        <FontAwesome name="bookmark" size={30} color="black" />
    </View>
</View>
</TouchableOpacity>
</ScrollView>

               </View>
            </View>
        );
    }   
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
         backgroundColor: 'white'
    },
    mainView: {
        backgroundColor: 'white',
        height: 600
    },
    favouriteHeader: {
        backgroundColor: 'white',
        height: 65,
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.2,
        shadowRadius: 0.3, 
        elevation: 1,
    },
    favouriteView: {
        backgroundColor: 'white',
        height: 110,
        flexDirection: 'row',
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 1.5 },
        shadowOpacity: 0.2,
        shadowRadius: 0.2, 
        elevation: 3,
        borderWidth: 0.2,
        borderColor: 'grey'
    }
})