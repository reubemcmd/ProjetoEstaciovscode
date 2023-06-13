import {View, Text, Image, StyleSheet, Button, TextInput, TouchableOpacity} from 'react-native'
import { LinearGradient } from 'expo-linear-gradient';

export default function Home({navigation}){
  return(

      
    <LinearGradient
        style={{flex: 1}}
        colors={['#9FB9FC', '#9FB9FC', '#9FB9FC']}>

        <View style={estilos.fundo}>
            <Image source={require('../Imagens/estacioTransparente.png' )} style={estilos.logo}></Image>
            
            <View style={estilos.espaco}>
                <Text style={estilos.titulo1}>Veja</Text>
                <Text style={estilos.titulo2}>aqui suas Atividades!</Text>
            </View>
            
            <View style={estilos.janela}>
                <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonDiarias}
                        activeOpacity={0.5}>

                    <View style={estilos.bordaDiaria}>
                        <Image source={require('../Imagens/diarias.png' ) } 
                        style={estilos.logoReturndiaria}></Image>
                        
                        <Text style={estilos.diarias}>Diarias</Text>
                        
                    </View>
                </TouchableOpacity>
                
                <View style={estilos.bordaSemanal}>
                     <Image source={require('../Imagens/semanais.png' ) } 
                        style={estilos.logoReturnsemanais}></Image>
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonSemanais}
                        activeOpacity={0.5}>
                        <Text style={estilos.semanais}>Semanais</Text>
                    </TouchableOpacity>
                    
                </View>

                <View style={estilos.bordaMensal}>
                    <Image source={require('../Imagens/mensais.png' ) } 
                    style={estilos.logoReturnmensais}></Image> 
                    <TouchableOpacity 
                        onPress = {() => navigation.navigate('')}
                        style={estilos.bottonMensais}
                        activeOpacity={0.5}>
                        <Text style={estilos.mensais}>Mensais</Text>
                    </TouchableOpacity>
                </View>

                <View style={estilos.botao}>
                <Button title="< 2023 >" color= '#B0C4DE'onPress={()=>navigation.navigate('')} />
                </View>

                <View style={estilos.botao1}>
                <Button title="< Abril >" color= '#B0C4DE'onPress={()=>navigation.navigate('')} />
                </View>
                
            </View>
        </View>
    </LinearGradient>
  );
}

const estilos = StyleSheet.create({

    bordaDiaria:{

        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 40,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 80,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
    },

    bordaSemanal:{
        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 38,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: 10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        
    },
    
    bordaMensal:{

        borderRadius: 8,
        borderWidth: 2,
        padding: 10,
        margin: 38,
        height: 50,
        width: '80%',
        borderColor: '#9FB9FC',
        marginTop: -10,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection:'row',
        
    },

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
        marginTop: 30,
    },

    janela:{
        flex: 1,
        backgroundColor: 'white',
        borderTopLeftRadius: 50,
        borderTopRightRadius: 50,
        marginTop: 50,
        width: '100%',
        alignItems:'center',
        flexDirection: 'column'
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

    diarias:{
        // marginHorizontal: '10%',
        // marginLeft: 80,
        // right: '1%',
        // bottom:'100%',
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        
    },

    semanais:{
        // marginHorizontal: '10%',
        // marginLeft: 80,
        // right: '1%',
        // bottom: -20,
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        
    },

    mensais:{
        // marginHorizontal: '10%',
        // marginLeft: 80,
        // right: '1%',
        //bottom: -70,
        fontSize: 15,
        textAlign: 'center',
        color: 'black',
        
    },

    botao:{
        position: 'absolute',
        justifyContent: 'center',
        height: '205%',
        borderRadius: 20,
        right: '20%',
        bottom: '-8%',
    },

    botao1:{
        position: 'absolute',
        justifyContent: 'center',
        height: '205%',
        borderRadius: 20,
        right: '55%',
        bottom: '-8%'
    },

    logoReturndiaria:{
        // resizeMode: 'contain',
        // alignSelf: 'center',
        // height: 30,
        right: '220%',
        //bottom:'23%'
    },

    logoReturnsemanais:{
        
        // alignSelf: 'center',
        // resizeMode: 'contain',
        // height: 30,
        right: '200%',
        // bottom:'13%'
    },

    logoReturnmensais:{
        // resizeMode: 'contain',
        // alignSelf: 'center',
        // height: 30,
        right: '210%',
        // bottom: '4%'
    },
    
})