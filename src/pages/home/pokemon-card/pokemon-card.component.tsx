import { Card } from "./pokemon-card.styles";
import { Pokemon } from "../../../interfaces/pokemon";
import { capitalizeFirstLetter } from '../../../utils/general.utils';


interface PokemonCardProps {
  pokemon: Pokemon
}

const PokemonCard = ({ pokemon }: PokemonCardProps) => (
  <Card>
    <div style={{fontSize:'20px', display:'flex', flexDirection:'row'}}>
      <div>
        {capitalizeFirstLetter(pokemon.name)}
      </div>
      <div style={{marginLeft:'auto'}}>
        #{pokemon.id}
      </div>

    </div>
    <img src={pokemon.sprites.other['official-artwork'].front_default} style={{ width: '100%' }} alt="" />
    <p>
    </p>
  </Card>
)

export default PokemonCard