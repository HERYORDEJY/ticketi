import React, { useState } from 'react';
import {
	View,
	Text,
	ImageBackground,
	StyleSheet,
	StatusBar,
	FlatList,
} from 'react-native';
import { Container, Content } from 'native-base';
import { _black, _white } from '../../utils/colors';
import Header from '../../components/Header';
import LinearGradient from 'react-native-linear-gradient';
import ButtonGenre from '../../components/ButtonGenre';
import { _genreList, _swipe } from '../../api/index';
import NewCard from '../../components/NewCard';
import { _windowWidth } from '../../utils/dimension';

export default function DiscoverNew({ navigation }) {
	const [state, setState] = useState({ genre: 'Action' });

	const onNavigate = (screen) => navigation.navigate(`${screen}`);

	const onSelect = (genre) => setState({ ...state, genre });

	return (
		<Container style={styles.container}>
			<StatusBar
				translucent
				backgroundColor='transparent'
				barStyle='light-content'
			/>
			<ImageBackground
				style={styles.image_background}
				source={require('../../assets/images/FastFurious9.jpg')}>
				<LinearGradient
					start={{ x: 0.0, y: 0.0 }}
					end={{ x: 0.0, y: 0.4 }}
					colors={[_white + 90, _black]}
					style={styles.linearGradient}>
					<Content
						contentContainerStyle={styles.content}
						scrollEnabled={true}
						showsVerticalScrollIndicator={false}
						style={{ padding: 20 }}>
						{/* Main Content */}
						<View style={styles.main}>
							<Text style={styles.main_title}>New in Cinema</Text>
							<View style={styles.genre_list_container}>
								<FlatList
									style={{ paddingVertical: 40 }}
									showsHorizontalScrollIndicator={false}
									horizontal={true}
									scrollEventThrottle={16}
									bounces={false}
									data={_genreList}
									renderItem={({ item, index }) => (
										<ButtonGenre
											selected={state.genre === item.name}
											onPress={() => onSelect(item.name)}
											text={item.name}
											index={index}
											lastItem={index + 1 === _genreList.length}
										/>
									)}
									keyExtractor={(item, index) => index.toString()}
								/>
							</View>
							<View style={styles.movie_list}>
								<FlatList
									numColumns={2}
									columnWrapperStyle={{
										justifyContent: 'center',
										paddingLeft: 20,
									}}
									showsHorizontalScrollIndicator={false}
									horizontal={false}
									scrollEventThrottle={16}
									bounces={false}
									data={_swipe}
									renderItem={({ item, index }) => (
										<NewCard
											onPress={() => onNavigate('Details')}
											containerStyle={{ marginBottom: 20 }}
											imageStyle={{
												width: _windowWidth / 2.4,
												height: _windowWidth / 1.7,
											}}
											index={index}
											// lastItem={index + 1 === _swipe.length}
										/>
									)}
									keyExtractor={(item, index) => index.toString()}
								/>
							</View>
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
		backgroundColor: _black,
	},
	content: { paddingBottom: 30 },
	image_background: { width: '100%', height: '100%', flex: 1 },
	linearGradient: { flex: 1 },
	main: { marginTop: 100 },
	main_title: { fontFamily: 'Eina01-SemiBold', fontSize: 30, color: _white },
	genre_list_container: {},
});
