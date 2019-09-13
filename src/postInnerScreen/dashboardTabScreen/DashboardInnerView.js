import React, { Component } from 'react';
import { View, Text } from 'react-native';

export default class DashboardInnerView extends Component {
    render() {
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Store Inner View  inner</Text>
            </View>
        );
    }
}
