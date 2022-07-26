import React, { Component, useState, useEffect} from 'react';
import { View, StyleSheet, Text, Platform, TouchableOpacity, Button, ActivityIndicator, Image } from 'react-native';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
import Header from '../components/header';
require('firebase/auth');
import { SimpleLineIcons, Entypo, EvilIcons, FontAwesome5, FontAwesome, AntDesign, MaterialIcons } from '@expo/vector-icons'
import AsyncStorage from '@react-native-community/async-storage';
import * as ImagePicker from 'expo-image-picker';
import Constants from 'expo-constants';
import { render } from 'react-dom';
import { useNavigation } from '@react-navigation/native';


export default function Profile() {
    const navigation = useNavigation();
    const signOut = async () => {

        firebase.auth().signOut().then(() => {
            navigate('Login');
        })
        // .catch(error => this.setState({ errorMessage: error.message }))
    }


        //     const [image, setImage] = useState(null);

    // useEffect(() => {
    //     (async () => {
    //         if(Platform.OS !== 'web'){
    //             const { status } = await ImagePicker.getCameraRollPermissionsAsync();
    //             if(status !== 'granted'){
    //                 alert('Permission required to access camera roll');
    //             }
    //         }
    //     })();
    // }, []);

    // const pickImage = async () => {
    //     let result = await ImagePicker.launchImageLibraryAsync({
    //         mediaTypes: ImagePicker.MediaTypeOptions.All,
    //         aspect: [4, 3],
    //         quality: 1
    //     });

    //     console.log(result);
    //     if (!result.cancelled) {
    //         setImage(result.uri);
    //     } 
    // };
        return(
            <View style={styles.container}>
                <Header />
                <View style={styles.profieImage}>
                    <View 
                    style={{
                        marginTop: 30
                    }}
                    >
                    <TouchableOpacity
                  //  onPress={pickImage}
                    >
                    {
                    <Image 
                    
                    style={{
                        resizeMode: 'cover',
                        width: 110,
                        height: 110,
                        borderWidth: 1.5,
                        borderColor: '#eee',
                        borderRadius: 55
                    }}
                    />
                    }
                    {
                    <Entypo
                    name="circle-with-plus"
                    size={32} 
                    color="#ccbcf4" 
                    style={{
                        left: 70,
                        top: -30
                    }}
                    />
                    }
                    
                    
                    </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.profileSettings}>
                    <View style={{
                        backgroundColor: 'white',
                        height: 60,
                        justifyContent: 'center',
                        alignItems: 'center',
                        shadowColor: '#000',
                        shadowOffset: { width: 0, height: 2 },
                        shadowOpacity: 0.4,
                        shadowRadius: 2,
                        elevation: 2,
                    }}>
                        <View style={{
                            shadowColor: '#000',
                            shadowOffset: { width: 0, height: 2 },
                            shadowOpacity: 0.3,
                            shadowRadius: 1,
                            elevation: 2,
                        }}>
                        <Text style={{fontSize: 22, fontWeight: '500'}}>Profile Settings</Text>
                        </View>
                        
                    </View>
                    <View style={styles.settingsList}>
                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: '#F8F8FF',
                                height: 45,
                                //justifyContent: 'center',
                                borderBottomWidth: 0.2,
                                borderTopWidth: 0.2,
                                borderBottomColor: 'grey',
                                borderTopColor: 'grey',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    left: 5,   
                                }}>
                                <EvilIcons name="user" size={30}/>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    top: 10,
                                    left: 5
                                }}>
 
                                <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 2.5
                                }}
                                > User Description</Text>
                                </View>
                                
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: '#F8F8FF',
                                height: 45,
                                //justifyContent: 'center',
                                borderBottomWidth: 0.2,
                                borderTopWidth: 0.2,
                                borderBottomColor: 'grey',
                                borderTopColor: 'grey',
                                flexDirection: 'row'
                            }}> 
                                <View style={{
                                    justifyContent: 'center',
                                    left: 10
                                }}>
                                    <FontAwesome5 name="history" size={20}/>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    top: 10,
                                    left: 5
                                }}>
                                
                                <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 2.5,
                                    left: 9
                                }}
                                > Payment history</Text>
                                </View>
                                
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: '#F8F8FF',
                                height: 45,
                                //justifyContent: 'center',
                                borderBottomWidth: 0.2,
                                borderTopWidth: 0.2,
                                borderBottomColor: 'grey',
                                borderTopColor: 'grey',
                                flexDirection: 'row'
                            }}> 
                            <View style={{
                                justifyContent: 'center',
                                left: 9
                            }}>
                            <FontAwesome name="bookmark-o" size={24}/>
                            </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    top: 10,
                                    left: 5
                                }}>
                                
                                <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 2.5,
                                    left: 9
                                }}
                                > Saved</Text>
                                </View>
                                
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: '#F8F8FF',
                                height: 45,
                                //justifyContent: 'center',
                                borderBottomWidth: 0.2,
                                borderTopWidth: 0.2,
                                borderBottomColor: 'grey',
                                borderTopColor: 'grey',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    left: 5
                                }}>
                                    <AntDesign name="like1" size={24}/>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    top: 10,
                                    left: 5
                                }}>
                                
                                <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 2.5,
                                    left: 4
                                }}
                                > Liked tutorials</Text>
                                </View>
                                
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: '#F8F8FF',
                                height: 45,
                                //justifyContent: 'center',
                                borderBottomWidth: 0.2,
                                borderTopWidth: 0.2,
                                borderBottomColor: 'grey',
                                borderTopColor: 'grey',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    left: 7
                                }}>
                                <Entypo name="remove-user" size={24}/>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    top: 10,
                                    left: 5
                                }}>

                                <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 2.5,
                                    left: 5
                                }}
                                > Privacy</Text>
                                </View>
                                
                            </View>
                        </TouchableOpacity>

                        <TouchableOpacity>
                            <View style={{
                                backgroundColor: '#F8F8FF',
                                height: 45,
                                //justifyContent: 'center',
                                borderBottomWidth: 0.2,
                                borderTopWidth: 0.2,
                                borderBottomColor: 'grey',
                                borderTopColor: 'grey',
                                flexDirection: 'row'
                            }}>
                                <View style={{
                                    justifyContent: 'center',
                                    left: 5
                                }}>
                                <MaterialIcons name="payment" size={24}/>
                                </View>
                                <View style={{
                                    flexDirection: 'row',
                                    justifyContent: 'center',
                                    top: 10,
                                    left: 5
                                }}>

                                <Text
                                style={{
                                    fontSize: 16,
                                    fontWeight: '500',
                                    marginTop: 2.5
                                }}
                                > Payment options</Text>
                                </View>
                                
                            </View>
                        </TouchableOpacity>

                    </View>

                    <View style={styles.logoutView}>
                                <View style={styles.logoutView}>
                                    <TouchableOpacity
                                    onPress={signOut}
                                    >
                                        <View style={{
                                            backgroundColor: '#ccbcf4',
                                            width: 70,
                                            height: 66,
                                            justifyContent: 'center',
                                            alignItems: 'center',
                                            borderRadius: 50,
                                            borderWidth: 0.1,
                                            borderColor: 'black'
                                        }}>
                                            <SimpleLineIcons name="logout" size={30} color="white" />
                                        </View>
                                    </TouchableOpacity>
                                        <View>
                                        <Text
                                        style={{fontWeight: '600', top: 7, textDecorationLine: 'underline'}}
                                        >
                                            Logout
                                        </Text>
                                        </View>
                                </View>
                    </View>
                </View>
                
            </View>
        );
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    profieImage: {
        backgroundColor: 'white',
        height: 160,
        justifyContent: 'center',
        alignItems: 'center',
    },
    profileSettings: {
        backgroundColor: 'grey',
        height: 270
    },
    settingsList: {
        backgroundColor: '#ccbcf4',
        height: 270,
    },
    logoutView: {
        backgroundColor: 'white',
        height: 120,
        justifyContent: 'center',
        alignItems: 'center'
    }

});