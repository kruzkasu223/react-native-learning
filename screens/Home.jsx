import { useCallback, useEffect, useState } from "react"
import {
  View,
  TouchableOpacity,
  FlatList,
  StyleSheet,
  Text,
  // RefreshControl,
} from "react-native"
import { ColourPalettePreview } from "../components/ColourPalettePreview"

export const Home = ({ navigation }) => {
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

  return (
    <View style={styles.container}>
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
        // refreshControl={<RefreshControl refreshing={true} onRefresh={()=>{}} />}
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
  },
  text: {
    fontSize: 16,
    textAlign: "center",
    fontWeight: "bold",
  },
})
