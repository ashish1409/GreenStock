/* @flow */
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native'
import SegmentedControlTab from 'react-native-segmented-control-tab'
const screenWidth = Dimensions.get('window').width
import { LineChart } from 'react-native-chart-kit'
class Component1 extends Component {
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

            <View>
                <View>
                    <View>

                        <LineChart

                            data={{
                                labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                                datasets: [{
                                    data: [
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100,
                                        Math.random() * 100
                                    ]
                                }]
                            }}
                            //width={Dimensions.get('window').width} // from react-native
                            width={screenWidth}
                            height={350}
                            yAxisLabel={'$'}
                            chartConfig={{
                                backgroundColor: '#000000',
                                backgroundGradientFrom: '#1E2923',
                                backgroundGradientTo: '#08130D',
                                color: (opacity = 1) => `rgba(26, 255, 146, ${opacity})`,
                                style: {
                                    borderRadius: 16
                                }
                            }}
                            bezier
                            style={{
                                marginLeft: -10,
                                marginTop: 20,
                            }}
                        />
                    </View>
                </View>
                <View style={[styles.titleText, styles.container]}>
                    <Text style={styles.titleText}>From Jun 27,2012 to Feb 16, 2019</Text>
                </View>
                <SegmentedControlTab
                    values={['6M', '1Y', '3Y', '11Y', 'MAX']}
                    selectedIndex={customStyleIndex}
                    onTabPress={this.handleCustomIndexSelect}
                    tabStyle={styles.tabStyle}
                    tabTextStyle={styles.tabTextStyle}
                    activeTabStyle={styles.activeTabStyle}
                    activeTabTextStyle={styles.activeTabTextStyle}
                />
            </View>

        )
    }
}

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 20,

    },
    titleText: {
        color: '#909090',
        paddingTop: 10,
        fontSize: 15,
        fontWeight: '600',
        alignItems: 'center',
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

})


export default Component1