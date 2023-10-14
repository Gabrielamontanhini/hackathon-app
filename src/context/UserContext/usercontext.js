import {AsyncStorage} from "@react-native-async-storage/async-storage"
import React, { createContext, useState } from "react";
import api from "../../services/api";

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
    const login = async (email, password) => {
        function failure(err){
            alert(err)
        }
        function success(data){
         JSON.stringify(AsyncStorage.setItem("sessao",data.token));
        }
        api.signin({email,password},success,failure)
    }

    const cadastro = (name,nickname,email,senha) => {
        function failure(err){
            alert(err)
        }
        function success(data){
            alert("sucesso")
            console.log("sucesso")
        }
        api.signin({name,nickname,email,senha},success,failure)
    }

    return (
        <UserContext.Provider value={{ login,isLoged }}>
            {children}
        </UserContext.Provider>
    )
}
