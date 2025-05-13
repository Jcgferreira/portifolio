// Extende o DefaultTheme para incluir corPrincipal e corSecundaria
declare module 'styled-components' {
  export interface DefaultTheme {
    corPrincipal: string;
    corSecundaria: string;
    corFundo: string,
    corFundoBotao: string,
    corBotao2: string,
    corDaBorda: string
  }
}

const temaLight = {
  corPrincipal: '#282a35',
  corSecundaria: '#949494',
  corFundo: '#fff',
  corFundoBotao: '#4476bf',
  corBotao2: '#eee',
  corDaBorda: '#c1c1c1'
}

export default temaLight;
