import {AsyncStorage} from "@react-native-async-storage/async-storage"
import React, { createContext, useState } from "react";
import { signin } from "../../services/api";

export const UserContext = createContext()

export function UserProvider({ children }) {
    const isLoged = async () => {
        const lsSessao = (JSON.parse(AsyncStorage.getItem("sessao")))
        if (lsSessao) {
            return true
        } else {
            return false
        }
    }
    const login = async (email, senha) => {
        const token = signin({email, password:senha});
        token ? JSON.stringify(AsyncStorage.setItem("sessao")) :"";
    }

    const cadastro = (name,nickname,email,senha) => {
    }

    return (
        <UserContext.Provider value={{ login,isLoged }}>
            {children}
        </UserContext.Provider>
    )
}