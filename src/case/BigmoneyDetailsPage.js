
import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
    Text,

} from 'react-native';
import { withNavigation } from 'react-navigation';
import { Card, Header, CardItem, Thumbnail, H2, Badge, Container, Content, Button, Icon, Left, Body, Right, Label } from 'native-base'
import GreenStockInfoTab from './GreenStockInfoTab'

class BigmoneyDetailsPage extends Component {

    render() {
        const { navigation } = this.props;
        const itemId = navigation.getParam('itemId', 'NO-ID');
        const otherParam = navigation.getParam('otherParam', 'some default value');


        return (
            <View style={styles.container} >
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

                <View style={[styles.container, styles.bdr]}>
                    <Container>
                        <Content>
                            <Card>
                                <CardItem>
                                    <Left>
                                        <Thumbnail source={itemId.image} />
                                        <Body>
                                            <Text style={styles.BigmoneyValueName}>{itemId.stockName}</Text>
                                            <Text note style={styles.bigmoneyValueDetails}>{itemId.details}</Text>
                                            <Badge style={{ backgroundColor: '#f1f1f1', marginTop: 10, marginBottom: 0, borderRadius: 3 }}>
                                                <Text style={{ color: '#757575', fontWeight: '500' }}>Low Risk</Text>
                                            </Badge>
                                        </Body>
                                        <TouchableOpacity style={{ marginTop: -70 }} onPress={() => this.props.navigation.navigate('GreenStockHelp')}>
                                            <Badge success>
                                                <Icon name="help-buoy" style={{ fontSize: 18, color: "#fff", lineHeight: 20 }} />
                                            </Badge>
                                        </TouchableOpacity>
                                        <TouchableOpacity style={{ marginTop: -70 }} onPress={() =>
                                            this.props.navigation.navigate('PerformanceChart')}>
                                            <Badge warning style={{ marginLeft: 5, }}>
                                                <Icon name="pulse" style={{ fontSize: 15, color: "#fff", lineHeight: 16, fontWeight: '600' }} />
                                            </Badge>
                                        </TouchableOpacity>
                                    </Left>
                                </CardItem>


                                <CardItem >
                                    <View style={styles.priceBlock}>
                                        <View style={styles.stockValue} >
                                            <Text style={styles.stockText}>{itemId.stockDaily}</Text>
                                            <Text style={[styles.stockTextValue, styles.green]}>{itemId.stockDailyValue}</Text>
                                        </View>
                                        <View style={styles.stockValue}>
                                            <Text style={styles.stockText}>{itemId.stockCAGR}</Text>
                                            <Text style={[styles.stockTextValue, styles.green]}>{itemId.stockCAGRValue}</Text>
                                        </View>
                                        <View style={styles.stockValue}>
                                            <Text style={styles.stockText}>{itemId.MinAmount}</Text>
                                            <Text style={[styles.stockTextValue, styles.green]}>{itemId.MinAmountValue}</Text>
                                        </View>

                                    </View>
                                </CardItem>
                            </Card>
                            <View>
                                <GreenStockInfoTab />
                            </View>
                        </Content>
                    </Container>

                </View>
                <View>
                    <Card>
                        <CardItem>
                            <Left>
                                <Body>
                                    <Text style={styles.minText}>Min Amount</Text>
                                    <Text style={styles.minValue}>₹ 1588</Text>
                                </Body>
                            </Left>
                            <Body>
                                <Button bordered success style={{ width: 60, height: 40, }} onPress={() =>
                                    this.props.navigation.navigate('Login')}>
                                    <Image resizeMode='center' style={{ width: 32, height: 32, marginLeft: 12 }} source={require("../assets/images/logo1.png")} />
                                </Button>
                            </Body>
                            <Right>
                                <Button style={[styles.btnContainer, styles.bgGreen]} onPress={() =>
                                    this.props.navigation.navigate('Login')}>
                                    <Text style={[styles.textWhite, styles.btnLogin]}>Buy Greenstock </Text>
                                </Button>
                            </Right>
                        </CardItem>

                    </Card>
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
    headerLogo: {
        width: 150,
        height: 36,
        marginTop: 28
    }, bdr: {
        height: 1,
        backgroundColor: "#bfc7ce1a"
    },
    root: {
        backgroundColor: "#ffffff",
        marginTop: 1,
    },
    content: {
        marginLeft: 16,

    },
    contentHeader: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: 6
    },
    separator: {
        height: 1,
        backgroundColor: "#edefef"
    },

    image: {
        width: 60,
        height: 60,
        borderRadius: 2,
        marginLeft: 10
    },
    priceBlock: {
        flex: 1,
        flexDirection: 'row',
    },
    stockValue: {
        flex: 1,
        textAlignVertical: 'center',
        textAlign: 'left',
        paddingVertical: 10,
        paddingHorizontal: 0,

    },
    BigmoneyValueName: {
        fontSize: 16,
        color: '#4d4d4c',
        fontWeight: "500",
    },
    stockText: {
        fontSize: 15,
        color: '#4d4d4c'
    },
    bigmoneyValueDetails: {
        fontSize: 15,
        color: '#4d4d4c'
    },
    stockTextValue: {
        fontSize: 15,
        color: 'red'
    },
    green: {
        color: 'green'
    }
    ,
    red: {
        color: 'red'
    },
    minValue: {
        fontSize: 20,
        color: '#4d4d4c',
        fontWeight: '500',
    },
    minText: {
        fontSize: 14,
        color: '#909090'
    },
    textGreen: {
        color: '#009432',
    },
    size22: {
        fontSize: 22,

    },
    headBackArrow: {
        fontSize: 16,
        fontWeight: '500'
    },
    bgGreen: {
        backgroundColor: '#009432'
    },
    btnContainer: {
        width: 140,
        height: 40,
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1
    },
    btnLogin: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 14,

    }
});

export default withNavigation(BigmoneyDetailsPage);