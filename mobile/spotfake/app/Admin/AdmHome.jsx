import React, { useState } from "react";
import { View, Text, Pressable, ScrollView, Modal } from "react-native";
import { useFonts } from "expo-font";
import styles from "../Style/Style";

const AdmHome = () => {
    const [loaded, error] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });

    const [modalVisible, setModalVisible] = useState(false);
    const [modalContent, setModalContent] = useState(null);

    //criar variavel para armazenar o conteudo da modal

    //criar uma função que modifica o conteudo da modal a partir do botao selecionado

    const dadosModal = (botao) => {
        switch (botao) {
            case "Todos":
                setModalContent(
                    <Text style={styles.title}>
                        Exibindo todos os usuários
                    </Text>
                )
                break;

            case "Um":
                setModalContent(
                    <Text style={styles.title}>
                        Exibindo um usuário
                    </Text>
                )
                break;

            case "Deletar":
                setModalContent(
                    <Text style={styles.title}>
                        Deletando usuário
                    </Text>
                )
                break;

            default:
                setModalContent(null)
                break;
        }
        setModalVisible(true);
    }
    return (
        <ScrollView style={styles.scrollview}>
            <Modal
                visible={modalVisible}
                transparent={true}
                animationType="slide"
                onRequestClose={() => setModalVisible(false)}
            >
                <ScrollView style={styles.modal_scrollview}>
                    <View style={styles.modal_container}>
                        {modalContent}
                        <Pressable style={styles.pressable} onPress={() => setModalVisible(false)}>
                            <Text style={styles.pressable_text}>Cancelar</Text>
                        </Pressable>
                    </View>
                </ScrollView>
            </Modal>

            <View style={styles.outer_container}>
                <View style={styles.main_container}>
                    <Text style={styles.title}>Hub dos Admins</Text>
                    <View style={styles.container}>

                        <Pressable style={styles.pressable}>
                            <Text style={styles.pressable_text} onPress={() => dadosModal('Todos')}>Todos os Usuários</Text>
                        </Pressable>

                        <Pressable style={styles.pressable}>
                            <Text style={styles.pressable_text} onPress={() => dadosModal('Um')}>Selecionar um Usuário</Text>
                        </Pressable>

                        <Pressable style={styles.pressable}>
                            <Text style={styles.pressable_text} onPress={() => dadosModal('Deletar')}>Deletar um Usuário</Text>
                        </Pressable>
                    </View>
                </View>
            </View>
        </ScrollView>
    )
}

export default AdmHome;