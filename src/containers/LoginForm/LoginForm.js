import { Text, TextInput, Button } from "react-native";

export default function LoginForm() {
  return (
    <>
      <Text>LoginForm</Text>
      <Text>Email:</Text>
      <TextInput placeholder="user@example.com" />
      <Text>Password:</Text>
      <TextInput placeholder="pass123" />
      <Button title="Login" onPress={() => console.log("submit") } />
    </>
  );
}