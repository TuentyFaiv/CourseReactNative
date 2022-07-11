import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Pokedex, Pokemon } from "../screens";

const Stack = createNativeStackNavigator();

export default function PokedexStack() {
  return (
    <Stack.Navigator
      initialRouteName="Pokedex"
    >
      <Stack.Screen name="Pokedex" component={Pokedex} />
      <Stack.Screen
        name="Pokemon"
        component={Pokemon}
        options={{ title: "", headerTransparent: true }}
      />
    </Stack.Navigator>
  )
}