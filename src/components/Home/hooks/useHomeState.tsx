import { useState, useEffect } from "react";
import { getPokemons } from "../../../api/pokemons";
import { Pokemon } from "../../common/Pokemon/Pokemon";
import { Pokemon as PokemonType } from "../../../api/types/pokemons";

export const useHomeState = () => {
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState<PokemonType[]>([]);
  const [nextPage, setNextPage] = useState<string>("");
  const [favourites, setFavourites] = useState<PokemonType[]>([]);

  useEffect(() => {
    setLoading(true);
    getPokemons().then((result) => {
      setResults(result.results);
      setNextPage(result.next);
      setLoading(false);
    });
  }, []);

  const handleFavourite = (pokemon: PokemonType) => {
    const index = favourites.findIndex((p) => p.name === pokemon.name);

    if (index !== -1) {
      const newFavourites = [...favourites];
      newFavourites.splice(index, 1);
      setFavourites(newFavourites);

      return;
    }

    setFavourites([...favourites, pokemon]);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: PokemonType;
    index: number;
  }) => {
    return (
      <Pokemon
        pokemon={item}
        index={index + 1}
        onFavourite={handleFavourite}
        isFavourite={favourites.some((p) => p.name === item.name)}
      />
    );
  };

  const gatherNextPage = () => {
    getPokemons(nextPage).then((result) => {
      setResults([...results, ...result.results]);
      setNextPage(result.next);
    });
  };

  return { favourites, renderItem, gatherNextPage, results, loading, handleFavourite };
};
