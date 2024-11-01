import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import styles from "../Style/Style";

const AdmHome = () => {
    const [loaded, error] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
      });

    return(
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.main_container}>
                    <Text>Aqui será inserida a página principal para os Admins</Text>
                </View>
            </View>
        </ScrollView>
    )
}

export default AdmHome;