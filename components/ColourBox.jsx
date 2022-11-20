import { View, Text, StyleSheet } from "react-native"

const getTextColour = (hexCode) => {
  const rgb = parseInt(hexCode.replace("#", ""), 16)
  const r = (rgb >> 16) & 0xff
  const g = (rgb >> 8) & 0xff
  const b = (rgb >> 0) & 0xff
  const luma = 0.2126 * r + 0.7152 * g + 0.0722 * b
  return luma > 110 ? "black" : "white"
}

export const ColourBox = ({ colour }) => {
  const bgColour = {
    backgroundColor: colour.hexCode,
  }

  const textColour = {
    color: getTextColour(colour.hexCode),
  }

  return (
    <View style={[styles.box, bgColour]}>
      <Text style={[styles.text, textColour]}>
        {colour.colorName}: {colour.hexCode}
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  box: {
    margin: 3,
    padding: 6,
    borderRadius: 4,
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
