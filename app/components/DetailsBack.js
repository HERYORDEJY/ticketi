import React, { Component } from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';
import { Icon } from 'native-base';
import { _white, _black, _yellow, _red } from '../utils/colors';
import { _screenWidth, _windowWidth } from '../utils/dimension';

export default class DetailsBack extends Component {
	render() {
		const {
			genre = [
				{ id: 1, name: 'Action' },
				{ id: 2, name: 'Adventure' },
				{ id: 3, name: 'Thriller' },
				{ id: 4, name: 'Comedy' },
				{ id: 5, name: 'Horror' },
			],
		} = this.props;
		return (
			<View
				style={{
					alignItems: 'center',
					flex: 1,
					justifyContent: 'center',
					// width: _windowWidth,
				}}>
				<View style={{ marginBottom: 30 }}>
					<Text
						style={{
							fontSize: 16,
							color: _white,
							lineHeight: 26,
							textAlign: 'center',
						}}>
						Top Gun: Maverick is an upcoming American action drama film directed
						by Joseph Kosinski from a screenplay by Ehren Kruger, Eric Warren
						Singer, and Christopher McQuarrie and a story by Peter Craig and
						Justin Marks. [6] It is the sequel to 1986's Top Gun. The film stars
						Tom Cruise, Miles Teller, Jennifer Connelly, Jon Hamm, Glen Powell,
						Lewis Pullman, Ed Harris, and Val Kilmer. Cruise and Kilmer reprise
						their roles from the first film.
					</Text>
				</View>
				<View style={{ flexDirection: 'row', alignItems: 'center' }}>
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
											color: _yellow,
										}}
									/>
								)}
							</View>
						))}
					</View>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	rating: { fontSize: 14, color: _white },
	genre_container: {
		flex: 0,
		width: '100%',
		flexDirection: 'row',
		alignItems: 'center',
		justifyContent: 'center',
		marginVertical: 20,
		marginBottom: 25,
		flexWrap: 'wrap',
		flexShrink: 1,
	},
	genre: { fontSize: 15, color: _white },
});
