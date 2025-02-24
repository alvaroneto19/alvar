import React from "react";
import { Text, TouchableOpacity, StyleSheet,View } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import {Entypo} from '@expo/vector-icons'
import Linhas from "../components/Linhas/Linhas";


const estilo = StyleSheet.create({
    row:{
        paddingHorizontal:20,
        paddingVertical:20,
        backgroundColor:"black",
        flexDirection:"row",
        alignItems:"center",
        justifyContent:'space-between'
    },

    texto:{
        color:"white",
        fontSize:20,
        fontStyle:"italic"

    },

    topo:{
      paddingHorizontal:20,
      paddingVertical:22,
      backgroundColor:"#3D5BA9",
      flexDirection:"row",
      alignItems:"flex-end",
      justifyContent:'center'
    },

    texto_topo:{
      color:"white",
      justifyContent:'center',
      fontSize:20,

    },

    opcoes:{
      flexDirection:"row",

    },

    box1:{backgroundColor:"red", flex:2},
    box2:{backgroundColor:"green",flex:2},
    box3:{backgroundColor:"blue",flex:2},

});

export default () =>{
    return(
        <SafeAreaView>         
            <TouchableOpacity style={estilo.topo}>
             <Text style={estilo.texto_topo}>INICIO</Text> 
            </TouchableOpacity>

            
            <View style={estilo.opcoes}>
              <View style={estilo.box1}><Text>A</Text></View>
              <View style={estilo.box2}><Text>B</Text></View>
              <View style={estilo.box3}><Text>V</Text></View>
            </View>
          
            <TouchableOpacity style={estilo.row}>
              <Text style={estilo.texto}>ILO</Text>
              <Entypo name="bucket" color={"white"} size={20}/>
            </TouchableOpacity>

            <TouchableOpacity style={estilo.row}>
              <Text style={estilo.texto}>OPÇÕES</Text>
              <Entypo name="bucket" color={"white"} size={20}/>
            </TouchableOpacity>
            
            <TouchableOpacity style={estilo.row}>
              <Text style={estilo.texto}>SOBRE-NOS</Text>
              <Entypo name="bucket" color={"white"} size={20}/>
            </TouchableOpacity>

            <Linhas 
            acao_toque={()=> alert("botao pressionado!")}      
            /> 

        
        </SafeAreaView>
    );
};