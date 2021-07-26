import React from 'react';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import {
	Container,
	CartButton,
	CartButtonText,
	CartPricing,
	CartTotalPrice,
} from './styles';

const CartBar: React.FC = () => {
	const navigation = useNavigation();

	return (
		<Container>
			<CartButton onPress={() => navigation.navigate('Cart')}>
				<FeatherIcon name="shopping-cart" size={24} color="#fff" />
				<CartButtonText>5 itens</CartButtonText>
			</CartButton>

			<CartPricing>
				<CartTotalPrice>R$1299,99</CartTotalPrice>
			</CartPricing>
		</Container>
	);
};

export default CartBar;
