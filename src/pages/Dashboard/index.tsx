import React from 'react';
import CartBar from '../../components/CartBar';

import { Container } from './styles';

const Dashboard: React.FC = () => {
	return (
		<Container>
			<CartBar />
		</Container>
	);
};

export default Dashboard;
