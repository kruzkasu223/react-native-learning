import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native"
import { ColourBox } from "../components/ColourBox"

const COLOURS = [
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
]

export const ColourPalette = ({ route }) => {
  const { name, colours } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{name}</Text>
      <FlatList
        data={colours}
        keyExtractor={(colour) => colour.name}
        renderItem={({ item }) => <ColourBox colour={item} />}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 3,
  },
})
