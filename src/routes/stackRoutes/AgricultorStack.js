import { createStackNavigator } from "@react-navigation/stack";
import Agricultor from "../../pages/AreaDoAgricultorPages/AgricultorInicialPage/agricultorinicial";
import feedNoticias from "../../pages/NoticiasPages/FeedNoticias/feedNoticias";
import Capacitação from "../../pages/CapacitaçãoPages/Capacitação/capacitação";
import MinhasCulturas from "../../pages/AreaDoAgricultorPages/AgricultorCulturaPage/agricultorCultura";

const Stack = createStackNavigator();

export const AreaDoAgricultorStack = () => {

    return (
        <Stack.Navigator
        screenOptions={{
          headerShown: true
        }}>
          <Stack.Screen name="Inicial" component={Agricultor} />
          <Stack.Screen name="minhas culturas" component={MinhasCulturas} />
          <Stack.Screen name="Noticias" component={feedNoticias} />
          <Stack.Screen name="Capacitação" component={Capacitação} />
        </Stack.Navigator>
      );
    
}