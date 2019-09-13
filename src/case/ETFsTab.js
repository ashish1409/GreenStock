import React, { Component } from 'react';
import { StyleSheet, View, Image, TouchableHighlight, Text } from 'react-native';
import { Card, CardItem, Body, } from 'native-base';
import Icon from 'react-native-vector-icons/FontAwesome';
const myIcon = <Icon name="unlock-alt" size={40} color="#5db85c" />;
export default class ETFsTab extends Component {
    render() {
        return (

            <Card>
                <CardItem>
                    <Body>
                        <View style={styles.container}>
                            <View style={{ marginBottom: 10 }}>{myIcon}</View>
                            <Text style={styles.headText}>Login to see constituents and </Text>
                            <Text style={styles.headText}>weight for this Greenstock</Text>
                            <TouchableHighlight style={[styles.buttonContainer, styles.loginButton]} onPress={() => this.clickListener('login')}>
                                <Text style={styles.buttonText}>Continue With Kite</Text>
                            </TouchableHighlight>
                            <Text style={styles.description}>Don't have an account</Text>
                            <Text style={styles.signup}>Sign up for a Zerodha account</Text>

                        </View>
                    </Body>
                </CardItem>
            </Card>

        );
    }
}

const styles = StyleSheet.create({

    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 50,

    },
    headText: {
        fontSize: 18,
        color: '#4d4d4c',
        marginHorizontal: 20,
        marginVertical: 0,
        fontWeight: '500',
    },

    description: {
        fontSize: 14,
        color: '#909090',
        marginBottom: 10
    },
    buttonContainer: {
        height: 45,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 20,
        marginBottom: 20,
        width: 250,
        borderRadius: 30,
    },
    loginButton: {
        backgroundColor: "#5db85c",
    },
    buttonText: {
        color: "#FFFFFF",
        fontSize: 20,
    },
    signup: {
        color: "#5db85c",
        fontSize: 14,
        fontWeight: '600',
        marginBottom: 20

    }
})