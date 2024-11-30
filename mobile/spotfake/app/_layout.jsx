import { Stack } from 'expo-router'
import { LoginProvider } from '../scripts/LoginContext'
import { MusicProvider } from '../scripts/MusicContext'

export default function Layout() {
    return (
        <MusicProvider>
            <LoginProvider>
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
                    <Stack.Screen name='AdmHome/index' options={{ headerTitle: 'AdmHome' }} />
                    <Stack.Screen name='Home/index' options={{ headerTitle: 'Home' }} />
                </Stack>
            </LoginProvider>
        </MusicProvider>
    )
}