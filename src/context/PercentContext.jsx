import { createContext, useState } from "react";

export const PercentContext = createContext();

export const PercentProvider = ({children}) => {
    const inicial = 0;

    const [percent, setPercent] = useState(inicial);

    function calcPorcentagem(numTotal, numConcluidos){
        let porcentagem = (numConcluidos/numTotal) * 100;
        porcentagem = Math.ceil(porcentagem);
        setPercent(porcentagem);
    }

    return (
        <PercentContext.Provider value={{percent, calcPorcentagem}}>
            {children}
        </PercentContext.Provider>
    )
}