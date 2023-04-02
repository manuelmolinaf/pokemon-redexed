import { useState, useEffect } from "react";
import { PokemonTable } from "../interfaces/pokemonTable";
import { Pokemon } from "../interfaces/pokemon";
import axios from 'axios';
import { PokemonSpecies } from "../interfaces/PokemonSpecies";

const intialPokemonState:Pokemon = {
  abilities: [],
  base_experience: 0,
  forms: [],
  game_indices: [],
  height: 0,
  held_items: [],
  id: 0,
  is_default: false,
  location_area_encounters: 'string',
  moves: [],
  name: '',
  order: 0,
  past_types: [],
  stats: [],
  types: [],
  weight:0
}

const intialPokemonSpeciesState:PokemonSpecies = {
  base_happiness: 0,
  capture_rate: 0,
  color: {
    name:'',
    url:''
  },
  egg_groups: [],
  evolution_chain: {
    url:''
  },
  evolves_from_species: {
    name:'',
    url:''
  },
  flavor_text_entries: [],
  form_descriptions: [],
  forms_switchable: false,
  gender_rate: 0,
  genera: [],
  generation: {
    name:'',
    url:''
  },
  growth_rate: {
    name:'',
    url:''
  },
  habitat: {
    name:'',
    url:''
  },
  has_gender_differences: false,
  hatch_counter: 0,
  id: 0,
  is_baby: false,
  is_legendary: false,
  is_mythical: false,
  name: "",
  names: [],
  order: 0,
  pal_park_encounters: [],
  pokedex_numbers: [],
  shape: {
    name:'',
    url:''
  },
  varieties: []
}


const usePokemon = (id:number) =>{
  const [pokemon, setPokemon] = useState(intialPokemonState);
  const [pokemonSpecies, setPokemonSpecies] = useState(intialPokemonSpeciesState);

  useEffect( () =>{
    const getPokemon = async() =>{
      const pokemonData = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(pokemonData.data);

      const pokemonSpeciesData = await axios.get<PokemonSpecies>(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
      setPokemonSpecies(pokemonSpeciesData.data)
    };
    getPokemon();

  },[id])

  return {pokemon,pokemonSpecies}

}

export default usePokemon;