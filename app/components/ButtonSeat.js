import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { _black, _white, _yellow } from '../utils/colors';
import { Icon } from 'native-base';

export default class ButtonSeat extends Component {
	render() {
		const {
			id,
			name,
			slug,
			onPress,
			link,
			text,
			booked,
			selected,
		} = this.props;
		return (
			<TouchableOpacity
				style={styles.container}
				onPress={onPress}
				disabled={booked}>
				<Icon
					name={'seat'}
					type={'MaterialCommunityIcons'}
					style={{
						color: booked ? _white : selected ? _yellow : _white + 70,
						transform: [{ translateY: 1 }],
					}}
				/>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		// backgroundColor: _white,
		padding: 10,
		paddingHorizontal: 15,
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 10,
		flex: 0,
		borderRadius: 10,
	},
	text: { color: _black, fontSize: 14 },
});
