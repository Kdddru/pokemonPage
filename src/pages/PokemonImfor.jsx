import React, { useContext } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import './css/pokemonimfo.css'
import DataContext from '../context/DataContext';

export const PokemonImfor = () => {
  const navi = useNavigate();
  const pokemonParm = useParams();

  const {state} = useContext(DataContext);

  // pokemon 객체 들고오기
  const pokemons = state.pokemons.results;

  // param값과 같은 id를 들고있는 배열의 객체 전체 들고오기
  const pokemon = pokemons.find((pokemon)=>(
    pokemon.name === pokemonParm.pokemon
  ))

  const back = () => {
    navi(`/pokemonlist`);
  }

  return (
    <div className='imfo' onClick={back}>
      <div className='imfo-pokemon'>
        <div>
          <img 
          src={`https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/00${(pokemon.id<10) ? `0${pokemon.id}`: pokemon.id}01.png`} 
          alt="" />
        </div>
        <p>
          {pokemon.name}
        </p>
      </div>
    </div>
  )
}
