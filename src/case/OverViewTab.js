// import React, { Component } from 'react';
// import { Container, Header, Content, List, View, ListItem, Text, Icon, Left, Body, Right, Switch, Button } from 'native-base';
// import ViewMoreText from 'react-native-view-more-text';
// let Example = React.createClass({
//     renderViewMore(onPress){
//       return(
//         <Text onPress={onPress}>View more</Text>
//       )
//     },
//     renderViewLess(onPress){
//       return(
//         <Text onPress={onPress}>View less</Text>
//       )
//     },
// export default class OverviewTab extends Component {
//     render() {
//         return (
//             <View>

//             </View>
//         );
//     }
// }









import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
} from 'react-native';
import { H2 } from 'native-base'
import ReadMore from 'react-native-read-more-text';
import News from '../news/News'

export default class OverviewTab extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.card}>
                    <Text style={styles.txtHead}>Why should you invest in Greenstock?</Text>
                    <ReadMore color='red'
                        numberOfLines={4}
                        onReady={this._handleTextReady}>
                        <Text style={styles.cardText}>The Greenstock invester in Equity & Gold, fixing thire weights to 70% and 30%</Text>
                        {"\n"}{"\n"}
                        <Text style={styles.cardText}>Greenstock invests in large-cap companies using Reliance ETF Nifty BeesGreenstock invests in large-cap companies using Reliance ETF Nifty BeesGreenstock invests in large-cap companies using Reliance ETF Nifty Bees</Text>
                        {"\n"}{"\n"}
                        <Text style={styles.cardText}>companies greenstock invests in large-cap companies using Reliance ETF Nifty Bees</Text>
                    </ReadMore>

                </View>
                <View>
                    <H2 style={{ paddingVertical: 20 }}>Latest News</H2>
                    <News />
                </View>
            </View>
        );
    }

    _handleTextReady = () => {
        console.log('ready!');
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',

    },
    card: {
        marginVertical: 0,
        padding: 10,
        borderRadius: 3,
        borderColor: 'rgba(0,0,0,0.1)',
        borderWidth: 1,
        backgroundColor: '#fff',
    },
    cardText: {
        fontSize: 16,
        color: '#4d4d4c',
    },
    txtHead: {
        fontSize: 18,
        color: '#4d4d4c',
        fontWeight: '600',
        marginBottom: 15
    },
    texGreen: {
        color: 'green'
    }
});