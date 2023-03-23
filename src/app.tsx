import { Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/home/home.component';
import Navigation from './pages/navigation/navigation.component';

function App() {
 

  return (
    <Routes>
      {/* <Route path='/' element={<Navigate to='/home'/>}/> */}
      <Route path='/' element={<Navigation/>}>
        <Route index element={<Navigate to='/home'/>} />
        <Route path='home' element={<Home/>} />
      </Route>
    </Routes>
  )
}

export default App
