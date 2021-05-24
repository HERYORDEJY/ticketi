import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import TabNavigation from './tab';
import BuyTicket from '../screens/stack/BuyTicket';
import Details from '../screens/stack/Details';
import DiscoverNew from '../screens/stack/DiscoverNew';
import Payment from '../screens/stack/Payment';
import PaymentSuccessful from '../screens/stack/PaymentSuccesful';
import TicketDetails from '../screens/stack/TicketDetails';
import DiscoverPopular from '../screens/stack/DiscoverPopular';
// import { useGlobalHook } from '@devhammed/use-global-hook';

const Stack = createStackNavigator();

export default function StackNavigation(params) {
	// const { userAuth, _setUserAuth } = useGlobalHook('profileStore');
	// const { isLoggedIn } = userAuth;
	{
		/*Auth Stack here...*/
	}
	// if (!isLoggedIn) {
	// 	return (
	// 		<Stack.Navigator initialRouteName={'Welcome'}>
	// 			<Stack.Screen
	// 				name={'Welcome'}
	// 				component={Welcome}
	// 				options={{ headerShown: false }}
	// 			/>
	// 			<Stack.Screen
	// 				name={'Login'}
	// 				component={Login}
	// 				options={{ headerShown: false }}
	// 			/>
	// 			<Stack.Screen
	// 				name={'SignUp'}
	// 				component={SignUp}
	// 				options={{ headerShown: false }}
	// 			/>
	// 		</Stack.Navigator>
	// 	);
	// }
	return (
		<Stack.Navigator
			initialRouteName={'Welcome'}
			screenOptions={{ animationEnabled: false }}>
			<Stack.Screen
				name={'Home'}
				component={TabNavigation}
				options={{
					headerShown: false,
				}}
			/>
			<Stack.Screen
				name={'BuyTicket'}
				component={BuyTicket}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'Details'}
				component={Details}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'DiscoverNew'}
				component={DiscoverNew}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'DiscoverPopular'}
				component={DiscoverPopular}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'Payment'}
				component={Payment}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'PaymentSuccessful'}
				component={PaymentSuccessful}
				options={{ headerShown: false }}
			/>
			<Stack.Screen
				name={'TicketDetails'}
				component={TicketDetails}
				options={{ headerShown: false }}
			/>
		</Stack.Navigator>
	);
}
