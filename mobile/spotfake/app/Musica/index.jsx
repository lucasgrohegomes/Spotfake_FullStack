import React, { useContext, useState, useEffect } from "react";
import { View, Pressable, Image, ScrollView, Text } from "react-native";
import { useFonts } from "expo-font";
import styles from "../Style";
import { MusicContext } from "../../scripts/MusicContext";

export default function Musica() {
    const [musicData, setMusicData] = useState({})
    const [playingStatus, setPlayingStatus] = useState(false)

    const { musica, setMusica } = useContext(MusicContext)
    const [fontsLoaded] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });
    if (!fontsLoaded) {
        return null;
    }

    useEffect(() => {
        const getMusica = async () => {
            try {
                const response = await fetch('http://localhost:8000/musicas/musica', {
                    method: 'POST',
                    headers: {
                        "Accept": "application/json",
                        "Content-type": "application/json"
                    },
                    body: JSON.stringify({ id: musica })
                })
                if (response.ok) {
                    const data = await response.json()
                    setMusicData(data)
                    setMusica(null)
                }
            } catch (e) {
                console.log(e)
            }
        }
        getMusica()
    }, [])


    return (
        <ScrollView style={styles.scrollview}>
            <View style={styles.outer_container}>
                <View style={styles.container}>

                    <View style={styles.button_container}>
                        <Text style={styles.black_text}>00:00</Text>
                        <Text style={styles.title}>{musicData.titulo}</Text>
                        <Text style={styles.black_text}>{Math.trunc(musicData.duracao / 60).toString().padStart(2, '0')}:{(musicData.duracao % 60).toString().padStart(2, '0')}</Text>
                    </View>
                    <View style={styles.button_container}>
                        <Pressable>
                            <Image source={require('../../assets/images/previous.png')} style={styles.lil_photo} />
                        </Pressable>
                        <Pressable onPress={() => setPlayingStatus(!playingStatus)}>
                            <Image source={playingStatus ? require('../../assets/images/pause.png') : require('../../assets/images/play.png')} style={{ ...styles.lil_button, width: 60, height: 60 }} />
                        </Pressable>
                        <Pressable>
                            <Image source={require('../../assets/images/next.png')} style={styles.lil_photo} />
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}