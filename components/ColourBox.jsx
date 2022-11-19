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
        {colour.name}: {colour.code}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    margin: 3,
    padding: 6,

    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
})
