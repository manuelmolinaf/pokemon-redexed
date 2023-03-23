import { useState, useEffect } from 'react';
import usePokemonTable from '../../hooks/usePokemonTable';
import Grid from '@mui/material/Grid';

import PokemonCard from './pokemon-card/pokemon-card.component';


const Home = () => {

  const { pokemonList, goToPreviousPage, goToNextPage } = usePokemonTable();

  const handleClick = async () => {
    await goToNextPage();
  }

  return (
    <Grid container spacing={2}>
      {
        pokemonList.map((pokemon) => (
          <Grid key={pokemon.id} item xs={2}>
            <PokemonCard pokemon={pokemon}/>
          </Grid>
        ))
      }
     
    </Grid>


  )

}
export default Home