export interface Pokemon {
  name: string;
  url: string;
};

interface Stat {
  name: string;
  value: number;
}

export interface PokemonDetails {
  image: string;
  stats: Stat[];
  images: string[];
};