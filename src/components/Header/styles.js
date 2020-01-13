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

  width: 100%;
  height: 80px;

  position: absolute;
  top: 0;
  right: 0;

  form {
    flex: 1;
  }

  form input::-webkit-input-placeholder,
  form input::-moz-placeholder,
  form input::placeholder {
    color: #fff;
    font-size: 12pt;
    opacity: 1;
  }

  form input {
    background-color: var(--header-color);
    border: none;
    color: #fff;
    font-size: 12pt;
    text-align: center;
    width: 100%;
    height: 50px;
  }

  svg {
    position: relative;
    right: 15%;
  }

  @media screen and (max-width: 600) {
    svg {
      position: relative;
      right: 20px;
    }
  }
`;
