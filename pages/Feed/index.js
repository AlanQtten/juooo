import * as React from 'react';
import { View, Text, Button } from 'react-native';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import {addDemo} from '../../store/actions';

const Tab = createBottomTabNavigator();

function FeedScreen(props) {
  const {demo, addDemo} = props
	return (
		<View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Home Screen,{demo}</Text>
      <Button title="count++" onPress={addDemo}></Button>
    </View>
	);
}

const mapDispatchToProps = {
    addDemo
}
export default connect(({demo}) => ({
    demo
}), mapDispatchToProps)(FeedScreen);