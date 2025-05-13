import styled from "styled-components";

export const Card = styled.div`
  border: 1px solid ${(props) => props.theme.corDaBorda};
  padding: 16px;
`

export const LinkButton =styled.a`
  color: ${(props) => props.theme.corFundo};
  font-size: 12px;
  background-color: ${(props) => props.theme.corFundoBotao};
  text-decoration: none;
  padding: 8px;
  display: inline-block;
  margin-top: 24px;
`
