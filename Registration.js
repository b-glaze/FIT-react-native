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
import Login from './Login'
import NavigationBar from 'react-native-navbar';
 

class Registration extends Component {

	goBack() {
		this.props.navigator.pop();
	}

	render() {

		let leftConfig = <View>
							<TouchableHighlight
								underlayColor='transparent'
								onPress={this.goBack.bind(this)}>
								<Text style={styles.back}>
									{'<'}
								</Text>
							</TouchableHighlight>
						</View>
		let titleConfig = <View>
                        	<Text style={styles.title}>
                          		Sign up
                        	</Text>
                      	</View>				

		return (
			<Image source={require('./images/gym.jpg')}
				resizeMode= 'cover'
				style={styles.container}>
				<StatusBar
					hidden='true' />
				<NavigationBar style={styles.nav}
					leftButton={leftConfig}
					title={titleConfig}
					tintColor='transparent' />
				<View style={styles.sec1}>
					<View style={styles.camera}>
						<Image source={require('./images/camera.png')}
							style={styles.camerapic}>
						</Image>
					</View>	
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
		          		<TextInput style={styles.email}
		              		onChangeText={(text) => this.setState({text})}
		              		placeholder='Email'
		              		placeholderTextColor='white'
		              		keyboardType={'email-address'}
		            	/> 
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
			        <View style={{paddingBottom: 80,paddingTop: 10,}}>
			        <TouchableHighlight
			          underlayColor='transparent'>
			          <View style={styles.button}>
			            <Text>
			              Create
			            </Text>
			          </View>
			        </TouchableHighlight>
			        </View>
			        <View style={styles.terms}>
			        	<Text style={styles.termssvc}>
			        		By clicking Create you agree to our Terms of Service.
			        	</Text>
			        </View>

			    </View>    
			</Image>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		height: null,
		width: null,
	},
	back: {
	    fontSize: 24,
	    paddingLeft: 15,
	    paddingTop: 8,
	    paddingRight: 5,
	    backgroundColor: 'transparent',
	    color: 'white',
    },
    title: {
        fontSize: 22,
        backgroundColor: 'transparent',
        color: 'white',
    },
    sec1: {
    	flex: 1,
    	justifyContent: 'center',
    	alignItems: 'center',	
    },
    camera: {
    	backgroundColor: 'rgba(255,255,255,0.5)',
    	paddingTop: 40,
    	paddingBottom: 40,
    	paddingRight: 40,
    	paddingLeft: 40,
    	borderRadius: 70,
    },
    camerapic: {
	   	height: 30,
    	width: 30,
    },
    sec2: {
    	flex: 1,
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
    email: {
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
    terms: {
    	alignItems: 'center',
    },
    termssvc: {
    	color: 'white'
    },

});

module.exports = Registration;