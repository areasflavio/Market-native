import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';

import Dashboard from '../pages/Dashboard';
import Cart from '../pages/Cart';

const AppNavigation = createStackNavigator();

const Routes: React.FC = () => {
	return (
		<NavigationContainer>
			<AppNavigation.Navigator
				screenOptions={{
					headerShown: true,
					cardStyle: { backgroundColor: '#EBEEF8' },
				}}
				initialRouteName="Dashboard"
			>
				<AppNavigation.Screen name="Dashboard" component={Dashboard} />
				<AppNavigation.Screen name="Cart" component={Cart} />
			</AppNavigation.Navigator>
		</NavigationContainer>
	);
};

export default Routes;
