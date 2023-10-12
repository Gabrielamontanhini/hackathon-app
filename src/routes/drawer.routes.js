import { createDrawerNavigator } from '@react-navigation/drawer'
import { Feather } from '@expo/vector-icons'
import { Octicons } from '@expo/vector-icons'; 
import { FontAwesome5 } from '@expo/vector-icons'; 
import { Entypo } from '@expo/vector-icons'; 
import Agricultor from '../pages/AgricultorPages/AgricultorInicialPage/Agricultor';
import FeedNoticias from '../pages/NoticiasPages/FeedNoticias/Noticia';
import Capacitação from '../pages/CapacitaçãoPages/Capacitação/Capacitação';
import Forum from '../pages/ForumPages/Forum';
import Inicial from '../pages/InicialPages/Inicial/Inicial';
import { AreaDoAgricultorStack } from './stackRoutes/AgricultorStack';

const Drawer = createDrawerNavigator();

export default function DrawerRoutes(){
    return (
        <Drawer.Navigator screenOptions={{title: ''}}>
            <Drawer.Screen 
            name='iniciotabroutes'
            component={Inicial}
            options={{
                drawerIcon: ({size}) => <Feather name='home' size={size}/>,
                drawerLabel: 'Inicio'
            }}
            />
             <Drawer.Screen 
            name='areadoagricultor'
            component={AreaDoAgricultorStack}
            options={{
                drawerIcon: ({size}) => <Feather name='user' size={size}/>,
                drawerLabel: 'Área do Agricultor'
            }}
            />
             <Drawer.Screen 
            name='noticias'
            component={FeedNoticias}
            options={{
                drawerIcon: ({size}) => <Entypo name='news' size={size}/>,
                drawerLabel: 'Noticias ABC+'
            }}
            />
             <Drawer.Screen 
            name='capacitação'
            component={Capacitação}
            options={{
                drawerIcon: ({size}) => <FontAwesome5 name='book-reader' size={size}/>,
                drawerLabel: 'Capacitação'
            }}
            />
            <Drawer.Screen 
            name='forum'
            component={Forum}
            options={{
                drawerIcon: ({size}) => <Octicons name='feed-discussion' size={size}/>,
                drawerLabel: 'Fórum'
            }}
            />
        </Drawer.Navigator>
    )
}