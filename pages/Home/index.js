import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {addDemo} from '../../store/actions';
import FeedScreen from '../Feed'

const Tab = createBottomTabNavigator();

function MessagesScreen({ navigation }) {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>Messages</Text>
			<Button onPress={() => navigation.navigate('Settings')} title='前往设置页' />
		</View>
	);
}

function HomeScreen(props) {
  const {demo, addDemo} = props;
	return (
		<Tab.Navigator>
			<Tab.Screen name='Feed' component={FeedScreen} />
			<Tab.Screen name='Messages' component={MessagesScreen} />
		</Tab.Navigator>
	);
}
const mapDispatchToProps = {
    addDemo
}

export default HomeScreen;