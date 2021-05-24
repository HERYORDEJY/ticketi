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
} from '../../utils/dimension';
import TicketSmall from '../../components/TicketSmall';
import CinemaItem from '../../components/CinemaItem';

export default function Cinema({}) {
	return (
		<Container style={styles.container}>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<LinearGradient
				start={{ x: 0.0, y: 0.0 }}
				end={{ x: 0.0, y: 1 }}
				colors={[_white + 90, _black]}
				style={styles.linearGradient}>
				<View
					style={{
						...StyleSheet.absoluteFillObject,
						backgroundColor: _black + 90,
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
					{/*Ticket*/}
					<CinemaItem location={'Ilorin'} />
					<CinemaItem location={'Zaria'} />
					<CinemaItem location={'Ikeja'} />
					<CinemaItem location={'Borno'} />
					<CinemaItem location={'Zungeru'} />
				</Content>
			</LinearGradient>
			{/* Header */}
			<View style={{ position: 'absolute', left: 0, right: 0, marginTop: 30 }}>
				<Header
					containerStyle={{ padding: 20 }}
					rightIconType={'MaterialIcons'}
					rightIconName={'search'}
					title={'Cinema'}
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
	row: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		marginBottom: 25,
	},
	movie_title: { fontSize: 16, color: _yellow, fontFamily: 'Eina01-Bold' },
	row_header_text: {
		fontSize: 16,
		color: _white,
	},
	row_body_text: { fontSize: 16, color: _white, fontFamily: 'Eina01-SemiBold' },
});
