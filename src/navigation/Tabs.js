import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Home, Settings } from "../screens";

const Tabs = createBottomTabNavigator();

export default function NavigationTab() {
  return (
    <Tabs.Navigator initialRouteName="Home">
      <Tabs.Screen name="Home" component={Home} />
      <Tabs.Screen name="Settings" component={Settings} />
    </Tabs.Navigator>
  )
}