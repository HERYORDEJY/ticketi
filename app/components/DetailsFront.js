import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { _white, _black, _yellow, _red } from '../utils/colors';
import { _screenWidth, _windowWidth } from '../utils/dimension';

export default class DetailsFront extends Component {
	render() {
		return (
			<View
				style={{
					alignItems: 'center',
					flex: 1,
					justifyContent: 'center',
					// width: _windowWidth,
				}}>
				<View style={{ marginBottom: 30 }}>
					<Image
						style={{ ...styles.image }}
						source={require('../assets/images/TopGun.jpg')}
					/>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
					<Text style={{ ...styles.rating, paddingHorizontal: 10 }}>
						2h 30min
					</Text>
					<Text style={styles.rating}>|</Text>
					<View
						style={{
							flexDirection: 'row',
							alignItems: 'center',
							paddingHorizontal: 10,
						}}>
						<Icon
							name={'star'}
							type={'MaterialCommunityIcons'}
							style={{ color: _yellow, fontSize: 16, paddingHorizontal: 6 }}
						/>
						<Text
							style={{
								...styles.rating,
								fontFamily: 'Eina01-Bold',
								fontSize: 16,
							}}>
							7.3
						</Text>
						<Text style={styles.rating}>/</Text>
						<Text style={styles.rating}>10</Text>
					</View>
				</View>
				<Text
					style={{
						fontFamily: 'Eina01-Bold',
						fontSize: 25,
						color: _white,
					}}>
					Top Gun : Maverick
				</Text>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rating: { fontSize: 14, color: _white },
	image: {
		borderRadius: 10,
		width: _windowWidth / 2.4,
		height: _windowWidth / 1.7,
	},
});
