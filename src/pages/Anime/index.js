import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import { Container, EpisodeLink } from './styles';
import Loading from '../../components/Loading';

import api from '../../services/api';

export default function Anime() {
	const [anime, setAnime] = useState({});
	const { tipo, nome } = useParams();

	function makeArray(min, max) {
		let _array = [];
		for (let i = min; i <= max; i++) {
			_array.push(i);
		}
		return _array;
	}

	useEffect(() => {
		async function loadAnime() {
			const response = await api.get(`/${tipo}/${nome}`);
			setAnime(response.data);
			document.title = `Natsu | ${response.data.nome}`;
		}
		loadAnime();

		return function cleanup() {
			setAnime({});
			document.title = 'Natsu';
		};
	}, [nome, tipo]);

	return !anime.hasOwnProperty('nome') ? (
		<Loading />
	) : (
		<Container>
			<div className="primordial-informations">
				<div className="img-thumb">
					<img src={anime.imagem} alt={anime.nome} />
				</div>

				<div className="about">
					<div className="nome">
						<h1>{anime.nome}</h1>
					</div>

					<p className="header">Gêneros:</p>
					<div className="multi">
						{anime.generos.map(genero => (
							<p>{genero}</p>
						))}
					</div>

					<p className="header">Autores:</p>
					<div className="multi">
						{anime.infos.autor.map(autor => (
							<p>{autor}</p>
						))}
					</div>

					<p className="header">Diretores:</p>
					<div className="multi">
						{anime.infos.direcao.map(diretor => (
							<p>{diretor}</p>
						))}
					</div>

					<p className="header">Estúdios:</p>
					<div className="multi">
						{anime.infos.estudio.map(estudio => (
							<p>{estudio}</p>
						))}
					</div>

					<div className="infos">
						<p>Ano: {anime.infos.ano}</p>
						<p>Episódios: {anime.infos.episodios}</p>
						<p>Classificação: {anime.infos.classificacao}</p>
						<p>Tipo: {anime.infos.formato}</p>
					</div>

					<p className="sinopse">{anime.sinopse}</p>
				</div>
			</div>

			<div className="episodios">
				{makeArray(1, anime.infos.episodios).map(ep => (
					<EpisodeLink key={ep} to={`/episodio/${tipo}/${nome}/${ep}`}>
						Episódio {ep}
					</EpisodeLink>
				))}
			</div>
		</Container>
	);
}
