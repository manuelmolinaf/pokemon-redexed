import { Card } from "./pokemon-card.styles";
import Skeleton from '@mui/material/Skeleton';
import { useNavigate } from "react-router-dom";
import { PokemonSpecies } from "../../../interfaces/PokemonSpecies";
import { useState } from "react";
import usePokemon from "../../../hooks/usePokemon";
import PokemonTypeChip from "../../pokemon-type-chip/pokemon-type-chip.component";

interface PokemonCardProps {
  pokemonSpecies: PokemonSpecies,
}

const PokemonCard = ({ pokemonSpecies }: PokemonCardProps) => {

  const [pokemon] = usePokemon(pokemonSpecies.id);
  const [isHovering, setIsHovering] = useState(false);
  const navigate = useNavigate();

  const handleMouseEnter = () => {
    setIsHovering(true);
  };

  const handleMouseLeave = () => {
    setIsHovering(false);
  };

  const clickHandler = () => {
    navigate(`/pokemon/${pokemonSpecies?.id}`);
  }

  const getFlavorText = (mon?: PokemonSpecies) => {
    if (!mon || !mon.flavor_text_entries) return;
    return mon.flavor_text_entries.find(entry => entry.language.name === 'en')?.flavor_text.replace('\f', ' ').replace('POKéMON', 'Pokémon');
  }

  const getName = (mon?: PokemonSpecies) => {
    if (!mon || !mon.names) return;
    return mon.names.find(name => name.language.name === 'en')?.name
  }

  const formatFlavorText = (text?: string) => {
    const characters = 100;
    if (!text) return '';
    if (isHovering) return text;

    return text.substring(0, characters) + (characters < text.length ? '...' : '');
  }

  return (

    <Card role={'button'} onClick={clickHandler} onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
      <div style={{ fontSize: '20px', display: 'flex', flexDirection: 'row' }}>
        <div>
          {getName(pokemonSpecies)}
        </div>
        <div style={{ marginLeft: 'auto' }}>
          # {pokemonSpecies?.pokedex_numbers.find(entry => entry.pokedex.name === 'national')?.entry_number}
        </div>
      </div>
      {
        pokemon!.sprites?.other['official-artwork'].front_default ?
          <img src={pokemon!.sprites.other['official-artwork'].front_default} style={{ width: '100%' }} alt="" />
          :
          <Skeleton variant="rectangular" animation="wave" height={282.25} />
      }

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        {pokemon.types.map(type => (
          <div key={type.type.name} style={{ marginRight: '5px' }}>
            <PokemonTypeChip pokemonType={type.type.name} ></PokemonTypeChip>
          </div>
        ))}
      </div>

    </Card>

  )
}

export default PokemonCard