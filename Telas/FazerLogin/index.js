import  React  from 'react';
import {
    View,
    Image,
    Text,
    StyleSheet,
    Button,
    TouchableOpacity,
    TextInput} from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { LinearGradient } from 'expo-linear-gradient'; 

export default function FazerLogin ({navigation}){
  return(
    
    <LinearGradient
    style={{flex: 1}}
    colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>
    
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
  
        <View style={estilos.espaco}>
            <Text style={estilos.titulo1}>Olá.</Text>
            <Text style={estilos.titulo2}>Seja bem vindo(a)!</Text>
        </View>
            
          <View style={estilos.janela}>

          <Text style={estilos.titulo3}>
              FAÇA SEU LOGIN
            </Text>
            <View style={estilos.item_login}>
              <Text style={estilos.textMatricula}>
                MATRÍCULA:
              </Text>
              <TextInput style={estilos.inputMatricula} 
              placeholder={'Digite sua matrícula'} ></TextInput>
            </View>
            
            <View style={estilos.item_senha}>
              <Text style={estilos.textSenha}>
                SENHA:
              </Text>
              <View style={estilos.item_visualizar}>
                <TextInput style={estilos.inputSenha} 
                placeholder={'Digite sua senha'} ></TextInput>
                <TouchableOpacity style={estilos.icon}>
                  <Ionicons 
                  name="eye" 
                  color="grey"
                  size={20}
                  />
                </TouchableOpacity>
              </View>
            </View>
            
            <TouchableOpacity 
              onPress = {() => navigation.navigate('Conta')}
              activeOpacity={0.5}>
              <View>
                <Text style={estilos.esqueceu}>Esqueceu a senha?</Text>
              </View>
            </TouchableOpacity>

            <View>
              <Text style={estilos.naoTemConta}>
               Não tem conta?
              </Text>
            </View>

              <TouchableOpacity 
                onPress = {() => navigation.navigate('CriarConta')}
                style={estilos.bottonCadastre}
                activeOpacity={0.5}>
                <View style={{ marginLeft: 10, marginTop: 5}}>
                  <Text style={estilos.cadastre}>
                    CADASTRE-SE!
                  </Text>
                </View>
            
              </TouchableOpacity>

            <View style={estilos.botao}>
              <Button title=" LOGIN" color= '#B0C4DE'
                      onPress={() => navigation.navigate('Home')} />
            </View>

       
          </View>
      </View>
        
    </LinearGradient>
    
  );
}

const estilos = StyleSheet.create({

  fundo: {
    flex: 1
  },

  logo:{
    resizeMode: 'contain',
    marginTop: 12,
    marginLeft: 80,
    width: 230,
  },
  
  espaco:{
    marginTop: 'auto',
  },

  titulo1:{
    margin: 8,
    marginTop: 17,
    marginLeft: 20,
    width: 175,
    height: 55,
    left: 5,
    fontSize: 25,
    color: 'black'
  },

  titulo2:{
    marginVertical: 5,
    marginTop: -12,
    marginLeft: 20,
    width: 250,
    height: 55,
    fontSize: 25,
    color: 'white'
  },

  janela:{
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center'
  },

  titulo3:{
    marginVertical: 5,
    marginTop: 270,
    marginLeft: 125,
    width: 175,
    height: 50,
    fontSize: 15,
    fontWeight: 'bold',
    color: 'black'
  },

  item_login:{
    
    marginHorizontal: 25,
    height: 80,
    marginLeft: 20,
    marginTop: 20
  },

  textMatricula:{
    
    marginTop: 5,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  inputMatricula: {
    
    backgroundColor: '#F4F3F3',
    width: '85%',
    height: 50,
    padding: 8,
    borderRadius: 50,
  },

  item_senha:{
    marginTop: 20,
    marginLeft: 20,
    height: 80,
    marginHorizontal: 80
  },

  textSenha:{
    
    marginTop: -15,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  item_visualizar:{
    flexDirection: 'row',
    width: '90%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',

  },

  inputSenha: {
    
    backgroundColor: '#F4F3F3',
    width: '115%',
    height: 50,
    padding: 8,
    borderRadius: 50,
    
  },

  icon: {
    width: '15%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F4F3F3',
    borderRadius: 50,
    margin: '-15%',
  },

 esqueceu:{

    marginHorizontal: '62%',
    marginTop: '-3%',
    width: '30%',
    fontSize: 10,
    fontWeight: 'bold',
    justifyContent: 'center',
    textAlign: 'center',
    backgroundColor: '#F4F3F3',
    color: 'black'

  },

  

  esqueci_senha:{

    marginHorizontal: '15%',
    height: '80%',
    fontSize: 12,
    justifyContent: 'center',
    textAlign: 'right',
    color: 'black'

  },
  
  naoTemConta:{

    marginHorizontal: '15%',
    marginLeft: 196,
    marginTop: 11,
    height: '80%',
    fontSize: 10,
    color: 'black'

  },

  bottonCadastre:{
    position: 'absolute',
    width: 270,
    height: 120,
    fontSize: 7,
    justifyContent: 'center',
    right: -145,
    bottom: 90,
    padding: 2
    
  },
  
  cadastre:{

    marginTop: -5,
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    alignItems: 'flex-end'

  },
  
  botao:{
    position: 'absolute',
    width: 122,
    height: 40,
    fontSize: 7,
    justifyContent: 'center',
    right: 155,
    bottom: 50,
    padding: 2
    
  },
 
})




