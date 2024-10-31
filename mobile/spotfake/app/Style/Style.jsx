import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    scrollview: {
      backgroundColor: "#E31E1E",
    },

    outer_container: {
      flex: 1,
      backgroundColor: "#E31E1E",
      alignItems: "center",
    },

    main_container: {
      flex: 1,
      backgroundColor: "white",
      width: 1300,
      padding: 16,
      margin: 25,
      alignItems: "center",
      borderRadius: 10,
    },

    container: {
      flex: 1,
      backgroundColor: "white",
      width: 400,
      justifyContent: "center",
      padding: 16,
      margin: 25,
      alignItems: "center",
      borderRadius: 10,
    },

    title: {
      fontSize: 24,
      marginBottom: 16,
      textAlign: "center",
    },

    input: {
      height: 40,
      width: 300,
      borderColor: "#ccc",
      borderWidth: 1,
      marginBottom: 12,
      paddingHorizontal: 8,
      color: "red",
      borderRadius: 5,
    },

    pressable: {
      height: 40,
      width: 300,
      backgroundColor: "#E31E1E",
      borderRadius: 5,
      justifyContent: "center",
    },

    pressable_text: {
      fontSize: 18,
      color: "white",
      textAlign: "center",
      fontFamily: "DancingScript",
      fontWeight: "bold",
    },

    logo: {
      width: 250,
      height: 250,
    },

    link_pressable: {
      height: 30,
      width: 150,
      backgroundColor: "#E31E1E",
      justifyContent: "center",
      marginTop: 20,
      borderRadius: 5,
    },

    link_text: {
      fontSize: 20,
      color: "white",
      textAlign: "center",
      fontFamily: "DancingScript",
      fontWeight: "bold",
    }
  });

  export default styles;


