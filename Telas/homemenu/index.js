import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Homemenu({navigation}){
  return(

      
    <LinearGradient
        style={{flex: 1}}
        colors={['#ffffff', '#ffffff', '#ffffff']}>

        <View style={estilos.fundo}>
            <Image source={require('../Imagens/MR2.png' )} style={estilos.image}></Image>
            
            <View style={estilos.fundo}>
                <Text style={estilos.titulo1}>Melissa Rodrigues</Text>
            
            </View>
            
            <View style={estilos.janela}>
                <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonrelatorio}
                        activeOpacity={0.5}>

                    <View style={estilos.imagerelatorio}>
                        <Image source={require('../Imagens/papelrelat.png' ) } 
                        style={estilos.logoReturnrelatorio}></Image>
                        
                        <Text style={estilos.botaorelatorio}>Relatorio</Text>
                        
                    </View>
                </TouchableOpacity>
                
                <View style={estilos.imageevento}>
                     <Image source={require('../Imagens/cumbuca.png' ) } 
                        style={estilos.logoReturnevento}></Image>
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonEvento}
                        activeOpacity={0.5}>
                        <Text style={estilos.botaoevento}>Evento</Text>
                    </TouchableOpacity>
                

                <TouchableOpacity 
                    onPress = {() => navigation.navigate('')}
                    style={estilos.bottonEvento}
                    activeOpacity={0.5}>
                    <Image source={require('../Imagens/logoReturn2.png' ) } 
                    style={estilos.logoReturn}></Image>
                </TouchableOpacity>



                <View style={estilos.Logout}>
                    
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonLogout}
                        activeOpacity={0.5}>
                        <Text style={estilos.botaologout}>LOG OUT</Text>
                    </TouchableOpacity>
                </View>

                </View>

                
                </View>

                
                
            </View>
    
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({

    image:{
        height: 130,
        marginTop: 30,
        width: 130,
        borderRadius: 100,
        alignSelf: 'center',
        padding: 30,
        marginBottom: 60,
        borderColor: 'white',
        backgroundColor: 'gray'
        },

    imagerelatorio:{
        right:5,
        top:-400,
        padding: 10,
        margin: 40,
        height: 50,
        width: '80%',
        marginTop: 20,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row'
    },
    botaorelatorio:{
        marginHorizontal: '10%',
        marginLeft: 80,
        right: '470%',
        bottom:'80%',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        top:3
        
    },

    imageevento:{
        right:-25,
        padding: 10,
        margin: 38,
        height: 50,
        width: '80%',
        marginTop: -240,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        top:-30,
        
    },

    botaoevento:{
        marginLeft:-60,
        right: '1%',
        bottom: -20,
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        top:3
        
    },

    fundo: {
        flex: 1
    },
    
    espaco:{
        marginTop: 30
    },

    janela:{
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        alignItems:'center'
    },

    titulo1:{
        margin: 8,
        marginTop: 17,
        marginLeft: 20,
        width: 175,
        height: 55,
        left: 100,
        fontSize: 22,
        color: 'black',
        top:-80
    },


    logoReturnrelatorio:{
        // resizeMode: 'contain',
        // alignSelf: 'center',
        // height: 30,
        right: '220%',
        //bottom:'23%'
    },

    logoReturnevento:{
        
        // alignSelf: 'center',
        // resizeMode: 'contain',
        // height: 30,
        right: '200%',
        // bottom:'13%'
    },

    logoReturn:{
        width: 30,
        resizeMode: 'contain',
        alignSelf: 'center',
        height: 25,
        left:-60 ,
        bottom:-90
        },

        botaologout:{

        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 38,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 10,
        fontWeight: 'bold',
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        top:200,
        left:-155

        
    },
    
})