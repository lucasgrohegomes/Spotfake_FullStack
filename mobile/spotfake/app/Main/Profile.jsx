import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Alert, ScrollView, Image } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../Style/Style";
import * as ImagePicker from 'expo-image-picker';

// *não ta funcionando nem as rotas de update das info do perfil, nem o AsyncStorage com o ImagePicker...

const Profile = () => {
    const [nome, setNome] = useState("");
    const [sobreNome, setSobreNome] = useState("");
    const [senhaAtual, setSenhaAtual] = useState("");
    const [novaSenha, setNovaSenha] = useState("");
    const [usuarioId, setUsuarioId] = useState(null); 
    const [fotoPerfil, setFotoPerfil] = useState(null); 


    const [loaded, error] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });


    useEffect(() => {
        const fetchUserIdAndProfilePic = async () => {
            AsyncStorage.clear()
            const storedUserId = await AsyncStorage.getItem('usuarioId');
            const storedFotoPerfil = await AsyncStorage.getItem('fotoPerfil'); 
            console.log('Foto Perfil Recuperada:', storedFotoPerfil); 
            setUsuarioId(storedUserId);
            setFotoPerfil(storedFotoPerfil);
        };
        fetchUserIdAndProfilePic();
    }, []);

  
    const selecionarFoto = async () => {
        const { status } = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (status !== 'granted') {
            alert('Desculpe, precisamos de permissões para acessar a galeria.');
            return;
        }

        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.Images,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
        });

        if (!result.cancelled) {
            const fotoUri = result.uri;
            console.log('Foto Selecionada:', fotoUri); 

            setFotoPerfil(fotoUri); 

            await AsyncStorage.setItem('fotoPerfil', fotoUri);
            console.log('Foto salva no AsyncStorage:', fotoUri); 
        }
    };

    const atualizarNome = async () => {
        if (!nome || !sobreNome) {
            alert("Nome e sobrenome são obrigatórios");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/usuarios/update_name", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usuarioId,
                    novoNome: nome,
                    novoSobrenome: sobreNome,
                }),
            });

            const message = await response.text();
            if (response.ok) {
                alert("Nome e Sobrenome atualizados com sucesso");
            } else {
                alert(message);
            }
        } catch (error) {
            console.error("Erro ao atualizar nome:", error);
            alert("Erro ao atualizar nome e sobrenome");
        }
    };

    const atualizarSenha = async () => {
        if (!senhaAtual || !novaSenha) {
            alert("Senha atual e nova senha são obrigatórios");
            return;
        }

        try {
            const response = await fetch("http://localhost:8000/usuarios/update_pass", {
                method: "PUT",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    usuarioId,
                    senhaAtual,
                    novaSenha,
                }),
            });

            const message = await response.text();
            if (response.ok) {
                alert("Senha atualizada com sucesso");
            } else {
                alert(message);
            }
        } catch (error) {
            console.error("Erro ao atualizar senha:", error);
            alert("Erro ao atualizar senha");
        }
    };

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.container}>
                    <Text style={styles.title}>Perfil</Text>

                    {fotoPerfil ? (
                        <Image source={{ uri: fotoPerfil }} style={{ width: 100, height: 100, borderRadius: 50 }} />
                    ) : (
                        <Text>Sem foto de perfil</Text>
                    )}

                    <Pressable onPress={selecionarFoto} style={styles.pressable}>
                        <Text style={styles.pressable_text}>Alterar Foto de Perfil</Text>
                    </Pressable>

                    <TextInput
                        style={styles.input}
                        placeholder="Nome"
                        value={nome}
                        onChangeText={setNome}
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Sobrenome"
                        value={sobreNome}
                        onChangeText={setSobreNome}
                    />

                    <Pressable onPress={atualizarNome} style={styles.pressable}>
                        <Text style={styles.pressable_text}>Atualizar Nome e Sobrenome</Text>
                    </Pressable>

                    <TextInput
                        style={styles.input}
                        placeholder="Senha Atual"
                        value={senhaAtual}
                        onChangeText={setSenhaAtual}
                        secureTextEntry
                    />
                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        value={novaSenha}
                        onChangeText={setNovaSenha}
                        secureTextEntry
                    />

                    <Pressable onPress={atualizarSenha} style={styles.pressable}>
                        <Text style={styles.pressable_text}>Atualizar Senha</Text>
                    </Pressable>
                </View>
            </View>
        </ScrollView>
    );
};

export default Profile;
