import { DivCard, DivImg, NomePessoa, Descricao, PhotoAPI} from './style';


export default function Card(props) {

  return <DivCard animation={props.animation}>
    <DivImg>
      <PhotoAPI src={props.photo} alt="foto" />
    </DivImg>
    <NomePessoa>{props.name}</NomePessoa>
    <Descricao>{props.age} Anos <br /> {props.bio}</Descricao>
  </DivCard>
}
