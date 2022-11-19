import { View, Text, StyleSheet } from "react-native"

export const ColourBox = ({ colour }) => {
  const bgColour = {
    backgroundColor: colour.code,
  }

  const textColour = {
    color:
      parseInt(colour.code.replace("#", ""), 16) > 0xffffff / 1.1
        ? "black"
        : "white",
  }

  return (
    <View style={[styles.box, bgColour]}>
      <Text style={[styles.text, textColour]}>
        {colour.name} {colour.code}
      </Text>
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
  },
})
