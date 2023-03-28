import { useState, useEffect, Fragment } from 'react';
import usePokemonTable from '../../hooks/usePokemonTable';
import Grid from '@mui/material/Grid';
import PokemonCard from './pokemon-card/pokemon-card.component';
import { styled } from '@mui/material/styles';
import PokemonPagination from './pagination/pokemon-pagination.component';
import PokemonCardLoading from './pokemon-card/pokemon-card-loading.component';
import { HeaderFooterCard } from './pokemon-table.styles';
import PokemonSearchInput from './pokemon-search-input/pokemon-search-input.component';

const PokemonTable = () => {

  const {
    pokemonList,
    goToPage,
    currentPage,
    pageCount,
    loading,
    pokemonPerPage,
    defPokemonPerPage,
    pokemonCount,
    allPokemon
  } = usePokemonTable();

  return (
    <Fragment>
      <div style={{marginBottom: '20px'}}>
        <HeaderFooterCard>
          {/* <PokemonSearchInput allPokemon={allPokemon}/> */}
          
          <div style={{marginLeft:'auto'}}>
            <PokemonPagination
              goToPage={goToPage}
              currentPage={currentPage}
              pageCount={pageCount}
              pokemonPerPage={pokemonPerPage}
              defPokemonPerPage= {defPokemonPerPage}
              pokemonCount={pokemonCount}
            />
          </div>
        </HeaderFooterCard>
      </div>

      {loading ?
        <Grid container spacing={4}>

        {
          Array.from({ length: pokemonPerPage }).map((_, index) => (
            <Grid key={index} item xs={12} sm={6} md={4} lg={3} xl={2}>
              <PokemonCardLoading/>
            </Grid>
          ))
        }

      </Grid>
      :
      <Grid container spacing={4}>

        {
          pokemonList.map((pokemon) => (
            <Grid  key={pokemon.id} item xs={12} sm={6} md={4} lg={3} xl={2} >
              <PokemonCard pokemonSpecies={pokemon} />
            </Grid>
          ))
        }

      </Grid>
    }
      
      <div style={{marginTop: '20px'}}>
        <HeaderFooterCard>
          {/* <PokemonSearchInput allPokemon={allPokemon}/> */}
          
          <div style={{marginLeft:'auto'}}>
            <PokemonPagination
              goToPage={goToPage}
              currentPage={currentPage}
              pageCount={pageCount}
              pokemonPerPage={pokemonPerPage}
              defPokemonPerPage= {defPokemonPerPage}
              pokemonCount={pokemonCount}
            />
          </div>
        </HeaderFooterCard>
      </div>

    </Fragment>


  )

}
export default PokemonTable