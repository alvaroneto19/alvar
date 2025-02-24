import React from "react";
import { Text,TouchableOpacity,StyleSheet } from "react-native";
import {useNavigation} from "@react-navigation/native"

export default({nome})=>{
    const navigation = useNavigation();
    const estilos = StyleSheet.create({
        botao_acessar:{
            position:"absolute",
            backgroundColor:'green',
            borderRadius:50,
            paddingVertical:8,
            width:'60%',
            alignSelf:"center",
            bottom:'5%',
            alignItems:"center",
            justifyContent:"center"

        },

        botao_logar:{

        },
        

        texto_botao:{
            fontSize:18,
            color:'white',
            fontWeight:"bold",


        },

    })

    return(
        <TouchableOpacity onPress={()=> navigation.navigate('Login')} style={estilos.botao_acessar}>
          <Text style={estilos.texto_botao}>{nome}</Text>
        </TouchableOpacity>

    )

}