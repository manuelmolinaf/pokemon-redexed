import { useState, useEffect } from "react";
import { PokemonTable } from "../interfaces/pokemonTable";
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
  const [pagination, setPagination] = useState(24);
  const [pokemonList, setPokemonList] = useState<PokemonSpecies[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  



  useEffect(()=>{ 
    const goToPage = async() =>{
      setLoading(true);
      const response = await axios.get<PokemonTable>(`https://pokeapi.co/api/v2/pokemon-species?offset=${(currentPage-1)*pagination}&limit=${pagination}`);
      setPokemonTable(response.data);
    };
    goToPage();
  },[currentPage, pagination]);

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
      setPageCount(Math.ceil(pokemonTable.count/pagination));
      setLoading(false);
    }

    getResults();
  },[pokemonTable]);


  useEffect(()=>{
    setPageCount(Math.ceil(pokemonTable.count/pagination));
  },[pagination]);



  const goToPage = (page:number) =>{
    if(page > pageCount || loading) return;
    
    setCurrentPage(page);
    
  };

  
  
  return{pokemonList, goToPage, pageCount, currentPage, loading, pagination};
}

export default usePokemonTable;