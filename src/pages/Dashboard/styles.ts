import styled from 'styled-components/native';
import { FlatList } from 'react-native';

interface Product {
	id: string;
	title: string;
	price: number;
	description: string;
	category: string;
	image: string;
}

export const Container = styled.SafeAreaView`
	flex: 1;
	align-items: center;
`;

export const ProductContainer = styled.View`
	flex: 1;
	flex-direction: row;

	margin-top: 60px;
	border-radius: 5px;
`;

export const ProductsList = styled(
	FlatList as new () => FlatList<Product>
).attrs({
	numColumns: 2,
})`
	flex: 1;
	padding: 0 10px;
`;
export const ProductCard = styled.View`
	flex: 1;

	padding: 16px 16px;
	margin: 8px;
	border-radius: 4px;

	background: #fff;
`;

export const ProductImage = styled.Image`
	align-self: center;
	height: 122px;
	width: 122px;
`;

export const ProductTitle = styled.Text`
	font-size: 14px;
	margin-top: 10px;
`;

export const ProductPrice = styled.View`
	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding-top: 10px;
	margin-top: auto;
`;

export const ProductPriceText = styled.Text`
	font-weight: bold;
	font-size: 16px;
	color: #1e90ff;
`;

export const ProductPriceButton = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})``;
