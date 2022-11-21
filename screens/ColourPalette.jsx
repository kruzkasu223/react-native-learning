import { View, Text, FlatList, StyleSheet, Clipboard } from "react-native"
import { TouchableOpacity } from "react-native-gesture-handler"
import { ColourBox } from "../components/ColourBox"
import Toast from "react-native-root-toast"

export const ColourPalette = ({ route }) => {
  const { paletteName, colors } = route.params

  return (
    <View style={styles.container}>
      <Text style={styles.title}>{paletteName}</Text>
      <FlatList
        data={colors}
        keyExtractor={(color) => color.colorName}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              Clipboard.setString(item.hexCode)
              Toast.show(`${item.colorName} copied to clipboard`, {
                duration: 300,
              })
            }}
          >
            <ColourBox colour={item} />
          </TouchableOpacity>
        )}
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
