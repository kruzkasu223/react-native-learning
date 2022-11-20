import { NavigationContainer } from "@react-navigation/native"
import { createStackNavigator } from "@react-navigation/stack"
import { ColourPalette } from "./screens/ColourPalette"
import { ColourPaletteModal } from "./screens/ColourPaletteModal"
import { Home } from "./screens/Home"

const RootStack = createStackNavigator()
const MainStack = createStackNavigator()

const MainStackScreen = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="Home" component={Home} />
      <MainStack.Screen
        name="ColourPalette"
        component={ColourPalette}
        options={({ route }) => ({ title: route.params.paletteName })}
      />
    </MainStack.Navigator>
  )
}

const App = () => {
  return (
    <NavigationContainer>
      <RootStack.Navigator screenOptions={{ presentation: "modal" }}>
        <RootStack.Screen
          name="Main"
          component={MainStackScreen}
          options={{ headerShown: false }}
        />
        <RootStack.Screen
          name="ColourPaletteModal"
          component={ColourPaletteModal}
          options={({ route }) => ({ title: route.params.name })}
        />
      </RootStack.Navigator>
    </NavigationContainer>
  )
}

export default App
