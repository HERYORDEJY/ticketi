import React, { Component } from 'react';
import {
	ImageBackground,
	StyleSheet,
	Text,
	TouchableOpacity,
	View,
} from 'react-native';
import { _screenHeight, _screenWidth, _windowWidth } from '../utils/dimension';
import { _white, _yellow } from '../utils/colors';

export default class TicketSmall extends Component {
	state = {};

	componentDidMount() {}

	render() {
		const { onPress } = this.props;
		const movie_title = 'Top Gun : MaverickMaverickMaverick';
		return (
			<TouchableOpacity onPress={onPress} style={styles.container}>
				<ImageBackground
					resizeMode={'stretch'}
					style={styles.image_background}
					source={require('../assets/images/details-sm.png')}>
					<View
						style={{
							// marginTop: 200,
							paddingHorizontal: 35,
							// paddingHorizontal: _screenWidth > 450 ? 65 : 35,
							paddingTop: _windowWidth / 30,
							paddingRight: _screenWidth / 4,
							paddingLeft: _screenWidth / 15,
						}}>
						<View
							style={{
								...styles.row,
								marginBottom: 0,
								alignItems: 'center',
								justifyContent: 'flex-start',
							}}>
							<Text style={{ ...styles.movie_title }}>Movie: {'\t \t'} </Text>
							<Text style={{ ...styles.movie_title }}>
								{movie_title.substr(0, 20)}
							</Text>
						</View>
						<View style={{ marginBottom: 15 }}>
							<Text style={styles.row_body_text}>Filmhouse Cinema</Text>
						</View>
						<View style={styles.row}>
							<View style={{ flex: 2 }}>
								<Text style={styles.row_header_text}>Date & Time</Text>
								<Text style={styles.row_body_text}> 01-01-2021, 11:11AM </Text>
							</View>
							<View style={{}}>
								<Text style={styles.row_header_text}>Seat(s) </Text>
								<Text style={styles.row_body_text}>B1, B2 </Text>
							</View>
						</View>
						<View style={styles.row}>
							<View style={{ flex: 2 }}>
								<Text style={styles.row_header_text}>Date & Time</Text>
								<Text style={styles.row_body_text}> 01-01-2021, 11:11AM </Text>
							</View>
							<View style={{}}>
								<Text style={styles.row_header_text}>Seat(s) </Text>
								<Text style={styles.row_body_text}>B1, B2 </Text>
							</View>
						</View>
						<View style={styles.row}>
							<View style={{ flex: 2 }}>
								<Text style={styles.row_header_text}>Date & Time</Text>
								<Text style={styles.row_body_text}> 01-01-2021, 11:11AM </Text>
							</View>
							<View style={{}}>
								<Text style={styles.row_header_text}>Seat(s) </Text>
								<Text style={styles.row_body_text}>B1, B2 </Text>
							</View>
						</View>
					</View>
				</ImageBackground>
			</TouchableOpacity>
		);
	}
}

const styles = StyleSheet.create({
	container: { marginBottom: 35 },
	image_background: {
		height: _windowWidth / 1.7,
		// paddingRight: _screenWidth / 4.5,
		// paddingLeft: _screenWidth / 50,
		// paddingRight: _screenWidth > 450 ? 130 : 75,
		// paddingLeft: _screenWidth > 450 ? 20 : 0,
		// paddingTop: _screenWidth > 450 ? 20 : 5,
		justifyContent: 'center',
		paddingVertical: 15,
	},
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
