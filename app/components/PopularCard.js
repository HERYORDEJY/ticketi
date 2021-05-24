import { Icon } from 'native-base';
import React, { Component } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { _yellow, _black, _red } from '../utils/colors';
import { _windowWidth } from '../utils/dimension';

export default class PopularCard extends Component {
	render() {
		const {
			id,
			image,
			rating,
			lastItem,
			index,
			title,
			time,
			genre = [
				{ id: 1, name: 'Action' },
				{ id: 2, name: 'Adventure' },
				{ id: 3, name: 'Thriller' },
				{ id: 4, name: 'Comedy' },
				{ id: 5, name: 'Horror' },
			],
			onPress,
		} = this.props;
		return (
			<TouchableOpacity onPress={onPress} style={{ ...styles.container }}>
				<View style={styles.image_container}>
					<Image
						style={styles.image}
						source={require('../assets/images/Tenet.jpg')}
					/>
				</View>
				<View style={styles.info_container}>
					<Text style={styles.title}>Top Gun : Maverick</Text>
					<Text style={styles.time}>2hrs 06min</Text>
					<View style={styles.genre_container}>
						{genre.map((g, index) => (
							<View
								key={g.id}
								style={{
									alignItems: 'center',
									flexDirection: 'row',
									flexWrap: 'wrap',
								}}>
								<Text
									style={{
										...styles.genre,
									}}>
									{g.name}
								</Text>
								{index + 1 !== genre.length && (
									<Icon
										name={'stop'}
										type={'MaterialIcons'}
										style={{
											fontSize: 6,
											paddingLeft: 5,
											paddingRight: 5,
										}}
									/>
								)}
							</View>
						))}
					</View>
					<View style={styles.rating_container}>
						<Icon
							name={'star'}
							type={'MaterialIcons'}
							style={{ fontSize: 15, color: _red, marginRight: 10 }}
						/>
						<Text
							style={{
								...styles.rating,
								fontFamily: 'Eina01-Bold',
								fontSize: 15,
							}}>
							{lastItem ? 9 : 8.5}
						</Text>
						<Text
							style={{
								...styles.rating,
							}}>
							/10
						</Text>
					</View>
				</View>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		marginBottom: 30,
		flexDirection: 'row',
		alignItems: 'center',
	},
	image_container: {},
	image: {
		borderRadius: 10,
		width: _windowWidth / 2.5,
		flex: 1,
		height: _windowWidth / 1.7,
	},
	b_image: {
		borderRadius: 10,
		// width: null,
		// height: '100%',
		// flex: 0.8,
		position: 'absolute',
	},
	info_container: {
		flex: 1.2,
		flexWrap: 'wrap',
		backgroundColor: _yellow,
		borderRadius: 10,
		borderTopLeftRadius: 0,
		borderBottomLeftRadius: 0,
		padding: 10,
		// marginTop: 30,
		// marginBottom: 50,
	},
	rating: { fontSize: 12, color: _black },
	title: { fontSize: 17, fontFamily: 'Eina01-Bold', color: _black },
	time: { fontSize: 15, color: _black },
	genre_container: {
		flex: 0,
		width: '100%',
		flexDirection: 'row',
		// alignItems: 'center',
		marginVertical: 20,
		marginBottom: 25,
		flexWrap: 'wrap',
		flexShrink: 1,
	},
	genre: { fontSize: 15, color: _black },
	rating_container: { flexDirection: 'row', alignItems: 'center' },
});
