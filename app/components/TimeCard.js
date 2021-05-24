import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { _black, _white, _yellow } from '../utils/colors';

export default class TimeCard extends Component {
	state = {};

	componentDidMount() {}

	render() {
		const { time, selected, onPress } = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={{
					...styles.container,
					borderColor: selected ? _yellow : _white,
					borderWidth: selected ? 1 : 0.1,
				}}>
				<Text style={{ ...styles.time, color: selected ? _yellow : _white }}>
					{time}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: _black,
		borderRadius: 10,
		padding: 10,
		alignItems: 'center',
		// borderWidth: 0.2,
		// borderColor: _white,
	},
	time: { color: _white, fontSize: 15, fontFamily: 'Eina01-SemiBold' },
});
