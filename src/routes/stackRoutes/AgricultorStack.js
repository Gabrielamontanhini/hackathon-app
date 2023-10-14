import { createStackNavigator } from "@react-navigation/stack";
import Agricultor from "../../pages/AreaDoAgricultorPages/AgricultorInicialPage/agricultorinicial";
import Capacitação from "../../pages/CapacitaçãoPages/Capacitação/capacitação";
import MinhasCulturas from "../../pages/AreaDoAgricultorPages/AgricultorCulturaPage/agricultorCultura";
import Salvos from "../../pages/SalvosPages/Salvos/salvos";

const Stack = createStackNavigator();

export const AreaDoAgricultorStack = () => {

    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: true
        }}>
          <Stack.Screen name="Area do Agricultor" component={Agricultor} />
          <Stack.Screen name="minhas culturas" component={MinhasCulturas} />
          <Stack.Screen name="salvos" component={Salvos} />
          <Stack.Screen name="Capacitação" component={Capacitação} />
        </Stack.Navigator>
      );
    
}