import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { Link } from "expo-router"

const TelaLogin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignin = async () => {
    try {
      const response = await fetch("http://localhost:8000/login", {
          method: "POST",
          headers: {
              "Content-Type": "application/json",
              "Accept":"*/*",
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
    <View style={styles.container}>
      <Image source={require("../assets/images/intermusic_logo.png")} style={styles.logo}/>
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

        <Link href={"http://localhost:8081/Registro"}>
            <Pressable style={styles.link_pressable}>
            <Text style={styles.link_text}>Registrar</Text>
            </Pressable>
        </Link>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    padding: 16,
    alignItems: "center",
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: "center",
  },
  input: {
    height: 40,
    width: 300,
    borderColor: "#ccc",
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: "red",
  },
  pressable: {
    height: 40,
    width: 300,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: "center",
  },
  pressable_text: {
    fontSize: 18,
    color: "white",
    textAlign: "center",
    fontWeight: "bold",
  },
  logo: {
    width: 250,
    height: 250,
  },
  link_pressable: {
    height: 30,
    width: 150,
    backgroundColor: "red",
    justifyContent: "center",
    marginTop: 20,
    borderRadius: 5,
  },
  link_text: {
    fontSize: 14,
    color: "white",
    fontWeight: "300",
    textAlign: "center",
  }
});

export default TelaLogin;
