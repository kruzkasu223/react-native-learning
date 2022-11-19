import { View, Text, SafeAreaView, StyleSheet } from "react-native"

const App = () => {
  return (
    <SafeAreaView style={styles.SafeArea}>
      <View style={[styles.container, styles.pink]}>
        <Text>Helloooooo</Text>
        <Text style={{ color: "white" }}>Helloooooo</Text>
        <Text>Helloooooo</Text>
      </View>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  pink: {
    backgroundColor: "pink",
  },
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    borderColor: "lavendar",
    borderWidth: 5,
  },
  SafeArea: {
    flex: 2,
  },
})

export default App
