import { Card } from "./pokemon-card.styles";
import { Pokemon } from "../../../interfaces/pokemon";
import { capitalizeName } from '../../../utils/general.utils';
import Skeleton from '@mui/material/Skeleton';
import { Box } from "@mui/system";

interface PokemonCardProps {
  pokemon?: Pokemon,
  loading?: boolean
}

const PokemonCard = ({ pokemon, loading }: PokemonCardProps) => (
  <Card>
    {loading ?
      <>
        <div style={{ fontSize: '20px', display: 'flex', flexDirection: 'row' }}>
          <Box sx={{ width: '60%' }}>
            <Skeleton animation="wave" />
          </Box>
          <Box sx={{ width: '15%', marginLeft:'auto' }}>
            <Skeleton animation="wave" />
          </Box>

        </div>
        <Skeleton variant="rectangular" animation="wave" height={282.25} />
        <p>
        </p>
      </>
      :
      <>
        <div style={{ fontSize: '20px', display: 'flex', flexDirection: 'row' }}>
          <div>
            {capitalizeName(pokemon!.name)}
          </div>
          <div style={{ marginLeft: 'auto' }}>
            #{pokemon!.id}
          </div>

        </div>
        {
          pokemon!.sprites.other['official-artwork'].front_default ?
          <img src={pokemon!.sprites.other['official-artwork'].front_default} style={{ width: '100%' }} alt="" />
          :
          <Skeleton variant="rectangular" animation={false} height={282.25} />
        }
        
        <p>
        </p>
      </>
    }

  </Card>
)

export default PokemonCard