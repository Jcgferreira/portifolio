import styled from "styled-components";

export const FotoPerfil = styled.img`
  width: 128px;
  height: 128px;
  border-radius: 100%;
  margin-bottom: 24px;
  border: 2px solid ${({ theme }) => theme.corDaBorda};
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  @media (max-width: 768px) {
    padding: 0;
  }
`
