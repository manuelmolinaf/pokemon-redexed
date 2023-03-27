export interface PokemonSpecies {
  base_happiness: number;
  capture_rate: number;
  color: Endpoint;
  egg_groups: Endpoint[];
  evolution_chain: EvolutionChain;
  evolves_from_species: Endpoint;
  flavor_text_entries: FlavorTextEntry[];
  form_descriptions: any[];
  forms_switchable: boolean;
  gender_rate: number;
  genera: Genus[];
  generation: Endpoint;
  growth_rate: Endpoint;
  habitat: Endpoint;
  has_gender_differences: boolean;
  hatch_counter: number;
  id: number;
  is_baby: boolean;
  is_legendary: boolean;
  is_mythical: boolean;
  name: string;
  names: Name[];
  order: number;
  pal_park_encounters: PalParkEncounter[];
  pokedex_numbers: PokedexNumber[];
  shape: Endpoint;
  varieties: Variety[];
}

interface Variety {
  is_default: boolean;
  pokemon: Endpoint;
}

interface PokedexNumber {
  entry_number: number;
  pokedex: Endpoint;
}

interface PalParkEncounter {
  area: Endpoint;
  base_score: number;
  rate: number;
}

interface Name {
  language: Endpoint;
  name: string;
}

interface Genus {
  genus: string;
  language: Endpoint;
}

interface FlavorTextEntry {
  flavor_text: string;
  language: Endpoint;
  version: Endpoint;
}

interface EvolutionChain {
  url: string;
}

interface Endpoint {
  name: string;
  url: string;
}
