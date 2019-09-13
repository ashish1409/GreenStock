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
import Icon from 'react-native-vector-icons/FontAwesome';
const image1 = require('../assets/images/n1.png');
const image2 = require('../assets/images/n2.png');
const image3 = require('../assets/images/n3.png');
const image4 = require('../assets/images/n4.png');
const image5 = require('../assets/images/n5.png');

const myIcon = <Icon name="circle" size={15} />;


class News extends Component {

    constructor(props) {
        super(props);
        this.state = {
            data: [
                { id: 1, image: image1, newsHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.", newsDetails: "What is Lorem Ipsum?", newsDetailsValue: "10.2%", color: "green" },
                { id: 2, image: image2, newsHeading: "It is a long established fact that a reader will be distracted", newsDetails: "Why do we use it?", newsDetailsValue: "18.5%", color: "green" },
                { id: 3, image: image3, newsHeading: "There are many variations of passages of Lorem Ipsum available, ", newsDetails: "Where can I get some?", newsDetailsValue: "-8.9%", color: "red" },
                { id: 4, image: image4, newsHeading: "Contrary to popular belief, Lorem Ipsum is not simply random text", newsDetails: "Where does it come from?", newsDetailsValue: "-2.1%", color: "red" },
                { id: 5, image: image5, newsHeading: "Lorem Ipsum is therefore always free from repetition, injected humour, or non-characteristic words etc", newsDetails: "injected humour and the like", newsDetailsValue: "-7.2%", color: "red" },
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
                            <TouchableOpacity>
                                <View style={styles.separator} />
                                <View style={[styles.container]}>
                                    <TouchableOpacity>
                                        <Image style={styles.image} source={BigmoneyValue.image} />
                                    </TouchableOpacity>
                                    <View style={styles.content}>
                                        <View style={styles.contentHeader}>
                                            <Text style={styles.BigmoneyValueName}>{BigmoneyValue.newsHeading}</Text>
                                        </View>
                                        <Text style={styles.bigmoneyValueDetails}>{BigmoneyValue.newsDetails} <Text style={[styles.bigmoneyValueDetails, { color: BigmoneyValue.color }]}>{myIcon}</Text> <Text style={[styles.bigmoneyValueDetails, { color: BigmoneyValue.color }]}>{BigmoneyValue.newsDetailsValue}</Text></Text>
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
        fontWeight: '500',
    },
    stockText: {
        fontSize: 14,
        color: '#909090'
    },
    bigmoneyValueDetails: {
        fontSize: 16,
        color: '#909090'
    },
    stockTextValue: {
        fontSize: 18,
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

export default withNavigation(News);