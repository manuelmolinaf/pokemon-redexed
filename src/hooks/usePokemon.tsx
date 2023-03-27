import { useState, useEffect } from "react";
import { PokemonTable } from "../interfaces/pokemonTable";
import { Pokemon } from "../interfaces/pokemon";
import axios from 'axios';
import { PokemonSpecies } from "../interfaces/PokemonSpecies";

const intialState:Pokemon = {
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


const usePokemon = (id:number) =>{
  const [pokemon, setPokemon] = useState(intialState);

  useEffect( () =>{
    const getPokemon = async() =>{
      const response = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${id}`);
      setPokemon(response.data)
    };
    getPokemon();

  },[id])

  return [pokemon]

}

export default usePokemon;