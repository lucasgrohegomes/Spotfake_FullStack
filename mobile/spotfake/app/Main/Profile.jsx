import React, { useState, useEffect } from "react";
import { View, Text, Pressable, Image, TextInput } from "react-native";
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
    const [senhaAtual, setSenhaAtual] = useState('lucas')
    const [novaSenha, setNovaSenha] = useState('')

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
    }, [])

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
            console.error("Error during password update:", error);
            alert("Erro ao atualizar a senha");
        }
    }

    return (
        <View style={styles.outer_container}>
            <View style={styles.main_container}>
                {image && <Image source={{ uri: image }} style={styles.image} />}
                <View>
                    <Pressable style={styles.pressable} onPress={handleImagePickerPress}>
                        <Text style={styles.pressable_text}>Adicionar Imagem de Perfil</Text>
                    </Pressable>
                    <Pressable style={styles.pressable} onPress={() => saveImage()}>
                        <Text style={styles.pressable_text}>Salvar Imagem</Text>
                    </Pressable>
                    <View style={styles.modal_container}> {/* Não é uma modal, apenas estou usando as mesmas formatações. */}
                        <Text>
                            {status}
                        </Text>
                    
                    <Pressable style={styles.pressable} onPress={resetImage}>
                        <Text style={styles.pressable_text}>Resetar Imagem</Text>
                    </Pressable>
                    </View>

                    <View style={styles.modal_container}> {/* Não é uma modal, apenas estou usando as mesmas formatações. */}
                        <Text>
                            {senhaAtual}
                        </Text>
                        <TextInput
                            style={styles.input}
                            placeholder="Password"
                            value={novaSenha}
                            onChangeText={setNovaSenha}
                            secureTextEntry
                        />
                        <Pressable style={styles.pressable} onPress={handlePasswordReset}>
                            <Text>Mudar Senha</Text>
                        </Pressable>
                    </View>

                </View>
                <Pressable style={styles.pressable}>
                    <Text style={styles.pressable_text}>Ir para a página principal.</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Profile;
