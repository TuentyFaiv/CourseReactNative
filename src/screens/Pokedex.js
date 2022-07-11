import { useCallback, useEffect, useState } from "react";
import { SafeAreaView } from "react-native";
import { getPokemonByUrl, getPokemons } from "../api/pokemon";

import { PokemonList } from "../components";

export default function Pokedex({ navigation}) {
  const [info, setInfo] = useState({});
  const [pokemons, setPokemons] = useState([]);

  const loadPokemons = useCallback(async () => {
    try {
      const { results, ...newInfo } = await getPokemons(info.next);
      setInfo(newInfo);

      const pokemonsDetails = await Promise.all(
        results.map(async ({ url }) => {
          const pokemon = await getPokemonByUrl(url);
          return {
            id: pokemon.id,
            name: pokemon.name,
            type: pokemon.types[0].type.name,
            order: pokemon.order,
            image: pokemon.sprites.other["official-artwork"].front_default
          };
        })
      );

      setPokemons((prevPokemons) => [...prevPokemons, ...pokemonsDetails]);
    } catch (error) {
      console.error(error);
    }
  }, [info?.next]);

  useEffect(() => {
    if (!info.next) loadPokemons();
  }, [loadPokemons, info.next]);

  return (
    <SafeAreaView>
      <PokemonList pokemons={pokemons} loadPokemons={loadPokemons} isNext={info.next} />
    </SafeAreaView>
  );
}