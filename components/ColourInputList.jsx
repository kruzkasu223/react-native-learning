import { useCallback } from "react"
import { FlatList, StyleSheet, Text, View } from "react-native"
import { COLORS } from "../data"
import { ColourSwitchInput } from "./ColourSwitchInput"

export const ColourInputList = ({ selectedColours, setSelectedColours }) => {
  const onChangeHandler = useCallback((value, colour) => {
    if (value) {
      setSelectedColours((c) => [...c, colour])
    } else {
      setSelectedColours((c) =>
        c?.filter((e) => e.colorName !== colour.colorName)
      )
    }
  }, [])

  return (
    <View style={styles.container}>
      <Text style={styles.inputNameLabel}>Choose atleast 5 colours</Text>
      <FlatList
        data={COLORS}
        keyExtractor={(colour) => colour.colorName}
        renderItem={({ item }) => (
          <ColourSwitchInput
            colour={item}
            isSelected={
              !!selectedColours?.find((c) => c.colorName === item.colorName)
            }
            onChangeHandler={onChangeHandler}
          />
        )}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    marginVertical: 6,
    paddingBottom: 35,
  },
  inputNameLabel: {
    fontSize: 16,
    marginVertical: 6,
  },
})
