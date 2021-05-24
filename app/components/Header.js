import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { Icon } from 'native-base';
import { _white } from '../utils/colors';

export default class Header extends Component {
	render() {
		const {
			title,
			leftIconName,
			rightIconName,
			containerStyle,
			rightIconType,
			leftIconType,
			onPressLeft,
			onPressRight,
		} = this.props;
		return (
			<View style={{ ...styles.container, ...containerStyle }}>
				{leftIconName && (
					<TouchableOpacity style={styles.left_container} onPress={onPressLeft}>
						<Icon
							name={leftIconName}
							type={leftIconType ? leftIconType : 'MaterialCommunityIcons'}
							style={styles.icon}
						/>
					</TouchableOpacity>
				)}

				<View style={styles.title_container}>
					{/* {title && <Text style={styles.title}>{title}</Text>} */}
					<Text style={styles.title}>{title}</Text>
				</View>

				{rightIconName && (
					<TouchableOpacity
						style={styles.right_container}
						onPress={onPressRight}>
						<Icon
							name={rightIconName}
							type={rightIconType ? rightIconType : 'MaterialCommunityIcons'}
							style={styles.icon}
						/>
					</TouchableOpacity>
				)}
			</View>
		);
	}
}

const styles = StyleSheet.create({
	container: {
		flexDirection: 'row',
		justifyContent: 'space-around',
		alignItems: 'center',
	},
	left_container: {
		backgroundColor: _white + 30,
		padding: 10,
		borderRadius: 15,
	},
	right_container: {
		backgroundColor: _white + 30,
		padding: 10,
		borderRadius: 15,
	},
	title_container: { flex: 1, justifyContent: 'center', alignItems: 'center' },
	title: {
		fontSize: 20,
		fontFamily: 'Eina01-SemiBold',
		color: _white,
	},
	icon: { color: _white },
});
