import { useEffect, useState } from "react";
import { View } from "react-native";
import Icon from "react-native-vector-icons/FontAwesome5";
import { getPokemon } from "../api/pokemon";

import { PokemonHeader } from "../components";

export default function Pokemon({ navigation, route }) {
  const [pokemon, setPokemon] = useState(null);
  const { id } = route.params;

  useEffect(() => {
    const title = pokemon ? `#${`${pokemon.order}`.padStart(4, "0")} ${pokemon.name}` : "";
    navigation.setOptions({
      title,
      headerRight: () => null,
      headerLeft: () => (
        <Icon
          name="arrow-left"
          color="#fff"
          size={20}
          onPress={() => navigation.goBack()}
        />
      )
    });
  }, [navigation, id]);

  useEffect(() => {
    (async () => {
      const pokemonDetails = await getPokemon(id);
      setPokemon(pokemonDetails);
    })();
  }, [id]);

  if (!pokemon) return null;

  return (
    <View>
      <PokemonHeader
        name={pokemon.name}
        order={pokemon.order}
        type={pokemon.types[0].type.name}
        image={pokemon.sprites.other["official-artwork"].front_default}
      />
    </View>
  );
}