import { SafeAreaView, Text, Button } from "react-native";

export default function Home({ navigation }) {
  const goTo = () => {
    navigation.navigate("Settings");
  };

  return (
    <SafeAreaView>
      <Text>Home screen</Text>
      <Text>Home screen</Text>
      <Text>Home screen</Text>
      <Text>Home screen</Text>
      <Text>Home screen</Text>
      <Text>Home screen</Text>
      <Button title="Go to settings" onPress={goTo} />
    </SafeAreaView>
  );
}