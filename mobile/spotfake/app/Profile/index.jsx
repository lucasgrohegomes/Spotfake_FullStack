import React, { useContext, useState, useEffect } from "react";
import { View, Text, Pressable, Image, TextInput, ScrollView } from "react-native";
import { Link } from "expo-router";
import { useFonts } from "expo-font";
import styles from "../Style";
import * as ImagePicker from 'expo-image-picker';
import { jwtDecode } from 'jwt-decode'
import { LoginContext } from "../../scripts/LoginContext";

// A FOTO NÃO SALVA SOCORRO
const Profile = () => {
    const { foto, setFoto, token, userData, setUserData } = useContext(LoginContext)
    const info = jwtDecode(token)
    const [formData, setFormData] = useState({ foto: '', email: info.email, senha: '' })
    const [fontsLoaded] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    const getUserData = async () => {
        try {
            const response = await fetch("http://localhost:8000/usuarios/usuario", {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.json()
            setUserData(data)
            setFoto(data.foto)
            console.log(JSON.stringify(userData))
        } catch (error) {
            console.log(error)
        }
    };

    useEffect(() => {
        getUserData();
    }, [])

    const handleImagePickerPress = async () => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if (!result.canceled) {
            setFoto(result.assets[0].uri)
            handleSendImage();
        }
    }

    const handleSendImage = async () => {
        try {
            const data = {
                "file": foto,
                "upload_preset": "ml_default"
            }
            const res = await fetch('https://api.cloudinary.com/v1_1/dsoehv79q/upload',
                {
                    method: 'POST',
                    headers: {
                        'content-type': 'application/json'
                    },
                    body: JSON.stringify(data)
                })
            const result = await res.json()
            console.log(result.url)

            setFormData({ ...formData, foto: result.url })
            console.log(formData.foto)
            updatePic();


        } catch (error) {
            console.log(error)
        }
    };

    const changePass = async () => {
        try {
            const response = await fetch("http://localhost:8000/usuarios/mudar_senha", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });

            const data = await response.text()
            if (response.ok) {
                if (data == "Senha atualizada com sucesso.") {
                    alert("Senha atualizada com sucesso.")
                }
            }
        } catch (error) {
            console.log(error)
        }
    }



    const updatePic = async () => {
        try {
            const response = await fetch("http://localhost:8000/usuarios/mudar_foto", {
                method: "PUT",
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData)
            });
            const data = await response.text()
            if (response.ok) {
                if (data == "Foto de perfil atualizada com sucesso.") {
                    alert("Foto de perfil atualizada com sucesso.")
                }
            }
        } catch (error) {
            console.log(error)
            console.log(formData)
        }
    }

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.profile_container}>
                    <Pressable onPress={() => handleImagePickerPress()}>
                        <Text style={styles.title}>Foto de Perfil - Clique para Editar</Text>
                        <Image style={styles.image} source={{ uri: foto }} />
                    </Pressable>
                </View>
                <View style={styles.container}>
                    {/* <Text style={styles.black_text}>{`Nome Completo: ${userData.nome} ${userData.sobreNome}`}</Text> */}
                    {/* <Text style={styles.black_text}>{`Status: ${userData.status}`}</Text> */}

                    <Text style={styles.black_text}>{`Nome Completo:   ${userData.nome} ${userData.sobreNome}`}</Text>
                    <Text style={styles.black_text}>{`Status:   ${userData.status}`}</Text>
                    <Text style={styles.black_text}>{`Quoficiente de Inteligência:   ${2}`}</Text>

                    <Pressable style={styles.pressable} onPress={() => updatePic()}>
                        <Text style={styles.pressable_text}>Salvar Imagem</Text>
                    </Pressable>
                </View>

                <View style={styles.container}>
                    <TextInput
                        style={styles.input}
                        placeholder="Nova Senha"
                        value={formData.senha}
                        onChangeText={(param) => setFormData({ ...formData, senha: param })}
                        secureTextEntry
                    />
                    <Pressable style={styles.pressable} onPress={changePass}>
                        <Text style={styles.pressable_text}>Mudar Senha</Text>
                    </Pressable>
                </View>

                <Link href={'/Home'}>
                    <Pressable style={styles.pressable}>
                        <Text style={styles.pressable_text}>Ir para a página principal.</Text>
                    </Pressable>
                </Link>
            </View>
        </ScrollView>
    );
};

export default Profile;
