/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import ListScreen from './views/section-list'
import { DrawerNavigator } from 'react-navigation'
import { D3View } from './views/d3'
import {
  Platform,
  StyleSheet,
  Text,
  View,
  Button
} from 'react-native';
import { SwipeScreen } from './views/swipe'

const instructions = 'Click Me To Start'

class Home extends Component {
  static navigationOptions = {
    drawerLabel: 'Home'
  }
  constructor(props) {
    super(props);
    this.openDrawer = this.openDrawer.bind(this)
  }
  openDrawer() {
    this.props.navigation.navigate('DrawerOpen');
  }
  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.welcome}>
          Welcome to Evan's React Native Demo!
        </Text>

        <Button title={instructions} onPress={this.openDrawer}></Button>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});
const App = DrawerNavigator({
  Home: {
    screen: Home,
  },
  'Pie Chart': {
    screen: D3View
  },
  Swipe: {
    screen: SwipeScreen
  },
  List: {
    screen: ListScreen
  }
})
export default App