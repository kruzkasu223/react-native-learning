// import { StatusBar } from "expo-status-bar"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"
import { ColourBox } from "./components/ColourBox"

const App = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colours
        </Text>
        <View>
          <ColourBox colour={{ name: "Cyan", code: "#2aa198" }} />
          <ColourBox colour={{ name: "Blue", code: "#268bd2" }} />
          <ColourBox colour={{ name: "Magenta", code: "#d33682" }} />
          <ColourBox colour={{ name: "Orange", code: "#cb4b16" }} />
        </View>
        {/* <StatusBar style="auto" /> */}
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
