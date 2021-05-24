import React, { useState } from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	StatusBar,
	FlatList,
	Image,
	ScrollView,
	TouchableOpacity,
} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import { _black, _red, _white, _yellow } from '../../utils/colors';
import ButtonView from '../../components/ButtonView';
import { _windowWidth } from '../../utils/dimension';

export default function PaymentSuccessful({ navigation }) {
	const [state, setState] = useState(false);

	const paymentMethod = [
		{ name: 'Bank Account', slug: 'bank' },
		{ name: 'USSD', slug: 'ussd' },
		{ name: 'Credit Card', slug: 'card' },
	];

	const onNavigate = (screen) => navigation.navigate(`${screen}`);

	const onSelect = (method) => setState(method);

	return (
		<Container style={{ flex: 1, backgroundColor: _yellow }}>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='dark-content'
			/>
			<Content
				scrollEnabled={false}
				showsVerticalScrollIndicator={false}
				style={{ flex: 1 }}
				contentContainerStyle={{ flex: 1, padding: 20, paddingTop: 120 }}>
				<View
					style={{
						flex: 1,
						justifyContent: 'space-between',
						alignItems: 'center',
					}}>
					<View
						style={{
							flex: 3,
							borderRadius: 300,
							alignItems: 'center',
							paddingVertical: 40,
							width: _windowWidth / 1.3,
							height: _windowWidth / 1.3,
						}}>
						<View
							style={{
								...StyleSheet.absoluteFillObject,
								backgroundColor: _black + 30,
								borderRadius: 300,
								width: _windowWidth / 1.3,
								height: _windowWidth / 1.3,
							}}
						/>
						<Image
							source={require('../../assets/images/happy-1.png')}
							style={styles.image}
						/>
					</View>
					<View style={{ ...styles.menu, flex: 1 }}>
						<Text style={styles.menu_title}>Yay! Ticket purchased!</Text>
						<Text style={styles.menu_text}>
							Payment was successful and ticket was successfully purchased
						</Text>
					</View>
				</View>
			</Content>
			<View
				style={{
					paddingVertical: 15,
					backgroundColor: 'transparent',
					padding: 30,
					paddingHorizontal: 50,
				}}>
				<ButtonView onPress={() => onNavigate('TicketDetails')} />
			</View>
			{/* Header */}
		</Container>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingHorizontal: _screenWidth > 450 ? 45 : 20,
		backgroundColor: _yellow,
	},
	content: {
		paddingBottom: 30,
	},
	containerStyle: { justifyContent: 'center', alignItems: 'center' },
	image: { width: _windowWidth / 1.5, height: _windowWidth / 1.5 },
	menu: { alignItems: 'center' },
	menu_title: {
		color: _black,
		fontFamily: 'Eina01-SemiBold',
		fontSize: 19,
	},
	menu_text: {
		color: _black,
		textAlign: 'center',
		padding: 20,
		lineHeight: 20,
		fontSize: 17,
	},
});
