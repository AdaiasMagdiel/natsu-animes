import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  padding: 30px;

  width: 100%;
  height: calc(100vh - 80px);

  h1,
  h2 {
    text-align: center;
  }

  h1 {
    font-size: 14pt;
  }
  h2 {
    font-size: 10pt;
    margin-top: 10px;
  }
`;
