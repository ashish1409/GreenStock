import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import { Tab, Tabs, TabHeading, Text } from 'native-base';

import OverviewTab from './OverViewTab';
import ETFsTab from './ETFsTab';
import Icon from 'react-native-vector-icons/FontAwesome';
export default class GreenStockInfoTab extends Component {
    render() {
        return (

            <Tabs tabBarUnderlineStyle={{ borderBottomWidth: 3, borderBottomColor: '#4dad4a' }}>
                <Tab heading="Overview" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#4d4d4c', fontSize: 16, fontWeight: '500', }} activeTabStyle={{ backgroundColor: '#fff', fontSize: 18, }} activeTextStyle={{ color: '#4d4d4c', fontWeight: '500' }}>
                    <OverviewTab />
                </Tab>
                <Tab heading="ETFs & Weights" tabStyle={{ backgroundColor: '#fff' }} textStyle={{ color: '#4d4d4c', fontSize: 16, fontWeight: '500', }} activeTabStyle={{ backgroundColor: '#fff', fontSize: 18, }} activeTextStyle={{ color: '#4d4d4c', fontWeight: '500' }}>
                    <ETFsTab />
                </Tab>
            </Tabs>

        );
    }
}
const styles = StyleSheet.create({
    tabTextStyle: {
        fontSize: 18,
        color: '#4d4d4c',
        fontWeight: '500',
    },
});
