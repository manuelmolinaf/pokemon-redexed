import Pagination from '@mui/material/Pagination';
import Stack from '@mui/material/Stack';
import { PaginationItem } from '@mui/material';
import { PaginationContainer } from './pokemon-pagination.styles';

interface PokemonPaginationProps {
  goToPreviousPage: ()=>void,
  goToNextPage: ()=>void,
  goToPage: (page:number)=>void,
  currentPage:number,
  pageCount:number
}

const PokemonPagination = ({goToPreviousPage, goToNextPage, goToPage, currentPage, pageCount}:PokemonPaginationProps) => {
  
  const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
    goToPage(value);
  };

  return (
    <PaginationContainer>
      <Stack spacing={2} sx={{ marginTop: '20px' }}>
        <Pagination count={pageCount} page={currentPage} onChange={handleChange}  variant="outlined" shape="rounded" size="large"
          renderItem={(item) => (
            <PaginationItem
              {...item}
              sx={
                item.selected ? {
                  backdropFilter: 'blur(100px)',
                  fontWeight: 'bold',
                  backgroundColor: 'black',
                  borderColor:'black'
                } : {
                  fontWeight: 'bold',
                  backgroundColor: 'rgba(255, 255, 255, 0.2)',
                  backdropFilter: 'blur(10px)',
                  color: 'black',
                }}
            />
          )}
        />
      </Stack>
    </PaginationContainer>

  )

}

export default PokemonPagination