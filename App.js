import React, { Component } from 'react';
import { StyleSheet, View } from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import IntroView from './src/introScreen/IntroView';
import Login from './src/authScreen/Login';
import Signup from './src/authScreen/Signup';
import Forgot from './src/authScreen/Forgot';
import HomeView from './src/preLoginScreen/HomeView';
import Bigmoney from './src/case/Bigmoney';
import BigmoneyDetailsPage from './src/case/BigmoneyDetailsPage';
import PerformanceChart from './src/case/PerformanceChart';
import GreenStockFilter from './src/case/GreenStockFilter';
import GreenStockHelp from './src/case/GreenStockHelp';
import GreenStockSort from './src/case/GreenStockSort';
import News from './src/news/News';
import GreenStockInfoTab from './src/case/GreenStockInfoTab';
import WatchlistView from './src/postInnerScreen/watchlistTabScreen/WatchlistView';
import InvestmentView from './src/postInnerScreen/investmentTabScreen/InvestmentView';
import DashboardView from './src/postInnerScreen/dashboardTabScreen/DashboardView';
import DashboardInnerView from './src/postInnerScreen/dashboardTabScreen/DashboardInnerView';
import DiscoverView from './src/postInnerScreen/discoverTabScreen/DiscoverView';

import {
  createSwitchNavigator,
  createAppContainer,
  createDrawerNavigator,
  createBottomTabNavigator,
  createStackNavigator
} from 'react-navigation';
class App extends Component {
  render() {
    return <AppContainer />;
  }
}
<View>
  <IntroView />
  <Login />
  <Signup />
  <Forgot />
  <HomeView />
  <Bigmoney />
  <BigmoneyDetailsPage />
  <PerformanceChart />
  <GreenStockFilter />
  <GreenStockHelp />
  <GreenStockSort />
  <News />
  <DashboardView />
  <DashboardInnerView />
  <DiscoverView />
  <WatchlistView />
  <InvestmentView />
</View>



const Dashboard = createStackNavigator(
  {
    DashboardView: {
      screen: DashboardView,
      navigationOptions: ({ navigation }) => {
        return {
          headerTitle: 'Dashboard',
          headerLeft: (
            <Entypo style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="menu" size={30} />
          ),
          headerRight: (
            <Entypo style={{ paddingLeft: 10 }} name="user" size={30} />
          )
        };
      }
    },
    DashboardInnerView: {
      screen: DashboardInnerView
    }
  },
  {
    defaultNavigationOptions: {
      gesturesEnabled: false
    }
  }
);



const Discover = createStackNavigator({
  DiscoverView: {
    screen: DiscoverView,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Discover',
        headerLeft: (
          <Entypo style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="menu" size={30} />
        )
      };
    }
  }
});
const Investment = createStackNavigator({
  InvestmentView: {
    screen: InvestmentView,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Investment',
        headerLeft: (
          <Entypo style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="menu" size={30} />
        )
      };
    }
  }
});

const Watchlist = createStackNavigator({
  WatchlistView: {
    screen: WatchlistView,
    navigationOptions: ({ navigation }) => {
      return {
        headerTitle: 'Watchlist',
        headerLeft: (
          <Entypo style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="menu" size={30} />
        )
      };
    }
  }
});

const DashboardTabNavigator = createBottomTabNavigator(
  {
    Dashboard,
    Discover,
    Investment,
    Watchlist
  },
  {
    navigationOptions: ({ navigation }) => {
      const { routeName } = navigation.state.routes[navigation.state.index];
      return {
        header: null,
        headerTitle: routeName
      };
    }
  }
);
const DashboardStackNavigator = createStackNavigator(
  {
    DashboardTabNavigator: DashboardTabNavigator,
  },
  {
    defaultNavigationOptions: ({ navigation }) => {
      return {
        headerLeft: (
          <Entypo style={{ paddingLeft: 10 }} onPress={() => navigation.openDrawer()} name="menu" size={30} />
        )
      };
    }
  }
);


const AppDrawerNavigator = createDrawerNavigator({
  Dashboard: {
    screen: DashboardStackNavigator
  }

});

// const AppDrawerNavigator = createDrawerNavigator({
//   Dashboard: {
//     screen: DashboardStackNavigator
//   },
//   Discover: {
//     screen: DashboardStackNavigator
//   },
//   Investment: {
//     screen: DashboardStackNavigator
//   },
//   Watchlist: {
//     screen: DashboardStackNavigator
//   }

// });



const AppSwitchNavigator = createSwitchNavigator(

  {
    Intro: { screen: IntroView },
    Home: { screen: HomeView },
    Login: { screen: Login },
    Bigmoney: { screen: Bigmoney },
    News: { screen: News },
    GreenStockInfoTab: { screen: GreenStockInfoTab },
    PerformanceChart: { screen: PerformanceChart },
    Signup: { screen: Signup },
    Forgot: { screen: Forgot },
    BigmoneyDetailsPage: { screen: BigmoneyDetailsPage },
    GreenStockFilter: { screen: GreenStockFilter },
    GreenStockHelp: { screen: GreenStockHelp },
    GreenStockSort: { screen: GreenStockSort },
    Dashboard: { screen: AppDrawerNavigator }
  },
  {
    initialRouteName: 'Intro',
  }
);
const AppContainer = createAppContainer(AppSwitchNavigator);


const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center'
  }
});


export default App;