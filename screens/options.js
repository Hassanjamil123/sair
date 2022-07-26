import React, { Component } from 'react';
import { StyleSheet, Image, Text, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import { AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'
import ExpoStatusBar from 'expo-status-bar/build/ExpoStatusBar';
import * as firebase from 'firebase';
import '@firebase/auth';
import '@firebase/firestore';
require('firebase/auth');
import * as Facebook from 'expo-facebook';
export default class Options extends Component {

    componentDidMount(){
        firebase
        .auth()
        .onAuthStateChanged((user) => {
            if(user != null){
                console.log(user)
            }
        });
    }
    

    async Facebooklogin() {
        const { type, token } = await
        Facebook.logInWithReadPermissionsAsync(
       "781203132683204",{
              permission: "public_profile"
    } 
);

if (type == "success") {
    const credential =   
      firebase
        .auth
        .FacebookAuthProvider
        .credential(token);
  }
  firebase
   .auth().signInWithCredential(credential)
   .catch(error => {
       console.log(error);
   });
   this.props.navigation.navigate('Dashboard')
}
    

    render(){
        return(
        <View style={styles.container}>
            {/* <Text style={styles.text}>SAIR Beauty</Text> */}
            <View style={styles.imageView}>
                <Image 
                source={require('../assets/image.jpg')}
                style={styles.image}
                />
            </View>
         <View style={styles.allbuttons}>
         <TouchableOpacity>
            <View style={styles.button1View}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontSize: 14, fontWeight: '600'}}>Sign up with Apple account</Text>
                        <AntDesign name="apple1" color="white" size={20} style={{marginLeft: 7}} />
                    </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity onPress={() => this.Facebooklogin()}>
            <View style={styles.button2View}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontSize: 14, fontWeight: '600'}}> Sign up with Facebook account</Text>
                        <Entypo name="facebook-with-circle" size={21} color="white" style={{marginLeft: 2}} />
                    </View>
            </View>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => this.props.navigation.navigate('Signup')}
        >
            <View style={styles.button3View}>
                    <View style={{flexDirection: 'row'}}>
                        <Text style={{color: 'white', fontSize: 17, fontWeight: '600'}}>Sign up with Email</Text>
                        <MaterialIcons  name="email" size={21} color="white" style={{marginLeft: 5}} />
                    </View>
            </View>
        </TouchableOpacity>
          </View>
          <TouchableOpacity
           onPress={() => this.props.navigation.navigate('Login')}>
          <View style={{width: 280, height: 50, marginTop: 30}}>
                <Text style={{color: 'white', fontSize: 14, fontWeight: '600', textDecorationLine: 'underline'}}> Already a member of our makeup community ? Sign in. </Text>
            </View>
          </TouchableOpacity>
                
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
    text: {
      fontSize: 24,
      color: 'white',
      fontWeight: 'bold'
    },
    imageView: {
        flexDirection: 'column',
        marginTop: -430
    },
    image: {
        //width: 400,
        //height: 700,
        resizeMode: 'center',
        backfaceVisibility: 'hidden'
    },
    button1View: {
        backgroundColor: '#ccbcf4',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        borderWidth: 2,
        borderColor: 'white',
        
    },
    button2View: {
        backgroundColor: '#ccbcf4',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    button3View: {
        backgroundColor: '#ccbcf4',
        width: 300,
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 40,
        marginTop: 10,
        borderWidth: 2,
        borderColor: 'white'
    },
    allbuttons: {
        marginTop: -200
    }
  });
  