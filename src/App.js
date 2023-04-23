import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HeadComp } from './Components/HeadComp';
import { FooterComp } from './Components/FooterComp';
import { MainPage } from './pages/MainPage';
import { PokemonList } from './pages/PokemonList';
import { Gamepage } from './pages/Gamepage';
import { Animation } from './pages/Animation';

function App() {
  return (
    <div>
      <HeadComp/>
        <Routes>
          <Route path='/' Component={MainPage} />
          <Route path='/pokemonlist' Component={PokemonList}/>
          <Route path='/gamepage' Component={Gamepage}/>
          <Route path='/animation' Component={Animation}/>
        </Routes>
      <FooterComp/>  
    </div>
  );
}

export default App;
