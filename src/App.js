import './App.css';
import { Route, Routes } from 'react-router-dom';
import { PokemonList } from './pages/PokemonList';
import { Animation } from './pages/Animation';
import { DataProvider } from './context/DataContext';
import { Game } from './pages/Game';
import { Home } from './pages/Home';
import { PokemonImfor } from './pages/PokemonImfor';
import { Layout } from './pages/Layout';





function App() {

  return (
    <div>
      <DataProvider>
          <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/pokemonlist' element={<PokemonList/>}>
              <Route path='/pokemonlist/:pokemon' element={<PokemonImfor/>}/>
            </Route>
            <Route path='/game' element={<Game/>}/>
            <Route path='/animation' element={<Animation/>}/>
            <Route path='/layout' element={<Layout/>}/>            
          </Routes>
      </DataProvider>
    </div>
  );
}

export default App;
