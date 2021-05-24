import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Thumbnail, Icon } from 'native-base';
import { _black, _white, _yellow } from '../utils/colors';

export default class CinemaItem extends Component {
	state = {};

	componentDidMount() {}

	render() {
		const { prices, location, onPress } = this.props;
		return (
			<TouchableOpacity style={styles.container} onPress={onPress}>
				<Thumbnail
					source={require('../assets/images/Tenet.jpg')}
					borderRadius={100}
					circular={true}
				/>
				<View style={styles.body_container}>
					<Text style={styles.name}>Filmhouse Cinema</Text>
					{prices && <Text style={styles.price}>NGN2000 - NGN2500</Text>}
					{location && <Text style={styles.price}>{location}</Text>}
				</View>
				<Icon
					type={'MaterialCommunityIcons'}
					name={'chevron-right'}
					style={{ color: _white }}
				/>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'space-between',
		padding: 15,
		backgroundColor: _black + 30,
		borderRadius: 10,
		marginVertical: 10,
		borderWidth: 1,
		borderColor: _yellow,
	},
	body_container: {},
	name: { fontFamily: 'Eina01-SemiBold', fontSize: 17, color: _white },
	price: { fontSize: 16, color: _yellow },
});
