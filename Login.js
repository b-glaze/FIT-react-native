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
import Registration from './Registration';
import Search from './Search';
const userIcon = <Icon name="user" size={35} color="#fff" />;
const lockIcon = <Icon name="lock" size={35} color="#fff" />;


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
        <View style={{backgroundColor: 'rgba(0,0,0,0.7)', flex: 1,}}>
          <StatusBar
            hidden={true} />
          <View style={styles.sec1}>
            <Text style={styles.fit}>
              FIT
            </Text>
            <Text style={styles.fit2}>
              Fitness anytime, anywhere.
            </Text>
          </View>
          <View style={styles.sec2}>
            <Text style={styles.icon}>{userIcon}</Text>
            <View style={{borderBottomColor: 'gray', borderBottomWidth: 1,}}>
              <TextInput style={styles.username}
                onChangeText={(text) => this.setState({text})}
                placeholder='Username'
                placeholderTextColor='white'
                autoCorrect={false} />
            </View> 
          </View>
          <View style={styles.sec22}>
            <Text style={styles.icon}>{lockIcon}</Text> 
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
              onPress={this.linkPage.bind(this, Search)}
              underlayColor='transparent'>
              <View style={styles.button}>
                <Text style={{color: 'black',}}>
                  Sign in
                </Text>
              </View>
            </TouchableHighlight>
            </View>
            <TouchableHighlight
              underlayColor='transparent'>
              <View style={styles.fbbutton}>
                <Text style={{color: 'black',}}>
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
        </View>
      </Image>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
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
    flex: .2,
    flexDirection: 'row',
  },
  sec22: {
    flex: .2,
    flexDirection: 'row',
    paddingTop: 10,
  },
  icon: {
    paddingRight: 20,
    paddingLeft: 10,
    marginTop: 7,
  },
  username: {
    height: 50,
    width: 290,
    paddingTop: 10,
    color: 'white',
  },
  password: {
    height: 50,
    width: 295,
    paddingTop: 10,
    color: 'white',
  },
  sec3: {
    flex: 1,
    alignItems: 'center',
    paddingTop: 20,
  },
  button: {
    paddingTop: 15,
    paddingBottom: 15,
    paddingLeft: 137,
    paddingRight: 137,
    backgroundColor: 'white',
    borderRadius: 20,
  },
  fbbutton: {
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