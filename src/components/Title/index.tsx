import { Titulo as TituloStyled } from './style'

export type Props = {
  children: string
  fontSize?: number
}

const Titulo = (props: Props) => <TituloStyled fontSize={props.fontSize}>{props.children}</TituloStyled>

export default Titulo
