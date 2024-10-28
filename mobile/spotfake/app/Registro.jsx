import React, { useState } from "react";
import { View, Text, TextInput, Pressable, StyleSheet, Image } from "react-native";
import { Link, router } from "expo-router"

const TelaRegistro = () => {
    const [nome, setNome] = useState("");
    const [sobreNome, setSobreNome] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [dataNascimento, setDataNascimento] = useState("");

    const [signupStatus, setSignupStatus] = useState("/Registro");

    const handleSignup = async () => {
      try {
          const response = await fetch("http://localhost:8000/registro", {
              method: "POST",
              headers: {
                  "Content-Type": "application/json",
                  "Accept":"*/*",
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
          setSignupStatus("/Login");

      } catch (error) {
          console.error("Error during signup:", error);
          alert("Erro ao criar usuário");
      }
      finally {
        router.navigate(signupStatus);
      }
  };
    
  return (
    <View style={styles.container}>
      <Image source={require("../assets/images/intermusic_logo.png")} style={styles.logo}/>
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
            placeholder="Password"
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
        
        <Link href={`http://localhost:8081/Login`}>
            <Pressable style={styles.link_pressable}>
              <Text style={styles.link_text}>Entrar</Text>
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

export default TelaRegistro;
