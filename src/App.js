import './App.css';
import { Route, Routes } from 'react-router-dom';
import { HeadComp } from './Components/HeadComp';
import { FooterComp } from './Components/FooterComp';
import { PokemonList } from './pages/PokemonList';
import { Animation } from './pages/Animation';
import { DataProvider } from './context/DataContext';
import { Game } from './pages/Game';
import { Home } from './pages/Home';
import { Start } from './pages/Start';
import { PokemonImfor } from './pages/PokemonImfor';
function App() {

  return (
    <div>
      <DataProvider>
        <HeadComp/>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pokemonlist' element={<PokemonList/>}>
              <Route path='/pokemonlist/:pokemon' element={<PokemonImfor/>}/>
            </Route>
            <Route path='/game' element={<Game/>}/>
            <Route path='/animation' element={<Animation/>}/>
          </Routes>
        <FooterComp/>  
      </DataProvider>
    </div>
  );
}

export default App;
