import { useFonts } from "expo-font";

const Fonts = () => {
    const [loaded, error] = useFonts({
    'DancingScript': require('../../assets/fonts/DancingScript-VariableFont_wght.ttf'),
  });

}

export default Fonts;