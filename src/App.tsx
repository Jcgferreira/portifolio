import { ThemeProvider } from 'styled-components'

import Projetos from './containers/Projetos'
import Sidebar from './containers/Sidebar'
import Sobre from './containers/Sobre'
import StyleGlobal, { Container } from './styles'
import temaLight from './themes/light'
import temaDark from './themes/dark'
import { useState } from 'react'

function App() {
  const [themeDark, setThemeDark] = useState(false)

  function trocaTema() {
    setThemeDark(!themeDark)
  }

  return (
    <ThemeProvider theme={themeDark ? temaDark : temaLight}>
      <StyleGlobal />
      <Container>
        <Sidebar trocaTema={trocaTema}/>
        <main>
          <Sobre />
          <Projetos />
        </main>
      </Container>
    </ThemeProvider>
  )
}

export default App
