import React, { Component } from 'react';
import { View, Text, Image, } from 'react-native';
import { Button } from 'native-base';
import { withNavigation } from 'react-navigation';
class HomeView extends Component {
    constructor(props) {
        super()
    }
    render() {
        return (
            <View style={styles.container}>
                <View style={{ flex: 1 }}>
                    <View style={{ flex: 1, alignItems: 'flex-start' }}>
                        <Image resizeMode="contain" style={{ width: 200, height: 180, marginLeft: -10 }} source={require("../assets/images/logoblack.png")} />
                    </View>
                    <View style={{ flex: 3.4, alignItems: 'center', justifyContent: 'center', textAlign: 'center' }}>
                        <Text style={styles.textSub}>Greenstock one of the best service provider for invest money</Text>
                    </View>
                    <View style={{ flex: 1.5 }}>
                        <Button style={styles.btnStyle1} block success onPress={() => this.props.navigation.navigate('Login')}>
                            <Text style={styles.buttonText}>Continue With Zerodha Kite</Text>
                        </Button>
                        <Button style={styles.btnStyle2} block success onPress={() => this.props.navigation.navigate('Bigmoney')}>
                            <Text style={styles.buttonText}>See All Bigmoney</Text>
                        </Button>
                        <View style={styles.helfBtnContainer}>
                            <View style={[styles.btnStyle, styles.helfBtn]}>
                                <Button style={styles.btnStyle} block success onPress={() => this.props.navigation.navigate('Signup')}>
                                    <Text style={styles.buttonText}>Signup</Text>
                                </Button>
                            </View>
                            <View style={[styles.btnStyle, styles.helfBtn]}>
                                <Button style={styles.btnStyle} block success onPress={() => this.props.navigation.navigate('Forgot')}>
                                    <Text style={styles.buttonText}>Forgot</Text>
                                </Button>
                            </View>
                        </View>
                    </View>

                </View>
            </View>


        );
    }
}

const styles = {
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        margin: 0,
    },
    headerbg: {
        flex: 1,
        width: null,
        alignSelf: "stretch"
    },
    helfBtnContainer: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    helfBtn: {
        flex: 1,
        marginTop: 0,
        marginBottom: 0,
        marginLeft: 5,
        marginRight: 5,
    },
    textLogo: {
        fontSize: 36,
        color: "#000",
        fontWeight: 'normal',
    },
    textSub: {
        fontSize: 32,
        color: "#4d4d4c",
        fontWeight: 'normal',
        paddingHorizontal: 10,
        textShadowColor: 'rgba(255, 255, 255, 0.75)',

    },
    buttonContainer: {
        backgroundColor: '#2980b6',

    },
    buttonText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 14
    },

    btnStyle: {
        marginTop: 0,
        color: '#fff',
    },
    btnStyle1: {
        marginTop: 0,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        color: '#fff',
    },
    btnStyle2: {
        marginTop: 5,
        marginBottom: 5,
        marginLeft: 5,
        marginRight: 5,
        color: '#fff',
    }
}

export default withNavigation(HomeView);

