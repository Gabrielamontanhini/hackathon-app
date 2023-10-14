import { NavigationContainer } from '@react-navigation/native'
import DrawerRoutes from './drawer.routes'
import { UserProvider } from '../context/UserContext/usercontext'

//chamar o user provider para que todas as rotas tenham acesso ao token

export default function Routes() {
    return (
        <NavigationContainer>
            <UserProvider>
                <DrawerRoutes />
            </UserProvider>
        </NavigationContainer>
    )
}