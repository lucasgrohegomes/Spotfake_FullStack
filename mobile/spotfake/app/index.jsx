import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import styles from "./Style";

const First = () => {
    const [fontsLoaded] = useFonts({
        'DancingScript': require('../assets/fonts/DancingScript-VariableFont_wght.ttf'),
      });
    
      if (!fontsLoaded) {
        return null;
      }

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.main_container}>
                    <Text style={styles.title}>Aqui será inserida a página principal</Text>

                    <Link href={'/Registro'}>
                        <Pressable style={styles.link_pressable}>
                            <Text style={styles.link_text}>Cadastrar</Text>
                        </Pressable>
                    </Link>

                    <Link href={'/Login'}>
                        <Pressable style={styles.link_pressable}>
                            <Text style={styles.link_text}>Entrar</Text>
                        </Pressable>
                    </Link>
                </View>
            </View>
        </ScrollView>
    )
}

export default First;