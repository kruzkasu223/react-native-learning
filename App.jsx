// import { StatusBar } from "expo-status-bar"
import { View, Text, SafeAreaView, StyleSheet } from "react-native"

const App = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={styles.container}>
        <Text style={styles.title}>
          Here are some boxes of different colours
        </Text>
        <View>
          <Text style={[styles.box, styles.cyan]}>Cyan</Text>
          <Text style={[styles.box, styles.blue]}>Blue</Text>
          <Text style={[styles.box, styles.magenta]}>Magenta</Text>
          <Text style={[styles.box, styles.orange]}>Orange</Text>
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
