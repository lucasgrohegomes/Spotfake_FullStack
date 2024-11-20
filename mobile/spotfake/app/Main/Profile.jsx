import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Image } from "react-native";
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
                    </View>
                    <Pressable style={styles.pressable} onPress={resetImage}>
                        <Text style={styles.pressable_text}>Resetar Imagem</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.pressable}>
                    <Text style={styles.pressable_text}>Ir para a página principal.</Text>
                </Pressable>
            </View>
        </View>
    );
};

export default Profile;
