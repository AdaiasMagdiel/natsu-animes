import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import api from '../../services/api';
import Card from '../../components/Card';
import Loading from '../../components/Loading';

function Hoje() {
  const [resultados, setResultados] = useState([]);

  useEffect(() => {
    async function loadResultados() {
      let day = new Date();
      let x = ['domingo', 'segunda', 'terca', 'quarta', 'quinta', 'sexta', 'sabado'];

      let response = await api.get(`/semana/${x[day.getDay()]}`);
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

export default Hoje;
