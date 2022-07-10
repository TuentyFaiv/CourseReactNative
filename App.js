import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { NavigationDrawer, NavigationStack, NavigationTab } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      {/* <NavigationStack /> */}
      {/* <NavigationTab /> */}
      <NavigationDrawer />
    </NavigationContainer>
  );
}
