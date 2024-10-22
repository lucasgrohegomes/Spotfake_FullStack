import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet, Image } from 'react-native';

const TelaRegistro = () => {
    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

    const handleSignup = async () => {
      try {
          const response = await fetch('http://localhost:8000/registro', {
              method: 'POST',
              headers: {
                  'Content-Type': 'application/json',
              },
              body: JSON.stringify({
                  nome: nome, 
                  sobrenome: sobreNome,
                  email: email,
                  senha: password,
                  dataNascimento: dataNascimento,
              }),
          });

          const message = await response.text();
          alert(message);
      } catch (error) {
          console.error('Error during signup:', error);
          alert('Erro ao criar usuário');
      }
  };
    
  return (
    <View style={styles.container}>
      <Image source={require('../assets/images/intermusic_logo.png')} style={styles.logo}/>
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
            keyboardType="numeric"
            maxLength={10}
        />
        <Pressable onPress={handleSignup} style={styles.pressable}>
          <Text style={styles.pressable_text}>SignIn</Text>
        </Pressable>
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
  input: {
    height: 40,
    borderColor: '#ccc',
    borderWidth: 1,
    marginBottom: 12,
    paddingHorizontal: 8,
    color: 'red',
  },
  pressable: {
    height: 40,
    width: 300,
    backgroundColor: "red",
    borderRadius: 5,
    justifyContent: 'center',
  },
  pressable_text: {
    fontSize: 18,
    color: "white",
    textAlign: 'center',
    fontWeight: 'bold',
  },
  logo: {
    width: 250,
    height: 250,
  }
});

export default TelaRegistro;
