import React from "react";
import { SafeAreaView} from "react-native-safe-area-context";
import { Text, Button,View,StyleSheet,Image,TouchableOpacity } from "react-native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import {useNavigation} from "@react-navigation/native"
import Botao from "../components/Botao/Botao";
import Firebase from "../../src/Config/index.js"



export default()=>{
    const navigation = useNavigation();
    
    const estilos = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'green'
        },

        imagem_logo:{
            flex:2,
            justifyContent:"center",
            alignItems:"center",

        },

        parte_formulario:{
            flex:1,
            backgroundColor:'white',
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            paddingStart:'5%',
            paddingEnd:'5%',

        },

        titulo:{
            fontSize:20,
            fontWeight:"bold",
            marginTop:28,
            marginBottom:12,

        },
    })
  
    
    return(
        
        <SafeAreaView style={estilos.container}>

            <View style={estilos.imagem_logo}>
                <Image
                 source={require('../../assets/images/Icon_Agro.png')}
                 style={{width:'100%'}} 
                 resizeMode="contain"
                  />
            </View>

            <View style={estilos.parte_formulario}>
             <Text style={estilos.titulo}> Melhor gestão na sua propriedade</Text>
             <Text style={estilos.texto}> Faça Login para começar</Text>
            </View>

            <Botao nome={"ACESSAR"}/>
        </SafeAreaView>

    );
};