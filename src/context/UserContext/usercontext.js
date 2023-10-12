import { createContext, useState } from "react";

export const UserContext = createContext()

export default function UserProvider({ children }) {
const lsSessao = JSON.parse(localStorage.getItem("sessao"))
    const [sessao, setSessao] = useState(lsSessao)
    return (
        <UserContext.Provider value={{ sessao, setSessao }}>
            {children}
        </UserContext.Provider>
    )
}