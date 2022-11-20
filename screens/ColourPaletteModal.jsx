import { useCallback, useState } from "react"
import {
  Alert,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native"
import { ColourInputList } from "../components/ColourInputList"

export const ColourPaletteModal = ({ navigation }) => {
  const [colourPaletteName, setColourPaletteName] = useState("")
  const [selectedColours, setSelectedColours] = useState([])

  const handleSubmit = useCallback(() => {
    if (!colourPaletteName || selectedColours?.length < 5) {
      Alert.alert(
        "Please provide proper inputs",
        !colourPaletteName
          ? "Enter colour palette name"
          : selectedColours?.length < 5
          ? "Choose atleast 5 colours"
          : ""
      )
    } else {
      const newColourPalette = {
        id: parseInt(Math.random() * 10000000000),
        paletteName: colourPaletteName,
        colors: selectedColours,
      }
      navigation.navigate("Home", { newColourPalette })
    }
  }, [colourPaletteName, selectedColours])

  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.inputNameLabel}>Name of your colour palette</Text>
        <TextInput
          style={styles.inputName}
          value={colourPaletteName}
          onChangeText={setColourPaletteName}
        />
      </View>

      <View>
        <ColourInputList
          selectedColours={selectedColours}
          setSelectedColours={setSelectedColours}
        />
      </View>

      <View>
        <TouchableOpacity
          onPress={handleSubmit}
          style={styles.submitBtn}
          // disabled={!colourPaletteName || selectedColours?.length < 5}
        >
          <Text style={styles.submitBtnText}>Submit</Text>
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    paddingBottom: 160,
    justifyContent: "space-between",
  },
  inputNameLabel: {
    fontSize: 16,
    marginVertical: 6,
  },
  inputName: {
    borderWidth: 1,
    borderRadius: 4,
    paddingVertical: 4,
    paddingHorizontal: 8,
  },
  submitBtn: {
    padding: 8,
    backgroundColor: "#de3163",
    borderRadius: 4,
  },
  submitBtnText: {
    color: "white",
    textAlign: "center",
  },
})
