import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { createBottomTabNavigator, createAppContainer, createStackNavigator } from 'react-navigation';
import { Icon } from 'react-native-elements';
import { Provider } from 'react-redux';

import store from './store';
import WelcomeScreen from './screens/WelcomeScreen';
import AuthScreen from './screens/AuthScreen';
import MapScreen from './screens/MapScreen';
import DeckScreen from './screens/DeckScreen';
import ReviewScreen from './screens/ReviewScreen';
import SettingsScreen from './screens/SettingsScreen';
 
const MainNavigator = createBottomTabNavigator({
  welcome: WelcomeScreen,
  auth: AuthScreen,
  main: {
    screen: createBottomTabNavigator({
      map: MapScreen,
      deck: DeckScreen,
      review: {
        screen: createStackNavigator({
          review: ReviewScreen,
          settings: SettingsScreen
        }),
        navigationOptions: { 
          title: 'Favorite',  
          tabBarIcon: ({ tintColor }) => {
            return <Icon name="favorite" size={20} color={tintColor} />;
          }
        }
      }
    },{tabBarOptions: {
      labelStyle: {
        fontSize: 14,
      }
    }}
    )
  }
  }, {
  
  headerMode: 'none',
  navigationOptions: {
    header: null
  },
    lazy: true
  }
);
 
const RootContainer = createAppContainer(MainNavigator);
 
export default class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <RootContainer />
        </View>
      </Provider>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});