import { Text, View, Switch, StyleSheet } from "react-native"

export const ColourSwitchInput = ({ colour, onChangeHandler, isSelected }) => {
  return (
    <View style={styles.container}>
      <View style={styles.label}>
        <View style={[{ backgroundColor: colour.hexCode }, styles.box]}></View>
        <Text style={styles.labelText}>{colour.colorName}</Text>
      </View>
      <Switch
        onValueChange={(value) => onChangeHandler(value, colour)}
        value={isSelected}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 4,
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
    borderBottomWidth: 1,
    borderColor: "black",
  },
  label: {
    alignItems: "center",
    flexDirection: "row",
  },
  labelText: {
    fontWeight: "bold",
  },
  box: {
    width: 20,
    height: 20,
    marginRight: 6,
    borderRadius: 2,
    elevation: 2,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.3,
    shadowRadius: 1,
  },
})
