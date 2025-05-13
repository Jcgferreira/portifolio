import Paragrafo from "../Paragrafo"
import Titulo from "../Title"
import { Card, LinkButton } from "./styles"

const Projeto = () => {
  return (
    <Card>
      <Titulo>Projeto lista de tarefas</Titulo>
      <Paragrafo tipo="secundario">Lista de tarefas feita com VueJS</Paragrafo>
      <LinkButton>Vizualizar</LinkButton>
    </Card>
  )
}

export default Projeto
