import { Card } from "./pokemon-card.styles";
import Skeleton from '@mui/material/Skeleton';
import { Box } from "@mui/system";


const PokemonCardLoading = () => {

  return (
    <Card>
          <div style={{ fontSize: '20px', display: 'flex', flexDirection: 'row' }}>
            <Box sx={{ width: '60%' }}>
              <Skeleton animation="wave" />
            </Box>
            <Box sx={{ width: '15%', marginLeft: 'auto' }}>
              <Skeleton animation="wave" />
            </Box>
          </div>
          <Skeleton variant="rectangular" animation="wave" height={275} />
          {/* <p>
            <Skeleton animation="wave" />
            <Skeleton animation="wave" />
            <Skeleton animation="wave" width="60%" />
          </p> */}
        </Card>
  )
}

export default PokemonCardLoading