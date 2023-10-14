import { createStackNavigator } from "@react-navigation/stack";
import Inicial from "../../pages/Inicial/inicial";
import { Cadastro } from "../../pages/Cadastro/loggin/cadastro";

const Stack = createStackNavigator()

export const InicialStack = ()=>{
 return (
    <Stack.Navigator>
        <Stack.Screen name="Inicio" component={Inicial}/>
        <Stack.Screen name="cadastro" component={Cadastro}/>
    </Stack.Navigator>
 )
}