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
import { uniqueArray } from '../../utils/compare-values';

export default function BuyTicket({ navigation }) {
	const [state, setState] = useState({ genre: 'Action', index: 0 });

	const onNavigate = (screen) => navigation.navigate(`${screen}`);

	const dateTimeList = [
		{
			day: 'Thursday',
			day_slug: 'Thu',
			date: 9,
			times: ['11:00AM', '02:00PM', '04:00PM', '06:30PM'],
		},
		{
			day: 'Friday',
			day_slug: 'Fri',
			date: 10,
			times: ['11:51PM', '02:26PM', '05:40PM', '07:34PM'],
		},
		{
			day: 'Saturday',
			day_slug: 'Sat',
			date: 11,
			times: ['09:00AM', '10:00AM', '01:00PM', '03:30PM'],
		},
		{
			day: 'Sunday',
			day_slug: 'Sun',
			date: 12,
			times: ['09:20PM', '11:10PM', '01:04PM', '11:30PM'],
		},
	];

	const [selectedDate, setSelectedDate] = useState(false);

	const [selectedTime, setSelectedTime] = useState(false);

	const [selectedSeat, setSelectedSeat] = useState([]);

	const onSelectDate = (date) => {
		setSelectedDate({ ...date });
		setSelectedTime(false);
	};

	const onSelectSeat = (id) => {
		let arr = [...selectedSeat];
		if (selectedSeat.includes(id)) {
			arr.filter((_s) => _s !== id);
			setSelectedSeat(uniqueArray(arr));
		} else {
			arr = [...selectedSeat, id];
			setSelectedSeat(uniqueArray(arr));
		}
		console.log(selectedSeat);
	};

	const isSelectedSeat = (id) => {
		for (let i in selectedSeat) {
			if (id === 17) return true;
		}
	};

	const onSelectTime = (time) => setSelectedTime(time);
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
					end={{ x: 0.0, y: 0.5 }}
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
								<Text style={styles.menu_title}>Select Location</Text>
							</View>
							<View style={styles.movie_list}>
								<DropdownSelect />
							</View>
						</View>
						{/*Select Date + Time*/}
						<View style={{ ...styles.main, marginVertical: 40 }}>
							<View style={styles.menu_header}>
								<Text style={styles.menu_title}>Available Date</Text>
							</View>
							<View style={styles.movie_list}>
								<View
									style={{
										flexDirection: 'row',
										justifyContent: 'space-between',
										marginBottom: 10,
									}}>
									{dateTimeList.map((d, index) => (
										<DateCard
											key={`${d.date}${d.day}`}
											selected={
												d.date === selectedDate.date &&
												d.day === selectedDate.day
											}
											key={index}
											day={d.day_slug}
											date={d.date}
											onPress={() => onSelectDate(d)}
										/>
									))}
								</View>
								{selectedDate && (
									<View
										style={{
											flexDirection: 'row',
											justifyContent: 'space-between',
										}}>
										{selectedDate.times.map((d, index) => (
											<TimeCard
												key={d.id}
												selected={isSelectedSeat(d.id)}
												onPress={() => onSelectTime(d)}
												time={d}
											/>
										))}
									</View>
								)}
							</View>
						</View>
						{/*<WashSVG />*/}
						{/* New in cinema */}
						<View style={{ ...styles.main, marginTop: 40 }}>
							<View style={{ ...styles.menu_header, flexDirection: 'column' }}>
								<Text style={{ ...styles.menu_title }}>Select seat</Text>
								<Text style={styles.seat_intro}>
									Tap on desired seat to select. Already booked seat are filled
									with white color
								</Text>
							</View>
							{/*Screen Diagram*/}
							<View
								style={{
									paddingHorizontal: 0,
									alignItems: 'center',
									justifyContent: 'center',
								}}>
								<Text
									style={{
										...styles.seat_intro,
										fontFamily: 'Eina01-SemiBold',
										width: '50%',
										borderColor: _white,
										borderWidth: 2,
										borderBottomWidth: 0,
										borderRadius: 200,
										borderBottomRightRadius: 0,
										borderBottomLeftRadius: 0,
										// marginHorizontal: 50,
										borderRightWidth: 0.1,
										borderLeftWidth: 0.1,
									}}>
									Screen
								</Text>
							</View>
							<View
								style={{
									flexDirection: 'row',
									flexWrap: 'wrap',
									justifyContent: 'center',
								}}>
								{_seat.map((s, index) => (
									<ButtonSeat
										key={s.id}
										onPress={() => onSelectSeat(s.id)}
										booked={s.booked}
										selected={
											selectedSeat.filter((_s, index) => _s === s.id).length > 0
										}
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
				<ButtonPay onPress={() => onNavigate('Payment')} />
			</View>
			{/* Header */}
			<View style={{ position: 'absolute', left: 0, right: 0, marginTop: 30 }}>
				<Header
					containerStyle={{ padding: 20 }}
					leftIconName={'chevron-left'}
					onPressLeft={() => navigation.goBack()}
					title={'Buy Ticket'}
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
	image_background: { width: '100%', height: '50%', flex: 1 },
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
