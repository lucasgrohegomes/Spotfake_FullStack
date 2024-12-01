import React, { useContext, useState, useEffect } from "react";
import { View, FlatList, Pressable, Image, ScrollView, Text } from "react-native";
import { useFonts } from "expo-font";
import styles from "../Style";
import { router } from 'expo-router';
import { MusicContext } from "../../scripts/MusicContext";

export default function Artist() {
    const { artista, setArtista } = useContext(MusicContext)
    const { album, setAlbum } = useContext(MusicContext)

    const [fontsLoaded] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    const [artistaData, setArtistaData] = useState({})
    const [albums, setAlbuns] = useState([])

    useEffect(() => {
        if (album) {
            router.push("/Album");
        }
    }, [album])

    useEffect(() => {
        setAlbum(null)
    }, [])

    useEffect(() => {
        const getArtist = async () => {
            try {
                const response = await fetch('http://localhost:8000/musicas/artista', {
                    method: 'POST',
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({ id: artista })
                }
                )
                if (response.ok) {
                    const data = await response.json()
                    setArtistaData(data.artista)
                    setAlbuns(data.albums)
                    setArtista(null)
                }
            } catch (error) {
                console.error(error)
            }
        }
        getArtist()
    }, [])

    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.amazing_container}>
                    <View style={styles.artist_button}>
                        <Image
                            style={styles.artist_photo}
                            source={{ uri: artistaData.imageUrl }}
                        />
                        <Text style={styles.link_text}>{artistaData.nome}</Text>
                    </View>
                    <View style={styles.amazing_container}>
                        <Text style={styles.title}>Bio:</Text>
                        <Text style={styles.black_text}>{artistaData.bio}</Text>
                    </View>
                    <View style={styles.amazing_container}>
                        <Text style={styles.title}>Albuns recomendados</Text>
                        <FlatList
                            data={albums}
                            keyExtractor={(item) => item.id}
                            renderItem={({ item }) => <Pressable onPress={() => setAlbum(item.id)}>
                                <View style={styles.album_button}>
                                    <Image resizeMode="contain" source={{ uri: item.coverImageUrl }} style={styles.album_photo} />
                                    <Text style={styles.title}>{item.title}</Text>
                                    <Text>{artistaData.nome}</Text>
                                </View>
                            </Pressable>
                            }
                            numColumns={2}
                            contentContainerStyle={{ gap: 10 }}
                            columnWrapperStyle={{ gap: 10 }}
                            scrollEnabled={false}
                        />
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}