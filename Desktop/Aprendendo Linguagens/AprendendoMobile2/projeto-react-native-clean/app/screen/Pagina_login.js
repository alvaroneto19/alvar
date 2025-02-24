import React, { cloneElement } from "react";
import { SafeAreaView} from "react-native-safe-area-context";
import { Text, Button,View,StyleSheet,TextInput,TouchableOpacity, Pressable, Alert} from "react-native";
import {Entypo} from '@expo/vector-icons'
import { useState } from "react";
import firebase from "firebase/compat/app";
import {useNavigation} from "@react-navigation/native"

export default()=>{
    const [email,setEmail] = useState('');
    const [senha,setSenha] = useState('');
    const [esconder, setEsconder] = useState(true);
    const navigation = useNavigation();
    

     const verificarCampos = () => {
       if(email == false && senha == false){
        Alert.alert("Campos email e senha não podem estar vazios");
       }else if(senha==false){
        Alert.alert("Campo senha esta vazio");
       }else if(email==false){
        Alert.alert("Campo email esta vazio");
       }else{
        navigation.navigate('Dashboard');
       }
    };

    const estilo = StyleSheet.create({
        container:{
            flex:1,
            backgroundColor:'green',
        },

        container_topo:{
            marginTop:'14%',
            marginBottom:'8%',
            paddingStart:'5%',

        },

        texto_topo:{
            fontSize:28,
            fontWeight:"bold",
            color:'white'

        },

        container_formulario:{
            backgroundColor:'white',
            flex:1,
            borderTopLeftRadius:25,
            borderTopRightRadius:25,
            paddingStart:'5%',
            paddingEnd:'5%',
       

        },

        texto_titulo:{
            fontSize:20,
            marginTop:28,
        },

        input:{
            borderBottomWidth:1,
            height:40,
            marginBottom:12,
            fontSize:16,
        },

        parte_senha:{
            flexDirection:"row",

        },
        bloco_senha:{
            width:'90%',
        },

        botao_logar:{
            backgroundColor:'green',
            width:'100%',
            borderRadius:4,
            paddingVertical:8,
            marginTop:14,
            justifyContent:"center",
            alignItems:"center",

        },

        
        texto_registrar:{
            color:'white',
            fontSize:18,
            fontWeight:"bold"

        },

        botao_registra:{
            marginTop:14,
            alignSelf:"center"

        },


            
    })
    return(
        
        <SafeAreaView style={estilo.container}>
            <View style={estilo.container_topo}>
            <Text style={estilo.texto_topo}>
              Seja muito bem vindo
             </Text>
            </View>

            

            <View style={estilo.container_formulario}>
                <Text style={estilo.texto_titulo}>Email: </Text>
                <TextInput
                 placeholder="Digite seu E-mai"
                 value={email}
                 onChangeText={setEmail}
                 style={estilo.input}
                />

                <Text style={estilo.texto_titulo}>Senha: </Text>

                <View style={estilo.parte_senha}>
                    <View style={estilo.bloco_senha}>
                    <TextInput placeholder="Digite sua Senha" style={estilo.input} 
                    value={senha}
                    onChangeText={(texto)=>setSenha(texto)}
                    secureTextEntry={esconder}
                    />
                    </View>

                    <TouchableOpacity onPress={() => setEsconder(!esconder)}>
                      <Entypo name={esconder ? "eye": "eye-with-line" } color={"black"} size={30}/>    
                    </TouchableOpacity>

               
             
                
                 <TextInput/>


                </View>
              



                <TouchableOpacity style={estilo.botao_logar} onPress={verificarCampos}>
                    <Text style={estilo.texto_registrar}>Acessar</Text>
                </TouchableOpacity>



                <TouchableOpacity style={estilo.botao_registra}>
                    <Text >Se não tem uma conta, cadastra-se</Text>
                </TouchableOpacity>


            </View>


        </SafeAreaView>

    );
};