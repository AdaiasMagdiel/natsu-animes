import React, { useState, useEffect } from 'react';
import { Container } from './styles';

import Card from '../../components/Card';
import Loading from '../../components/Loading';

import api from '../../services/api';

function Main() {
  const [episodios, setEpisodios] = useState([]);

  useEffect(() => {
    async function loadEpisodios() {
      let response = await api.get('/ultimos-episodios');
      setEpisodios(response.data);
    }
    loadEpisodios();

    return function cleanup() {
      setEpisodios([]);
    };
  }, []);

  return (
    <Container>
      {episodios.length > 0 ? (
        episodios.map(episodio => (
          <Card
            key={`${episodio.slug}/${episodio.episodio}`}
            data={episodio}
            width={320}
            height={240}
            label={`${episodio.nome} | ${episodio.episodio}`}
            url={`episodio/${episodio.slug}/${episodio.episodio}`}
          />
        ))
      ) : (
        <Loading />
      )}
    </Container>
  );
}

export default Main;
