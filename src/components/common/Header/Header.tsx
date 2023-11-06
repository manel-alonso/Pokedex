import { FontAwesome } from "@expo/vector-icons";
import { Title } from "../Title/Title";
import { HEADER_STYLE, SEARCH_STYLE } from "./style";
import { useState } from "react";
import { TextInput, View } from "react-native";

export const Header = () => {
  const [isSearching, setIsSearching] = useState<boolean>(false);

  const toggleSearch = () => {
    setIsSearching(!isSearching);
  };

  /**
   * Note: Searching is not provided with the PokeAPI Rest API, which means having to work around it to enable searching.
   * As this would mean having to download the whole list of pokemons and filtering client side I don't think is the best to do so.
   */
  return (
    <>
      <View style={HEADER_STYLE}>
        <FontAwesome name="refresh" size={24} color="white" />
        <Title text="Pokédex" />
        <FontAwesome
          name="search"
          size={24}
          color="white"
          onPress={toggleSearch}
        />
      </View>
      {isSearching ? <TextInput placeholder="Search pokémon by name..." style={SEARCH_STYLE} /> : null}
    </>
  );
};
