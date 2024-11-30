import { useContext } from 'react'
import { View, Image, Pressable } from 'react-native'
import { router, Stack, useSegments } from 'expo-router'
import { LoginContext, LoginProvider } from '../scripts/LoginContext'
import { MusicProvider } from '../scripts/MusicContext'
import styles from './Style'

function MainLayout() {
    const segments = useSegments()
    const { foto } = useContext(LoginContext)
    return (
        <>
            <Stack screenOptions={{
                headerStyle: {
                    backgroundColor: '#E31E1E'
                },
                headerTintColor: 'white'
            }}>
                <Stack.Screen name='index' options={{ headerTitle: 'Inicial' }} />
                <Stack.Screen name='Pagamento/index' options={{ headerTitle: 'Pague pls' }} />
                <Stack.Screen name='Registro/index' options={{ headerTitle: 'Registro' }} />
                <Stack.Screen name='Login/index' options={{ headerTitle: 'Login' }} />
                <Stack.Screen name='Profile/index' options={{ headerTitle: 'Perfil' }} />
                <Stack.Screen name='Home/index' options={{ headerTitle: 'Home' }} />
                <Stack.Screen name='Album/index' options={{ headerTitle: 'Album' }} />
                <Stack.Screen name='Artista/index' options={{ headerTitle: 'Artista' }} />
            </Stack>
            {
                segments[0] === 'Home' || segments[0] === 'Album' || segments[0] === 'Artista' && (
                    <View style={styles.footer}>
                        <Pressable onPress={() => { router.push('/Profile') }} style={styles.navbar_pressable} >
                            <Image source={{ uri: foto }} style={styles.profile} />
                        </Pressable>
                        <Pressable style={styles.navbar_pressable} >
                            <Image source={"https://cdn-icons-png.flaticon.com/512/45/45712.png"} style={styles.profile} />
                        </Pressable>
                    </View>
                )}
        </>
    )
}

export default function Layout() {
    return (
        <MusicProvider>
            <LoginProvider>
                <MainLayout />
            </LoginProvider>
        </MusicProvider>
    )
}
