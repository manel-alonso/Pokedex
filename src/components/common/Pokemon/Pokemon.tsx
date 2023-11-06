import { TouchableOpacity, Text, Image, View } from "react-native";
import {
  PokemonDetails,
  Pokemon as PokemonType,
} from "../../../api/types/pokemons";
import {
  POKEMON_FAV_STYLE,
  POKEMON_IMAGE_STYLE,
  POKEMON_NAME_STYLE,
  POKEMON_NUMBER_STYLE,
  POKEMON_STYLE,
  TOUCHABLE_STYLE,
} from "./style";
import { useEffect, useState } from "react";
import { getPokemonDetail } from "../../../api/pokemons";
import { PokemonDetail } from "../PokemonDetail/PokemonDetail";
import { FontAwesome } from "@expo/vector-icons";
import { transformToPokemonDetails } from "../../../api/util/utils";

interface PokemonProps {
  pokemon: PokemonType;
  index: number;
  onFavourite: (pokemon: PokemonType) => void;
  isFavourite: boolean;
}

export const Pokemon = (props: PokemonProps) => {
  const { pokemon, index, onFavourite, isFavourite } = props;
  const { name, url } = pokemon;

  const [details, setDetails] = useState<PokemonDetails>();
  const [isDetailsVisible, setIsDetailsVisible] = useState<boolean>(false);

  useEffect(() => {
    getPokemonDetail(url).then((result) => {
      const details = transformToPokemonDetails(result);
      setDetails(details);
    });
  }, []);

  const toggleDetails = () => {
    setIsDetailsVisible(!isDetailsVisible);
  };

  return (
    <>
      <TouchableOpacity style={TOUCHABLE_STYLE} onPress={toggleDetails}>
        <View style={POKEMON_STYLE}>
          <Text style={POKEMON_NUMBER_STYLE}>#{index}</Text>
          <Image style={POKEMON_IMAGE_STYLE} source={{ uri: details?.image }} />
          <Text style={POKEMON_NAME_STYLE}>{name}</Text>
          {!isFavourite ? (
            <FontAwesome
              style={POKEMON_FAV_STYLE}
              name="heart-o"
              onPress={() => onFavourite(pokemon)}
            />
          ) : (
            <FontAwesome
              style={POKEMON_FAV_STYLE}
              name="heart"
              onPress={() => onFavourite(pokemon)}
            />
          )}
        </View>
      </TouchableOpacity>
      {details ? (
        <PokemonDetail
          details={details}
          isVisible={isDetailsVisible}
          name={name}
          onClose={toggleDetails}
        />
      ) : null}
    </>
  );
};
