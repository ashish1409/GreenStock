
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TextInput,
    TouchableOpacity,
    Image,
    ScrollView
} from 'react-native';
import { Header, Left, Body, Right, Button, Icon } from 'native-base';
import { KeyboardAvoidingView } from 'react-native';

export default class Login extends Component {

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

                <KeyboardAvoidingView style={styles.container} behavior="padding" keyboardVerticalOffset="35" enabled>


                    <ScrollView style={styles.scrollView} contentContainerStyle={{ flex: 1 }}>
                        <View style={styles.container}>
                            <View style={styles.bigContainer}>
                                <View style={{ alignItems: 'center' }}>
                                    <Image resizeMode="contain" style={{ width: 200, height: 180, }} source={require("../assets/images/logoblack.png")} />
                                </View>
                                <View style={styles.inputContainer}>
                                    <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/password/androidL/40/4dad4a' }} />
                                    <TextInput style={styles.inputs}
                                        placeholder="Email"
                                        keyboardType="email-address"
                                        underlineColorAndroid='transparent' />
                                </View>

                                <View style={styles.inputContainer}>
                                    <Image style={[styles.icon, styles.inputIcon]} source={{ uri: 'https://png.icons8.com/envelope/androidL/40/4dad4a' }} />
                                    <TextInput style={styles.inputs}
                                        placeholder="Password"
                                        secureTextEntry={true}
                                        underlineColorAndroid='transparent' />

                                </View>

                                <TouchableOpacity style={styles.restoreButtonContainer} onPress={() => this.props.navigation.navigate('Forgot')}>
                                    <Text style={styles.restoreButtonContainerText} >Forgot?</Text>
                                </TouchableOpacity>
                                <Button style={[styles.btnStyle]} block success onPress={() => this.props.navigation.navigate('Dashboard')}>
                                    <Text style={styles.loginText}>Login</Text>
                                </Button>
                                <View style={styles.helfBtnContainer}>
                                    <View style={[styles.btnStyle, styles.helfBtn]}>
                                        <TouchableOpacity style={[styles.buttonContainer, styles.fabookButton]}>
                                            <View style={styles.socialButtonContent}>
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/facebook/androidL/40/FFFFFF' }} />
                                                <Text style={styles.loginText}>facebook</Text>
                                            </View>
                                        </TouchableOpacity>

                                    </View>
                                    <View style={[styles.btnStyle, styles.helfBtn]}>
                                        <TouchableOpacity style={[styles.buttonContainer, styles.googleButton]}>
                                            <View style={styles.socialButtonContent}>
                                                <Image style={styles.icon} source={{ uri: 'https://png.icons8.com/google/androidL/40/FFFFFF' }} />
                                                <Text style={styles.loginText}>google</Text>
                                            </View>
                                        </TouchableOpacity>
                                    </View>
                                </View>
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
        justifyContent: 'center'
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
        color: '#4dad4a',
        fontWeight: '500'
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
        marginTop: 20,
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