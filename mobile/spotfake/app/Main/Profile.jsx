import React, { useState, useEffect } from "react";
import { View, Text, TextInput, Pressable, Alert, ScrollView, Image } from "react-native";
import { useFonts } from "expo-font";
import AsyncStorage from '@react-native-async-storage/async-storage';
import styles from "../Style/Style";
import * as ImagePicker from 'expo-image-picker';

const Profile = () => {
    const [loaded, error] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });

    const [image, setImage] = useState('')

    const handleImagePickerPress = async() => {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [1, 1],
            quality: 1,
        })

        if (!result.canceled) {
            setImage(result.assets[0].uri)
        }
    }

    return (
        <View style={styles.outer_container}>
            <View style={styles.main_container}>
                { image && <Image source={{uri: image}} style={styles.image}/> }
                <View>
                    <Pressable style={styles.pressable} onPress={handleImagePickerPress}>
                        <Text style={styles.pressable_text}>Open Picker</Text>
                    </Pressable>
                    <Pressable style={styles.pressable} onPress={() => setImage('')}>
                        <Text style={styles.pressable_text}>Reset Image</Text>
                    </Pressable>
                </View>
            </View>
        </View>
    );
};

export default Profile;
