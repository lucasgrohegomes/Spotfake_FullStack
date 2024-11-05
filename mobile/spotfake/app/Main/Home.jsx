import React, { useState } from "react";
import { View, Text, TextInput, Pressable, Image, ScrollView } from "react-native";
import { Link, router } from "expo-router";
import { useFonts } from "expo-font";
import styles from "../Style/Style";

const Home = () => {
    const [loaded, error] = useFonts({
        'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
    });

    return (
        <></>
    )
}

export default Home;