import { useState, useEffect, Reducer, useReducer } from "react";
import { PokemonTable, PokemonTableItem } from "../interfaces/pokemonTable";
import { Pokemon } from "../interfaces/pokemon";
import axios from 'axios';


const INITIAL_STATE:PokemonTable = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

enum CounterActionTypes {
  GoToPreviousPage = 'GO_TO_PREVIOUS_PAGE',
  GoToNextPage = 'GO_TO_NEXT_PAGE',
  GoToPage = 'GO_TO_PAGE'
}

type PokemonTableActions = 
  { type:  CounterActionTypes.GoToNextPage, payload:PokemonTable } | 
  { type:  CounterActionTypes.GoToPreviousPage, payload:PokemonTable } | 
  { type:  CounterActionTypes.GoToPage, payload:PokemonTable };




const usePokemonTable = () =>{

  const [pokemonTable, setPokemonTable] = useState<PokemonTable>(INITIAL_STATE);
  const [pagination, setPagination] = useState(24);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);
  const [pageCount, setPageCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);
  


  useEffect(()=>{
    const fetchTable = async () => {
      setLoading(true);
      const table = await axios.get<PokemonTable>(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pagination}`);
      setPokemonTable(table.data);
      setLoading(false);
    }
    fetchTable();
  },[]);

  useEffect(()=>{

    const getResults = async () => {
      setLoading(true);
      const pokemonArray:Pokemon[] = [];
      await Promise.all(pokemonTable.results.map(pokemon => axios.get<Pokemon>(pokemon.url)))
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

  //TODO: see if PokemonTable is really necessary
  useEffect(()=>{
    setPageCount(Math.ceil(pokemonTable.count/pagination));
  },[pagination]);


  useEffect(()=>{
    
    const goToPage = async() =>{
      setLoading(true);
      const table = await axios.get<PokemonTable>(`https://pokeapi.co/api/v2/pokemon?offset=${(currentPage-1)*pagination}&limit=${pagination}`);
      setPokemonTable(table.data);
    };
    goToPage();
  },[currentPage]);



  const goToPreviousPage = async() =>{
    if(!pokemonTable.previous) return;

    const table = await axios.get<PokemonTable>(pokemonTable.previous);
    setPokemonTable(table.data);
  };

  const goToNextPage = async() =>{
    if(!pokemonTable.next) return;
    
    const table = await axios.get<PokemonTable>(pokemonTable.next);
    setPokemonTable(table.data);
  };

  const goToPage = (page:number) =>{
    if(page > pageCount || loading) return;
    
    setCurrentPage(page);
    
  };

  
  
  return{pokemonList, goToPreviousPage, goToNextPage, goToPage, pageCount, currentPage, loading, pagination};
}

export default usePokemonTable;