import React from "react";
import { View, Text, Pressable, ScrollView } from "react-native";
import { router } from "expo-router";
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
                    <Pressable style={styles.link_pressable} onPress={() => { router.push("/Registro") }}>
                        <Text style={styles.link_text}>Cadastrar</Text>
                    </Pressable>

                    <Pressable style={styles.link_pressable} onPress={() => { router.push("/Login") }}>
                        <Text style={styles.link_text}>Entrar</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    )
}

export default First;