import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Favorite } from "../screens";

const Stack = createNativeStackNavigator();

export default function FavoriteStack() {
  return (
    <Stack.Navigator
      initialRouteName="Favorite"
    >
      <Stack.Screen name="Favorite" component={Favorite} />
    </Stack.Navigator>
  )
}