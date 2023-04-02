
import { useParams, useNavigate } from 'react-router-dom';
import { Card } from './pokemon.styles';
import usePokemon from '../../hooks/usePokemon';
import PokemonTypeChip from '../../components/pokemon-type-chip/pokemon-type-chip.component';
import { useState } from 'react';
import { IconButton } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';


const Pokemon = () => {
  const { id } = useParams();
  const { pokemon, pokemonSpecies } = usePokemon(parseInt(id ?? '1'));
  const [currentEntry, setCurrentEntry] = useState(0);
  const navigate = useNavigate();

  const pokedexNumber = () => {
    return pokemonSpecies.pokedex_numbers.find(number => number.pokedex.name === 'national')?.entry_number ?? 0;
  }

  const pokemonName = () => {
    return pokemonSpecies.names.find(name => name.language.name === 'en')?.name ?? pokemon.name;
  }

  const PokemonGenus = () => {
    return pokemonSpecies.genera.find(genus => genus.language.name === 'en')?.genus ?? '';
  }

  const hectogramsToPounds = (weightInHectograms: number) => {
    const weightInPounds = weightInHectograms * 0.220462;
    return weightInPounds.toFixed(2);
  }

  const decimetersToFeet = (heightInDecimeters: number) => {
    const totalInches = heightInDecimeters * 3.93701; // convert decimeters to inches
    const feet = Math.floor(totalInches / 12);
    const inches = Math.round(totalInches % 12);
    return `${feet}' ${inches}"`;
  }

  const flavorTextEntries = () => {
    return pokemonSpecies.flavor_text_entries.filter(entry => entry.language.name === 'en');
  }

  const nextPokemon = () => {
    navigate(`/pokemon/${pokemonSpecies?.id + 1}`);
  };
  const previousPokemon = () => {
    navigate(`/pokemon/${pokemonSpecies?.id - 1}`);
  };

  return (

    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <Card sx={{ display: 'flex', flexDirection: 'column', flex: '0 0 auto' }}>


        <div style={{ display: 'flex', flexDirection: 'row' }}>

          <div>
            <img src={pokemon.sprites?.other['official-artwork'].front_default} width='100%' />
          </div>


          <div style={{
            display: 'flex',
            flexDirection: 'column',
            fontSize: 25,
            gap: 5,
            alignItems: 'center'
          }}>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              <div>
                <IconButton sx={{ color: 'white', marginRight: 2 }} size='small' onClick={previousPokemon}>
                  <ArrowBackIosNewIcon />
                </IconButton>
              </div>
              <div>Pokedex No. {pokedexNumber()}</div>
              <div>
                <IconButton sx={{ color: 'white', marginLeft: 2 }} size='small' onClick={nextPokemon}>
                  <ArrowForwardIosIcon />
                </IconButton>
              </div>
            </div>
            <div>
              {pokemonName()}
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }}>
              {pokemon.types.map(type => (
                <div key={type.type.name} style={{ marginRight: '5px' }}>
                  <PokemonTypeChip pokemonType={type.type.name} ></PokemonTypeChip>
                </div>
              ))}
            </div>
            <div>
              {PokemonGenus()}
            </div>
            <div style={{ marginTop: '30px' }}>
              Height: {decimetersToFeet(pokemon.height)}
            </div>
            <div>
              Weight: {hectogramsToPounds(pokemon.weight)} lbs.
            </div>
          </div>

        </div>


        <div style={{ fontSize: 25, maxWidth: '750px' }}>
          {flavorTextEntries().at(currentEntry)?.flavor_text.replace('\f', '')}
        </div>

      </Card>
    </div>
  )


}

export default Pokemon