import React, { useContext, useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { Link, router } from "expo-router";
import { useFonts } from "expo-font";
import styles from "../Style";
import { LoginContext } from "../../scripts/LoginContext";

const TelaLogin = () => {
  const { token, setToken } = useContext(LoginContext)
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fontsLoaded] = useFonts({
    'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
  });

  if (!fontsLoaded) {
    return null;
  }

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

      const data = await response.json();
      console.log(response);

      if (response.ok) { 
        alert("Login realizado com sucesso!");
        setToken(JSON.stringify(data.tokenJWT))
        router.push("/Home");

      } else {
        console.log("Erro ao realizar login:", data.error);
        alert(data.error);
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
            <Text style={styles.pressable_text}>Login</Text>
          </Pressable>

        </View>
      </View>
    </ScrollView>
  );
};

export default TelaLogin;
