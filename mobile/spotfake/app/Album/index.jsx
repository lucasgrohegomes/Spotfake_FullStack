import React, { useContext, useState, useEffect } from "react";
import { View, FlatList, Pressable, Image, ScrollView, Text } from "react-native";
import { useFonts } from "expo-font";
import styles from "../Style";
import { router } from 'expo-router';
import { jwtDecode } from 'jwt-decode'
import { MusicContext } from "../../scripts/MusicContext";
import { LoginContext } from "../../scripts/LoginContext";

export default function Album() {
    const { album, setAlbum } = useContext(MusicContext)
    const { musica, setMusica } = useContext(MusicContext)
    const { setFoto, token, setUserData } = useContext(LoginContext)

    const info = jwtDecode(token)
    const [formData, setFormData] = useState({ foto: '', email: info.email, senha: '' })
    const [fontsLoaded] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    const [albumData, setAlbumData] = useState({})
    const [musicsData, setMusicsData] = useState([])

    if(musica){
        router.push("/Musica")
    }

    useEffect(() => {
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
            } catch (error) {
                console.log(error)
            }
        };
        getUserData();
    }, [])


    useEffect(() => {
        const getAlbum = async() =>{
            try{
            const response = await fetch('http://localhost:8000/musicas/album', {
                method: "POST",
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: album})
            })

            if(response.ok){
                const data = await response.json()
                setAlbumData(data.album)
                setMusicsData(data.musicas)
                setAlbum(null)
            }
            }catch(e){
                console.log(e)
            }
        }
        getAlbum()
    }, [])

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.container}>
                    <Text>Hello</Text>
                </View>
            </View>
        </ScrollView>
    )
}