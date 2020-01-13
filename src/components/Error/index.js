import React from 'react';

import { Container } from './styles';

export default function Error({ msg, info }) {
  return (
    <Container>
      <h1>{msg}</h1>
      {info && <h2>{info}</h2>}
    </Container>
  );
}
