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
    
export default function CriarConta({navigation}){
  return(
    
    <LinearGradient style={{flex: 1}}
      colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>
        
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioTransparente.png')} 
        style={estilos.logo}></Image>
        <View style={estilos.espaco}>
          <Text style={estilos.titulo1}>Crie,</Text>
          <Text style={estilos.titulo2}>Sua conta!</Text>
        </View>

        
          <View style={estilos.item_email}>
            <Text style={estilos.textEmail}>EMAIL:</Text>
            <TextInput style={estilos.inputEmail} placeholder={'Digite seu email'}></TextInput>
          </View>

          <View style={estilos.item_matricula}>
            <Text style={estilos.textMatricula}>MATRÍCULA:</Text>
            <TextInput style={estilos.inputMatricula} placeholder={'Digite sua matrícula'}></TextInput>
          </View>

          <View style={estilos.item_senha}>
            <Text style={estilos.textSenha}>SENHA:</Text>
            <View style={estilos.inputArea}>
              <TextInput style={estilos.inputSenha} placeholder={'Digite sua senha'}/>
              <TouchableOpacity style={estilos.icon}>
                <Ionicons 
                  name="eye" 
                  color="grey"
                  size={20}
                />
              </TouchableOpacity>
            </View>
          </View>
          
          <View style={estilos.botao}>
            <Button title=" CADASTRE"
                    color='#B0C4DE'
                    onPress={ () => navigation.navigate('Comecar')}/>
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
    marginTop: 22,
    marginLeft: 40
  },

  espaco:{
    marginTop: 70,
    marginLeft: 7
  },

  titulo1:{

    margin: 8,
    marginTop: 27,
    width: 175,
    height: 55,
    left: 5,
    fontSize: 25,
    color: 'black'
  },

  titulo2:{
    
    marginLeft: 10,
    marginTop: -28,
    width: 175,
    height: 55,
    fontSize: 25,
    color: 'white'
  },

  item_email:{
    marginHorizontal: 25,
    height: 80,
    marginLeft: 20,
    marginTop: 55,
  },

  textEmail:{
    marginTop: -35,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  inputEmail: {
    backgroundColor: '#F4F3F3',
    borderRadius: 10,
    height: '35%',
    color: 'black',
    marginTop: 3,
    marginLeft: 7,
    margin: '10%',
    padding: 5
  },

  item_matricula:{
    marginTop: 20,
    marginLeft: 20,
    height: 80,
    marginHorizontal: 25
  },

  textMatricula:{
    marginTop: -60,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  inputMatricula: {
    backgroundColor: '#F4F3F3',
    borderRadius: 10,
    height: '35%',
    color: 'black',
    marginTop: 3,
    marginLeft: 7,
    margin: '10%',
    padding: 5
  },

  item_senha:{
    marginTop: 20,
    marginLeft: 20,
    height: 80,
    marginHorizontal: 25
  },

  textSenha:{
    marginTop: -80,
    marginLeft: 7,
    fontWeight: 'bold'
  },

  inputArea: {
    flexDirection: 'row',
    margin: '10%',
    height: '35%',
    alignItems: 'center',
    justifyContent: 'center',
    color: 'black',
    marginTop: 3,
    marginLeft: 7,
    marginRight: 42
  },

  inputSenha: {
    backgroundColor: '#F4F3F3',
    marginLeft: 40,
    borderRadius: 10,
    width:  300,
    height: 28,
    color: 'black',
    padding: 5
  },

  icon: {
    width: 35,
    height: 28,
    right: 35,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#F4F3F3'
  },

  esqueci_senha:{
    marginHorizontal: '15%',
    height: '80%',
    fontSize: 12,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'right',
    color: 'black'
  },
  
  botao:{
    marginTop: 30,
    marginLeft: 115,
    width: 122,
    height: 40,
    fontSize: '5%',
    bottom: 70,
    padding: 2
  },
})
