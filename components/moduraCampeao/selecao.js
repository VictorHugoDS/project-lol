export default function Selecao({id}) {

  const saveName = (evento) => {
    console.log(evento)
  }

  return (
    <div className="selecaoSummoner">
        <div className="selecao">
        </div>
        <form >
          <input className="input-selecao" type="text" id={`summonerName${id}`} name="summonName" placeholder="Summoner name" onBlur={saveName}/>
        </form>
    </div>
  )
}
