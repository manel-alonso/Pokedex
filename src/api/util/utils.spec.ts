import { PokemonDetails } from "../types/pokemons";
import { transformToPokemonDetails } from "./utils";

describe("transformToPokemonDetails function", () => {
  it("should transform the result object to PokemonDetails format", () => {
    const result = {
      sprites: {
        front_default: "pokemon_image_url",
        back_default: "back_image_url",
      },
      stats: [
        { base_stat: 80, stat: { name: "hp" } },
        { base_stat: 70, stat: { name: "attack" } },
        { base_stat: 60, stat: { name: "defense" } },
      ],
    };

    const expectedPokemonDetails: PokemonDetails = {
      image: "pokemon_image_url",
      stats: [
        { name: "hp", value: 80 },
        { name: "attack", value: 70 },
        { name: "defense", value: 60 },
      ],
      images: ["pokemon_image_url", "back_image_url"],
    };

    const transformedPokemonDetails = transformToPokemonDetails(result);
    expect(transformedPokemonDetails).toEqual(expectedPokemonDetails);
  });

  it("should handle undefined or null values in result object", () => {
    const result = {
      sprites: {
        front_default: "null",
        back_default: undefined,
      },
      stats: [
        { base_stat: 80, stat: { name: "hp" } },
        { base_stat: 70, stat: { name: "attack" } },
        { base_stat: 60, stat: { name: "defense" } },
      ],
    };

    const expectedPokemonDetails: PokemonDetails = {
      image: "null",
      stats: [
        { name: "hp", value: 80 },
        { name: "attack", value: 70 },
        { name: "defense", value: 60 },
      ],
      images: ["null"],
    };

    const transformedPokemonDetails = transformToPokemonDetails(result);
    expect(transformedPokemonDetails).toEqual(expectedPokemonDetails);
  });
});
