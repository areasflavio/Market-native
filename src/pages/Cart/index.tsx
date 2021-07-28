import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import FeatherIcon from 'react-native-vector-icons/Feather';
import axios from 'axios';

import CartBar from '../../components/CartBar';

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
}
const Cart: React.FC = () => {
	const [products, setProducts] = useState<Product[]>([]);

	useEffect(() => {
		async function loadProducts(): Promise<void> {
			const response = await axios.get('https://fakestoreapi.com/products');

			setProducts(response.data);
		}

		loadProducts();
	}, []);

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
									<ProductQuantity>3 x </ProductQuantity>
									<ProductTotalPrice>
										{formatPrice(item.price)}
									</ProductTotalPrice>
								</ProductTotalPriceContainer>
							</ProductInfo>

							<ProductQuantityControl>
								<ProductChangeQuantity>
									<FeatherIcon name="plus" size={20} color="#1e90ff" />
								</ProductChangeQuantity>

								<ProductChangeQuantity>
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
