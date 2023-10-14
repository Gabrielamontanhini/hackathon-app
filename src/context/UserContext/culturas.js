import { createContext } from "react";

const CulturaContext = createContext()

export const CulturarProvider = ({children}) => {
    
    
    return (
        <CulturaContext.Provider value={{}}>
            {children}
        </CulturaContext.Provider>
    )
}  