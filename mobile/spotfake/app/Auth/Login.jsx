import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage'; // Importando o AsyncStorage
import styles from "../Style/Style";

const TelaLogin = () => {
  const [loaded, error] = useFonts({
    'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
  });
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response = await fetch("http://localhost:8000/autenticacao/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: JSON.stringify({
          "email": email,
          "senha": password,
        }),
      });

      const message = await response.text();
      alert(message);
      

      if (message === "Usuario logado com sucesso!") {
        await AsyncStorage.setItem('usuarioId', message.usuarioId);
        router.push("/Main/Profile");

      } else if (message === "Admin logado com sucesso!") {
        router.push("/Admin/AdmHome")
      }

    } catch (error) {
      console.error("Error during login:", error);
      alert("Erro ao logar usuário");
    }
  };

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.outer_container}>
        <View style={styles.container}>
          <Image source={require("../../assets/images/intermusic_logo.png")} style={styles.logo} />
          <Text style={styles.title}>Login</Text>
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <Pressable onPress={handleSignin} style={styles.pressable}>
            <Text style={styles.pressable_text}>LogIn</Text>
          </Pressable>

          <Link href={"http://localhost:8081/Auth/Registro"}>
            <Pressable style={styles.link_pressable}>
              <Text style={styles.link_text}>Registrar</Text>
            </Pressable>
          </Link>
        </View>
      </View>
    </ScrollView>
  );
};

export default TelaLogin;
