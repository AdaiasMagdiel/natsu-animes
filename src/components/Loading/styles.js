import styled from 'styled-components';

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;

	padding: 30px;

	width: 100%;
	height: calc(100vh - 80px);

	img {
		width: 100px;
		height: 100px;
	}
`;
