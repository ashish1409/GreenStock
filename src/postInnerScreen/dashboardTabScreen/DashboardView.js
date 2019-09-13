import React, { Component } from 'react';
import { View, Button, Text } from 'react-native';

export default class DashboardView extends Component {
  render() {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text>Store Dashboard</Text>
        <Button title="Go To Detail Screen inner of Store" onPress={() => this.props.navigation.navigate('DashboardInnerView')} />
      </View>
    );
  }
}
