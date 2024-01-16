import './App.css';
import NavBarComponents from './components/NavBarComponents';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import {Container} from 'react-bootstrap';
import Homepage from './pages/Homepage';
import UserPage from './pages/UserPage';
import NotFoundPage from './pages/NotFoundPage';

function App() {
  return (
   <BrowserRouter>
    <NavBarComponents />
    <Container>
      <Routes>
        <Route path='/' element={<Homepage />}/>
        <Route path='/users' element={<UserPage />}/>
        <Route path='*' element={<NotFoundPage />}/>
      </Routes>
    </Container>
   </BrowserRouter>
  );
}

export default App;
