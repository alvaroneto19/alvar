import React from "react";
import { Text,View,StyleSheet } from "react-native";
import { SafeAreaView} from "react-native-safe-area-context";
import { useState } from "react";
import { useEffect } from "react";
import { collection, getDocs } from "firebase/firestore";
import { Aplicativo } from "../../src/Config";


export default()=>{

    const [dados,setDados] = useState();

    useEffect(()=>{

       
    },[])

    return(
        <SafeAreaView>
            <View>
                <Text>Este teste vai puxar dados do firebase</Text>
            </View>
        </SafeAreaView>

    )
}