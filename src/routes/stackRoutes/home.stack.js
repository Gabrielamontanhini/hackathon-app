import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "../../pages/Inicial/inicial";
import { Cadastro } from "../../pages/Cadastro/loggin/cadastro";
import { LoginPage } from "../../pages/Cadastro/loggin/login";

const Stack = createStackNavigator()

export const InicialStack = ()=>{
 return (
    <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicial}/>
        <Stack.Screen name="cadastro" component={Cadastro}/>
        <Stack.Screen name="login" component={LoginPage}/>
    </Stack.Navigator>
 )
}