import React from 'react';
import { StyleSheet, View, Text, Image, TouchableOpacity } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import AppIntroSlider from 'react-native-app-intro-slider';

const styles = StyleSheet.create({
    mainContent: {
        flex: 1,
        alignItems: 'center',
        justifyContent: "space-evenly"
    },
    text: {
        color: 'rgba(255, 255, 255, 0.8)',
        backgroundColor: 'transparent',
        textAlign: 'center',
        paddingHorizontal: 16,
    },
    title: {
        fontSize: 22,
        color: 'white',
        backgroundColor: 'transparent',
        textAlign: 'center',
        marginBottom: 16,
    },
    buttonCircle: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 0, 0, 0)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonCircle1: {
        width: 40,
        height: 40,
        backgroundColor: 'rgba(0, 148, 50, 0)',
        borderRadius: 20,
        justifyContent: 'center',
        alignItems: 'center',
    },
    image: {
        width: 320,
        height: 300,
        resizeMode: 'contain'

    },

    dot:
    {
        backgroundColor: 'rgba(255,255,255 ,.2)'
    },
    activedot:
    {
        backgroundColor: 'rgba(255,255,255,1.0)'
    },
    textLogo: {
        fontSize: 48,
        color: "#fff",
        fontWeight: 'normal',
    }
});

const slides = [
    {
        key: '1',
        title: 'Invest in ideas with BigMoney',
        text: 'BigMoney are modern investment products that help you build a diversified, low-cost & long-term portfolio.',
        image: require('../assets/images/introImage1.png'),
        imageStyle: styles.image,
        colors: ['#29ABE2', '#4F00BC'],
    },
    {
        key: '2',
        title: 'Diversify & lower your risks',
        text: 'Investing in multiple stock proctects your against volatility in a specific stock, making BigMoney less riskier.',
        image: require('../assets/images/introImage2.png'),
        imageStyle: styles.image,
        colors: ['#29ABE2', '#4F00BC'],
    },
    {
        key: '3',
        title: 'Pay only when you transact',
        text: ' unlike mutual funds , you are change flat fee. This protects you from hidden and hefty fees that chew into your wealth.',
        image: require('../assets/images/introImage3.png'),
        imageStyle: styles.image,
        colors: ['#29ABE2', '#4F00BC'],
    },
    {
        key: '4',
        title: 'Stay informed and in totle control',
        text: ' Say no to lock in periods. And or remove stocks from your BigMoney and know exactly where your money is going',
        image: require('../assets/images/introImage4.png'),
        imageStyle: styles.image,
        colors: ['#29ABE2', '#4F00BC'],
    },
];

export default class IntroView extends React.Component {
    _renderSkipButton = () => {
        return (
            <TouchableOpacity iconLeft dark style={styles.buttonCircle} onPress={() => this.props.navigation.navigate('Home')}>
                <Image style={{ width: 48, height: 48 }} source={require('../assets/images/skip.png')}></Image>
            </TouchableOpacity>
        );
    }
    _renderNextButton = () => {
        return (
            <View style={styles.buttonCircle}>
                <Image style={{ width: 48, height: 48 }} source={require('../assets/images/next.png')}></Image>
            </View>
        );
    }
    _renderDoneButton = () => {
        return (
            <TouchableOpacity iconLeft dark style={styles.buttonCircle1} onPress={() => this.props.navigation.navigate('Home')}>
                <Image style={{ width: 48, height: 48 }} source={require('../assets/images/done.png')}></Image>
            </TouchableOpacity>
        );
    }
    _renderItem = props => (
        <LinearGradient
            style={[styles.mainContent, {
                width: props.width,
                height: props.height,
            }]}
            colors={props.colors}
            start={{ x: 0, y: .1 }} end={{ x: .1, y: 1 }}>

            <Image resizeMode="contain" style={{ width: 250, height: 200 }} source={require("../assets/images/logowhite.png")} />
            <Image style={styles.image} source={props.image} />
            <View style={{ marginBottom: 60 }}>
                <Text style={styles.title}>{props.title}</Text>
                <Text style={styles.text}>{props.text}</Text>
            </View>
        </LinearGradient>

    );
    render() {
        return (
            <AppIntroSlider
                slides={slides}
                renderDoneButton={this._renderDoneButton}
                renderNextButton={this._renderNextButton}
                renderSkipButton={this._renderSkipButton}
                showSkipButton={true}
                dotStyle={styles.dot}
                activeDotStyle={styles.activedot}
                renderItem={this._renderItem}
            />
        );
    }
}