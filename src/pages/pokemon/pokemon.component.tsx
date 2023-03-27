
import { Routes, Route, useParams } from 'react-router-dom';

const Pokemon = () => {
  let { id } = useParams();
  
  return(
    <h1>Pokemonid:{id}</h1>
  )

}

export default Pokemon