import React, { useEffect, useState } from 'react';
import { View } from 'react-native';
import axios from 'axios';
import FeatherIcon from 'react-native-vector-icons/Feather';

import CartBar from '../../components/CartBar';

import formatPrice from '../../utils/formatPrice';

import {
	Container,
	ProductContainer,
	ProductCard,
	ProductImage,
	ProductPrice,
	ProductPriceText,
	ProductPriceButton,
	ProductTitle,
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

const Dashboard: React.FC = () => {
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
							<ProductTitle>{item.title}</ProductTitle>

							<ProductPrice>
								<ProductPriceText>{formatPrice(item.price)}</ProductPriceText>
								<ProductPriceButton>
									<FeatherIcon name="plus" size={20} color="#8F8F8F" />
								</ProductPriceButton>
							</ProductPrice>
						</ProductCard>
					)}
				/>
			</ProductContainer>
			<CartBar />
		</Container>
	);
};

export default Dashboard;
