import React, { Component } from 'react';
import {
    StyleSheet,
    View,
    TouchableOpacity,
    Image,
} from 'react-native';
import { Header, Card, CardItem, Left, Item, Right, Button, Icon, Title, Content, ListItem, CheckBox, Text, Body, Form, Input } from 'native-base';
import SegmentedControlTab from 'react-native-segmented-control-tab'
export default class GreenStockFilter extends Component {

    constructor(props) {
        super(props)
        this.state = { selectedIndex: 0, selectedIndices: [0], customStyleIndex: 0, itemOne: false, itemTwo: false, itemThree: false, itemFour: false, itemFive: false, itemTypeOne: false, itemTypeTwo: false, itemTypeThree: false, itemTypeFour: false }
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
    render() {
        const { selectedIndex, selectedIndices, customStyleIndex } = this.state
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
                            <View>
                                <Text style={styles.txtHead}>Min Investment Ammount</Text>
                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemOne: !this.state.itemOne })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemOne: !this.state.itemOne })} checked={this.state.itemOne} onPress={() => this.setState({ itemOne: !this.state.itemOne })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtDetails}>Less then ₹ 5000</Text>
                                    </Body>
                                </ListItem>
                            </View>
                            <View>
                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemTwo: !this.state.itemTwo })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemTwo: !this.state.itemTwo })} checked={this.state.itemTwo} onPress={() => this.setState({ itemTwo: !this.state.itemTwo })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtDetails}>Less then ₹ 5000</Text>
                                    </Body>
                                </ListItem>
                            </View>
                            <View>

                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemThree: !this.state.itemThree })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemThree: !this.state.itemThree })} checked={this.state.itemThree} onPress={() => this.setState({ itemThree: !this.state.itemThree })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtDetails}>₹ 5000 - ₹ 10000</Text>
                                    </Body>
                                </ListItem>
                            </View>
                            <View>
                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemFour: !this.state.itemFour })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemFour: !this.state.itemFour })} checked={this.state.itemFour} onPress={() => this.setState({ itemFour: !this.state.itemFour })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtDetails}>₹ 10000 - ₹ 20000</Text>
                                    </Body>
                                </ListItem>
                            </View>
                            <View>
                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemFive: !this.state.itemFive })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemFive: !this.state.itemFive })} checked={this.state.itemFive} onPress={() => this.setState({ itemFive: !this.state.itemFive })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtDetails}>More then ₹ 20000</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>



                        <View style={styles.block}>
                            <View>
                                <Text style={styles.txtHead}>Type</Text>
                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemTypeOne: !this.state.itemTypeOne })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemTypeOne: !this.state.itemTypeOne })} checked={this.state.itemTypeOne} onPress={() => this.setState({ itemTypeOne: !this.state.itemTypeOne })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtSubHead}>Model-based</Text>
                                        <Text style={styles.txtSubDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                    </Body>
                                </ListItem>
                            </View>

                            <View>
                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemTypeTwo: !this.state.itemTypeTwo })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemTypeTwo: !this.state.itemTypeTwo })} checked={this.state.itemTypeTwo} onPress={() => this.setState({ itemTypeTwo: !this.state.itemTypeTwo })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtSubHead}>Thematic</Text>
                                        <Text style={styles.txtSubDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                    </Body>
                                </ListItem>
                            </View>

                            <View>
                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemTypeThree: !this.state.itemTypeThree })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemTypeThree: !this.state.itemTypeThree })} checked={this.state.itemTypeThree} onPress={() => this.setState({ itemTypeThree: !this.state.itemTypeThree })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtSubHead}>Sector Trackers</Text>
                                        <Text style={styles.txtSubDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                    </Body>
                                </ListItem>
                            </View>

                            <View>
                                <ListItem style={{ backgroundColor: '#fff', marginLeft: 0 }} onPress={() => this.setState({ itemTypeFour: !this.state.itemTypeFour })}>
                                    <CheckBox color="green" style={{ borderRadius: 3 }} onPress={() => this.setState({ itemTypeFour: !this.state.itemTypeFour })} checked={this.state.itemTypeFour} onPress={() => this.setState({ itemTypeFour: !this.state.itemTypeFour })} />
                                    <Body style={{ backgroundColor: '#fff' }}>
                                        <Text style={styles.txtSubHead}>Smart Beta</Text>
                                        <Text style={styles.txtSubDetails}>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</Text>
                                    </Body>
                                </ListItem>
                            </View>
                        </View>









                        <View style={styles.block}>
                            <View>
                                <Text style={styles.txtHead}>Risk</Text>
                                <SegmentedControlTab
                                    values={['All', 'Low', 'Moderate', 'High']}
                                    selectedIndex={customStyleIndex}
                                    onTabPress={this.handleCustomIndexSelect}
                                    tabStyle={styles.tabStyle}
                                    tabTextStyle={styles.tabTextStyle}
                                    activeTabStyle={styles.activeTabStyle}
                                    activeTabTextStyle={styles.activeTabTextStyle}
                                />
                            </View>
                        </View>


                        <View style={styles.block}>
                            <View>
                                <Card>
                                    <CardItem>
                                        <Left>
                                            <Body>
                                                <Text style={styles.minText}>9 filters selected</Text>
                                            </Body>
                                        </Left>

                                        <Right>
                                            <Button style={[styles.btnContainer, styles.bgGreen]} onPress={() =>
                                                this.props.navigation.navigate('Bigmoney')}>
                                                <Text style={[styles.textWhite, styles.btnLogin]}>Apply Filter</Text>
                                            </Button>
                                        </Right>
                                    </CardItem>

                                </Card>
                            </View>

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
        marginBottom: 10
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
        color: '#000',
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




