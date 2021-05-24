import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { _black, _white } from '../utils/colors';

export default class ButtonGenre extends Component {
	render() {
		const {
			id,
			name,
			slug,
			onPress,
			link,
			text = 'Action',
			index,
			lastItem,
			selected,
		} = this.props;
		return (
			<TouchableOpacity
				style={{
					...styles.container,
					marginRight: lastItem ? 0 : 15,
					backgroundColor: selected ? _white : 'transparent',
				}}
				onPress={onPress}>
				<Text style={{ ...styles.text, color: selected ? _black : _white }}>
					{' '}
					{text}{' '}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		paddingVertical: 5,
		paddingHorizontal: 16,
		borderRadius: 100,

		alignItems: 'center',
	},
	text: { fontSize: 17 },
});
