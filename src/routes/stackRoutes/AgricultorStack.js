import { createStackNavigator } from "@react-navigation/stack";
import Agricultor from "../../pages/AgricultorPages/AgricultorInicialPage/Agricultor";
import { Notice } from "../../components/NoticeComponent/Notice";
import Capacitação from "../../pages/CapacitaçãoPages/Capacitação/Capacitação";
import MinhasCulturas from "../../pages/AgricultorPages/MinhasCulturasPage/MinhasCulturas";

const Stack = createStackNavigator();

export const AreaDoAgricultorStack = () => {

    return (
        <Stack.Navigator>
          <Stack.Screen name="Inicial" component={Agricultor} />
          <Stack.Screen name="minhas culturas" component={MinhasCulturas} />
          <Stack.Screen name="Noticias" component={Notice} />
          <Stack.Screen name="Capacitação" component={Capacitação} />
        </Stack.Navigator>
      );
    
}