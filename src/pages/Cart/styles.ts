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
	numColumns: 1,
})`
	flex: 1;
`;

export const ProductCard = styled.View`
	flex: 1;
	flex-direction: row;

	padding: 16px 16px;
	margin: 8px;
	border-radius: 4px;

	background: #fff;
`;

export const ProductImage = styled.Image`
	align-self: center;
	height: 100%;
	width: 64px;
`;

export const ProductInfo = styled.View`
	flex: 1;
	margin: 0 16px;
`;

export const ProductTitle = styled.Text.attrs({
	numberOfLines: 2,
	ellipsizeMode: 'tail',
})`
	font-size: 16px;
`;

export const ProductSinglePrice = styled.Text`
	color: #778fa7;
	font-size: 12px;

	margin-top: 8px;
`;

export const ProductTotalPriceContainer = styled.View`
	flex-direction: row;
	align-items: center;

	margin-top: auto;
`;

export const ProductQuantity = styled.Text`
	font-weight: bold;
	margin-top: 5px;

	font-size: 16px;
	color: #1e90ff;
`;

export const ProductTotalPrice = styled.Text`
	font-size: 24px;
	font-weight: bold;

	color: #1e90ff;
`;

export const ProductQuantityControl = styled.View`
	align-self: flex-end;
	align-items: center;
	justify-content: space-between;

	margin-left: auto;
`;

export const ProductChangeQuantity = styled.TouchableOpacity.attrs({
	activeOpacity: 0.6,
})`
	background: rgba(30, 144, 255, 0.25);

	border-radius: 5px;
	padding: 12px;
	margin-bottom: 5px;
`;
