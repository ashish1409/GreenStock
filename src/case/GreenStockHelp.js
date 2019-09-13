import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Header, Left, Body, CardItem, Card, Thumbnail, Right, Button, Icon, Title, Text, Item, Input, Container, Content } from 'native-base';
import BigmoneyList from './BigmoneyList';
const image1 = require('../assets/images/stock1.png');
const image2 = require('../assets/images/stock2.png');
const image3 = require('../assets/images/stock3.png');

export default class GreenStockHelp extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => this.props.navigation.navigate('Bigmoney')}>
                            <Icon style={styles.textGreen} name='arrow-back' />
                            <Text style={[styles.textGreen, styles.headBackArrow]}>Back</Text>
                        </Button>
                    </Left>
                    <Body>
                        <Image resizeMode="cover" style={{ width: 140, height: 75, marginTop: 5 }} source={require("../assets/images/logoheaderblack.png")} />
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require("../assets/images/stock1.png")} />
                                <Body>
                                    <Text style={styles.headText}>Index Value</Text>
                                    <Text note >its starts from 100 and indicates</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.noteText}>
                                    its starts from 100 and indicates the returnof Greenstockfrom the data of inception. Sothis Greenstock has returned 234.23% since Jun 2007. The precentage show (-0.27%) is is today's change in index value.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require("../assets/images/stock1.png")} />
                                <Body>
                                    <Text style={styles.headText}>CAGR</Text>
                                    <Text note >CAGR (Compounded Annual Growth Rate)</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.noteText}>
                                    CAGR (Compounded Annual Growth Rate)  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>
                    <Card style={{ flex: 0 }}>
                        <CardItem>
                            <Left>
                                <Thumbnail source={require("../assets/images/stock1.png")} />
                                <Body>
                                    <Text style={styles.headText}>Low Risk</Text>
                                    <Text note >Stock prices move up and down on the daily basis</Text>
                                </Body>
                            </Left>
                        </CardItem>
                        <CardItem>
                            <Body>
                                <Text style={styles.noteText}>
                                    Stock prices move up and down on the daily basis, It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.
                                </Text>
                            </Body>
                        </CardItem>
                    </Card>

                </Content>
            </Container>
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
    },
    headText: {
        fontSize: 18,
        color: '#4d4d4c',
        fontWeight: "600",
    },
    noteText: {
        fontSize: 16,
        color: '#4d4d4c',
        fontWeight: "500",
    }
});