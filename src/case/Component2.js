/* @flow */
import React, { Component } from 'react'
import {
    StyleSheet,
    Text,
    View,
    Dimensions
} from 'react-native'
const screenWidth = Dimensions.get('window').width
import { LineChart } from 'react-native-chart-kit'
class Component2 extends Component {
    render() {
        return (
            <View>
                <View>
                    <LineChart

                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [{
                                data: [
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80,
                                    Math.random() * 80
                                ]
                            }]
                        }}
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
                            // borderRadius: 16,
                            // padding: 10
                        }}
                    />
                </View>
                <View style={[styles.titleText, styles.container]}>
                    <Text style={styles.titleText}>From Jun 27,2012 to Feb 16, 2019</Text>
                </View>
            </View>

        )
    }
}
const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        marginBottom: 10,
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


export default Component2