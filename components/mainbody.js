import React from 'react';
import { View, StyleSheet, Text, TouchableOpacity, Image, ScrollView } from 'react-native';

export default function MainBody(){
    return(
        <View style={styles.container}>
            <ScrollView>
        <View style={styles.Maincard}>
        
            <View style={{
                flex: 1,
                borderWidth: 0.1,
                borderColor: 'black',
        //backgroundColor: 'black'
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.4,
        shadowRadius: 2,
        elevation: 2,

            }}>

            <View style={{margin: 5}}>
                    <Text
                    style={{fontSize: 24,  fontWeight: '500'}}
                    >
                        Trending
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.productCard}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                <View style={styles.product1Card}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                <View style={styles.product2Card}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                

                </ScrollView>
                </View>
             </View>

             <View style={{
                 flex: 1,
                borderWidth: 0.1,
                borderColor: 'black',
                //backgroundColor: 'black'
                top: 20,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 2,
                elevation: 2,

            }}>

            <View style={{margin: 5}}>
                    <Text
                    style={{fontSize: 24,  fontWeight: '500'}}
                    >
                        Lashes
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.productCard}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                <View style={styles.product1Card}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                <View style={styles.product2Card}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                

                </ScrollView>
                </View>
             </View>
                
                
             <View style={{
                 flex: 1,
                borderWidth: 0.1,
                borderColor: 'black',
                //backgroundColor: 'black'
                top: 40,
                shadowColor: '#000',
                shadowOffset: { width: 0, height: 2 },
                shadowOpacity: 0.4,
                shadowRadius: 2,
                elevation: 2,

            }}>

            <View style={{margin: 5}}>
                    <Text
                    style={{fontSize: 24,  fontWeight: '500'}}
                    >
                        Eyeliners
                    </Text>
                </View>
                <View style={{flexDirection: 'row'}}>
                <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                <View style={styles.productCard}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                <View style={styles.product1Card}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                <View style={styles.product2Card}>
                    <View style={{
                        margin: 1,
                        backgroundColor: 'white',
                    }}>
                    <Image 
                    source={require('../assets/eyelash.jpeg')}
                    style={{
                        resizeMode: 'stretch',
                        height: 120,
                        width: 135,
                        left: 0.3
                    }}
                    />
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 26,
                        justifyContent: 'center'
                    }}>
                        <Text style={{fontSize: 16 , fontWeight: '400'}}>{' Faux Mink Lashes'}</Text>
                    </View>
                    <View style={{
                        backgroundColor: 'white',
                        height: 25,
                        justifyContent: 'center',
                        marginTop: 10
                    }}>
                        <Text style={{fontSize: 18, fontWeight: 'bold'}}> US $10.00</Text>
                    </View>
                    
                </View>

                

                </ScrollView>
                </View>
             </View>


            </View>
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        //justifyContent: 'center',
        //alignItems: 'center'
        top: 2,
     //   backgroundColor: 'white'
    },
    Maincard: {
        flex: 1,
    //    backgroundColor: 'aqua',
        width: '100%',
        height: 740,
     //   flexDirection: 'row'
     left: 5,
     top: 2
    },
    productCard: {
        flex: 1,
        backgroundColor: 'white',
        width: 142,
        height: 190,
        top: 3,
        left: 2,
        borderWidth: 1.5,
        borderColor: 'grey',
        elevation: 3
    },
    product1Card: {
        flex: 1,
        backgroundColor: 'white',
        width: 142,
        height: 190,
        top: 3,
        left: 2,
        borderWidth: 1.5,
        borderColor: 'grey',
        left: 10
    },
    product2Card: {
        flex: 1,
        backgroundColor: 'white',
        width: 142,
        height: 190,
        top: 3,
        left: 2,
        borderWidth: 1.5,
        borderColor: 'grey',
        left: 20
    },
    product3Card: {
        flex: 1,
        backgroundColor: 'white',
        width: 142,
        height: 190,
        top: 3,
        left: 2,
        borderWidth: 1.5,
        borderColor: 'grey',
        left: 30
    },
    product4Card: {
        flex: 1,
        backgroundColor: 'white',
        width: 142,
        height: 190,
        top: 3,
        left: 2,
        borderWidth: 1.5,
        borderColor: 'grey',
        left: 40
    },
})