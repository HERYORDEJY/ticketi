import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { _black, _white } from '../utils/colors';

export default class ButtonLink extends Component {
	render() {
		const {
			id,
			name,
			slug,
			onPress,
			link,
			text,
			containerStyles,
			textStyles,
		} = this.props;
		return (
			<TouchableOpacity
				style={{ ...styles.container, ...containerStyles }}
				onPress={onPress}>
				<Text style={{ ...styles.text, ...textStyles }}> {text} </Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: _white,
		padding: 10,
		paddingHorizontal: 0,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		flex: 0,
		borderRadius: 10,
	},
	text: { color: _black, fontSize: 14 },
});
