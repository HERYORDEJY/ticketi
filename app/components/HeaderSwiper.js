import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { Container, Icon } from 'native-base';
import Swiper from 'react-native-swiper';
import { _black, _white, _yellow } from '../utils/colors';
import LinearGradient from 'react-native-linear-gradient';
import { _windowWidth } from '../utils/dimension';
import { RFPercentage, RFValue } from 'react-native-responsive-fontsize';

export default class HeaderSwiper extends Component {
	state = {
		index: 0,
	};
	onIndexChange = (index) => this.setState({ ...this.state, index: index });
	render() {
		const { contentList, containerStyle } = this.props;

		const height = _windowWidth;

		return (
			<View style={{ ...containerStyle }}>
				<Swiper
					height={height}
					style={{ ...styles.wrapper }}
					showsButtons={false}
					showsPagination={false}
					autoplay={true}
					onIndexChanged={(index) => this.onIndexChange(index)}
					containerStyle={styles.containerStyle}>
					{contentList.map((content, index) => (
						<View key={content.id} style={{ ...styles.slide1, height: height }}>
							<Image
								source={content.imageURI}
								style={{ width: '100%', height: '100%' }}
								resizeMode={'stretch'}
							/>
							<View
								style={{
									...StyleSheet.absoluteFillObject,
									backgroundColor: _black + 90,
									height: height,
								}}
							/>
							<View
								style={{
									position: 'absolute',
									bottom: 0,
								}}>
								<Text
									style={{
										color: _white,
										fontSize: RFValue(15),
										fontFamily: 'Eina01-Bold',
									}}>{`#${content.trending} in Cinema`}</Text>
							</View>
						</View>
					))}
				</Swiper>
				<View style={styles.paginationStyle}>
					<Icon
						name={'arrow-upward'}
						type={'MaterialIcons'}
						color='#fff'
						style={{
							color: _white,
							fontSize: 20,
						}}
					/>
					<View style={styles.iconContainer}>
						{contentList.map((img, index) => (
							<Icon
								key={index}
								name={'stop'}
								type={'MaterialIcons'}
								color='#fff'
								style={{
									...styles.icon,
									color: index === this.state.index ? _white : _white + 50,
									fontSize: index === this.state.index ? 13 : 10,
								}}
							/>
						))}
					</View>
					<Icon
						name={'arrow-downward'}
						type={'MaterialIcons'}
						color='#fff'
						style={{
							color: _white,
							fontSize: 20,
						}}
					/>
				</View>
			</View>
		);
	}
}

const styles = StyleSheet.create({
	wrapper: {
		position: 'relative',
	},
	containerStyle: { flex: 0 },
	slide1: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		width: '100%',
	},
	paginationStyle: {
		justifyContent: 'center',
		alignItems: 'center',
		position: 'absolute',
		right: 0,
		bottom: 0,
		backgroundColor: _white + 60,
		borderRadius: 40,
		paddingHorizontal: 10,
		paddingVertical: _windowWidth / 100,
		margin: 20,
		height: _windowWidth / 1.5,
	},
	iconContainer: { paddingVertical: 20 },
	icon: { marginVertical: _windowWidth / 100 },
});
