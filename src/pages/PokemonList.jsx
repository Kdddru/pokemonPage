import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import './css/pokemonlist.css'

export const PokemonList = () => {
  const {state} = useContext(DataContext);
  const pokemons = state.pokemons.results;

  const [pokemonValue, setPokemonValue] =useState(pokemons);
  const [inputValue, setInputValue] = useState(``);
  
  const search = (e) =>{
    e.preventDefault();
    const newList = pokemonValue.filter((pokemon)=>(
      pokemon.name === inputValue 
    ));
    setPokemonValue(newList);
    setInputValue(``);
  }
  
  
  
  //console.log(pokemons);

  return (
    <div className='input-div'>
      <form onSubmit={search}>
        <input type="text"
        onChange={(e)=>{
          setInputValue(e.target.value)
        }}
          value={inputValue}
        />
        <input type="submit" value="검색" />        
      </form>
      <ul className='pokemonlist'>
          {pokemonValue.map((pokemon)=>(
            <li key={pokemon.id}>
              <div>
                <img 
                src={`https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/00${(pokemon.id<10) ? `0${pokemon.id}`: pokemon.id}01.png`}
                alt="" />
              </div>
                <p className='pokemonlist-no'>NO.{pokemon.id}</p>
                <p className='pokemonlist-text'>{pokemon.name}</p>
            </li>
          ))}          
      </ul>
    </div>
  )
}
