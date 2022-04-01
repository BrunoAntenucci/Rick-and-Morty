import './App.css'
import CharacterDisplay from './components/CharactersDisplay/CharactersDisplay';
import Detail from './components/Detail/Detail';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

function App() {
  return (
    <BrowserRouter>
          <Routes>
              <Route path='/' element={ <CharacterDisplay /> }/>  
              <Route exact path='/:id' element={ <Detail /> }/>  
          </Routes>  
    </BrowserRouter>
  )  
}

export default App;