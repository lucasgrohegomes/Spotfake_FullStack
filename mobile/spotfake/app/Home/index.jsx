import React, { useContext, useState, useEffect } from "react";
import { View, Pressable, Image, ScrollView } from "react-native";
import { useFonts } from "expo-font";
import styles from "../Style";
import { router } from 'expo-router';
import { jwtDecode } from 'jwt-decode'
import { LoginContext } from "../../scripts/LoginContext";
import { MusicContext } from "../../scripts/MusicContext";

const Home = () => {
    // const { album, setAlbum, } = useContext(MusicContext)
    // const { musica, setMusica, } = useContext(MusicContext)
    // const { artista, setArtista } = useContext(MusicContext)
    // const { foto, setFoto, token, setUserData } = useContext(LoginContext)

    // const info = jwtDecode(token)
    // const [formData, setFormData] = useState({ foto: '', email: info.email, senha: '' })
    // const [fontsLoaded] = useFonts({
    //     'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    // });
    // if (!fontsLoaded) {
    //     return null;
    // }

    // const [artists, setArtists] = useState([])
    // const [albums, setAlbums] = useState([])

    // useEffect(() => {
    //     const getUserData = async () => {
    //         try {
    //             const response = await fetch("http://localhost:8000/usuarios/usuario", {
    //                 method: 'POST',
    //                 headers: {
    //                     'Content-Type': 'application/json',
    //                 },
    //                 body: JSON.stringify(formData)
    //             });

    //             const data = await response.json()
    //             setUserData(data)
    //             setFoto(data.foto)
    //         } catch (error) {
    //             console.log(error)
    //         }
    //     };
    //     getUserData();
    // }, [])

    // useEffect(() => {
    //     const getArtists = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8000/musicas/artistas', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: null
    //             })
    //             const data = await response.json()
    //             setArtists(data)
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     }
    //     getArtists()
    // }, [])

    // useEffect(() => {
    //     const getAlbums = async () => {
    //         try {
    //             const response = await fetch('http://localhost:8000/musicas/albuns', {
    //                 method: 'GET',
    //                 headers: {
    //                     'Accept': 'application/json',
    //                     'Content-Type': 'application/json'
    //                 },
    //                 body: null
    //             })
    //             const data = await response.json()
    //             setAlbums(data)
    //         } catch (e) {
    //             console.log(e)
    //         }
    //     }
    //     getAlbums()
    // }, [])


    return (
        <ScrollView style={styles.home_container}>

            <View style={styles.list_container}>
                <Image source={require("../../assets/images/intermusic_logo.png")} style={styles.profile} />
            </View>

            <View style={styles.list_container}>
                <Image source={require("../../assets/images/intermusic_logo.png")} style={styles.profile} />
            </View>

            <View style={styles.navbar}>
                <Pressable onPress={() => { router.push('/Profile') }}>
                    <Image source={require("../../assets/images/intermusic_logo.png")} style={styles.profile} />
                    {/* <Image source={{ uri: foto }} style={styles.profile} /> */}
                </Pressable>
            </View>
        </ScrollView>
    );
};

export default Home