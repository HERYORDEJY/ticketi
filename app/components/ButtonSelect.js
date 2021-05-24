import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { _black, _white, _yellow } from '../utils/colors';
import { Icon } from 'native-base';

export default class ButtonSelect extends Component {
	render() {
		const { id, name, slug, onPress, link, text, selected } = this.props;
		return (
			<TouchableOpacity
				style={{
					...styles.container,
					backgroundColor: selected ? _yellow : _white + 50,
				}}
				onPress={onPress}>
				<Icon
					name={'stop'}
					type={'MaterialCommunityIcons'}
					style={{
						color: selected ? _black : _white,
						// backgroundColor: _red + '50',
						// padding: 15,
					}}
				/>
				<Text style={{ ...styles.text, color: selected ? _black : _white }}>
					{'  '}
					{text}
				</Text>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		backgroundColor: _white + 50,
		padding: 20,
		flexDirection: 'row',
		alignItems: 'center',
		borderRadius: 10,
		marginBottom: 20,
	},
	text: { color: _white, fontSize: 15 },
});
