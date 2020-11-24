import React from "react";
import { View, Text, Button, ActivityIndicator } from "react-native";
import { Provider } from "react-redux";
import store from "./store";
import HomeScreen from "./pages/Home";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

const Stack = createStackNavigator();



function SettingsScreen() {
	return (
		<View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
			<Text>设置</Text>
		</View>
	);
}

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name='Settings' component={SettingsScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
