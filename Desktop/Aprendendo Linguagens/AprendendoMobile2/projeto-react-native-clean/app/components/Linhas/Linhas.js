import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";
import {Entypo} from '@expo/vector-icons'
const estilo = StyleSheet.create({
    linha:{
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


})
export default ({acao_toque})=>{
    return(
        <TouchableOpacity style={estilo.linha} onPress={acao_toque}>
            <Text style={estilo.texto}>Este e um novo Componente</Text>
            <Entypo name="bucket" color={"white"} size={20}/>
        </TouchableOpacity>
    )
}