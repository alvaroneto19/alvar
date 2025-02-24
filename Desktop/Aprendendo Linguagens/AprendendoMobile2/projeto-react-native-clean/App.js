
import Pagina_login from './app/screen/Pagina_login';
import Dashboard from './app/screen/Dashboard';
import { NavigationContainer } from '@react-navigation/native';
import { StatusBar } from 'react-native';
import Rotas from './app/routes'
import Tela_Teste_Firebase from './app/screen/Tela_Teste_Firebase';


export default () => {


  return(
     <NavigationContainer>
      <StatusBar backgroundColor={"green"} barStyle={"dark-content"}/>
      <Tela_Teste_Firebase/>
      <Rotas/>
     </NavigationContainer>

 
    
  )
}



