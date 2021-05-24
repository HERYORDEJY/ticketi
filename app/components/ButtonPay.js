import React, { Component } from 'react';
import { Text, TouchableOpacity, View, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { _black, _red, _white } from '../utils/colors';

export default class ButtonPay extends Component {
	render() {
		const {
			id,
			name,
			slug,
			onPress,
			link,
			amount,
			text = 'Buy Ticket',
		} = this.props;
		return (
			<TouchableOpacity
				onPress={onPress}
				style={{
					backgroundColor: _red,
					borderRadius: 10,
					padding: 10,
					paddingHorizontal: 15,
					flexDirection: 'row',
					justifyContent: 'space-between',
					alignItems: 'center',
				}}>
				<Text
					style={{ fontFamily: 'Eina01-Bold', fontSize: 16, color: _white }}>
					{text}
				</Text>
				<View
					style={{
						flexDirection: 'row',
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<Text
						style={{
							fontFamily: 'Eina01-SemiBold',
							fontSize: 14,
							color: _white,
						}}>
						NGN 4100
					</Text>
					<View
						style={{
							marginLeft: 10,
							paddingVertical: 5,
							paddingHorizontal: 5,
						}}>
						<View
							style={{
								...StyleSheet.absoluteFillObject,
								backgroundColor: _black + 90,
								borderRadius: 15,
							}}
						/>
						<Icon
							name={'chevron-right'}
							type={'MaterialCommunityIcons'}
							style={{
								color: _white,
								// backgroundColor: _red + '50',
								// padding: 15,
							}}
						/>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: { backgroundColor: _red, flexDirection: 'row' },
	text: { color: _white },
});
