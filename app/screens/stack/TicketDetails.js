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
import {
	_screenHeight,
	_screenWidth,
	_windowHeight,
	_windowWidth,
} from '../../utils/dimension';

export default function TicketDetails({ navigation }) {
	const onNavigate = (screen) => navigation.navigate(`${screen}`);
	const movie_title = 'Top Gun : MaverickMaverickMaverick';
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
							paddingHorizontal: 30,
							flex: 1,
							// paddingBottom: 80,
						}}>
						<ImageBackground
							resizeMode={'stretch'}
							style={{
								...styles.image_background_sm,
							}}
							source={require('../../assets/images/details-bg.png')}>
							{/*Ticket*/}
							{/*<View*/}
							{/*	style={{*/}
							{/*		width: '100%',*/}
							{/*		height: '100%',*/}
							{/*		flex: 1,*/}
							{/*		alignItems: 'center',*/}
							{/*		paddingHorizontal: 20,*/}
							{/*		marginTop: 120,*/}
							{/*		marginBottom: 20,*/}
							{/*		position: 'absolute',*/}
							{/*	}}>*/}
							{/*	<Image*/}
							{/*		source={require('../../assets/images/details-bg.png')}*/}
							{/*		style={{*/}
							{/*			width: _screenWidth * 0.82,*/}
							{/*			height: _screenHeight * 0.75,*/}
							{/*			// flex: 1,*/}
							{/*			// elevation: 1,*/}
							{/*		}}*/}
							{/*		resizeMode={'stretch'}*/}
							{/*	/>*/}
							{/*</View>*/}
							<View
								style={{
									// marginTop: 200,
									// paddingHorizontal: 35,
									flex: 3,
									paddingTop: _screenWidth / 8,
									paddingHorizontal: _screenWidth / 10,
								}}>
								<View
									style={{
										...styles.row,
										marginBottom: 20,
										alignItems: 'center',
										justifyContent: 'flex-start',
									}}>
									<Text style={{ ...styles.movie_title }}>
										Movie: {'\t \t'}{' '}
									</Text>
									<Text style={{ ...styles.movie_title }}>
										{movie_title.substr(0, 20)}
									</Text>
								</View>
								<View style={styles.row}>
									<View style={{ flex: 2 }}>
										<Text style={styles.row_header_text}>Date & Time</Text>
										<Text style={styles.row_body_text}>
											{' '}
											01-01-2021, 11:11AM{' '}
										</Text>
									</View>
									<View style={{}}>
										<Text style={styles.row_header_text}>Seat(s) </Text>
										<Text style={styles.row_body_text}>B1, B2 </Text>
									</View>
								</View>
								<View style={styles.row}>
									<View style={{ flex: 2 }}>
										<Text style={styles.row_header_text}>Date & Time</Text>
										<Text style={styles.row_body_text}>
											{' '}
											01-01-2021, 11:11AM{' '}
										</Text>
									</View>
									<View style={{}}>
										<Text style={styles.row_header_text}>Seat(s) </Text>
										<Text style={styles.row_body_text}>B1, B2 </Text>
									</View>
								</View>
								<View style={styles.row}>
									<View style={{ flex: 2 }}>
										<Text style={styles.row_header_text}>Date & Time</Text>
										<Text style={styles.row_body_text}>
											{' '}
											01-01-2021, 11:11AM{' '}
										</Text>
									</View>
									<View style={{}}>
										<Text style={styles.row_header_text}>Seat(s) </Text>
										<Text style={styles.row_body_text}>B1, B2 </Text>
									</View>
								</View>
								<View style={styles.row}>
									<View style={{ flex: 2 }}>
										<Text style={styles.row_header_text}>Cinema</Text>
										<Text style={styles.row_body_text}>Filmhouse Cinema</Text>
									</View>
									<View style={{}}>
										<Text style={styles.row_header_text}>Order</Text>
										<Text style={styles.row_body_text}>123456</Text>
									</View>
								</View>
							</View>
						</ImageBackground>
					</Content>
				</LinearGradient>
			</ImageBackground>
			{/* Header */}
			<View style={{ position: 'absolute', left: 0, right: 0, marginTop: 30 }}>
				<Header
					containerStyle={{ padding: 20 }}
					rightIconName={'close'}
					onPressRight={() =>
						navigation.navigate('Home', {
							screen: 'Tickets',
							initial: false,
						})
					}
					title={'Top Gun : Maverick'}
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
		alignItems: 'center',
	},
	content: {
		paddingTop: 110,
		flex: 1,
		alignItems: 'center',
	},
	containerStyle: { justifyContent: 'center', alignItems: 'center' },
	image_background: {
		width: '100%',
		height: '50%',
		flex: 1,
	},
	image_background_sm: {
		width: '100%',
		height: '100%',
		paddingBottom: 20,
		flex: 1,
		// paddingRight: _screenWidth / 4.5,
		// paddingLeft: _screenWidth / 45,
		// paddingRight: _screenWidth > 450 ? 130 : 75,
		// paddingLeft: _screenWidth > 450 ? 20 : 0,
		// paddingTop: _screenWidth > 450 ? 20 : 5,
		justifyContent: 'center',
		// paddingVertical: 15,
	},
	linearGradient: { flex: 1 },
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 18,
	},
	movie_title: {
		fontSize: _screenWidth / 30,
		color: _yellow,
		fontFamily: 'Eina01-Bold',
		paddingTop: 10,
	},
	row_header_text: {
		fontSize: _screenWidth / 30,
		color: _white,
	},
	row_body_text: {
		fontSize: _screenWidth / 30,
		// fontSize: _screenWidth > 450 ? 17 : 15,
		color: _white,
		fontFamily: 'Eina01-SemiBold',
	},
});
