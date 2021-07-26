import React from 'react';
import FeatherIcon from 'react-native-vector-icons/Feather';

import { Container, TitleBold, TitleRegular } from './styles';

const Header: React.FC = () => {
	return (
		<Container>
			<FeatherIcon name="shopping-cart" size={24} color="#1e90ff" />
			<TitleRegular>Market</TitleRegular>
			<TitleBold>Native</TitleBold>
		</Container>
	);
};

export default Header;
