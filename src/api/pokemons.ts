import { POKEMON_URL } from "./constants";

export const getPokemons = async (url?: string) => {
  const response = await fetch(url ? url : POKEMON_URL);
  return await response.json();
};

export const getPokemonDetail = async (url: string) => {
  const response = await fetch(url);
  return await response.json();
};
