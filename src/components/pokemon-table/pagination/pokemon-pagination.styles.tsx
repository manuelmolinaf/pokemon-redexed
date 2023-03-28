import { styled, TablePagination } from "@mui/material";

export const PaginationContainer = styled('div')(({ theme }) => ({
  display: 'flex',
  justifyContent: 'center',
  color: 'white',
  marginBottom:'20px'
}));



export const MyPagination = styled(TablePagination)(({ theme }) => ({
  color: 'white',
  fontWeight: 'bold',
  fontSize:'20px'
  // '& .MuiSelect-icon': {
  //   color: 'white'
  // }
}));

