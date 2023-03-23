import { useState, useEffect } from "react";
import { PokemonTable, PokemonTableItem } from "../interfaces/pokemonTable";
import { Pokemon } from "../interfaces/pokemon";
import axios from 'axios';

 const initialValue:PokemonTable = {
  count: 0,
  next: null,
  previous: null,
  results: []
}

const usePokemonTable = () =>{
  
  const [pokemonTable, setPokemonTable] = useState<PokemonTable>(initialValue);
  const [pagination, setPagination] = useState(20);
  const [pokemonList, setPokemonList] = useState<Pokemon[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(()=>{
    const fetchTable = async () => {
      const table = await axios.get<PokemonTable>(`https://pokeapi.co/api/v2/pokemon?offset=0&limit=${pagination}`);
      setPokemonTable(table.data);
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
      setLoading(false);
    }
    getResults();
  },[pokemonTable]);

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
  
  
  return{pokemonList, goToPreviousPage, goToNextPage, loading};
}

export default usePokemonTable;