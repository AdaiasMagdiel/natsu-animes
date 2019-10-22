import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 30px;
  width: 80%;
  margin-left: 10%;

  div.primordial-informations {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  div.img-thumb {
    background-color: var(--header-color);
    border-radius: 10px;
    width: 30%;
    height: 100%;

    img {
      border-radius: 10px;
      width: 100%;
      height: 100%;
    }
  }

  div.about {
    background-color: var(--header-color);
    border-radius: 10px;
    margin-left: 10px;
    width: 70%;
    height: 100%;

    div.nome {
      padding: 20px;
      border-bottom: var(--border);

      h1 {
        text-align: center;
        font-size: 14pt;
      }
    }

    p.header {
      color: #7159c1;
      font-weight: bold;
      margin-top: 10px;
      padding: 0 20px;
      font-size: 12pt;
    }

    div.multi {
      display: flex;
      align-items: center;
      justify-content: flex-start;
      flex-wrap: wrap;
      padding: 10px;

      p {
        margin-left: 40px;
        margin-top: 10px;
      }
    }

    div.infos {
      display: flex;
      justify-content: center;
      flex-direction: column;
      padding: 0 10px;

      p {
        margin-top: 10px;
      }
    }

    p.sinopse {
      border-top: var(--border);
      text-align: justify;
      padding: 20px;
      margin-top: 20px;
    }
  }

  div.episodios {
    background-color: var(--header-color);
    border-radius: 10px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin-left: 10px;
    margin-top: 10px;
    width: 100%;
  }

  @media screen and (max-width: 600px) {
    padding: 10px;
    margin: 0;
    width: 100%;

    div.img-thumb {
      width: 280px;
      height: 400px;
      margin: 10px 0;
    }

    div.about {
      width: 100%;
      margin: 0;
    }

    div.episodios {
      flex-direction: column;
      width: 100%;
    }

    div.primordial-informations {
      flex-direction: column;
    }
  }
`;

export const EpisodeLink = styled(Link)`
  font-weight: bold;
  padding: 16px;
`;
