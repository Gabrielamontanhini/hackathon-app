import AsyncStorage from "@react-native-async-storage/async-storage"
import { createContext, useState } from "react";

 const UserContext = createContext()

  function UserProvider({ children }) {
const lsSessao = JSON.parse(AsyncStorage.getItem("sessao"))
    const [sessao, setSessao] = useState(lsSessao)
    return (
        <UserContext.Provider value={{ sessao, setSessao }}>
            {children}
        </UserContext.Provider>
    )
}