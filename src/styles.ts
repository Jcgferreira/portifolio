import styled, { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;

    box-sizing: border-box;
    font-family: "Inter", sans-serif;
    list-style: none;

    @media (max-width: 768px) {
      padding-top: 16px;
    }
  }

  body {
    background-color: ${({ theme }) => theme.corFundo};
    color: #333;
    padding-top: 80px;
    padding-bottom: 80px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

  h1, h2, h3, h4, h5, h6 {
    margin-bottom: 16px;
  }

  p {
    margin-bottom: 16px;
  }
`;

export default GlobalStyle;

export const Container = styled.div`
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  padding: 30px;
  max-width: 1024px;
  width: 100%;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 128px auto;
  column-gap: 16px;

  @media (max-width: 768px) {
    max-width: 80%;
    display: block;
  }
`
