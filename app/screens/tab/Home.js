import React from 'react';
import {
	StyleSheet,
	Text,
	View,
	StatusBar,
	TouchableOpacity,
	FlatList,
	ImageBackground,
	Image,
} from 'react-native';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';
import { _black, _white, _yellow } from '../../utils/colors';
import { Container, Content } from 'native-base';
import { _screenWidth } from '../../utils/dimension';
import GradientHeader from 'react-native-gradient-header';
import Icon from 'react-native-ico-coolicons';
import ButtonPay from '../../components/ButtonPay';
import HeaderSwiper from '../../components/HeaderSwiper';
import { _swipe } from '../../api';
import ButtonLink from '../../components/ButtonLink';
import ButtonText from '../../components/ButtonText';
import NewCard from '../../components/NewCard';
import PopularCard from '../../components/PopularCard';
import LinearGradient from 'react-native-linear-gradient';
import Header from '../../components/Header';
// import SwipeHiddenHeader from 'react-native-swipe-hidden-header';

export default function Home({ navigation }) {
	const onNavigate = (screen) => navigation.navigate(`${screen}`);

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
					// style={{ paddingHorizontal: _screenWidth > 450 ? 35 : 0, flex: 1 }}
				>
					<View style={{ marginBottom: 30 }}>
						<HeaderSwiper contentList={_swipe} containerStyle={{}} />
					</View>

					<View
						style={{
							alignContent: 'center',
							paddingHorizontal: 20,
							// marginBottom: 20,
						}}>
						<ButtonLink
							text={'Buy Ticket'}
							textStyles={{
								fontSize: RFValue(15),
								fontFamily: 'Eina01-SemiBold',
							}}
							onPress={() => onNavigate('Details')}
						/>
					</View>
					{/* New in cinema */}
					<View style={styles.menu}>
						<View style={styles.menu_header}>
							<Text style={styles.menu_title}>New in Cinema</Text>
							<ButtonText
								text={'View All'}
								onPress={() => onNavigate('DiscoverNew')}
							/>
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
					{/* Popular in cinema */}
					<View style={styles.menu}>
						<View style={styles.menu_header}>
							<Text style={styles.menu_title}>Popular in Cinema</Text>
							<ButtonText
								text={'View All'}
								onPress={() => onNavigate('DiscoverPopular')}
							/>
						</View>
						<FlatList
							showsVerticalScrollIndicator={false}
							horizontal={false}
							scrollEventThrottle={16}
							bounces={false}
							data={_swipe}
							renderItem={({ item, index }) => (
								<PopularCard
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
			{/* Header */}
			<View
				style={{
					position: 'absolute',
					left: 0,
					right: 0,
					marginTop: 30,
				}}>
				<Header
					containerStyle={{ padding: 20 }}
					rightIconType={'MaterialIcons'}
					rightIconName={'search'}
					// title={'My Tickets'}
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
	linearGradient: { flex: 1 },
	content: {},
	menu: { padding: 20, marginBottom: 30 },
	menu_header: {
		flexDirection: 'row',
		justifyContent: 'space-between',
		alignItems: 'center',
		// marginBottom: 30,
	},
	menu_title: {
		color: _white,
		fontFamily: 'Eina01-SemiBold',
		fontSize: 19,
	},
	//
});
