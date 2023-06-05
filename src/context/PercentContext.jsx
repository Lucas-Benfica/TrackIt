import { createContext, useState } from "react";

export const PercentContext = createContext();

export const PercentProvider = ({children}) => {
    const [percent, setPercent] = useState(0);

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