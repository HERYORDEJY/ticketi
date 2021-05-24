import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { _yellow, _black } from '../utils/colors';
import { _windowWidth } from '../utils/dimension';

export default class NewCard extends Component {
	render() {
		const {
			id,
			image,
			rating,
			lastItem,
			index,
			imageStyle,
			containerStyle,
			onPress,
		} = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={{
					...styles.container,
					marginRight: lastItem ? 0 : 20,
					...containerStyle,
					// marginBottom: 20,
				}}>
				<Image
					style={{ ...styles.image, ...imageStyle }}
					source={require('../assets/images/TopGun.jpg')}
				/>
				<View style={styles.rating_container}>
					<Text
						style={{
							...styles.rating,
							fontFamily: 'Eina01-Bold',
							fontSize: 16,
						}}>
						{lastItem ? 9 : 8.5}
					</Text>
					<Text style={styles.rating}>/</Text>
					<Text style={styles.rating}>10</Text>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: { flex: 0 },
	image: {
		borderRadius: 10,
		width: _windowWidth / 2.5,
		height: _windowWidth / 1.7,
	},
	rating_container: {
		backgroundColor: _yellow,
		borderRadius: 100,
		padding: 10,
		height: 55,
		width: 55,
		flexDirection: 'row',
		position: 'absolute',
		alignItems: 'center',
		justifyContent: 'center',
		bottom: 0,
		right: 0,
	},
	rating: { fontSize: 12, color: _black },
});
