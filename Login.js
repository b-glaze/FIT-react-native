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

import Icon from 'react-native-vector-icons/FontAwesome';
const userIcon = (<Icon name="user" size={30} color="#900" />)
import Registration from './Registration';


class Login extends Component {

  linkPage(comp) {
    this.props.navigator.push({
      component: comp
    })
  }

  render() {
    return (
      <Image source={require('./images/login.jpg')} 
        resizeMode='cover' 
        style={styles.container} >
        <StatusBar
          hidden='true' />
        <View style={styles.sec1}>
          <Text style={styles.fit}>
            FIT
          </Text>
          <Text style={styles.fit2}>
            Fitness anytime, anywhere.
          </Text>
        </View>
        <View style={styles.sec2}>
          <View style={{borderBottomColor: 'gray', borderBottomWidth: 1,}}>
            <TextInput style={styles.username}
              onChangeText={(text) => this.setState({text})}
              placeholder='Username'
              placeholderTextColor='white'
              autoCorrect={false} />
          </View>  
          <View style={{borderBottomColor: 'gray', borderBottomWidth: 1,}}>  
            <TextInput style={styles.password}
              onChangeText={(text) => this.setState({text})}
              placeholder='Password'
              placeholderTextColor='white' 
              secureTextEntry={true} />  
          </View>       
        </View>
        <View style={styles.sec3}>
          <View style={{paddingBottom: 20,paddingTop: 10,}}>
          <TouchableHighlight
            underlayColor='transparent'>
            <View style={styles.button}>
              <Text>
                Sign in
              </Text>
            </View>
          </TouchableHighlight>
          </View>
          <TouchableHighlight
            underlayColor='transparent'>
            <View style={styles.fbbutton}>
              <Text>
                Sign in with Facebook
              </Text>
            </View>
          </TouchableHighlight>
          <View style={{paddingTop: 50,}}>
            <TouchableHighlight
            onPress={this.linkPage.bind(this, Registration)}
            underlayColor='transparent'>
              <Text style={styles.signup}>Sign up</Text>
            </TouchableHighlight>  
          </View>   
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    height: null,
    width: null,
  },
  sec1: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  fit: {
    color: 'white',
    fontSize: 50,
    backgroundColor: 'transparent',
  },
  fit2: {
    color: 'white',
    fontSize: 15,
    backgroundColor: 'transparent',
  },
  sec2: {
    flex: .5,
  },
  username: {
    height: 50,
    width: 300,
    color: 'white',
  },
  password: {
    height: 50,
    width: 300,
    color: 'white',
  },
  sec3: {
    flex: 1,
    alignItems: 'center',
  },
  button: {
    color: 'black',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 137,
    paddingRight: 137,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  fbbutton: {
    color: 'black',
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 90,
    paddingRight: 90,
    backgroundColor: 'white',
    borderRadius: 20, 
  },
  signup: {
    backgroundColor: 'transparent',
    color: 'white',
  },
  
});

module.exports = Login;