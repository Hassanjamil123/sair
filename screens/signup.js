import React, { Component } from 'react';
import { ActivityIndicator, StyleSheet, Image, Text, View, TouchableOpacity, TextInput, Alert } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
require('firebase/auth');

export default class Signup extends Component {
    
    constructor() {
        super();
        this.state = {
            isLoading: false,
            firstName: '',
            lastName: '',
            password: '',
            email: ''
        }
    }

    updateInputVal=(val, prop)=>{
        const state = this.state;
        state[prop] = val;
        this.setState(state);
    }

    registerUser = () => {
        if(this.state.firstName === '' && this.state.lastName === '' && this.state.email === '' && this.state.password === ''){
            Alert.alert('Please enter the required details.')
            console.log('Enter credentials')
        } else {
            this.setState({
                isLoading: true
            })
            firebase
            .auth()
            .createUserWithEmailAndPassword(this.state.email, this.state.password)
            .then((res) => {
               res.user.updateProfile({
                   firstName: this.state.firstName,
               }) 
               console.log('User registered.')
               this.setState({
                isLoading: false,
                firstName: '',
                lastName: '',
                email: '',
                password: ''
            })
            this.props.navigation.navigate('Login')
            })
            .catch(error => this.setState({errorMessage: error.message}))
        } 
    }
    
    render(){
        if(this.state.isLoading){
            return(
              <View style={styles.preloader}>
                <ActivityIndicator size="large" color="#fff"/>
              </View>
            )
          }

        return(
        <View style={styles.container}>
            {/* <Text style={styles.text}>SAIR Beauty</Text> */}
            <View style={styles.imageView}>
                <Image 
                source={require('../assets/image.jpg')}
                style={styles.image}
                />
            </View>
            
            <View style={styles.form}>
                <View style={styles.form1View}>
                <Text style={{fontSize: 13, marginTop: 5, color: 'white', fontWeight: '600', marginLeft: 17}}>
                     First Name:
                </Text>
                    <View style={{backgroundColor: '#ccbcf4', color: 'white', width: 200, marginLeft: 17}}>
                        <TextInput 
                        placeholder=" ..."
                        placeholderTextColor="#9e9c9e"
                        style={{height: 40, marginLeft: 3, color: 'white', fontSize: 16}}   
                        value={this.state.firstName}
                        onChangeText={(val) => this.updateInputVal(val, 'firstName')}
                        
                        />
                    </View>
                </View>

                <View style={styles.form2View}>
                <Text style={{fontSize: 13, marginTop: 5, color: 'white', fontWeight: '600', marginLeft: 17}}> Last Name:</Text>
                    <View style={{backgroundColor: '#ccbcf4', color: 'white', width: 200, marginLeft: 17}}>
                        <TextInput 
                        placeholder=" ..."
                        placeholderTextColor="#9e9c9e"
                        style={{height: 40, marginLeft: 3, color: 'white', fontSize: 16}}   
                        value={this.state.lastName}
                        onChangeText={(val) => this.updateInputVal(val, 'lastName')}
                        
                        />
                    </View>
                </View>

                <View style={styles.form3View}>
                <Text style={{fontSize: 13, marginTop: 5, color: 'white', fontWeight: '600', marginLeft: 17}}> Email:</Text>
                    <View style={{backgroundColor: '#ccbcf4', color: 'white', width: 200, marginLeft: 17}}>
                        <TextInput 
                        placeholder=" example@gmail.com"
                        placeholderTextColor="#9e9c9e"
                        style={{height: 40, marginLeft: 3, color: 'white', fontSize: 16}}   
                        value={this.state.email}
                        onChangeText={(val) => this.updateInputVal(val, 'email')}
                        
                        />
                    </View>
                </View>

                <View style={styles.form4View}>
                <Text style={{fontSize: 13, marginTop: 5, color: 'white', fontWeight: '600', marginLeft: 17}}> Password:</Text>
                    <View style={{backgroundColor: '#ccbcf4', color: 'white', width: 200, marginLeft: 17}}>
                        <TextInput 
                        placeholder=" ******"
                        placeholderTextColor="#9e9c9e"
                        style={{height: 40, marginLeft: 3, color: 'white', fontSize: 16}}   
                        secureTextEntry
                        selectTextOnFocus
                        value={this.state.password}
                        onChangeText={(val) => this.updateInputVal(val, 'password')}

                        />
                    </View>
                </View>

                <View style={styles.signup}>
                    <TouchableOpacity
                    onPress={() => this.registerUser()}
                    >
                        <View style={styles.signupButton}>
                            <Text
                            style={{color: '#ccbcf4', fontSize: 18, fontWeight: '600'}}
                            >
                            Sign up</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            <TouchableOpacity
             onPress={() => this.props.navigation.navigate('Login')}>
            <View style={{width: 280, height: 50, marginTop: -12, justifyContent: 'center', alignItems: 'center'}}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: '600', textDecorationLine: 'underline'}}>
                    Already a member of our makeup community ? Sign in. 
                </Text>
            </View>
            </TouchableOpacity>
            

            </View>
            

                  
    </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#ccbcf4',
      alignItems: 'center',
      justifyContent: 'center',
    },
    imageView: {
        flexDirection: 'column',
        marginTop: 80
    },
    image: {
        //width: 400,
        height: 150,
        resizeMode: 'center',
    },
    form: {
        //backgroundColor: 'grey',
        width: 350,
        height: 550,
    },
    form1View: {
        borderWidth: 1.4,
        borderColor: 'white',
        height: 70,
        justifyContent: 'center',
        borderRadius: 30
    },
    form1View: {
        borderWidth: 1.4,
        borderColor: 'white',
        height: 70,
        justifyContent: 'center',
        borderRadius: 30
    },
    form2View: {
        borderWidth: 1.4,
        borderColor: 'white',
        height: 70,
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 15
    },
    form3View: {
        borderWidth: 1.4,
        borderColor: 'white',
        height: 70,
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 15
    },
    form4View: {
        borderWidth: 1.4,
        borderColor: 'white',
        height: 70,
        justifyContent: 'center',
        borderRadius: 30,
        marginTop: 15
    },
    signup: {
        backgroundColor: '#ccbcf4',
        width: 250,
        height: 60,
        alignItems: 'center',
        justifyContent: 'center',
        margin: 17,
        marginLeft: 50
    },
    signupButton: {
        backgroundColor: '#fff',
        width: 140,
        height: 50,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 2,
        borderColor: '#ccbcf4',
        opacity: 5,
        shadowColor: 'grey',
        shadowOpacity: 0.5
        
    },
    preloader: {
      left: 0,
      right: 0,
      top: 0,
      bottom: 0,
      position: 'absolute',
      alignItems: 'center',
      justifyContent: 'center',
      backgroundColor: '#fff'
    }

  });
  