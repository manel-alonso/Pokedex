import { PokemonDetails } from "../types/pokemons";

export const transformToPokemonDetails = (result: any): PokemonDetails => {
  const { sprites, stats } = result;
  const { front_default } = sprites;
  const parsedStats = stats.map((stat: any) => {
    const value = stat.base_stat;
    const name = stat.stat.name;

    return { name, value };
  });
  const parsedSprites = Object.values(sprites)
    .map((sprite: any) => {
      return typeof sprite === "string" ? sprite : null;
    })
    .filter((s) => s) as string[];

  return {
    image: front_default,
    stats: parsedStats,
    images: parsedSprites,
  };
};
