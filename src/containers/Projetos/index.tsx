import Paragrafo from "../../components/Paragrafo";
import Projeto from "../../components/Projeto";
import Titulo from "../../components/Title";
import { Lista } from "./styles";

const Projetos = () => (
  <section>
    <Titulo fontSize={16}>Projetos</Titulo>
    <Paragrafo>
      Aqui estão alguns dos meus projetos mais recentes. Estou sempre trabalhando em novos desafios e aprendizados, então fique à vontade para conferir meu GitHub para ver mais do meu trabalho!
    </Paragrafo>
    <Lista>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>
      <li>
        <Projeto/>
      </li>

    </Lista>
  </section>
)

export default Projetos;
