import { Autocomplete, Box, TextField } from "@mui/material"
import { PokemonTableItem } from "../../../interfaces/pokemonTable"
import axios from "axios"
import { Pokemon } from "../../../interfaces/pokemon"

interface PokemonSearchInputProps {

  allPokemon: PokemonTableItem[]
}

const PokemonSearchInput = ({ allPokemon }: PokemonSearchInputProps) => {

  const formatName = (string: string) => {

    let words = string.split('-');
    words.forEach((word, index) => {
      words[index] = word.charAt(0).toUpperCase() + word.slice(1);
    });
    return words.join(' ');

  }

  const getPokemonSprite = (name:string) => {
    return axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${name}`).then( res =>{
      return res.data.sprites?.front_default
    })
    
   
  }
  
  return (
    <Autocomplete
      options={allPokemon}
      getOptionLabel={(option) => option.name}
      sx={{ width: 300 }}
      // renderOption={(props, option, {index}) => (
      //   <Box component="li" sx={{ '& > img': { mr: 2, flexShrink: 0 } }} {...props}>
      //     <img
      //       loading="lazy"
      //       width="50"
      //       src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${allPokemon.findIndex(pokemon => pokemon.name === option.name) + 1}.png`}
      //       alt={option.name}
      //     />
      //     {formatName(option.name)}
      //   </Box>
      // )}
      renderInput={(params) => <TextField {...params} label="Choose a Pokémon" />}
    />
  );

}

export default PokemonSearchInput