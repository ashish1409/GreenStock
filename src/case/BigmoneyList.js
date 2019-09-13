import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    TouchableOpacity,
    Image,
    ScrollView,
    FlatList
} from 'react-native';
import { withNavigation } from 'react-navigation';

const image1 = require('../assets/images/stock1.png');
const image2 = require('../assets/images/stock2.png');
const image3 = require('../assets/images/stock3.png');
const image4 = require('../assets/images/stock4.png');
const image5 = require('../assets/images/stock5.png');
const image6 = require('../assets/images/stock6.png');
const image7 = require('../assets/images/stock7.png');
const image8 = require('../assets/images/stock8.png');
const image9 = require('../assets/images/stock9.png');

class BigmoneyList extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, image: image1, stockName: "Equity & Gold", details: "Wealth allocation between Equities & Gold using ETFs", stockDaily: 'Daily Change', stockDailyValue: '2.02%', stockCAGR: 'CAGR', stockCAGRValue: '1.10%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1902' },
                { id: 2, image: image2, stockName: "Top 100 Stocks", details: "Wealth creation with top 100 market-cap stocks with minimal risk", stockDaily: 'Daily Change', stockDailyValue: '0.22%', stockCAGR: 'CAGR', stockCAGRValue: '12.10%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1588' },
                { id: 3, image: image3, stockName: "All Weather Investing", details: "The recession-proof way of building wealth over the long-term", stockDaily: 'Daily Change', stockDailyValue: '2%', stockCAGR: 'CAGR', stockCAGRValue: '10.1%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1444' },
                { id: 4, image: image4, stockName: "Quality - Smart Beta", details: "Businesses that can stand the test of time", stockDaily: 'Daily Change', stockDailyValue: '0.52%', stockCAGR: 'CAGR', stockCAGRValue: '60.67%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1126' },
                { id: 5, image: image5, stockName: "Low Risk - Smart Beta", details: "Low volatile portfolio for passive long term investing", stockDaily: 'Daily Change', stockDailyValue: '15%', stockCAGR: 'CAGR', stockCAGRValue: '10.10%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1721' },
                { id: 6, image: image6, stockName: "Dividend - Smart Beta", details: "Companies increasing their dividends on a consistent basis", stockDaily: 'Daily Change', stockDailyValue: '33%', stockCAGR: 'CAGR', stockCAGRValue: '45.91%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1476' },
                { id: 7, image: image7, stockName: "Insurance Tracker", details: "Companies to efficiently track and invest in the insurance sector", stockDaily: 'Daily Change', stockDailyValue: '6.8%', stockCAGR: 'CAGR', stockCAGRValue: '89.4%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1745' },
                { id: 8, image: image8, stockName: "Electric Mobility - Low-Cost Version", details: "Companies expected to benefit from growth in the electric vehicles ecosystem", stockDaily: 'Daily Change', stockDailyValue: '0.02%', stockCAGR: 'CAGR', stockCAGRValue: '10.10%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1202' },
                { id: 9, image: image9, stockName: "R&D Spenders", details: "Companies investing heavily in R&D to be future-ready beacons of innovation", stockDaily: 'Daily Change', stockDailyValue: '0.05%', stockCAGR: 'CAGR', stockCAGRValue: '65.23%', MinAmount: 'Min Amount', MinAmountValue: '₹ 1623' },

            ]
        }
    }
    GetItem(item) {
        Alert.alert(item);
    }

    render() {
        return (
            <FlatList
                style={styles.root}
                data={this.state.data}
                extraData={this.state}

                ItemSeparatorComponent={() => {
                    return (
                        <View style={styles.separator} />
                    )
                }}
                keyExtractor={(item, index) => index.toString()}
                renderItem={(item) => {
                    const BigmoneyValue = item.item;
                    return (
                        <ScrollView>

                            <TouchableOpacity onPress={() =>
                                this.props.navigation.navigate('BigmoneyDetailsPage', {
                                    itemId: item.item,
                                    otherParam: 'anything you want here',
                                })}>
                                <View style={styles.separator} />
                                <View style={[styles.container]}>
                                    <TouchableOpacity onPress={() => { }}>
                                        <Image style={styles.image} source={BigmoneyValue.image} />
                                    </TouchableOpacity>

                                    <View style={styles.content}>
                                        <View style={styles.contentHeader}>
                                            <Text style={styles.BigmoneyValueName}>{BigmoneyValue.stockName}</Text>
                                        </View>
                                        <Text style={styles.bigmoneyValueDetails}>{BigmoneyValue.details}</Text>
                                    </View>

                                </View>

                                <View style={styles.priceBlock}>
                                    <View style={styles.stockValue} >
                                        <Text style={styles.stockText}>{BigmoneyValue.stockDaily}</Text>
                                        <Text style={[styles.stockTextValue, styles.green]}>{BigmoneyValue.stockDailyValue}</Text>
                                    </View>
                                    <View style={styles.stockValue}>
                                        <Text style={styles.stockText}>{BigmoneyValue.stockCAGR}</Text>
                                        <Text style={[styles.stockTextValue, styles.green]}>{BigmoneyValue.stockCAGRValue}</Text>
                                    </View>
                                    <View style={styles.stockValue}>
                                        <Text style={styles.stockText}>{BigmoneyValue.MinAmount}</Text>
                                        <Text style={[styles.stockTextValue, styles.green]}>{BigmoneyValue.MinAmountValue}</Text>
                                    </View>
                                </View>
                            </TouchableOpacity>
                        </ScrollView>
                    );
                }} />
        );
    }
}

const styles = StyleSheet.create({
    root: {
        backgroundColor: "#ffffff",
        marginTop: 1,
    },
    container: {
        paddingVertical: 15,
        flexDirection: 'row',
        alignItems: 'flex-start',

    },
    content: {
        marginLeft: 16,
        flex: 1,
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
        paddingVertical: 15,
        paddingHorizontal: 10,

    },
    BigmoneyValueName: {
        fontSize: 16,
        color: '#4d4d4c',
        fontWeight: "500",
    },
    stockText: {
        fontSize: 14,
        color: '#909090'
    },
    bigmoneyValueDetails: {
        fontSize: 14,
        color: '#909090'
    },
    stockTextValue: {
        fontSize: 16,
        color: 'red'
    },
    green: {
        color: 'green'
    }
    ,
    red: {
        color: 'red'
    }
});

export default withNavigation(BigmoneyList);