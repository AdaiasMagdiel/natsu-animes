import React from 'react';

import { Container } from './styles';
import loading from '../../assets/images/loading.gif';

export default function Loading() {
	return (
		<Container>
			<img src={loading} alt="Loading" />
		</Container>
	);
}
