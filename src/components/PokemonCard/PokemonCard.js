import { View, Text, Image, TouchableWithoutFeedback } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { getColorByPokemonType } from "../../utils/getColorByPokemonType";

import { styles } from "./PokemonCardStyles";

export default function PokemonCard({ pokemon = {}, inLeft }) {
  const { navigate } = useNavigation();
  const goToPokemon = () => {
    navigate("Pokemon", { id: pokemon.id });
  };

  const bgStyles = {
    backgroundColor: getColorByPokemonType(pokemon.type),
    ...(inLeft ? { marginRight: 10 } : {}),
    ...styles.card
  };

  return (
    <TouchableWithoutFeedback onPress={goToPokemon}>
      <View style={bgStyles}>
        <Text style={styles.cardNumber}>#{`${pokemon.order}`?.padStart(3, "0")}</Text>
        <Text style={styles.cardType}>{pokemon.type}</Text>
        <Image
          style={styles.cardImage}
          source={{ uri: pokemon.image }}
        />
        <Text style={styles.cardTitle}>{pokemon.name}</Text>
      </View>
    </TouchableWithoutFeedback>
  );
}