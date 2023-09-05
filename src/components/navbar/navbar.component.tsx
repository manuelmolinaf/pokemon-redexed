
import {useState, MouseEvent} from 'react'
import AppBar from '@mui/material/AppBar';

import Toolbar from '@mui/material/Toolbar';

import Typography from '@mui/material/Typography';

import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';

import { ThemeProvider, createTheme } from '@mui/material/styles';


function NavBar() {

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
    },
  });

  return (
    <ThemeProvider theme={darkTheme}>
      <AppBar position="sticky" >
          <Toolbar>
          <Typography
              variant="h6"
              noWrap
              component="a"
              href="/"
              sx={{
                mr: 2,
                display: { xs: 'none', md: 'flex' },
                fontFamily: 'monospace',
                fontWeight: 700,
                color: 'inherit',
                textDecoration: 'none',
              }}
            >
              Pokémon Redexed
            </Typography>
            {/* <Button color="inherit">Home</Button>
            <Button color="inherit">About</Button>
            <Button color="inherit">Contact</Button> */}
          </Toolbar>
        </AppBar>
    </ThemeProvider>
  );
}
export default NavBar;