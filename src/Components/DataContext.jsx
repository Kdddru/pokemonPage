import React, { useState } from 'react'
import pokemonsJson from '../data/pokemon.json'


const DataContext = React.createContext();


const DataProvider = ({children}) =>{

  const [pokemons, setPokemons] = useState(pokemonsJson);


  const value = {
    state : {pokemons},
    action : {setPokemons}
  }

  return(
    <DataContext.Provider value = {value}>
      {children}
    </DataContext.Provider>
  )

}

export {DataProvider}

export default DataContext