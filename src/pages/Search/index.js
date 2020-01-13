import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Container } from './styles';

import api from '../../services/api';
import Card from '../../components/Card';
import Error from '../../components/Error';
import Loading from '../../components/Loading';

function Search() {
  const [code, setCode] = useState(200);
  const [resultados, setResultados] = useState([]);
  const { query } = useParams();

  useEffect(() => {
    async function loadResultados() {
      try {
        let response = await api.get(`/busca-np/${query}`);
        setCode(200);
        setResultados(response.data.animes);
      } catch (e) {
        setCode(400);
      }
    }
    loadResultados();

    return function cleanup() {
      setResultados([]);
    };
  }, [query]);

  return (
    <Container>
      {code === 200 ? (
        resultados.length > 0 ? (
          resultados.map(resultado => (
            <Card
              key={`${resultado.slug}`}
              data={resultado}
              width={280}
              height={400}
              label={`${resultado.nome}`}
              url={`${resultado.slug}`}
            />
          ))
        ) : (
          <Loading />
        )
      ) : (
        <Error
          msg="Ocorreu um erro na sua pesquisa!"
          info={`Nenhum resutado para "${query}", tente novamente com outro termo.`}
        />
      )}
    </Container>
  );
}

export default Search;
