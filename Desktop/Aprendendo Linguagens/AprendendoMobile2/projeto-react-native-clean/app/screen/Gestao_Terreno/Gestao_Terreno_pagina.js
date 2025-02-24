import React, { useState } from "react";
import { View, Text, TextInput, TouchableOpacity, FlatList, StyleSheet, Image } from "react-native";
import {useNavigation} from "@react-navigation/native"
import { useRoute } from "@react-navigation/native";


export default() => {
  const [terrenos, setTerrenos] = useState([]);
  const [nome, setNome] = useState("");
  const [tamanho, setTamanho] = useState("");
  const [localizacao, setLocalizacao] = useState("");
  const route = useRoute();
  const navigation = useNavigation();

  const adicionarTerreno = () => {
    if (nome && tamanho && localizacao) {
      setTerrenos([...terrenos, { nome, tamanho, localizacao }]);
      setNome("");
      setTamanho("");
      setLocalizacao("");
    }
  };


  const adicionar_terreno= ()=> {
    if(nome && tamanho && localizacao){
      const novaPropriedade = {nome, tamanho, localizacao}
      route.params.setTerreno([...route.params.terreno, novaPropriedade]);
      navigation.goBack();
    }


  } 



  return (
    <View style={styles.container}>

      <View style={styles.header}>
        <Text style={styles.title}>Gestão de Terreno</Text>
        <FlatList
          horizontal
          data={terrenos}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <View style={styles.terrenoItem}>
              <Image source={require('../../../assets/images/Imagem-Terreno-logo/logo-terreno.png')} style={styles.terrenoIcon} />
              <Text>{item.nome}</Text>
            </View>
          )}
        />
      </View>

      <View style={styles.form}>
        <Text>Nome:</Text>
        <TextInput style={styles.input} value={nome} onChangeText={setNome} />
        <Text>Tamanho:</Text>
        <TextInput style={styles.input} value={tamanho} onChangeText={setTamanho} />
        <Text>Localização:</Text>
        <TextInput style={styles.input} value={localizacao} onChangeText={setLocalizacao} />

        <TouchableOpacity style={styles.button} onPress={adicionarTerreno}>
          <Text style={styles.buttonText}>Salvar</Text>
        </TouchableOpacity>

      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 20, backgroundColor: "#f0f0f0" },
  header: { alignItems: "center", backgroundColor: "#4CAF50", padding: 20, borderRadius: 10 },
  title: { fontSize: 22, fontWeight: "bold", color: "#fff" },
  terrenoItem: { alignItems: "center", marginHorizontal: 10 },
  terrenoIcon: { width: 40, height: 40 },
  form: { marginTop: 20, padding: 20, backgroundColor: "#fff", borderRadius: 10 },
  input: { borderWidth: 1, padding: 10, marginBottom: 10, borderRadius: 5 },
  button: { backgroundColor: "#4CAF50", padding: 15, borderRadius: 5, alignItems: "center" },
  buttonText: { color: "#fff", fontSize: 16, fontWeight: "bold" }
});


