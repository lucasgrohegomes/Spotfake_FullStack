import Express from 'express';
import React, { useState } from 'react';
import { View, Text, TextInput, Button, StyleSheet } from 'react-native';

const TelaRegistro = () => {
    const app = Express()
    app.use(Express.json())

    const [nome, setNome] = useState('');
    const [sobreNome, setSobreNome] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [dataNascimento, setDataNascimento] = useState('');

  const handleSignup = async () => {
    app.post('/Registro', (req, res) => {
        const userData = {nome, sobreNome, email, password, dataNascimento};
        req.body = userData
        if (!nome || !sobreNome || !email || !senha || !dataNascimento) {
            res.send('todos os campos devem ser preenchidos');
            return
        }
        res.send('Usuário Criado!')
    })
  }

  
    
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Login Luquistico</Text>
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
        <Button title="Sign Up" onPress={handleSignup} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 16,
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
  },
});

export default TelaRegistro;
