import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox';

export default function Relatoriorealizado({navigation}){
  const [isChecked, setChecked] = useState(false);
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
                <Text style={estilos.botaorelatorioativi}>REALATORIO DE ATIVIDADES</Text>
              </View>
            </TouchableOpacity>
              
            
          
        <View style={estilos.item_de}>
            <Text style={estilos.de}>
               DE:
            </Text>
              <TextInput style={estilos.inputde} 
              placeholder={'01/04/2023'} ></TextInput>
        
        </View>


        <View style={estilos.item_Ate}>
            <Text style={estilos.Ate}>
               ATÉ:
            </Text>
              <TextInput style={estilos.inputAte} 
              placeholder={'30/04/2023'} ></TextInput>
        
        </View>


        <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        

      
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox2} value={isChecked} onValueChange={setChecked} />
        

      
      </View>


      <Text style={estilos.Realizadas}>
               REALIZADAS
              </Text>

              <Text style={estilos.Naorealizadas}>
               NÃO REALIZADAS
              </Text>


      </View>
            
              
              
    </View>
            
            <View style={estilos.item_Filtros}>
              
            <Text style={estilos.Filtros}>
               FILTROS
              </Text>

        </View>
      </View>
          
            
            

            

              

            <View style={estilos.botaogerar}>
              <Button title=" GERAR" color= '#B0C4DE'
                      onPress={() => navigation.navigate('')} />
            </View>

            
            <TouchableOpacity 
                onPress = {() => navigation.navigate('')}
                style={estilos.bottonLogoStyle}
                activeOpacity={0.5}>
            <Image source={require('../Imagens/logoReturn2.png' ) } 
            style={estilos.logoReturn}></Image>
            </TouchableOpacity>

       
          
    
        
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
    bordeRadios:12,
    marginTop:100
  },

  
  item_de:{
    
    marginHorizontal: 25,
    height: 80,
    marginLeft:60,
    marginTop:20,
    top:20
    

  },

  item_Ate:{
    
    marginHorizontal: 25,
    height: 80,
    marginLeft:60,
    marginTop: 20,
    top:-5
  },


  botaorelatorioativi: {
    textAlign:'center',
    marginTop:-50,
    marginLeft: 30,
    backgroundColor: '#F4F3F3',
    width: '85%',
    height: 55,
    padding: 8,
    borderRadius: 50,
    top:-45,
    fontWeight: 'bold',
    
  },

  
  Filtros:{

    marginHorizontal:100,
    height:85,
    top:-100,
    fontSize:18,
    left:45,
    fontWeight: 'bold',
  

  },

  Realizadas:{

    marginHorizontal:100,
    height:85,
    top:-20,
    fontSize:18,
    left:-35,
    fontWeight: 'bold',
  

  },
    
  Naorealizadas:{

    marginHorizontal:100,
    height:85,
    top:-40,
    fontSize:18,
    left:-15,
    fontWeight: 'bold',
  

  },

  inputde:{
    flexDirection:'row',
    backgroundColor:'#F4F3F3',
    width:'70%',
    height:50,
    padding:10,
    borderRadius:50,
    top:-35,
    marginLeft:18,
    marginHorizontal:55,
    marginRight:-55,
    right:-14,
    fontWeight: 'bold',


},

inputAte:{
  flexDirection:'row',
  backgroundColor:'#F4F3F3',
  width:'70%',
  height:50,
  padding:10,
  borderRadius:50,
  top:-35,
  marginLeft:23,
  marginHorizontal:55,
  marginRight:-55,
  right:-14,
  fontWeight: 'bold'


},

 botaogerar:{
    position: 'absolute',
    width: 120,
    height:40,
    fontSize: 7,
    justifyContent: 'center',
    right:125,
    bottom:20,
    padding: 2
    
  },


  logoReturn:{
    width: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 25,
    left:145 ,
    bottom:130,
    top:-10
    }
 
})

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
  },
  checkbox: {
    alignSelf: 'center',
    marginLeft:-156,
    marginTop:100,
    margin: 10,
    left:30,
    top:53
  },
  checkbox2: {
    alignSelf: 'center',
    marginLeft:-156,
    marginTop:-160,
    margin: 10,
    left:30,
    top:163
  }

});


      
    

