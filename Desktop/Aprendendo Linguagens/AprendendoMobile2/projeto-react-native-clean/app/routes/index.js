
import Pagina_login from '../screen/Pagina_login';
import Tela_Bem_vindo from '../screen/Tela_Bem_vindo';
import Dashboard from '../screen/Dashboard';
import Gestao_Terreno_pagina from '../screen/Gestao_Terreno/Gestao_Terreno_pagina';
import { createNativeStackNavigator } from "@react-navigation/native-stack";


const Stack = createNativeStackNavigator();

export default () => {
  return(
    
    <Stack.Navigator>

      <Stack.Screen
        name='BoaVindas'
        component={Tela_Bem_vindo}

      />

      <Stack.Screen
        name="Login"
        component={Pagina_login}
      />

      
       <Stack.Screen
        name="Dashboard"
        component={Dashboard}
      />

      <Stack.Screen
        name="GestaoTerreno"
        component={Gestao_Terreno_pagina}
      />



    </Stack.Navigator>
  )
}



