import { Image } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome5";

import FavoriteStack from "./FavoriteStack";
import PokedexStack from "./PokedexStack";
import AccountStack from "./AccountStack";

const Tabs = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tabs.Navigator
      initialRouteName="PokedexStack"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Tabs.Screen
        name="FavoriteStack"
        component={FavoriteStack}
        options={{
          title: "Favoritos",
          tabBarLabel: "Favoritos",
          tabBarIcon: ({ color, size }) => (
            <Icon name="heart" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="PokedexStack"
        component={PokedexStack}
        options={{
          title: "Pokedex",
          tabBarLabel: "",
          tabBarIcon: () => (
            <Image
              source={require("../assets/images/icons/icon-tab-pokedex.png")}
              style={{
                width: 75,
                height: 75,
                top: -15
              }}
            />
          )
        }}
      />
      <Tabs.Screen
        name="AccountStack"
        component={AccountStack}
        options={{
          title: "Mi Cuenta",
          tabBarLabel: "Mi Cuenta",
          tabBarIcon: ({ color, size }) => (
            <Icon name="user" size={size} color={color} />
          )
        }}
      />
    </Tabs.Navigator>
  )
}
