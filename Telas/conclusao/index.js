import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity,} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Conclusao({navigation}){
  return(
    <LinearGradient
    style={{flex: 1}}
    colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>
    
      <View style={estilos.fundo}>
        <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
  
        <View style={estilos.espaco}>
            <Text style={estilos.titulo1}>Obrigado,</Text>
            <Text style={estilos.titulo2}>atividade concluída!</Text>
        </View>
            
            <View style={estilos.janela}>


            <View style={estilos.item_visto}>
              <TextInput style={estilos.conclusaovisualizada} 
              placeholder={'Atividade:Engajamento participação da reunião de rotina comercial com gerente comercial e força de venda(GDC) '} 
              ></TextInput>

            </View>

            <View>
                <Text style={estilos.email}>
                E-Mail
                </Text>
                <TextInput style={estilos.inputemail} 
                placeholder={''} ></TextInput>
            </View>
                
                </View>
             </View>
            
             <View style={estilos.botaoconfirmar}>
              <Button title=" Confirmar" color= '#9FB9FC'
                      onPress={() => navigation.navigate('Home')} />
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
    fontSize: 30,
    color: 'black',
    top:-40
  },

  titulo2:{
    marginVertical: 5,
    marginTop: -12,
    marginLeft: 20,
    width: 250,
    height: 55,
    fontSize: 26,
    color: 'white',
    right:-4,
    top:-55
  },

  item_visto:{
    
    marginHorizontal: 25,
    height: 80,
    marginLeft: 20,
    marginTop: 20
  },
  conclusaovisualizada: {
    
    backgroundColor: '#F4F3F3',
    width: '100%',
    height:220,
    padding: 8,
    borderRadius: 50,
    marginTop:-45
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
    marginTop:-50,
  },

email:{

    marginHorizontal:30,
    height: 85,
    marginLeft:100,
    marginTop:50,
    top:65,
    fontSize:18,
    left:-50,
    fontWeight: 'bold'
  

  },

  inputemail:{
    flexDirection:'row',
    backgroundColor:'#F4F3F3',
    width:'80%',
    height:40,
    padding:10,
    borderRadius:50,
    top:10,
    marginHorizontal:35
    


},
  
  
  botaoconfirmar:{
    position: 'absolute',
    width: 150,
    height:40,
    fontSize: 7,
    justifyContent: 'center',
    right:103,
    bottom:10,
    padding: 2,
    borderRadius:12
    
  },

  

  logoReturn:{
    width: 30,
    resizeMode: 'contain',
    alignSelf: 'center',
    height: 25,
    left:150 ,
    bottom:10,
    }
 
})


      
    

