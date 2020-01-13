import React from 'react';

import { Container } from './styles';

function Card({ data, label, width, height, url = '/' }) {
  return (
    <Container
      to={`/${url}`}
      imagem={data.imagem}
      width={width}
      height={height}
      href='/'
    >
      <p>{label}</p>
    </Container>
  );
}

export default Card;
