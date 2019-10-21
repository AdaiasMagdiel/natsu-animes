import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  background-color: var(--header-color);
  padding: 0 30px;
  width: 100%;
  height: 80px;

  div.brand {
    display: flex;
    align-items: center;
    justify-content: center;
  }
  div.brand a {
    font-size: 16pt;
    font-weight: bold;
    margin-left: 5px;
  }

  div#panthom {
    width: 30%;
  }

  svg {
    cursor: pointer;
  }
`;

export const Menu = styled.div`
  display: ${props => (props.visibility === 'true' ? 'flex' : 'none')};
  flex-direction: column;
  justify-content: center;

  background-color: var(--header-color);

  position: absolute;
  top: 85px;
  right: 15px;

  padding: 10px 20px;

  div.link {
    display: flex;
    align-items: center;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  div.link a {
    font-size: 12pt;
    margin-left: 5px;
  }
`;

export const Search = styled.div`
  display: ${props => (props.visibility === 'true' ? 'flex' : 'none')};
  align-items: center;
  justify-content: center;

  background-color: var(--header-color);

  width: 60%;

  position: absolute;
  top: 90px;
  right: 20%;
  left: 20%;

  input::-webkit-input-placeholder,
  input::-moz-placeholder,
  input::placeholder {
    color: #fff;
    font-size: 12pt;
    opacity: 1;
  }

  input {
    background-color: var(--header-color);
    border: none;
    color: #fff;
    font-size: 12pt;
    text-align: center;
    width: 100%;
    height: 50px;
  }

  @media screen and (max-width: 559px) {
    width: 80%;
    right: 10%;
    left: 10%;
  }
`;
