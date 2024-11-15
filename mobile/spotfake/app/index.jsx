import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import styles from "./Style/Style";

const First = () => {
    const [loaded, error] = useFonts({
        'DancingScript': require('../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.main_container}>
                    <Text style={styles.title}>Aqui será inserida a página principal</Text>
                    <Link href={`http://localhost:8081/Auth/Registro`}>
                        <Pressable style={styles.link_pressable}>
                            <Text style={styles.link_text}>Cadastrar</Text>
                        </Pressable>
                    </Link>
                    <Link href={`http://localhost:8081/Auth/Login`}>
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