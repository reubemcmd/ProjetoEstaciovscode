import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons'; 

export default function Relatoriorealizado({navigation}){
  return(
    <LinearGradient
    style={{flex: 1}}
    colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>
    
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
  
        
            <View style={estilos.janela}>

            <TouchableOpacity 
              onPress = {() => navigation.navigate('')}
              activeOpacity={0.5}>
              <View>
                <Text style={estilos.bottonrealizadas}>REALIZADAS 01/04 a 30/04/2023</Text>
              </View>
            </TouchableOpacity>
              
            
          
            <View style={estilos.item_login}>

            <TouchableOpacity 
              onPress = {() => navigation.navigate('')}
              activeOpacity={0.5}>
              <View>
                <Text style={estilos.bottonrealizadas2}>Egajamento participaçao da reuniao</Text>
              </View>
            </TouchableOpacity>
              
              
            </View>
            
            <View style={estilos.item_senha}>
              
              <View style={estilos.item_visualizar}>
              <TouchableOpacity 
              onPress = {() => navigation.navigate('')}
              activeOpacity={0.5}>
              <View>
                <Text style={estilos.bottonrealizadas3}>Engajamento realizar tratamento</Text>
              </View>
            </TouchableOpacity>


            <View>
              <Text style={estilos.email}>
               E-Mail:
              </Text>
              <TextInput style={estilos.inputemail} 
              placeholder={''} ></TextInput>
            </View>
                
              </View>
            </View>
            
            

            

              

            <View style={estilos.botaoenviar}>
              <Button title=" ENVIAR" color= '#B0C4DE'
                      onPress={() => navigation.navigate('Home')} />
            </View>

            <View style={estilos.botaopdf}>
              <Button title=" PDF" color= '#B0C4DE'
                      onPress={() => navigation.navigate('Home')} />
            </View>


            <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
            <Image source={require('../Imagens/logoReturn2.png' ) } 
            style={estilos.logoReturn}></Image>
            </TouchableOpacity>

       
          </View>
      </View>
        
    </LinearGradient>
    
  );
}

const estilos = StyleSheet.create({

  fundo: {
    flex: 1,
  },

  logo:{
    resizeMode: 'contain',
    marginTop: 12,
    marginLeft: 49,
    width: 230,
  },
  
  janela:{
    flex: 1,
    backgroundColor: 'white',
    borderTopLeftRadius: 40,
    borderTopRightRadius: 40,
    width: '100%',
    textAlign: 'center',
    justifyContent: 'center',
    border:'solid',
    color:'white',
    bordeRadios:12
  },

  
  item_login:{
    
    marginHorizontal: 25,
    height: 80,
    marginLeft: 20,
    marginTop: -50
  },


  bottonrealizadas: {
    textAlign:'center',
    marginTop:-160,
    marginLeft: 30,
    backgroundColor: '#F4F3F3',
    width: '85%',
    height: 55,
    padding: 8,
    borderRadius: 50,
    fontWeight: 'bold'
    
  },

  bottonrealizadas2: {
    textAlign:'center',
    marginTop:-35,
    marginLeft: 30,
    backgroundColor: '#F4F3F3',
    width: '85%',
    height: 55,
    padding: 8,
    borderRadius: 50,
    
  },

  bottonrealizadas3: {
    textAlign:'center',
    marginTop:-85,
    marginLeft:30,
    backgroundColor: '#F4F3F3',
    width: '109%',
    height: 55,
    padding: 8,
    borderRadius: 50,
    marginRight:-15
    
  },


  item_senha:{
    marginTop:25,
    marginLeft:35,
    height: 80,
    marginHorizontal: 80
  },


  item_visualizar:{
    flexDirection: 'row',
    width: '90%',
    borderRadius: 5,
    height: 50,
    alignItems: 'center',

  },

  
  email:{

    marginHorizontal:30,
    height: 85,
    marginLeft:-230,
    marginTop:50,
    top:90,
    fontSize:18
  

  },

  inputemail:{
    flexDirection:'row',
    backgroundColor:'#F4F3F3',
    width:'-290%',
    height:50,
    padding:10,
    borderRadius:50,
    top:30,
    marginLeft:-250,
    marginHorizontal:55,
    marginRight:-55,
    right:-14


},
  
  
  botaoenviar:{
    position: 'absolute',
    width: 100,
    height:40,
    fontSize: 7,
    justifyContent: 'center',
    right:50,
    bottom:50,
    padding: 2
    
  },

  botaopdf:{
    position: 'absolute',
    width: 100,
    height:40,
    fontSize: 7,
    justifyContent: 'center',
    right:215,
    bottom:50,
    padding: 2
  
    
    
  },

  logoReturn:{
    width: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 25,
    left:145 ,
    bottom:130,
    top:160,
    }
 
})


      
    

