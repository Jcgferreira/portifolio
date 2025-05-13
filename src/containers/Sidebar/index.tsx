import Avatar from '../../components/Avatar'
import Paragrafo from '../../components/Paragrafo'
import Titulo from '../../components/Title'
import { BotaoTema, Descricao, SidebarContainer } from './styles'

type Props = {
  trocaTema: () => void;
}

const Sidebar = (props: Props) => {
  return (
    <aside>
      <SidebarContainer>
        <Avatar />
        <Titulo fontSize={20}>Jose Ferreira</Titulo>
        <Paragrafo tipo="secundario" fontSize={16}>
          Jcgferreira
        </Paragrafo>
        <Descricao tipo="principal" fontSize={12}>
          Desenvolvedor Frontend
        </Descricao>
        <BotaoTema onClick={props.trocaTema}>Trocar tema</BotaoTema>
      </SidebarContainer>
    </aside>
  )
}

export default Sidebar
