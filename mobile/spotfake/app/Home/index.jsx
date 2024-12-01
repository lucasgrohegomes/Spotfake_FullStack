import React, { useContext, useState, useEffect } from "react";
import { View, FlatList, Pressable, Image, ScrollView, Text } from "react-native";
import { useFonts } from "expo-font";
import styles from "../Style";
import { router } from 'expo-router';
import { jwtDecode } from 'jwt-decode'
import { MusicContext } from "../../scripts/MusicContext";
import { LoginContext } from "../../scripts/LoginContext";

export default function Home() {
    const { album, setAlbum, } = useContext(MusicContext)
    const { artista, setArtista } = useContext(MusicContext)
    const { setFoto, token, setUserData } = useContext(LoginContext)

    const info = jwtDecode(token)
    const [formData, setFormData] = useState({ foto: '', email: info.email, senha: '' })
    const [fontsLoaded] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    const [artists, setArtists] = useState([])
    const [albums, setAlbums] = useState([])

    useEffect(() => {
        if (artista) {
            router.push("/Artista");
        }
        if (album) {
            router.push("/Album");
        }
    }, [artista, album]);

    useEffect(() => {
        setAlbum(null)
        setArtista(null)
    }, [])

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
        const getArtists = async () => {
            try {
                const response = await fetch('http://localhost:8000/musicas/artistas', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: null
                })
                const data = await response.json()
                setArtists(data)
            } catch (e) {
                console.log(e)
            }
        }
        getArtists()
    }, [])

    useEffect(() => {
        const getAlbums = async () => {
            try {
                const response = await fetch('http://localhost:8000/musicas/albuns', {
                    method: 'GET',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: null
                })
                const data = await response.json()
                setAlbums(data)
            } catch (e) {
                console.log(e)
            }
        }
        getAlbums()
    }, [])


    return (
        <ScrollView style={styles.home_container}>
            <View style={styles.list}>
                <View style={styles.list_container}>
                <Text style={styles.title}>Artistas Maneiros</Text>
                    <FlatList
                        data={artists}
                        keyExtractor={(item) => item.id}
                        renderItem={({ item }) => 
                                                <Pressable onPress={() => {setArtista(item.id)}}>
                                                    <View style={styles.artist_button}>
                                                        <Image resizeMethod="" source={{ uri: item.imageUrl }} style={styles.artist_photo} 
                                                        onError={(e) => console.log('Erro ao carregar a imagem:', e.nativeEvent.error)}
                                                        />
                                                        <Text style={styles.link_text}>{item.nome}</Text>
                                                    </View>
                                                 </Pressable>
                        }
                        horizontal
                        contentContainerStyle={{gap: 5}}
                        showHorizontalScrollIndicator={false}
                        />
                </View>

                <View style={styles.list_container}>
                <Text style={styles.title}>Albuns Maneiros</Text>
                <FlatList
                        data={albums}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <Pressable onPress={() => setAlbum(item.id)}>
                                                    <View style={styles.album_button}>
                                                        <Image resizeMode="contain" source={{uri: item.coverImageUrl}} style={styles.album_photo}/>
                                                        <Text style={styles.link_text}>{item.title}</Text>
                                                        <Text style={styles.black_text}>{artists[item.artista_id - 1].nome}</Text>
                                                    </View>
                                                </Pressable>
                        }
                        numColumns={2}
                        contentContainerStyle={{gap: 10}}
                        columnWrapperStyle={{gap: 10}}
                        scrollEnabled={false}
                    />
                </View>
            </View>
        </ScrollView>
    );
};