import { useState, useEffect, Fragment } from 'react';
import usePokemonTable from '../../hooks/usePokemonTable';
import Grid from '@mui/material/Grid';
import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import PokemonCard from './pokemon-card/pokemon-card.component';
import { styled } from '@mui/material/styles';
import { PaginationItem } from '@mui/material';

const PaginationContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent:'center',
  color:'white'
}));

const Home = () => {

  const { pokemonList, goToPreviousPage, goToNextPage } = usePokemonTable();

  const handleClick = async () => {
    await goToNextPage();
  }

  return (
    <Fragment>
      <Grid container spacing={3}>
        {
          pokemonList.map((pokemon) => (
            <Grid key={pokemon.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))
        }

      </Grid>
      <PaginationContainer>
  <Stack spacing={2} sx={{marginTop:'20px'}}>
    <Pagination count={10} variant="outlined" shape="rounded" size="large" 
      renderItem={(item) => (
        <PaginationItem 
          {...item} 
          sx={
            item.selected ? {
              backdropFilter: 'blur(100px)',
              fontWeight:'bold',
              backgroundColor: 'black'
            } : {
              fontWeight:'bold',
              backgroundColor: 'rgba(255, 255, 255, 0.2)',
              backdropFilter: 'blur(10px)',
              color: 'black',
              
            }}
        />
      )} 
    />
  </Stack>
</PaginationContainer>
    </Fragment>


  )

}
export default Home