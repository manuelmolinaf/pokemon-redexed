// import styled from '@emotion/styled';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import backdrop from '../../assets/redexed_backdrop.png';


export const ContentDiv = styled('div')(({ theme }) => ({

  backgroundImage:`url(${backdrop})`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  height:'100vh',
  backgroundPosition:'center',
  overflow:'auto'
   
  }));

  export const OutletContainer = styled('div')(({ theme }) => ({
    padding:'20px'
  }));
