import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Header, Card, CardItem, Left, Item, Right, Radio, Button, Icon, Title, Content, ListItem, CheckBox, Text, Body, Form, Input } from 'native-base';
import SegmentedControlTab from 'react-native-segmented-control-tab'
export default class GreenStockSort extends Component {

    constructor(props) {
        super(props)
        this.state = {
            selectedIndex: 0,
            selectedIndices: [0],
            customStyleIndex: 0,
            customStyleIndex1: 0,
            customStyleIndex2: 0,
            customStyleIndex3: 0,
            emOne: false,
            itemTwo: false,
            itemThree: false,
            itemFour: false,
            itemFive: false,
            itemTypeOne: false,
            itemTypeTwo: false,
            itemTypeThree: false,
            itemTypeFour: false,
            radio1: false,
            radio2: false,
            radio3: false,
            radio4: true
        }
    }
    toggleRadio1() {
        this.setState({
            radio1: true,
            radio2: false,
            radio3: false,
            radio4: false
        });
    }
    toggleRadio2() {
        this.setState({
            radio1: false,
            radio2: true,
            radio3: false,
            radio4: false
        });
    }
    toggleRadio3() {
        this.setState({
            radio1: false,
            radio2: false,
            radio3: true,
            radio4: false
        });
    }

    handleSingleIndexSelect = (index) => {
        this.setState(prevState => ({ ...prevState, selectedIndex: index }))
    }

    handleMultipleIndexSelect = (index) => {
        const { selectedIndices } = this.state

        if (selectedIndices.includes(index)) {
            this.setState(prevState => ({
                ...prevState,
                selectedIndices: selectedIndices.filter((i) => i !== index),
            }))
        } else {
            this.setState(prevState => ({
                ...prevState,
                selectedIndices: [
                    ...selectedIndices,
                    index,
                ],
            }))
        }
    }







    handleCustomIndexSelect = (index) => {
        this.setState(prevState => ({ ...prevState, customStyleIndex: index }))
    }
    handleCustomIndexSelect1 = (index) => {
        this.setState(prevState => ({ ...prevState, customStyleIndex1: index }))
    }
    handleCustomIndexSelect2 = (index) => {
        this.setState(prevState => ({ ...prevState, customStyleIndex2: index }))
    }
    handleCustomIndexSelect3 = (index) => {
        this.setState(prevState => ({ ...prevState, customStyleIndex3: index }))
    }
    render() {
        const { selectedIndex, selectedIndices, customStyleIndex, customStyleIndex1, customStyleIndex2, customStyleIndex3 } = this.state
        return (
            <View style={styles.container}>
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
                    <Right>
                    </Right>
                </Header>
                <Content padder>
                    <Form style={styles.listItemStyle} onPress={() => this.setState({ itemOne: !this.state.itemOne })}>

                        <View style={styles.block}>
                            <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }}
                                selected={this.state.radio1}
                                onPress={() => this.toggleRadio1()}
                            >
                                <Left>
                                    <Text style={styles.titleText}>Lunch Break</Text>
                                </Left>
                                <Right>
                                    <Radio style={styles.radioStyle}
                                        selectedColor={"#fff"}
                                        selected={false}
                                        selected={this.state.radio1}
                                        onPress={() => this.toggleRadio1()}
                                    />
                                </Right>
                            </ListItem>


                            <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }}
                                selected={this.state.radio2}
                                onPress={() => this.toggleRadio2()}
                            >
                                <Left>
                                    <Text style={styles.titleText}>Daily Stand Up</Text>
                                </Left>
                                <Right>
                                    <Radio style={styles.radioStyle}
                                        selectedColor={"#fff"}
                                        selected={true}
                                        selected={this.state.radio2}
                                        onPress={() => this.toggleRadio2()}
                                    />
                                </Right>
                            </ListItem>
                            <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }}
                                selected={this.state.radio3}
                                onPress={() => this.toggleRadio3()}
                            >
                                <Left>
                                    <Text style={styles.titleText}>Finish List Screen</Text>
                                </Left>
                                <Right >
                                    <Radio style={styles.radioStyle}
                                        selectedColor={"#fff"}
                                        selected={true}
                                        selected={this.state.radio3}
                                        onPress={() => this.toggleRadio3()}
                                    />
                                </Right>
                            </ListItem>
                        </View>




                        <View style={styles.block}>
                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.txtHead}>CAGR</Text>
                                <SegmentedControlTab
                                    values={['High-Low', 'Low-High']}
                                    selectedIndex={customStyleIndex}
                                    onTabPress={this.handleCustomIndexSelect}
                                    tabStyle={styles.tabStyle}
                                    tabTextStyle={styles.tabTextStyle}
                                    activeTabStyle={styles.activeTabStyle}
                                    activeTabTextStyle={styles.activeTabTextStyle}
                                />
                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.txtHead}>1Y Returans</Text>
                                <SegmentedControlTab
                                    values={['High-Low', 'Low-High']}
                                    selectedIndex={customStyleIndex1}
                                    onTabPress={this.handleCustomIndexSelect1}
                                    tabStyle={styles.tabStyle}
                                    tabTextStyle={styles.tabTextStyle}
                                    activeTabStyle={styles.activeTabStyle}
                                    activeTabTextStyle={styles.activeTabTextStyle}
                                />
                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.txtHead}>1M Returans</Text>
                                <SegmentedControlTab
                                    values={['High-Low', 'Low-High']}
                                    selectedIndex={customStyleIndex2}
                                    onTabPress={this.handleCustomIndexSelect2}
                                    tabStyle={styles.tabStyle}
                                    tabTextStyle={styles.tabTextStyle}
                                    activeTabStyle={styles.activeTabStyle}
                                    activeTabTextStyle={styles.activeTabTextStyle}
                                />
                            </View>

                            <View style={{ marginBottom: 15 }}>
                                <Text style={styles.txtHead}>Min Amount</Text>
                                <SegmentedControlTab
                                    values={['High-Low', 'Low-High']}
                                    selectedIndex={customStyleIndex3}
                                    onTabPress={this.handleCustomIndexSelect3}
                                    tabStyle={styles.tabStyle}
                                    tabTextStyle={styles.tabTextStyle}
                                    activeTabStyle={styles.activeTabStyle}
                                    activeTabTextStyle={styles.activeTabTextStyle}
                                />
                            </View>
                        </View>


                        <View style={styles.block}>
                            <Content>


                                <Button block style={[styles.btnContainer, styles.bgGreen]} onPress={() =>
                                    this.props.navigation.navigate('Bigmoney')}>
                                    <Text style={[styles.textWhite, styles.btnLogin]}>Confirm Sort Order</Text>
                                </Button>
                            </Content>

                        </View>
                    </Form>
                </Content>
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
    },
    listItemStyle: {
        backgroundColor: "#fff",
        margin: 0
    },
    checkItemStyle: {
        backgroundColor: "red",

    },
    txtHead: {
        fontSize: 18,
        color: '#4d4d4c',
        fontWeight: '600',
        marginBottom: 10,
        marginTop: 10
    },
    txtSubHead: {
        fontSize: 16,
        color: '#4d4d4c',
        fontWeight: '500',
    },
    txtDetails: {
        fontSize: 16,
        color: '#4d4d4c',
    },
    txtSubDetails: {
        fontSize: 14,
        color: '#909090',
        fontWeight: '500',
    },
    block: {
        marginBottom: 10
    },
    tabStyle: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,

    },
    tabTextStyle: {
        color: '#4d4d4c',
        padding: 3,
        fontSize: 15
    },
    activeTabStyle: {
        color: '#fff',
        backgroundColor: '#27ae60'
    },
    activeTabTextStyle: {
        color: '#fff',
        padding: 3,
        fontSize: 15
    },
    minText: {
        fontSize: 14,
        color: '#909090'
    },
    bgGreen: {
        backgroundColor: '#27ae60'
    },
    btnContainer: {
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
        marginTop: 20
    },
    btnLogin: {
        color: '#fff',
        textAlign: 'center',
        fontWeight: '700',
        fontSize: 14,

    },
    radioStyle: {
        backgroundColor: '#27ae60',
        height: 26,
        width: 26,
        paddingLeft: 8,
        borderRadius: 50
    }
});








