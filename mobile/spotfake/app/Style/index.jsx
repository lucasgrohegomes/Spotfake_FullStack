import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  scrollview: {
    backgroundColor: "#E31E1E",
    width: "100%"
  },

  modal_scrollview: {
    backgroundColor: "white",
    padding: 20,
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

  profile_container: {
    padding: 80,
    backgroundColor: "white",
    width: 400,
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

  modal_container: {
    flex: 1,
    alignSelf: 'center',
    justifyContent: "center",
    alignItems: "center",
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
    margin: 10,
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

  black_text: {
    fontSize: 18,
    color: "black",
    textAlign: "center",
    fontFamily: "DancingScript",
    fontWeight: "bold",
  },

  logo: {
    width: 250,
    height: 250,
  },

  image: {
    width: 200,
    height: 200,
    borderRadius: 100,
    alignSelf: "center",
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
  },

  home_container: {
    flex: 1,
    flexDirection: "column",
  },

  list: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "space-around",
  },

  list_container: {
    display: "flex",
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    padding: 30,
    marginTop: 5,
    marginBottom: 5,
  },

  navbar: {
    display: "flex",
    backgroundColor: "#E31E1E",
    alignItems: "center",

  },

  navbar_pressable: {
    flex: 1,
    height: 60,
    backgroundColor: "#E31E1E",
    alignItems: "center",
    justifyContent: "center",
  },

  footer: {
    flex: 0.15,
    paddingTop: 10,
    backgroundColor: '#bb2424',
    flexDirection: 'row',
    height: 100,
    justifyContent: "space-around"
  },

  profile: {
    width: 50,
    height: 50,
    borderRadius: 100,
  },

  artist_photo: {
    width: 140,
    height: 140,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    border: "solid",
    borderColor: "#bb2424",
    borderBottomColor: '#E31E1E'
  },

  artist_button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 140,
    height: 180,
    backgroundColor: '#E31E1E',
    borderRadius: 20,
  },

  album_photo: {
    width: 300,
    height: 180,
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    border: "solid",
    borderColor: "#bb2424",
    borderBottomColor: '#E31E1E'
  },

  album_button: {
    alignItems: 'center',
    justifyContent: 'flex-start',
    width: 300,
    height: 230,
    backgroundColor: '#E31E1E',
    borderRadius: 20
  },


});

export default styles;


