import { useCallback, useState } from "react";

export const SummonerContext = useCallback();

const SummonerProvider = ({children}) =>{
    const [summoner,setSummoner]= useState({});

    const NewSummoner = (summon) => {
        const newSummon = {
            id = summon?.id,
            nome = summon?.name
        };
        setSummoner(...summoner,newSummon);
    };

    const GetSummoners = () => summoner;

    return (
        <SummonerContext.provider value={{NewSummoner,GetSummoners}}>
            {children}
        </SummonerContext.provider>
    )

}

export default SummonerProvider;