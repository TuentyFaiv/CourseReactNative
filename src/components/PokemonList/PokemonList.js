import { FlatList, View, ActivityIndicator } from "react-native";

import { styles } from "./PokemonListStyles";

import PokemonCard from "../PokemonCard/PokemonCard";

export default function PokemonList({ pokemons = [], loadPokemons, isNext }) {
  const loadMore = () => {
    loadPokemons();
  };

  return (
    <FlatList
      contentContainerStyle={styles.container}
      data={pokemons}
      numColumns={2}
      showsVerticalScrollIndicator={false}
      keyExtractor={({ id }, index) => `${id}-${index}`}
      renderItem={({ item, index }) => <PokemonCard pokemon={item} inLeft={index % 2 === 0} />}
      ItemSeparatorComponent={() => <View style={styles.separator} />}
      onEndReached={isNext && loadMore}
      onEndReachedThreshold={0.1}
      ListFooterComponent={isNext && (
        <ActivityIndicator
          size="large"
          color="#AEAEAE"
          style={styles.loading}
        />
      )}
    />
  );
}