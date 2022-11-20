import { View, Text, FlatList, StyleSheet } from "react-native"

export const ColourPalettePreview = ({ palette }) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{palette.paletteName}</Text>
      <View>
        <FlatList
          data={palette.colors.slice(0, 5)}
          keyExtractor={(colors) => colors.hexCode}
          renderItem={({ item }) => (
            <View
              style={[styles.box, { backgroundColor: item.hexCode }]}
            ></View>
          )}
          horizontal
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    margin: 5,
  },
  box: {
    width: 40,
    height: 40,
    margin: 3,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
    borderRadius: 2,
  },
  text: {
    marginLeft: 3,
    fontSize: 16,
    fontWeight: "bold",
  },
})
