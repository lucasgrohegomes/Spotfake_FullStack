import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { Link } from "expo-router";
import styles from "../Style/Style";

const TelaLogin = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response = await fetch("http://localhost:8000/login", {
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
