import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 5px;
  width: 100%;
  padding: 10px;

  div.player {
    background-color: var(--header-color);
    border-radius: 10px;
    width: 80%;
  }

  div.episodios {
    background-color: var(--header-color);
    border-radius: 10px;
    display: flex;
    flex-direction: column;
    margin-left: 10px;
    width: 20%;

    div.anime {
      display: flex;
      align-items: center;
      padding: 30px 18px;
      border-bottom: var(--border);

      a {
        font-weight: bold;
        text-align: center;
        margin-left: 14px;
      }
    }
  }

  @media (max-width: 599px) {
    flex-direction: column;
    div.player {
      width: 100%;
    }
    div.episodios {
      width: 100%;
      margin: 0;
      margin-top: 20px;
    }
  }
`;

export const EpisodeLink = styled(Link)`
  color: ${props => (props.mark ? '#7159c1' : '#fff')};
  font-weight: bold;
  padding: 16px;
`;

export const Cover = styled(Link)`
  background-color: #ffffff0d;
  background-image: url(${props => props.image});
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  margin: 0;
  width: 70px;
  height: 100px;
`;
