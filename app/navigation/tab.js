import React from 'react';
import { Text, StyleSheet } from 'react-native';
import { createMaterialBottomTabNavigator } from '@react-navigation/material-bottom-tabs';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Home from '../screens/tab/Home';
import Cinema from '../screens/tab/Cinema';
import Tickets from '../screens/tab/Tickets';
import { _white, _black, _yellow, _red } from '../utils/colors';

const MaterialTab = createMaterialBottomTabNavigator();
const BottomTab = createBottomTabNavigator();

export default function TabNavigation() {
	let labelStyle = {
		fontFamily: 'Inter-Medium',
		fontSize: 15,
		backgroundColor: 'transparent',
		fontFamily: 'Eina01-SemiBold',
	};
	return (
		<MaterialTab.Navigator
			screenOptions={{ animationEnabled: false }}
			lazy={false}
			initialRouteName='Home'
			activeColor={_red}
			inactiveColor={_black + 50}
			style={{ fontSize: 15, borderRadius: 0 }}
			barStyle={styles.barStyle}>
			<MaterialTab.Screen
				name='Home'
				component={Home}
				options={{
					tabBarLabel: <Text style={labelStyle}>Home</Text>,
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons
							name='home'
							color={focused ? _red : _black + 50}
							size={26}
						/>
					),
				}}
			/>
			<MaterialTab.Screen
				name='Cinema'
				component={Cinema}
				options={{
					tabBarLabel: <Text style={labelStyle}>Cinema</Text>,
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons
							name='play-circle'
							color={focused ? _red : _black + 50}
							size={26}
						/>
					),
				}}
			/>
			<MaterialTab.Screen
				name='Tickets'
				component={Tickets}
				options={{
					tabBarLabel: <Text style={labelStyle}>Tickets</Text>,
					tabBarIcon: ({ color, focused }) => (
						<MaterialCommunityIcons
							name='ticket'
							color={focused ? _red : _black + 50}
							size={26}
						/>
					),
				}}
			/>
		</MaterialTab.Navigator>
	);
}

const styles = StyleSheet.create({
	label: {
		fontFamily: 'Inter-Medium',
		fontSize: 15,
		backgroundColor: 'transparent',
		fontFamily: 'Eina01-SemiBold',
	},
	barStyle: {
		backgroundColor: _yellow,
		// height: 40,
		// elevation: 0,
		// borderTopWidth: 0.7,
		paddingVertical: 5,
		// marginVertical: 0,
		// borderRadius: 30,
	},
});
