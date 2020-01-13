import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled(Link)`
  background: url(${props => props.imagem});
  background-size: 100%;
  background-position: 50% 50%;
  background-repeat: no-repeat;
  display: flex;
  align-items: flex-end;
  justify-content: center;
  margin-top: 10px;
  width: ${props => props.width}px;
  height: ${props => props.height}px;

  p {
    background-color: rgba(11, 10, 13, 0.55);
    font-size: 13pt;
    text-align: center;
    padding: 15px;
    width: 100%;
  }

  @media (min-width: 600px) {
    margin-left: 10px;
  }

  @media (max-width: 599px) {
    width: 100%;
    height: ${props => props.height}px;
  }
`;
