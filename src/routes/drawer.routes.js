import { createDrawerNavigator } from '@react-navigation/drawer'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import FeedNoticias from '../pages/NoticiasPages/FeedNoticias/feedNoticias';
import Forum from '../pages/ForumPages/Forum/forum';
import { AreaDoAgricultorStack } from './stackRoutes/AgricultorStack';
import { faHome, faPerson, faMailBulk, faExclamation } from '@fortawesome/free-solid-svg-icons';
import { InicialStack } from './stackRoutes/home.stack';
const Drawer = createDrawerNavigator();

export default function DrawerRoutes() {
    return (
        <Drawer.Navigator screenOptions={{ title: '' }}>
            <Drawer.Screen
                name='inicial'
                component={InicialStack}
                options={{
                    drawerIcon: ({ size }) => <FontAwesomeIcon icon={faHome} size={size} />,
                    drawerLabel: 'Inicio',
                }}
            />
            <Drawer.Screen
                name='areadoagricultor'
                component={AreaDoAgricultorStack}
                options={{
                    drawerIcon: ({ size }) => <FontAwesomeIcon icon={faPerson} size={size} />,
                    drawerLabel: 'Área do Agricultor'
                }}
            />
            <Drawer.Screen
                name='noticias'
                component={FeedNoticias}
                options={{
                    drawerIcon: ({ size }) => <FontAwesomeIcon icon={faMailBulk} size={size} />,
                    drawerLabel: 'Noticias ABC+'
                }}
            />
            <Drawer.Screen
                name='forum'
                component={Forum}
                options={{
                    drawerIcon: ({ size }) => <FontAwesomeIcon icon={faExclamation} size={size} />,
                    drawerLabel: 'Fórum'
                }}
            />
        </Drawer.Navigator>
    )
}