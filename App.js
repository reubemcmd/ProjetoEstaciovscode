import  React  from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';

import Inicio from './Telas/Inicio';
import FazerLogin from './Telas/FazerLogin';
import CriarConta from './Telas/CriarConta';
import Comecar from './Telas/VamosComecar';
import Mensal from './Telas/mensal';
import Home from './Telas/Conta/index';
import Homemenu from './Telas/homemenu';
import Relatorio from './Telas/relatorio';
import Teste from './Telas/teste';
import Relatoriorealizado from './Telas/relatoriorealizado';
import Semanais from './Telas/semanais';
import Semanaisadicionadas from './Telas/semanaisadicionadas';
import Diarias from './Telas/diarias';
import Adicaodeatividade from './Telas/adicaodeatividade';
import Conclusao from './Telas/conclusao';




const Drawer = createDrawerNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Drawer.Navigator initialRouteName='FazerLogin'>
        
        <Drawer.Screen
        name='Inicio'
        component={Inicio}
        options={{
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='FazerLogin'
        component={FazerLogin}
        options={{
          title: 'FazerLogin',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='CriarConta'
        component={CriarConta}
        options={{
          title: 'Conta',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='Comecar'
        component={Comecar}
        options={{
          title: 'VamosComecar',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='Home'
        component={Home}
        options={{
          title: 'Home',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

<Drawer.Screen 
        name='Homemenu'
        component={Homemenu}
        options={{
          title: 'Homemenu',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

<Drawer.Screen 
        name='Mensal'
        component={Mensal}
        options={{
          title: 'Mensal',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

      <Drawer.Screen 
        name='Relatorio'
        component={Relatorio}
        options={{
          title: 'Relatorio',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

<Drawer.Screen 
        name='Teste'
        component={Teste}
        options={{
          title: 'Teste',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

        <Drawer.Screen 
        name='Relatoriorealizado'
        component={Relatoriorealizado}
        options={{
          title: 'Relatoriorealizado',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
        }}/>

      <Drawer.Screen 
        name='Semanais'
        component={Semanais}
        options={{
          title: 'Semanais',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
      }}/>

<Drawer.Screen 
        name='Diarias'
        component={Diarias}
        options={{
          title: 'Diarias',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
      }}/>

<Drawer.Screen 
        name='Semanaisadicionadas'
        component={Semanaisadicionadas}
        options={{
          title: 'Semanaisadicionadas',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
      }}/>

<Drawer.Screen 
        name='Adicaodeatividade'
        component={Adicaodeatividade}
        options={{
          title: 'Adicaodeatividade',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
      }}/>

<Drawer.Screen 
        name='Conclusao'
        component={Conclusao}
        options={{
          title: 'Conclusao',
          headerStyle: {backgroundColor: '#B0C4DE'},
          headerTintColor: 'white',
          headerShown: false
      }}/>


      </Drawer.Navigator>
    </NavigationContainer>
  );
}