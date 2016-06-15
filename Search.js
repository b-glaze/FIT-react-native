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

import Login from './Login';
import NavigationBar from 'react-native-navbar';
import Icon from 'react-native-vector-icons/FontAwesome';
const searchIcon = <Icon name="search" size={30} color="#666" />;

class Search extends Component {
	render() {
		return(
			<View style={styles.container}>
				<View style={styles.sec1}>
					<View style={{borderBottomColor: 'gray', borderBottomWidth: 1, flexDirection: 'row',}}>
		            	<TextInput style={styles.searchfield}
		              		onChangeText={(text) => this.setState({text})}
		              		placeholder='What class are you looking for?'
		              		placeholderTextColor='gray'
		              		autoCorrect={false} />
		              		<Text style={styles.icon}>{searchIcon}</Text>
	          		</View>	
		        </View>  
		        <View style={styles.sec2}>
		        	<Image source={require('./images/booking.jpg')}
		        		resizeMode='cover'>
		        	</Image>	
		        </View>				
			</View>
		);
	}
}

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		backgroundColor: 'white',
	},
	sec1: {
		flex: 1,
		paddingTop: 30,
		paddingLeft: 30,
		paddingRight: 30,
	},
	searchfield: {
		height: 50,
		width: 270,		
		backgroundColor: 'transparent',
		color: 'gray',
	},
	icon: {
		borderBottomWidth: 1,
		borderBottomColor: 'gray',
		paddingTop: 5,
	},
	sec2: {
		flex: 1,
	},
});

module.exports = Search;