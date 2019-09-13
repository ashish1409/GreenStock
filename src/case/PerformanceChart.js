/* @flow */
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Image,
    TouchableOpacity
} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab';
import { ScrollView } from 'react-native-gesture-handler';
import LinearGradient from 'react-native-linear-gradient';
import Component1 from './Component1';
import Component2 from './Component2';
class SegmentedView extends Component {
    constructor() {
        super()
        this.state = {
            selectedIndex: 0,
            selectedIndices: [0],
            customStyleIndex: 0,
        }
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
            <LinearGradient colors={['#000000', '#1E2923', '#08130D']} style={styles.container}>
                <View style={styles.container}>

                    <View style={{ height: 60 }} >
                        <View style={{ alignItems: 'center' }}>
                            <Image resizeMode="cover" style={{ width: 150, height: 70, marginLeft: 0 }} source={require("../assets/images/logoheaderwhite.png")} />
                        </View>
                        <TouchableOpacity style={{ width: 30, height: 30, marginTop: -50, marginLeft: 10 }} iconLeft dark onPress={() => this.props.navigation.navigate('Home')}>
                            <Image style={{ width: 35, height: 35 }} source={require('../assets/images/back-arrow.png')}></Image>
                        </TouchableOpacity>

                    </View>
                    <ScrollView>

                        <Text style={styles.headerText}>Performance vs Nifty 50</Text>
                        <View style={styles.segmentTab}>
                            <SegmentedControlTab
                                values={['Lumpsum', 'SIP']}
                                selectedIndex={customStyleIndex}
                                onTabPress={this.handleCustomIndexSelect}
                                tabStyle={styles.tabStyle}
                                tabTextStyle={styles.tabTextStyle}
                                activeTabStyle={styles.activeTabStyle}
                                activeTabTextStyle={styles.activeTabTextStyle}
                            />
                            <Text style={styles.titleText}>Return on 100 invested once 11 years age are</Text>
                            {customStyleIndex === 0
                                && <Component1 />}
                            {customStyleIndex === 1
                                && <Component2 />}
                        </View>

                    </ScrollView>
                </View>
            </LinearGradient >
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingTop: 0,
    },
    tabViewText: {
        color: '#fff',
        fontWeight: 'bold',
        marginTop: 50,
        fontSize: 18,
    },
    titleText: {
        color: '#fff',
        paddingTop: 20,
        fontSize: 15,
        fontWeight: '600',
    },
    headerText: {
        fontSize: 18,
        color: '#fff',
        fontWeight: '600',
        padding: 10,

    },
    segmentTab: {
        padding: 10,
    },


    tabStyle: {
        backgroundColor: '#fff',
        borderColor: '#000',
        borderWidth: 1,

    },
    tabTextStyle: {
        color: '#000',
        padding: 3,
        fontSize: 16
    },
    activeTabStyle: {
        color: '#fff',
        backgroundColor: '#27ae60'
    },
    activeTabTextStyle: {
        color: '#fff',
        padding: 3,
        fontSize: 16
    },

})


export default SegmentedView