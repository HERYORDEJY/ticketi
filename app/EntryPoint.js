/* @flow weak */

import BuyTicket from './screens/stack/BuyTicket';

const { connectToDevTools } = require('react-devtools-core');
const config = { host: 'localhost', port: 8081 };
connectToDevTools(config);
//
import React, { createContext } from 'react';
import { ScrollView, StatusBar, View, Text } from 'react-native';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import { setCustomText, setCustomTextInput } from 'react-native-global-props';
import { NavigationContainer } from '@react-navigation/native';
//
// import { Provider } from 'react-redux';
// import { PersistGate } from 'redux-persist/es/integration/react';
// import { store } from './redux/store';
// import { persistor } from './redux/store';
//
import { _white, _black } from './utils/colors';
import AppNavigation from './navigation';
import { GlobalHooksProvider } from '@devhammed/use-global-hook';
import contextStores from './context';
import DiscoverNew from './screens/stack/DiscoverNew';
import Details from './screens/stack/Details';
import TicketDetails from './screens/stack/TicketDetails';
import PaymentSuccesful from './screens/stack/PaymentSuccesful';
import Payment from './screens/stack/Payment';

let customFonts = {
	'Eina01-Light': require('./assets/fonts/Eina01-Light.ttf'),
	'Eina01-Regular': require('./assets/fonts/Eina01-Regular.ttf'),
	'Eina01-Bold': require('./assets/fonts/Eina01-Bold.ttf'),
	'Eina01-SemiBold': require('./assets/fonts/Eina01-SemiBold.ttf'),
	'custom-icons': require('./assets/fonts/coolicons.ttf'),
};

export default class EntryPoint extends React.Component {
	constructor(props) {
		super(props);
		this._drawer = React.createRef();
		this.state = {
			fontLoaded: false,
			customTextProps: {
				style: {
					fontFamily: 'Eina01-Regular',
				},
			},
		};
	}

	async _loadFontsAsync() {
		await Font.loadAsync(customFonts);
		await setCustomText(this.state.customTextProps);
		await setCustomTextInput(this.state.customTextProps);
		this.setState({ fontLoaded: true });
	}

	componentDidMount() {
		this._loadFontsAsync();
		console.disableYellowBox = true;
	}

	render() {
		if (this.state.fontLoaded) {
			return (
				<NavigationContainer>
					{/*<GlobalHooksProvider hooks={[...contextStores]}>*/}
					<AppNavigation />
					{/*< />*/}
					{/*</GlobalHooksProvider>*/}
				</NavigationContainer>
			);
		} else {
			return <AppLoading />;
		}
	}
}
