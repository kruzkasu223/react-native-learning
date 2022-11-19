import { View, Text, SafeAreaView, StyleSheet, FlatList } from "react-native"
import { ColourBox } from "./components/ColourBox"

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

const App = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        {/* <Text style={styles.title}>Solarized</Text> */}
        <FlatList
          data={COLOURS}
          keyExtractor={(colour) => colour.name}
          renderItem={({ item }) => <ColourBox colour={item} />}
          ListHeaderComponent={<Text style={styles.title}>Solarized</Text>}
        />
        {/* <ColourBox colour={{ name: "Cyan", code: "#2aa198" }} />
          <ColourBox colour={{ name: "Blue", code: "#268bd2" }} />
          <ColourBox colour={{ name: "Magenta", code: "#d33682" }} />
          <ColourBox colour={{ name: "Orange", code: "#cb4b16" }} /> */}
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingTop: 40,
  },
  SafeArea: {
    flex: 1,
  },
  title: {
    fontSize: 18,
    fontWeight: "bold",
    margin: 3,
  },
  box: {
    color: "white",
    fontWeight: "bold",
    margin: 3,
    padding: 6,
    textAlign: "center",
  },
  cyan: {
    backgroundColor: "#2aa198",
  },
  blue: {
    backgroundColor: "#268bd2",
  },
  magenta: {
    backgroundColor: "#d33682",
  },
  orange: {
    backgroundColor: "#cb4b16",
  },
})

export default App
