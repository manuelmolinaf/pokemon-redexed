import { useState, useEffect } from "react";
import { PokemonTable, PokemonTableItem } from "../interfaces/pokemonTable";
import { Pokemon } from "../interfaces/pokemon";
import axios from 'axios';
import { PokemonSpecies } from "../interfaces/PokemonSpecies";


const INITIAL_STATE:PokemonTable = {
  count: 0,
  next: null,
  previous: null,
  results: []
}


const usePokemonTable = () =>{

  const [pokemonTable, setPokemonTable] = useState<PokemonTable>(INITIAL_STATE);
  const [pokemonPerPage, setPokemonPerPage] = useState(24);
  const [pokemonList, setPokemonList] = useState<PokemonSpecies[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(0);
  const [allPokemon, setAllPokemon] =useState(new Array<PokemonTableItem>());



  useEffect(()=>{ 
    const goToPage = async() =>{
      setLoading(true);
      const response = await axios.get<PokemonTable>(`https://pokeapi.co/api/v2/pokemon-species?offset=${(currentPage)*pokemonPerPage}&limit=${pokemonPerPage}`);
      setPokemonTable(response.data);
    };
    goToPage();
  },[currentPage, pokemonPerPage]);

  useEffect(()=>{ 
    const getAllPokemon = async() =>{
      const response = await axios.get<PokemonTable>('https://pokeapi.co/api/v2/pokemon-species?offset=0&limit=10000');
      setAllPokemon(response.data.results);
    };
    getAllPokemon();
  },[]);

  useEffect(()=>{

    const getResults = async () => {
      
      const pokemonArray:PokemonSpecies[] = [];
      await Promise.all(pokemonTable.results.map(pokemon => axios.get<PokemonSpecies>(pokemon.url)))
      .then(responses => {
        responses.forEach( response =>{
          pokemonArray.push(response.data);
        })
      });
      setPokemonList(pokemonArray);
      setPageCount(Math.ceil(pokemonTable.count/pokemonPerPage));
      setLoading(false);
    }

    getResults();
  },[pokemonTable]);


  useEffect(()=>{
    setPageCount(Math.ceil(pokemonTable.count/pokemonPerPage));
  },[pokemonPerPage]);



  const goToPage = (page:number) =>{
    if(page > pageCount || loading) return;
    
    setCurrentPage(page);
    
  };

  const defPokemonPerPage = (n:number) =>{
    if(n<1) return;
    
    setPokemonPerPage(n);
    
  };

  
  
  return{
    pokemonList,
    goToPage,
    pageCount,
    currentPage,
    loading,
    pokemonPerPage,
    defPokemonPerPage,
    pokemonCount:pokemonTable.count,
    allPokemon
  };
}

export default usePokemonTable;