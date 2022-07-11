import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { NavigationTab } from "./src/navigation";

export default function App() {
  return (
    <NavigationContainer>
      <NavigationTab />
    </NavigationContainer>
  );
}
