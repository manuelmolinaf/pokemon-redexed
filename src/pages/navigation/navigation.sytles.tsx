import { styled } from '@mui/material/styles';

export const ContentDiv = styled('div')(({ theme }) => ({

  backgroundImage:`url(/redexed_backdrop.png)`,
  backgroundRepeat:'no-repeat',
  backgroundSize:'cover',
  height:'100vh',
  backgroundPosition:'center',
  overflow:'auto',
  display:'flex',
  flexDirection:'column'
   
  }));

export const OutletContainer = styled('div')(({ theme }) => ({
  padding:'30px',
  flex:1
 
}));

