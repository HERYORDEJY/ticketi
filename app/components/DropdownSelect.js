import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import DropDownPicker from 'react-native-dropdown-picker';
import { Icon } from 'native-base';
import { _black, _red, _white, _yellow } from '../utils/colors';

export default class DropdownSelect extends Component {
	state = { location: 'Ilorin' };

	componentDidMount() {}

	render() {
		const {
			items = [
				{ id: 1, label: 'Yusuf' },
				{ id: 2, label: 'Mashood' },
				{ id: 3, label: 'Abdullateef' },
				{ id: 4, label: 'Shamsudeen' },
				{ id: 4, label: 'Shamsudeen' },
				{ id: 4, label: 'Shamsudeen' },
			],
			onChangeItem,
		} = this.props;
		return (
			<View>
				<DropDownPicker
					items={items}
					onChangeItem={onChangeItem}
					containerStyle={{ borderWidth: 0 }}
					// showArrow={false}
					style={{
						backgroundColor: _black + 60,
						borderWidth: 0,
						paddingVertical: 10,
					}}
					dropDownStyle={{
						backgroundColor: _black,
						borderWidth: 0,
						alignItems: 'flex-start',
						minHeight: 220,
						maxHeight: 300,
					}}
					placeholder={'Ilorin'}
					labelStyle={{ color: _white, textAlign: 'left', fontSize: 15 }}
					itemStyle={{
						justifyContent: 'flex-start',
						paddingVertical: 15,
						borderBottomWidth: 0.2,
						borderBottomColor: _yellow,
					}}
					customArrowDown={() => (
						<Icon
							type={'MaterialCommunityIcons'}
							name={'chevron-down'}
							style={{ color: _yellow }}
						/>
					)}
					customArrowUp={() => (
						<Icon
							type={'MaterialCommunityIcons'}
							name={'chevron-up'}
							style={{ color: _yellow }}
						/>
					)}
				/>
			</View>
		);
	}
}

const styles = StyleSheet.create({});
