import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { router } from "expo-router";
import { useFonts } from "expo-font";
import styles from "../Style";

const TelaRegistro = () => {
  const [fontsLoaded] = useFonts({
    'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

  const [nome, setNome] = useState("");
  const [sobreNome, setSobreNome] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [dataNascimento, setDataNascimento] = useState("");

  const handleSignup = async () => {
    try {
      const response = await fetch("http://localhost:8000/autenticacao/registro", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Accept": "*/*",
        },
        body: JSON.stringify({
          "nome": nome,
          "sobreNome": sobreNome,
          "email": email,
          "senha": password,
          "dataNascimento": dataNascimento,
        }),
      });

      const message = await response.text();
      alert(message);
      if (message === "Usuario registrado com sucesso!") {
        router.back()
      }

    } catch (error) {
      console.error("Error during signup:", error);
      alert("Erro ao criar usuário");
    }
  };

  return (
    <ScrollView style={styles.scrollview}>
      <View style={styles.outer_container}>
        <View style={styles.container}>
          <Image source={require("../../assets/images/intermusic_logo.png")} style={styles.logo} />
          <Text style={styles.title}>Registrar</Text>
          <TextInput
            style={styles.input}
            placeholder="Nome"
            value={nome}
            onChangeText={setNome}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Sobrenome"
            value={sobreNome}
            onChangeText={setSobreNome}
            keyboardType="default"
          />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={email}
            onChangeText={setEmail}
            keyboardType="email-address"
          />
          <TextInput
            style={styles.input}
            placeholder="Senha"
            value={password}
            onChangeText={setPassword}
            secureTextEntry
          />
          <TextInput
            style={styles.input}
            placeholder="Data de Nascimento"
            value={dataNascimento}
            onChangeText={setDataNascimento}
            keyboardType="default"
          />

          <Pressable onPress={handleSignup} style={styles.pressable}>
            <Text style={styles.pressable_text}>SignUp</Text>
          </Pressable>

        </View>
      </View>
    </ScrollView>
  )
};

export default TelaRegistro;
