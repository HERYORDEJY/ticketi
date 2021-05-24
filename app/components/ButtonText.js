import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { _black, _white } from '../utils/colors';

export default class ButtonText extends Component {
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
	container: { paddingVertical: 25 },
	text: { color: _white, fontSize: 16 },
});
