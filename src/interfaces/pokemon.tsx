export interface Pokemon {
  abilities: Ability[];
  base_experience: number;
  forms: Endpoint[];
  game_indices: GameIndex[];
  height: number;
  held_items: any[];
  id: number;
  is_default: boolean;
  location_area_encounters: string;
  moves: Move[];
  name: string;
  order: number;
  past_types: any[];
  species?: Endpoint;
  sprites?: Sprites;
  stats: Stat[];
  types: Type[];
  weight: number;
}

interface Type {
  slot: number;
  type: Endpoint;
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Endpoint;
}

interface Sprites {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
  other: Other;
  versions: Versions;
}

interface Versions {
  'generation-i': Generation1;
  'generation-ii': Generation2;
  'generation-iii': Generation3;
  'generation-iv': Generation4;
  'generation-v': Generation5;
  'generation-vi': Generation6;
  'generation-vii': Generation7;
  'generation-viii': Generation8;
}

interface Generation8 {
  icons: Dreamworld;
}

interface Generation7 {
  icons: Dreamworld;
  'ultra-sun-ultra-moon': Home;
}

interface Generation6 {
  'omegaruby-alphasapphire': Home;
  'x-y': Home;
}

interface Generation5 {
  'black-white': Blackwhite;
}

interface Blackwhite {
  animated: Diamondpearl;
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Generation4 {
  'diamond-pearl': Diamondpearl;
  'heartgold-soulsilver': Diamondpearl;
  platinum: Diamondpearl;
}

interface Diamondpearl {
  back_default: string;
  back_female: string;
  back_shiny: string;
  back_shiny_female: string;
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Generation3 {
  emerald: Officialartwork;
  'firered-leafgreen': Fireredleafgreen;
  'ruby-sapphire': Fireredleafgreen;
}

interface Fireredleafgreen {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
}

interface Generation2 {
  crystal: Crystal;
  gold: Gold;
  silver: Gold;
}

interface Gold {
  back_default: string;
  back_shiny: string;
  front_default: string;
  front_shiny: string;
  front_transparent: string;
}

interface Crystal {
  back_default: string;
  back_shiny: string;
  back_shiny_transparent: string;
  back_transparent: string;
  front_default: string;
  front_shiny: string;
  front_shiny_transparent: string;
  front_transparent: string;
}

interface Generation1 {
  'red-blue': Redblue;
  yellow: Redblue;
}

interface Redblue {
  back_default: string;
  back_gray: string;
  back_transparent: string;
  front_default: string;
  front_gray: string;
  front_transparent: string;
}

interface Other {
  dream_world: Dreamworld;
  home: Home;
  'official-artwork': Officialartwork;
}

interface Officialartwork {
  front_default: string;
  front_shiny: string;
}

interface Home {
  front_default: string;
  front_female: string;
  front_shiny: string;
  front_shiny_female: string;
}

interface Dreamworld {
  front_default: string;
  front_female?: any;
}

interface Move {
  move: Endpoint;
  version_group_details: Versiongroupdetail[];
}

interface Versiongroupdetail {
  level_learned_at: number;
  move_learn_method: Endpoint;
  version_group: Endpoint;
}

interface GameIndex {
  game_index: number;
  version: Endpoint;
}

interface Ability {
  ability: Endpoint;
  is_hidden: boolean;
  slot: number;
}

interface Endpoint {
  name: string;
  url: string;
}