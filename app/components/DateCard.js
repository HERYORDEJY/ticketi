import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { _black, _white, _yellow } from '../utils/colors';

export default class DateCard extends Component {
	state = {};

	componentDidMount() {}

	render() {
		const { day, date, selected, onPress } = this.props;
		return (
			<TouchableOpacity
				style={{
					...styles.container,
					backgroundColor: selected ? _yellow : 'transparent',
					borderColor: selected ? _yellow : _white,
					borderWidth: 0.4,
				}}
				onPress={onPress}>
				<Text style={{ ...styles.day, color: selected ? _black : _white }}>
					{day}
				</Text>
				<Text style={{ ...styles.date, color: selected ? _black : _white }}>
					{date}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: _yellow,
		borderRadius: 10,
		padding: 10,
		alignItems: 'center',
		width: 70,
		paddingVertical: 20,
	},
	date: { color: _black, fontSize: 19, fontFamily: 'Eina01-SemiBold' },
	day: { color: _black, fontSize: 17 },
});
