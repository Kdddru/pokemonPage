import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import './css/pokemonlist.css'
import { NavLink, Outlet } from 'react-router-dom';
import { HeadComp } from '../Components/HeadComp';
import { FooterComp } from '../Components/FooterComp';

export const PokemonList = () => {
  const {state} = useContext(DataContext);
  const pokemons = state.pokemons.results;
  //초기값  (모든 포켓몬 불러오기)
  const [pokemonValue, setPokemonValue] =useState(pokemons);
  //input 값
  const [inputValue, setInputValue] = useState(``);
  
  //검색
  const search = (e) =>{
    e.preventDefault();
    const newList = pokemonValue.filter((pokemon)=>(
      pokemon.name === inputValue 
    ));
    setPokemonValue(newList);
    setInputValue(``);
  }
  
  //reset
  const reset = () =>{
    setPokemonValue(pokemons);
  }
  
  //console.log(pokemons);

  return (
    <div>
      <HeadComp/>
      <div className='input-div'>
        <Outlet/>

        {/** 검색창 */}
        <form onSubmit={search}>
          <input type="text"
          onChange={(e)=>{
            setInputValue(e.target.value)
          }}
            value={inputValue}
          />
          <input type="submit" value="검색" />        
        </form>
        {/** 리셋 */}
        <button
        onClick={reset}
        >리셋</button>
        {/** 포켓몬 보여지는 박스 */}
        <ul className='pokemonlist'>
            {pokemonValue.map((pokemon)=>(
              <li key={pokemon.id}>
                <div>
                  <NavLink to={`/pokemonlist/${pokemon.name}`}>
                    <img 
                    src={`https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/00${(pokemon.id<10) ? `0${pokemon.id}`: pokemon.id}01.png`}
                    alt="" />
                  </NavLink>
                </div>
                  <p className='pokemonlist-no'>NO.{pokemon.id}</p>
                  <p className='pokemonlist-text'>{pokemon.name}</p>
              </li>
            ))}          
        </ul>
      </div>
      <FooterComp/>
    </div>
  )
}