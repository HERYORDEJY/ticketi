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

export default function Payment({ navigation }) {
	const [state, setState] = useState(false);

	const paymentMethod = [
		{ name: 'Bank Account', slug: 'bank' },
		{ name: 'USSD', slug: 'ussd' },
		{ name: 'Credit Card', slug: 'card' },
	];

	const onNavigate = (screen) => navigation.navigate(`${screen}`);

	const onSelect = (method) => setState(method);

	return (
		<Container style={styles.container}>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<ImageBackground
				resizeMode={'cover'}
				blurRadius={1}
				style={styles.image_background}
				source={require('../../assets/images/TopGun.jpg')}>
				<LinearGradient
					start={{ x: 0.0, y: 0.0 }}
					end={{ x: 0.0, y: 0.6 }}
					colors={[_white + 90, _black]}
					style={styles.linearGradient}>
					<View
						style={{
							...StyleSheet.absoluteFillObject,
							backgroundColor: _black + 90,
							// height: 400,
						}}
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
						{/*Select Location*/}
						<View style={styles.main}>
							<View style={styles.menu_header}>
								<Text style={styles.menu_title}>Select Payment method</Text>
							</View>
							<View style={styles.movie_list}>
								{paymentMethod.map((p, index) => (
									<ButtonSelect
										onPress={() => onSelect(p.slug)}
										text={`Pay with ${p.name}`}
										selected={state === p.slug}
									/>
								))}
							</View>
						</View>
					</Content>
				</LinearGradient>
			</ImageBackground>
			<View
				style={{
					paddingVertical: 15,
					// backgroundColor: _white + 20,
					padding: 30,
					paddingHorizontal: 50,
				}}>
				<ButtonPay
					text={'Pay'}
					onPress={() => onNavigate('PaymentSuccessful')}
				/>
			</View>
			{/* Header */}
			<View style={{ position: 'absolute', left: 0, right: 0, marginTop: 30 }}>
				<Header
					containerStyle={{ padding: 20 }}
					leftIconName={'chevron-left'}
					onPressLeft={() => navigation.goBack()}
					title={'Payment'}
				/>
			</View>
		</Container>
	);
}
const styles = StyleSheet.create({
	container: {
		flex: 1,
		// paddingHorizontal: _screenWidth > 450 ? 45 : 20,
		paddingBottom: 0,
		backgroundColor: _black,
	},
	content: { paddingBottom: 30, paddingTop: 110 },
	wrapper: { justifyContent: 'center', alignItems: 'center' },
	containerStyle: { justifyContent: 'center', alignItems: 'center' },
	image_background: { width: '100%', height: '60%', flex: 1 },
	linearGradient: { flex: 1 },
	main: { marginBottom: 30 },
	main_title: { fontFamily: 'Eina01-SemiBold', fontSize: 30, color: _white },
	image: {
		borderRadius: 10,
		width: 150,
		height: 230,
	},
	rating: { fontSize: 14, color: _white },
	genre_container: {
		flex: 0,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		marginBottom: 25,
	},
	genre: { fontSize: 15, color: _white },
	paginationStyle: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
		borderRadius: 10,
		paddingHorizontal: 10,
		// paddingVertical: 10,
		margin: 10,
	},
	iconContainer: {
		flexDirection: 'row',
		justifyContent: 'center',
		alignItems: 'center',
	},
	icon: { margin: 10 },
	movie_list: {},
	menu_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		marginBottom: 20,
	},
	menu_title: {
		color: _white,
		fontFamily: 'Eina01-SemiBold',
		fontSize: 19,
	},
	seat_intro: {
		color: _white,
		textAlign: 'center',
		padding: 20,
		lineHeight: 20,
	},
});
