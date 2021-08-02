import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import FeatherIcon from 'react-native-vector-icons/Feather';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

import Header from '../components/Header';

const AppNavigation = createStackNavigator();

const Routes: React.FC = () => {
	return (
		<AppNavigation.Navigator
			screenOptions={{
				headerShown: true,
				cardStyle: { backgroundColor: '#EFF7FF' },
				headerTitleAlign: 'center',
			}}
			initialRouteName="Dashboard"
		>
			<AppNavigation.Screen
				options={{
					headerShown: true,
					headerTransparent: true,
					headerTitle: () => <Header />,
				}}
				name="Dashboard"
				component={Dashboard}
			/>
			<AppNavigation.Screen
				options={{
					headerTransparent: true,
					headerTitle: () => <Header />,
					headerBackTitleVisible: false,
					headerLeftContainerStyle: {
						marginLeft: 20,
					},
					headerBackImage: () => (
						<FeatherIcon name="chevron-left" size={24} color="#1e90ff" />
					),
				}}
				name="Cart"
				component={Cart}
			/>
		</AppNavigation.Navigator>
	);
};

export default Routes;
