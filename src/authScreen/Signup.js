
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Alert,
    Image,
    ScrollView
} from 'react-native';
import { KeyboardAvoidingView } from 'react-native';
import { Header, Left, Body, Right, Button, Icon } from 'native-base';

export default class Signup extends Component {

    render() {
        return (
            <View style={styles.container} >
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Home')}>
                            <Icon style={styles.textGreen} name='arrow-back' />
                            <Text style={[styles.textGreen, styles.headBackArrow]}>Back</Text>
                        </Button>
                    </Left>
                    <Body />
                    <Right />
                </Header>
                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="5" enabled>
                    <ScrollView style={styles.scrollView} contentContainerStyle={{ flex: 1 }}>
                        <View style={styles.container}>
                            <View style={styles.bigContainer}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image resizeMode="contain" style={{ width: 200, height: 180, }} source={require("../assets/images/logoblack.png")} />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/user/androidL/40/4dad4a' }} />
                                    <TextInput style={styles.inputs}
                                        placeholder="Full Name"
                                        secureTextEntry={false}
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/password/androidL/40/4dad4a' }} />
                                    <TextInput style={styles.inputs}
                                        placeholder="Email"
                                        keyboardType="email-address"
                                        underlineColorAndroid='transparent' />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/phone/androidL/40/4dad4a' }} />
                                    <TextInput style={styles.inputs}
                                        placeholder="Mobile Number"
                                        secureTextEntry={false}
                                        underlineColorAndroid='transparent' />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/about/androidL/40/4dad4a' }} />
                                    <TextInput style={styles.inputs}
                                        placeholder="How did you hear about us"
                                        secureTextEntry={false}
                                        underlineColorAndroid='transparent' />
                                </View>
                                <Button style={styles.btnStyle} block success onPress={() => this.props.navigation.navigate('Login')}>
                                    <Text style={styles.loginText}>Submit</Text>
                                </Button>
                            </View>
                        </View>
                    </ScrollView>
                </KeyboardAvoidingView >
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
        justifyContent: 'center'

    },
    headBackArrow: {
        fontSize: 16,
        fontWeight: '500'
    },
    textGreen: {
        color: '#009432',
    },
    size22: {
        fontSize: 22
    },
    scrollView: {
        flex: 1,
    },

    inputContainer: {
        borderBottomColor: '#ddd',
        backgroundColor: '#FFFFFF',
        borderRadius: 4,
        borderBottomWidth: 1,
        marginHorizontal: 15,
        height: 45,
        marginBottom: 15,
        flexDirection: 'row',
        alignItems: 'center'
    },
    inputs: {
        height: 45,
        marginLeft: 16,
        borderBottomColor: '#ddd',
        flex: 1,
    },
    icon: {
        width: 30,
        height: 30,
    },
    inputIcon: {
        marginLeft: 15,
        justifyContent: 'center',

    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 20,
        marginHorizontal: 15,
        borderRadius: 4,
    },
    loginButton: {
        backgroundColor: '#3498db',
    },
    fabookButton: {
        backgroundColor: "#3b5998",
    },
    googleButton: {
        backgroundColor: "#ff0000",
    },
    loginText: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 14
    },
    restoreButtonContainer: {
        marginHorizontal: 15,
        marginBottom: 15,
        alignItems: 'flex-end',

    },
    restoreButtonContainerText: {
        color: '#3498db'
    },
    socialButtonContent: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
    },
    socialIcon: {
        color: "#FFFFFF",
        marginRight: 5
    },
    btnStyle: {
        marginTop: 15,
        marginHorizontal: 10,
    },
    helfBtnContainer: {

        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
    },
    helfBtn: {
        flex: 1,
        marginHorizontal: 0,
    },
    image: {
        width: 320,
        height: 300,
        resizeMode: 'contain'

    },
    backArrow: {
        marginTop: 30,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        marginLeft: 10
    },


});