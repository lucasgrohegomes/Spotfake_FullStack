// Fazer a tela de login aqui:

import React, { useState } from 'react';
import { View, Text, TextInput, Pressable, StyleSheet } from 'react-native';

const TelaLogin = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSignin = async () => {
    try {
      const response = await fetch('http://localhost:8000/login', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body: JSON.stringify({
              email: email,
              senha: password,
          }),
      });

      const message = await response.text();
      alert(message);
  } catch (error) {
      console.error('Error during login:', error);
      alert('Erro ao logar usuário');
  }
};

  return (
    <View style={styles.container}>
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
  }
});

export default TelaLogin;
