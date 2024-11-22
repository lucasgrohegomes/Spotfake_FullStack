import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, TextInput, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../Style/Style";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
    const [loaded, error] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });

    const [image, setImage] = useState('')
    const [status, setStatus] = useState(null)

    const [userInfo, setUserInfo] = useState('lucas')

    const [senhaAtual, setSenhaAtual] = useState('lucas2')
    const [novaSenha, setNovaSenha] = useState('')

    const [nomeAtual, setNomeAtual] = useState('')
    const [novoNome, setNovoNome] = useState('')

    const [sobreAtual, setSobreAtual] = useState('')
    const [novoSobre, setNovoSobre] = useState('')

    const saveImage = async () => {
        try {
            await AsyncStorage.setItem("MyImage", image)
            setStatus("Imagem Salva!")
        } catch (err) {
            alert(err)
        }
    }

    const loadImage = async () => {
        try {
            let image = await AsyncStorage.getItem("MyImage")

            if (image !== null) {
                setImage(image)
            }
        } catch (err) {
            alert(err)
        }
    }

    const resetImage = async () => {
        setImage("")
        setStatus(null)
    }


    const handleImagePickerPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    useEffect(() => {
        loadImage()
        getUserNameInfo()
    }, [])

    const getUserNameInfo = async () => {
        try {
            const response = await fetch("http://localhost:8000/usuarios/usuario", {
                method: "GET",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                },
                body: JSON.stringify({
                    "email": "lucas"
                }),
            });

            const data //CONTINUA POR AQUI
        } catch (err) {
            console.log("Error during user info fetching:", err);
            
        }
    }

    const handleNameReset = async () => {
        try {
            const response = await fetch("http://localhost:8000/usuarios/mudar_nome/1", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                },
                body: JSON.stringify({
                    "novoNome": novoNome,
                    "novoSobre": novoSobre,
                }),
            });

            const message = await response.text();
            alert(message);
        } catch (err) {
            console.log("Error during username update:", err);
            alert("Erro ao atualizar o nome ou sobrenome de usuário");
        }
    }


    const handlePasswordReset = async () => {
        try {
            const response = await fetch("http://localhost:8000/usuarios/mudar_senha/1", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                    "Accept": "*/*",
                },
                body: JSON.stringify({
                    "senhaAtual": senhaAtual,
                    "novaSenha": novaSenha,
                }),
            });

            const message = await response.text();
            alert(message);

        } catch (err) {
            console.log("Error during password update:", err);
            alert("Erro ao atualizar a senha");
        }
    }

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.container}>
                    <Pressable style={styles.pressable} onPress={handleImagePickerPress}>
                        <Text style={styles.pressable_text}>Adicionar Imagem de Perfil</Text>
                    </Pressable>
                    {image && <Image source={{ uri: image }} style={styles.image} />}
                    <Pressable style={styles.pressable} onPress={() => saveImage()}>
                        <Text style={styles.pressable_text}>Salvar Imagem</Text>
                    </Pressable>
                    <Text style={styles.black_text}>
                        {status}
                    </Text>
                    <Pressable style={styles.pressable} onPress={resetImage}>
                        <Text style={styles.pressable_text}>Resetar Imagem</Text>
                    </Pressable>
                </View>

                <View style={styles.container}>
                    <Text>
                        {nomeAtual + sobreAtual}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={novoNome}
                        onChangeText={setNovoNome}
                        secureTextEntry
                    />

                    <TextInput
                        style={styles.input}
                        placeholder="Sobrenome"
                        value={novoSobre}
                        onChangeText={setNovoSobre}
                        secureTextEntry
                    />
                    <Pressable style={styles.pressable} onPress={handleNameReset}>
                        <Text style={styles.pressable_text}>Mudar Nome ou Sobrenome</Text>
                    </Pressable>
                </View>

                <View style={styles.container}>
                    <Text>
                        {senhaAtual}
                    </Text>
                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        value={novaSenha}
                        onChangeText={setNovaSenha}
                        secureTextEntry
                    />
                    <Pressable style={styles.pressable} onPress={handlePasswordReset}>
                        <Text style={styles.pressable_text}>Mudar Senha</Text>
                    </Pressable>
                </View>

                <Pressable style={styles.pressable}>
                    <Text style={styles.pressable_text}>Ir para a página principal.</Text>
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default Profile;
