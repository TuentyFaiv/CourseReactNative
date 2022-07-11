import { SafeAreaView, View, Text, Image } from "react-native";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";
import { styles } from "./PokemonHeaderStyles";

export default function PokemonHeader({ name, order, type, image }) {

  const bgStyles = {
    backgroundColor: getColorByPokemonType(type),
    ...styles.bg
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={bgStyles} />
      <View style={styles.header}>
        <Text style={styles.name}>{name}</Text>
        <Text style={styles.order}>#{`${order}`.padStart(4, "0")}</Text>
      </View>
      <Image style={styles.image} source={{ uri: image }} />
    </SafeAreaView>
  );
}