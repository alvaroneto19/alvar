import React from "react";
import { View, Text, Button, StyleSheet,TouchableOpacity,Image } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useState } from "react";


export default()=>{

    const navigation = useNavigation();
    const [terreno, setTerreno] = useState([]);


    const styles = StyleSheet.create({
        container: {
          flex: 1,
          backgroundColor: "#f0f0f0",
          alignItems: "center",
        },
        header: {
          backgroundColor: "#4CAF50",
          width: "100%",
          padding: 20,
          alignItems: "center",
          borderBottomLeftRadius: 20,
          borderBottomRightRadius: 20,
        },
        title: {
          fontSize: 22,
          fontWeight: "bold",
          color: "#fff",
        },
        info: {
          fontSize: 16,
          color: "#fff",
          marginTop: 5,
        },
        icon: {
          width: 50,
          height: 50,
          marginTop: 10,
        },
        optionsContainer: {
          marginTop: 30,
          width: "90%",
          alignItems: "center",
        },
        option: {
          flexDirection: "row",
          alignItems: "center",
          backgroundColor: "#fff",
          width: "100%",
          padding: 15,
          borderRadius: 10,
          marginBottom: 15,
          elevation: 3,
        },
        optionIcon: {
          width: 40,
          height: 40,
          marginRight: 10,
        },
        optionText: {
          fontSize: 18,
          fontWeight: "bold",
        },
      });

    return(
        <View style={styles.container}>
        {/* Cabeçalho */}
        <View style={styles.header}>
          <Text style={styles.title}>OPÇÕES</Text>
          <Text style={styles.info}>Propriedades: 0</Text>
          <Text style={styles.info}>Animais Cadastrados: 0</Text>
          
        </View>
  
        {/* Opções */}
        <View style={styles.optionsContainer}>
          <TouchableOpacity 
            style={styles.option} 
            onPress={() => navigation.navigate("GestaoTerreno", {setTerreno, terreno})}>
           
            <Text style={styles.optionText}>Gestão de Terreno</Text>
           
           
          </TouchableOpacity>


  
          <TouchableOpacity 
            style={styles.option} 
            /*onPress={() => navigation.navigate("GestaoAnimais")}*/
          >
           
            <Text style={styles.optionText}>Gestão de Animais</Text>
          </TouchableOpacity>
        </View>
      </View>
    )

    
}