import Titulo from '../../components/Title'
import Paragrafo from '../../components/Paragrafo'
import { Githubstats } from './styles'

const Sobre = () => (
  <section>
    <Titulo fontSize={16}>Sobre</Titulo>
    <Paragrafo tipo="principal">
      Olá, meu nome é Jose Ferreira, sou desenvolvedor Frontend e estou sempre
      em busca de novos desafios e aprendizados. Estou animado para compartilhar
      meus projetos e experiências com você!
    </Paragrafo>
    <Githubstats>
      <img src="https://github-readme-stats.vercel.app/api?username=jcgferreira&show_icons=true&theme=dracula&include_all_commits=true&count_private=true" alt='github-status'/>
    <img src="https://github-readme-stats.vercel.app/api/top-langs/?username=jcgferreira&layout=compact&langs_count=7&theme=dracula" alt='linguagens'/>
    </Githubstats>
  </section>
)

export default Sobre
