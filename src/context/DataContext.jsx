import React, { useState } from 'react'
import pokemonsJson from '../data/pokemon.json'
import gamesJson from '../data/games.json'
import anisJson from '../data/anis.json'


const DataContext = React.createContext();


const DataProvider = ({children}) =>{

  const [pokemons, setPokemons] = useState(pokemonsJson);
  const [games, setGames] = useState(gamesJson);
  const [anis, setAnis] = useState(anisJson);


  const value = {
    state : {pokemons,games,anis},
    action : {setPokemons,setGames,setAnis}
  }
    
  return(
    <DataContext.Provider value = {value}>
      {children}
    </DataContext.Provider>
  )

}

export {DataProvider}

export default DataContext