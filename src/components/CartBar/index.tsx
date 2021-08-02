import React, { useMemo } from 'react';
import { useNavigation } from '@react-navigation/native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { useCart } from '../../context/cart';

import formatPrice from '../../utils/formatPrice';

import {
	Container,
	CartButton,
	CartButtonText,
	CartPricing,
	CartTotalPrice,
} from './styles';

const CartBar: React.FC = () => {
	const { products } = useCart();

	const navigation = useNavigation();

	const cartTotal = useMemo(() => {
		// TODO RETURN THE SUM OF THE PRICE FROM ALL ITEMS IN THE CART
		const totalValue = products.reduce((total, product) => {
			return total + product.price * product.quantity;
		}, 0);

		return formatPrice(totalValue);
	}, [products]);

	const totalItensInCart = useMemo(() => {
		// TODO RETURN THE SUM OF THE QUANTITY OF THE PRODUCTS IN THE CART

		return products.length;
	}, [products]);

	return (
		<Container>
			<CartButton onPress={() => navigation.navigate('Cart')}>
				<FeatherIcon name="shopping-cart" size={24} color="#fff" />
				<CartButtonText>{`${totalItensInCart} itens`}</CartButtonText>
			</CartButton>

			<CartPricing>
				<CartTotalPrice>{cartTotal}</CartTotalPrice>
			</CartPricing>
		</Container>
	);
};

export default CartBar;
