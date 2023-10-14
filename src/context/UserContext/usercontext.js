import AsyncStorage from "@react-native-async-storage/async-storage";
import React, { createContext, useState } from "react";

const UserContext = createContext();

function UserProvider({ children }) {
  //ESSA FUNÇÃO DEVE SER CHAMADA COMO FILHA DE NAVIGATION CONTAINER E DEVE ENGLOBAR ROUTES
  const lsSessao = JSON.parse(AsyncStorage.getItem("sessao")); //PEGA O TOKEN NO STORAGE
  const [sessao, setSessao] = useState(lsSessao); //USA O TOKEN
  return (
    <UserContext.Provider value={{ sessao, setSessao }}>
      {children}
    </UserContext.Provider>
  );
}
