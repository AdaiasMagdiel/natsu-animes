import React, { useState, useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';

import ReactPlayer from 'react-player';
import Loading from '../../components/Loading';

import api from '../../services/api';

import { Container, EpisodeLink, Cover } from './styles';

function Video() {
  const [anime, setAnime] = useState({});
  const [video, setVideo] = useState({});
  const { tipo, nome, episodio } = useParams();

  function makeArray(min, max) {
    let _array = [];
    for (let i = min; i <= max; i++) {
      _array.push(i);
    }
    return _array;
  }

  function listEpisodes(data) {
    let _episodios = '';
    if (data.episodio === 1 || data.episodio === 2) {
      _episodios = makeArray(1, data.episodios).map(ep => (
        <EpisodeLink
          key={ep}
          to={`/episodio/${tipo}/${nome}/${ep}`}
          mark={ep === data.episodio ? true : false}
        >
          Episódio {ep}
        </EpisodeLink>
      ));
    } else if (data.episodio >= 3 && data.episodio <= data.episodios - 2) {
      _episodios = makeArray(data.episodio - 2, data.episodio + 2).map(ep => (
        <EpisodeLink
          key={ep}
          to={`/episodio/${tipo}/${nome}/${ep}`}
          mark={ep === data.episodio ? true : false}
        >
          Episódio {ep}
        </EpisodeLink>
      ));
    } else if (data.episodio === data.episodios - 1) {
      if (data.episodio < 5) {
        _episodios = makeArray(1, data.episodio).map(ep => (
          <EpisodeLink
            key={ep}
            to={`/episodio/${tipo}/${nome}/${ep}`}
            mark={ep === data.episodio ? true : false}
          >
            Episódio {ep}
          </EpisodeLink>
        ));
      } else {
        _episodios = makeArray(data.episodios - 4, data.episodios).map(ep => (
          <EpisodeLink
            key={ep}
            to={`/episodio/${tipo}/${nome}/${ep}`}
            mark={ep === data.episodio ? true : false}
          >
            Episódio {ep}
          </EpisodeLink>
        ));
      }
    } else if (data.episodio === data.episodios) {
      if (data.episodio < 5) {
        _episodios = makeArray(1, data.episodio).map(ep => (
          <EpisodeLink
            key={ep}
            to={`/episodio/${tipo}/${nome}/${ep}`}
            mark={ep === data.episodio ? true : false}
          >
            Episódio {ep}
          </EpisodeLink>
        ));
      } else {
        _episodios = makeArray(data.episodios - 4, data.episodios).map(ep => (
          <EpisodeLink
            key={ep}
            to={`/episodio/${tipo}/${nome}/${ep}`}
            mark={ep === data.episodio ? true : false}
          >
            Episódio {ep}
          </EpisodeLink>
        ));
      }
    }
    return _episodios;
  }

  useEffect(() => {
    async function loadAnime() {
      let response = await api.get(`/${tipo}/${nome}`);
      setAnime(response.data);
      document.title = `Natsu | Assistir ${response.data.nome}`;
    }
    loadAnime();

    async function loadVideo() {
      let response = await api.get(`/episodio/${tipo}/${nome}/${episodio}`);
      setVideo(response.data);
    }
    loadVideo();

    return function cleanup() {
      document.title = 'Natsu';
    };
  }, [episodio, nome, tipo]);

  return video.episodio > 0 ? (
    <Container>
      <div className="player">
        <ReactPlayer url={video.video_url} playing={false} controls width="100%" height="100%" />
      </div>

      <div className="episodios">
        <div className="anime">
          <Cover to={`/${tipo}/${nome}`} image={anime.imagem} />
          <Link to={`/${tipo}/${nome}`}>{anime.nome}</Link>
        </div>
        {listEpisodes(video)}
      </div>
    </Container>
  ) : (
    <Loading />
  );
}

export default Video;
