import NavBar from '../../components/navbar/navbar.component'
import { Outlet } from 'react-router-dom'
import { ContentDiv, OutletContainer } from './navigation.sytles'
import Box from '@mui/material/Box';

 
const Navigation = () => {

  return (
    <ContentDiv>
      <NavBar />

      <OutletContainer>
        <Outlet />
      </OutletContainer>
    </ContentDiv>
  )

}

export default Navigation