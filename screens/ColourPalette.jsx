import { View, Text, SafeAreaView, FlatList, StyleSheet } from "react-native"
import { ColourBox } from "../components/ColourBox"

export const ColourPalette = ({ route }) => {
  const { paletteName, colors } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{paletteName}</Text>
      <FlatList
        data={colors}
        keyExtractor={(color) => color.colorName}
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
