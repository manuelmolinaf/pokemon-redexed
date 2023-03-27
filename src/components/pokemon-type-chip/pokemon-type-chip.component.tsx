import { PokemonTypes, PokemonTypeColors } from '../../interfaces/pokemonTypes';
import Chip from '@mui/material/Chip';

interface PokemonTypeChipProps {
  pokemonType: string
}

const PokemonTypeChip = ({pokemonType}: PokemonTypeChipProps) =>{

  const typeMapping = Object.fromEntries(
    Object.entries(PokemonTypes).map(([key, value]) => [value, PokemonTypeColors[key as keyof typeof PokemonTypeColors]])
  );
  
  const backgroundColor = typeMapping[pokemonType as keyof typeof PokemonTypes];

  return(
    <Chip label={pokemonType} style={{backgroundColor, color:'white'}} />
  )
}

export default PokemonTypeChip;
