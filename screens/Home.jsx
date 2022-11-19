import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native"
import { ColourPalettePreview } from "../components/ColourPalettePreview"

const COLOUR_PALETTES = [
  {
    paletteName: "Solarized",
    paletteColour: [
      { name: "Base03", code: "#002b36" },
      { name: "Base02", code: "#073642" },
      { name: "Base01", code: "#586e75" },
      { name: "Base00", code: "#657b83" },
      { name: "Base0", code: "#839496" },
      { name: "Base1", code: "#93a1a1" },
      { name: "Base2", code: "#eee8d5" },
      { name: "Base3", code: "#fdf6e3" },
      { name: "Yellow", code: "#b58900" },
      { name: "Orange", code: "#cb4b16" },
      { name: "Red", code: "#dc322f" },
      { name: "Magenta", code: "#d33682" },
      { name: "Violet", code: "#6c71c4" },
      { name: "Blue", code: "#268bd2" },
      { name: "Cyan", code: "#2aa198" },
      { name: "Green", code: "#859900" },
    ],
  },
  {
    paletteName: "Rainbow",
    paletteColour: [
      { name: "Red", code: "#FF0000" },
      { name: "Orange", code: "#FF7F00" },
      { name: "Yellow", code: "#FFFF00" },
      { name: "Green", code: "#00FF00" },
      { name: "Violet", code: "#8B00FF" },
    ],
  },
  {
    paletteName: "Frontend Masters",
    paletteColour: [
      { name: "Red", code: "#c02d28" },
      { name: "Black", code: "#3e3e3e" },
      { name: "Grey", code: "#8a8a8a" },
      { name: "White", code: "#ffffff" },
      { name: "Orange", code: "#e66225" },
    ],
  },
]

export const Home = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <FlatList
        data={COLOUR_PALETTES}
        keyExtractor={(colours) => colours.paletteName}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColourPalette", {
                name: item.paletteName,
                colours: item.paletteColour,
              })
            }}
          >
            <ColourPalettePreview palette={item} />
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
})
