import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HeadComp } from './Components/HeadComp';
import { FooterComp } from './Components/FooterComp';
import { PokemonList } from './pages/PokemonList';
import { Animation } from './pages/Animation';
import { DataProvider } from './Components/DataContext';
import { Game } from './pages/Game';
import { Home } from './pages/Home';
import { Start } from './pages/Start';

function App() {
  return (
    <div>
      <DataProvider>
        <HeadComp/>
          <Routes>
            <Route path='/pokemonlist' Component={PokemonList}/>
            <Route path='/' Component={Start}>
              <Route path='/home' Component={Home}/>
              <Route path='/game' Component={Game}/>
              <Route path='/animation' Component={Animation}/>
            </Route>
          </Routes>
        <FooterComp/>  
      </DataProvider>
    </div>
  );
}

export default App;
