import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { Autocomplete, PaginationItem, styled, TextField } from '@mui/material';
import { PaginationContainer } from './pokemon-pagination.styles';
import TablePagination from '@mui/material/TablePagination';
import { PokemonTableItem } from '../../../interfaces/pokemonTable';



interface PokemonPaginationProps {
  goToPage: (page: number) => void,
  currentPage: number,
  pageCount: number,
  pokemonPerPage: number,
  defPokemonPerPage: (n: number) => void,
  pokemonCount: number,
}




const PokemonPagination = ({ goToPage, currentPage, pokemonPerPage, defPokemonPerPage, pokemonCount }: PokemonPaginationProps) => {


  const handlePageChange = (event: React.MouseEvent<HTMLButtonElement> | null, newPage: number,) => {
    goToPage(newPage);
  };

  const handleChangeRowsPerPage = (
    event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {

    defPokemonPerPage(parseInt(event.target.value));
  };

  return (

    <div style={{ display: 'flex', flexWrap: 'wrap' }}>
        

        <TablePagination
          component="div"
          count={pokemonCount}
          page={currentPage}
          onPageChange={handlePageChange}
          labelRowsPerPage='Pokémon per Page'
          rowsPerPage={pokemonPerPage}
          rowsPerPageOptions={[12, 24, 48, 96]}
          onRowsPerPageChange={handleChangeRowsPerPage}
          sx={{
            marginLeft: 'auto',
            color: 'white',
            fontWeight: 'bold',
            '& .MuiSelect-icon': {
              color: 'white'
            }
          }}
        />
      </div>

  )

}

export default PokemonPagination