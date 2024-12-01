import React, { useContext, useState, useEffect } from "react";
import { View, FlatList, Pressable, Image, ScrollView, Text } from "react-native";
import { useFonts } from "expo-font";
import styles from "../Style";
import { router } from 'expo-router';
import { MusicContext } from "../../scripts/MusicContext";

export default function Album() {
    const { album, setAlbum } = useContext(MusicContext)
    const { musica, setMusica } = useContext(MusicContext)

    const [fontsLoaded] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }
    const [albumData, setAlbumData] = useState({})
    const [musicsData, setMusicsData] = useState([])

    useEffect(() => {
        if (musica) {
            router.push("/Musica")
        }
    }, [musica]);

    useEffect(() => {
        setMusica(null)
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
                <View style={styles.amazing_container}>
                    <Image source={{uri: albumData.coverImageUrl}} style={styles.image}/>
                    <Text style={styles.title}>{albumData.title}</Text>
                </View>
                <View style={styles.list_container}>
                    <FlatList
                        data={musicsData}
                        keyExtractor={(item) => item.id}
                        renderItem={({item}) => <Pressable onPress={() => setMusica(item.id)}>
                                                    <View style={styles.music_container}>
                                                        <View style={{
                                                            flexDirection: 'row', 
                                                            alignItems: 'center', 
                                                            gap: 10}}>
                                                            <Image resizeMethod="" source={{uri: albumData.coverImageUrl}} style={styles.album_photo}/>
                                                            
                                                        </View>
                                                        <Text style={{fontWeight: 'bold', fontSize: 17}}>{item.titulo}</Text>
                                                        <Text>{Math.trunc(item.duracao/60).toString().padStart(2, '0')}:{(item.duracao % 60).toString().padStart(2, '0')}</Text>
                                                    </View>
                                                </Pressable>
                    }
                    contentContainerStyle={{gap: 5}}
                    scrollEnabled={false}
                    />
                </View>
            </View>
        </ScrollView>
    )
}