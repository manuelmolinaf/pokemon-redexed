import { useState, useEffect, Fragment } from 'react';
import usePokemonTable from '../../hooks/usePokemonTable';
import Grid from '@mui/material/Grid';
import PokemonCard from './pokemon-card/pokemon-card.component';
import { styled } from '@mui/material/styles';
import PokemonPagination from './pagination/pokemon-pagination.component';

const PokemonTable = () => {

  const {
    pokemonList,
    goToPreviousPage,
    goToNextPage,
    goToPage,
    currentPage,
    pageCount,
    loading,
    pagination
  } = usePokemonTable();


  return (
    <Fragment>

      <PokemonPagination
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
        currentPage={currentPage}
        pageCount={pageCount}
      />

      {loading ?
        <Grid container spacing={4}>

        {
          Array.from({ length: pagination }).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <PokemonCard loading={loading} />
            </Grid>
          ))
        }

      </Grid>
      :
      <Grid container spacing={4}>

        {
          pokemonList.map((pokemon) => (
            <Grid key={pokemon.id} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <PokemonCard pokemon={pokemon} />
            </Grid>
          ))
        }

      </Grid>
    }
      
      <PokemonPagination
        goToPreviousPage={goToPreviousPage}
        goToNextPage={goToNextPage}
        goToPage={goToPage}
        currentPage={currentPage}
        pageCount={pageCount}
      />

    </Fragment>


  )

}
export default PokemonTable