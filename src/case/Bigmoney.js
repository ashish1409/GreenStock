
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Header, Left, Body, Right, Button, Icon, Title, Text, Item, Input } from 'native-base';
import BigmoneyList from './BigmoneyList';
import { withNavigation } from 'react-navigation';

class Bigmoney extends Component {

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
                    <Body>
                        <Image resizeMode="cover" style={{ width: 140, height: 75, marginTop: 5 }} source={require("../assets/images/logoheaderblack.png")} />
                    </Body>
                    <Right>

                        <Button transparent onPress={() => this.props.navigation.navigate('GreenStockSort')}>
                            <Icon style={[styles.textGreen]} name='more' />
                        </Button>
                        <Button transparent onPress={() => this.props.navigation.navigate('GreenStockFilter')}>
                            <Icon style={[styles.textGreen, styles.size22]} name='funnel' />
                        </Button>
                    </Right>
                </Header>
                <View>
                    <Item style={{ paddingHorizontal: 10 }}>
                        <Icon name="ios-search" />
                        <Input placeholder="Search" />
                        <Icon style={[styles.textGreen]} name="stats" />
                    </Item>
                </View>
                <View>

                </View>
                <View style={[styles.container, styles.bdr]}>
                    <BigmoneyList />
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
    bdr: {
        height: 1,
        backgroundColor: "#bfc7ce1a"
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
    }
});

export default withNavigation(Bigmoney);