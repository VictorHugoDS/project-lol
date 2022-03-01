import Selecao from "../moduraCampeao/selecao"

export default function Moldura({id}) {

    const n = 5;
    
    return ([...Array(n)].map((e, i) => <Selecao key={i} id={i}/>))

  }
  