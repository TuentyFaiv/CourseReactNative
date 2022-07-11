import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { Account } from "../screens";

const Stack = createNativeStackNavigator();

export default function AccountStack() {
  return (
    <Stack.Navigator
      initialRouteName="Account"
    >
      <Stack.Screen name="Account" component={Account} />
    </Stack.Navigator>
  )
}