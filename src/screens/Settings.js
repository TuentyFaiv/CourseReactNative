import { SafeAreaView, Text, Button } from "react-native";

export default function Settings({ navigation}) {
  const goTo = (page) => {
    navigation.navigate(page);
  };

  return (
    <SafeAreaView>
      <Text>Settings screen</Text>
      <Text>Settings screen</Text>
      <Text>Settings screen</Text>
      <Text>Settings screen</Text>
      <Text>Settings screen</Text>
      <Text>Settings screen</Text>
      <Button title="Go to home" onPress={() => goTo("Home")} />
    </SafeAreaView>
  );
}