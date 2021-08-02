import React, { useMemo } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';

import CartBar from '../../components/CartBar';

import { useCart } from '../../context/cart';

import formatPrice from '../../utils/formatPrice';

import {
	Container,
	ProductCard,
	ProductChangeQuantity,
	ProductContainer,
	ProductImage,
	ProductQuantityControl,
	ProductInfo,
	ProductQuantity,
	ProductSinglePrice,
	ProductTitle,
	ProductTotalPrice,
	ProductTotalPriceContainer,
	ProductsList,
} from './styles';

interface Product {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
	quantity: number;
}

const Cart: React.FC = () => {
	const { increment, decrement, products } = useCart();

	function handleIncrement(id: string): void {
		increment(id);
	}

	function handleDecrement(id: string): void {
		decrement(id);
	}

	return (
		<Container>
			<ProductContainer>
				<ProductsList
					data={products}
					keyExtractor={item => item.id}
					ListFooterComponent={<View />}
					ListFooterComponentStyle={{
						height: 80,
					}}
					renderItem={({ item }) => (
						<ProductCard>
							<ProductImage
								source={{
									uri: item.image,
								}}
							/>

							<ProductInfo>
								<ProductTitle>{item.title}</ProductTitle>
								<ProductSinglePrice>
									{formatPrice(item.price)}
								</ProductSinglePrice>

								<ProductTotalPriceContainer>
									<ProductQuantity>{item.quantity} x </ProductQuantity>
									<ProductTotalPrice>
										{formatPrice(item.price)}
									</ProductTotalPrice>
								</ProductTotalPriceContainer>
							</ProductInfo>

							<ProductQuantityControl>
								<ProductChangeQuantity onPress={() => handleIncrement(item.id)}>
									<FeatherIcon name="plus" size={20} color="#1e90ff" />
								</ProductChangeQuantity>

								<ProductChangeQuantity onPress={() => handleDecrement(item.id)}>
									<FeatherIcon name="minus" size={20} color="#1e90ff" />
								</ProductChangeQuantity>
							</ProductQuantityControl>
						</ProductCard>
					)}
				/>
			</ProductContainer>

			<CartBar />
		</Container>
	);
};

export default Cart;
