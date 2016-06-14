import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  Navigator,
  Image,
  TextInput,
  StatusBar
} from 'react-native';

import Login from './Login'

function renderScene(route, navigator){
  return <route.component route={route} navigator={navigator} />;
}
class fitapp extends Component {
  render() {
    const initialRoute = {
      component: Login
    }
    return (
      <View style={styles.container}>
        <Navigator
          initialRoute={initialRoute}
          renderScene={renderScene} />

      </View>    
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },  
});

AppRegistry.registerComponent('fitapp', () => fitapp);
