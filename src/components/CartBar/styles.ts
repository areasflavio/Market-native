import styled from 'styled-components/native';

export const Container = styled.View`
	position: absolute;
	bottom: 0px;

	flex-direction: row;
	justify-content: space-between;
	align-items: center;

	padding: 0 20px;

	background: #1e90ff;
`;

export const CartPricing = styled.Text`
	padding: 20px;
`;

export const CartTotalPrice = styled.Text`
	font-size: 16px;
	color: #fff;
	font-weight: bold;
`;

export const CartButton = styled.TouchableOpacity`
	flex-direction: row;
	background: #1e90ff;

	flex: 1;
	padding: 20px 20px;
	justify-content: space-between;
	align-items: center;
`;

export const CartButtonText = styled.Text`
	font-weight: bold;
	color: #fff;
	margin-left: 15px;
	flex: 1;
	margin-right: auto;
`;
