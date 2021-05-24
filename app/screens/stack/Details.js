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
	Animated,
} from 'react-native';
import { Container, Content, Icon } from 'native-base';
import { _black, _red, _white, _yellow } from '../../utils/colors';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import ButtonGenre from '../../components/ButtonGenre';
import { _genreList, _swipe } from '../../api/index';
import NewCard from '../../components/NewCard';
import DetailsFront from '../../components/DetailsFront';
import DetailsBack from '../../components/DetailsBack';
import Swiper from 'react-native-swiper';
import CinemaItem from '../../components/CinemaItem';
import ButtonText from '../../components/ButtonText';
import { _windowWidth } from '../../utils/dimension';

export default function Details({ navigation }) {
	const [state, setState] = useState({ genre: 'Action', index: 0 });

	const [scrollIndex, setScrollIndex] = useState(0);

	const onNavigate = (screen) => navigation.navigate(`${screen}`);

	const onScroll = (event) => {
		setScrollIndex(
			parseFloat((event.nativeEvent.contentOffset.x / _windowWidth) * 10),
		);
	};

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
							// padding: 20,
							flex: 1,
							paddingBottom: 80,
						}}>
						{/* Main Content */}
						{/*  */}
						{/*<Swiper*/}
						{/*	height={350}*/}
						{/*	style={{ ...styles.wrapper }}*/}
						{/*	showsButtons={false}*/}
						{/*	showsPagination={false}*/}
						{/*	autoplay={false}*/}
						{/*	onIndexChanged={(index) => onIndexChange(index)}*/}
						{/*	containerStyle={styles.containerStyle}>*/}
						{/*	*/}
						{/*</Swiper>*/}
						<ScrollView
							style={{ flex: 1 }}
							showsHorizontalScrollIndicator={false}
							bounces={false}
							pagingEnabled={true}
							scrollEventThrottle={1}
							scrollEnabled={true}
							horizontal={true}
							contentContainerStyle={{}}
							onScroll={(event) => onScroll(event)}>
							<View
								style={{
									width: _windowWidth,
									paddingHorizontal: 20,
									alignItems: 'center',
								}}>
								<DetailsFront />
							</View>
							<View
								style={{
									width: _windowWidth,
									paddingHorizontal: 20,
									alignItems: 'center',
								}}>
								<DetailsBack />
							</View>
						</ScrollView>
						<View style={styles.paginationStyle}>
							<View style={styles.iconContainer}>
								{/*{pageList.map((img, index) => (*/}
								<Icon
									name={'stop'}
									type={'MaterialIcons'}
									color='#fff'
									style={{
										...styles.icon,
										color: scrollIndex <= 4.99 ? _white : _white + 50,
										fontSize: scrollIndex <= 4.99 ? 10 : 7,
									}}
								/>
								<Icon
									name={'stop'}
									type={'MaterialIcons'}
									color='#fff'
									style={{
										...styles.icon,
										color: scrollIndex >= 4.9 ? _white : _white + 50,
										fontSize: scrollIndex >= 4.9 ? 10 : 7,
									}}
								/>
								{/*))}*/}
							</View>
						</View>
						{/*List of Available Cinemas*/}
						<View style={styles.main}>
							<View style={styles.menu_header}>
								<Text style={styles.menu_title}>Showing in</Text>
							</View>
							<View style={styles.movie_list}>
								{/*Border Line*/}
								{/*<View*/}
								{/*	style={{*/}
								{/*		...StyleSheet.absoluteFillObject,*/}
								{/*		borderWidth: 0,*/}
								{/*		borderColor: 'transparent',*/}
								{/*		borderBottomWidth: 0.2,*/}
								{/*		borderBottomColor: _red,*/}
								{/*		flex: 1,*/}
								{/*		marginHorizontal: 100,*/}
								{/*		elevation: 1,*/}
								{/*	}}*/}
								{/*/>*/}
								<FlatList
									// columnWrapperStyle={}
									style={{}}
									showsHorizontalScrollIndicator={false}
									showsVerticalScrollIndicator={false}
									horizontal={false}
									scrollEventThrottle={16}
									bounces={false}
									data={_swipe}
									renderItem={({ item, index }) => (
										<CinemaItem
											onPress={() => onNavigate('BuyTicket')}
											containerStyle={{ marginBottom: 20 }}
											imageStyle={{ width: 180, height: 250 }}
											index={index}
											lastItem={index + 1 === _swipe.length}
										/>
									)}
									keyExtractor={(item, index) => index.toString()}
								/>
							</View>
						</View>
						{/* New in cinema */}
						<View style={styles.menu}>
							<View style={styles.menu_header}>
								<Text style={styles.menu_title}>New in Cinema</Text>
								<ButtonText text={'View All'} />
							</View>
							<FlatList
								showsHorizontalScrollIndicator={false}
								horizontal={true}
								scrollEventThrottle={16}
								bounces={false}
								data={_swipe}
								renderItem={({ item, index }) => (
									<NewCard
										index={index}
										lastItem={index + 1 === _swipe.length}
										onPress={() => onNavigate('Details')}
									/>
								)}
								keyExtractor={(item, index) => index.toString()}
							/>
						</View>
					</Content>
				</LinearGradient>
			</ImageBackground>
			{/* Header */}
			<View style={{ position: 'absolute', left: 0, right: 0, marginTop: 30 }}>
				<Header
					containerStyle={{ padding: 20 }}
					rightIconName={'close'}
					onPressRight={() => navigation.goBack()}
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
	content: { paddingVertical: 80 },
	wrapper: { justifyContent: 'center', alignItems: 'center' },
	containerStyle: { justifyContent: 'center', alignItems: 'center' },
	image_background: { width: '100%', height: '50%', flex: 1 },
	linearGradient: { flex: 1 },
	menu: { paddingHorizontal: 20 },
	main: { marginVertical: 20, marginBottom: 50, paddingHorizontal: 20 },
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
		marginBottom: 10,
	},
	menu_title: {
		color: _white,
		fontFamily: 'Eina01-SemiBold',
		fontSize: 19,
	},
});
