import { View, Text, StyleSheet } from "react-native"

export const ColourBox = ({ colour }) => {
  return (
    <View style={[styles.box, { backgroundColor: colour.code }]}>
      <Text style={styles.text}>{colour.name}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    margin: 3,
    padding: 6,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
    color: "white",
  },
})
