import { createNativeStackNavigator } from '@react-navigation/native-stack'
import Welcome from '../pages/Welcome';
import Signin from "../../page/Signin/";
import Cadastro from '../../screens/Cadastro';
import Registration from '../../screens/Cadastro/Registration';
import Home from '../../page/Signin/Home';

const Stack = createNativeStackNavigator();

export default function Routes() {
    return (
        <Stack.Navigator> 
            
            <Stack.Screen
                name="Welcome" component={Welcome}
                options={{ headerShown: false }}

            />

            <Stack.Screen 
                name="Signin" 
                component={Signin}
                options={{ headerShown: false }}
            /> 

            <Stack.Screen 
                name="Cadastro" 
                component={Cadastro}
                options={{ headerShown: false }}

             /> 

            <Stack.Screen 
                name="Home" 
                component={Home}
                options={{ headerShown: false }}

             /> 
             
             <Stack.Screen
              
              name="Registration" 
              component={Registration}
              options={{ headerShown: false }}
              
            />

        </Stack.Navigator>
    )
}

