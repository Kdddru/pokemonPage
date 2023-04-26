import React, { useContext, useState} from 'react';
import { NavLink } from '../Components/NavLink';
import DataContext from '../context/DataContext';
import './css/home.css'


export const Home = () => {

  //데이터 값 들고오기
  const value = useContext(DataContext);
  const {state} = value;
  const pokemons = state.pokemons.results
  //console.log(pokemons);
  
  //랜덤
  const random = Math.floor(Math.random()*pokemons.length);
  //console.log(random);
  
  const [randomNum, setRandomNum] = useState(random);
  
  const RandomBtn = () =>{
    const random2 = Math.floor(Math.random()*pokemons.length);
    setRandomNum(random2);
    //console.log(random2)
  }

  return (
    <div className='main'>
      <NavLink/>
      <div className='random-pokemon-div'>
        <div className='random-card'>
          <div className='random-card-img'>
            <img
            src={`https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/00${(randomNum+1<10) ? `0${randomNum+1}`: randomNum+1}01.png`} 
            alt="" />
          </div>
          <p
          className='random-card-text'
          >
            {pokemons[randomNum].name}
          </p>
        </div>
      </div>
      <div className='btn-div'>
        <button className='btn-div-returnBtn' onClick={RandomBtn}>다시!</button>
      </div>
    </div>
  )
}



