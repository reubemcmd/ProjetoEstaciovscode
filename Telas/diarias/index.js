import React, {useState} from 'react';
import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';
import Checkbox from 'expo-checkbox'; 

export default function Diarias({navigation}){
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
                <Text style={estilos.bottondata}>SEG 24/04/2023</Text>
              </View>
            </TouchableOpacity>


            <View style={estilos.item_check}>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Retenção'} ></TextInput>
            </View>
            
            <View style={estilos.item_check}>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Qualidade de Ensino'} ></TextInput>

            </View>

            <View style={estilos.item_check}>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Captação Acompanha o Funil de captação'} ></TextInput>

            </View>

            <View style={estilos.item_check}>
              <TextInput style={estilos.inputamanhoplace} 
              placeholder={'Captação Realizar Reunião da Equipe'} ></TextInput>

            </View>

            <View style={styles.container}>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox} value={isChecked} onValueChange={setChecked} />
        

      
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox2} value={isChecked} onValueChange={setChecked} />
        

      
      </View>
      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox3} value={isChecked} onValueChange={setChecked} />
        

      
      </View>

      <View style={styles.checkboxContainer}>
        <Checkbox style={styles.checkbox4} value={isChecked} onValueChange={setChecked} />
        

      
      </View>

      
      
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
    bordeRadios:12,
    top:110
  },
  
  inputamanhoplace: {
    
    backgroundColor: '#F4F3F3',
    width: '95%',
    height: 50,
    padding: 8,
    borderRadius: 50,
  },

  
  item_check:{
    
    marginHorizontal:25,
    height: 85,
    marginLeft: 58,
    marginTop:-20,
    top:50
  },


  bottondata: {
    textAlign:'center',
    marginTop:-135,
    marginLeft: 30,
    backgroundColor: '#F4F3F3',
    width: '81%',
    height: 50,
    padding: 8,
    borderRadius: 50,
    top:35,
    fontWeight: 'bold'
  },

  logoReturn:{
    width: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 25,
    left:145 ,
    bottom:130
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
    marginTop:-525,
    margin: 10,
  },
  checkbox2: {
    alignSelf: 'center',
    marginLeft:-156,
    marginTop:-435,
    margin: 10,
  },
  checkbox3: {
    alignSelf: 'center',
    marginLeft:-156,
    marginTop:-345,
    margin: 10,
  },
    checkbox4: {
    alignSelf: 'center',
    marginLeft:-156,
    marginTop:-250,
    margin: 10,
  }
  
});


      
    

