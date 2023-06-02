import { createContext, useState } from "react";

export const TokenContext = createContext();

export const TokenProvider = ({children}) => {
    const [token, setToken] = useState('');

    const [img, setImg] = useState('');
    
    return (
        <TokenContext.Provider value={{token, setToken, img, setImg}}>
            {children}
        </TokenContext.Provider>
    )
}