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
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import ButtonGenre from '../../components/ButtonGenre';
import { _genreList, _seat, _swipe } from '../../api/index';
import NewCard from '../../components/NewCard';
import DetailsFront from '../../components/DetailsFront';
import DetailsBack from '../../components/DetailsBack';
import Swiper from 'react-native-swiper';
import CinemaItem from '../../components/CinemaItem';
import ButtonText from '../../components/ButtonText';
import DropdownSelect from '../../components/DropdownSelect';
import DateCard from '../../components/DateCard';
import TimeCard from '../../components/TimeCard';
import ButtonPay from '../../components/ButtonPay';
import ButtonSeat from '../../components/ButtonSeat';
import ButtonSelect from '../../components/ButtonSelect';

export default function PaymentSuccessful({}) {
	const [state, setState] = useState(false);

	const paymentMethod = [
		{ name: 'Bank Account', slug: 'bank' },
		{ name: 'USSD', slug: 'ussd' },
		{ name: 'Credit Card', slug: 'card' },
	];

	const onSelect = (method) => setState(method);

	return (
		<Container style={styles.container}>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='dark-content'
			/>
			<Content
				contentContainerStyle={styles.content}
				scrollEnabled={true}
				showsVerticalScrollIndicator={false}
				style={{
					padding: 20,
					flex: 1,
					paddingBottom: 80,
				}}>
				<View style={{ flex: 1, justifyContent: 'space-around' }}>
					<View
						style={{
							flex: 2,
							borderRadius: 300,
							alignItems: 'center',
							paddingVertical: 40,
						}}>
						<View
							style={{
								...StyleSheet.absoluteFillObject,
								backgroundColor: _black + 50,
								borderRadius: 300,
							}}
						/>
						<Image
							source={require('../../assets/images/happy-1.png')}
							style={styles.image}
						/>
					</View>
					<View style={{ ...styles.menu, flex: 1 }}>
						<Text style={styles.menu_title}>
							Yay! Ticket purchased successfully!
						</Text>
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
				<ButtonPay text={'Pay'} />
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
	image: { width: 300, height: 300 },
	menu: { alignItems: 'center', flex: 1, justifyContent: 'space-between' },
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
