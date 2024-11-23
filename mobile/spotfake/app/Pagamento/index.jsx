import { useState } from "react";
import { View, Text, TextInput, StyleSheet, Pressable } from "react-native";
import styles from "../Style";

export default function Pagamento() {

    const [formData, setFormData] = useState({
        cartao: '',
        senha: '',
        data: '',
        CVV: ''

    })

    return (
        <View style={styles.modal_container}>
            <Text style={styles.title}>Ativar Modo Pay-to-Win</Text>
            <TextInput
                style={styles.input}
                placeholder='Numero do Cartão'
                value={formData.cartao}
                onChangeText={(params) => setFormData({ ...formData, cartao: params })}
            />
            <TextInput
                style={styles.input}
                placeholder='Senha'
                value={formData.cartao}
                onChangeText={(params) => setFormData({ ...formData, senha: params })}
            />
            <TextInput
                style={styles.input}
                placeholder='Data'
                value={formData.cartao}
                onChangeText={(params) => setFormData({ ...formData, data: params })}
            />
            <TextInput
                style={styles.input}
                placeholder='CVV'
                value={formData.cartao}
                onChangeText={(params) => setFormData({ ...formData, cvv: params })}
            />
            <Pressable style={styles.botao}>
                <Text>Assinar</Text>
            </Pressable>
        </View>
    )
}