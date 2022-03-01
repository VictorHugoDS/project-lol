export default function Selecao({id}) {
  // console.log(id)
  return (
    <div className="selecaoSummoner">
        <div className="selecao">
        </div>
        <form >
          <input className="input-selecao" type="text" id={`summonerName${id}`} name="summonName" placeholder="Summoner name"/>
        </form>
    </div>
  )
}
