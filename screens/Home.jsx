import { useCallback, useEffect, useState } from "react"
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
} from "react-native"
import { ColourPalettePreview } from "../components/ColourPalettePreview"

export const Home = ({ route, navigation }) => {
  const newColourPalette = route?.params?.newColourPalette
  const [colourPalettes, setColourPalettes] = useState([])
  const [isRefreshing, setIsRefreshing] = useState(false)

  const fetchColourPalettes = useCallback(async () => {
    const res = await fetch(
      "https://color-palette-api.kadikraman.vercel.app/palettes"
    )
    if (res.ok) {
      const data = await res.json()
      setColourPalettes(data)
    }
  }, [])

  useEffect(() => {
    fetchColourPalettes()
  }, [])

  const handleRefresh = useCallback(async () => {
    setIsRefreshing(true)
    await fetchColourPalettes()
    setTimeout(() => {
      setIsRefreshing(false)
    }, 1000)
  }, [])

  useEffect(() => {
    if (newColourPalette) {
      setColourPalettes((c) => [newColourPalette, ...c])
    }
  }, [newColourPalette])

  return (
    <View style={styles.container}>
      <View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("ColourPaletteModal", {
              name: "Create New Colour Palette",
            })
          }}
        >
          <Text style={styles.createNewText}>Create New Colour Palette</Text>
        </TouchableOpacity>
      </View>
      <FlatList
        data={colourPalettes}
        keyExtractor={(colors) => colors.id}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("ColourPalette", item)
            }}
          >
            <ColourPalettePreview palette={item} />
          </TouchableOpacity>
        )}
        refreshing={isRefreshing}
        onRefresh={handleRefresh}
        ListEmptyComponent={
          <Text style={styles.text}>There's nothing to display...</Text>
        }
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
    paddingBottom: 40,
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
  createNewText: {
    marginLeft: 7,
    marginBottom: 10,
    fontSize: 18,
    color: "#de3163",
    fontWeight: "bold",
  },
})
