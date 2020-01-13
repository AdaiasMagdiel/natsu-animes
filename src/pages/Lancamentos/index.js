import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import api from '../../services/api';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

function Lancamentos() {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function loadResultados() {
      let response = await api.get('/lancamentos');
      setResultados(response.data);
    }
    loadResultados();

    return function cleanup() {
      setResultados([]);
    };
  }, []);

  return (
    <Container>
      {resultados.length > 0 ? (
        resultados.map(resultado => (
          <Card
            key={resultado.slug}
            data={resultado}
            width={280}
            height={400}
            label={resultado.nome}
            url={resultado.slug}
          />
        ))
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default Lancamentos;
