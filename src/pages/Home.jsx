import React, { useContext, useState} from 'react';
import { NavLink } from '../Components/NavLink';
import DataContext from '../context/DataContext';
import './css/home.css'


export const Home = () => {

  //데이터 값 들고오기
  const {state} = useContext(DataContext);
  const value = state.btnValue;
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
    <div className={value ? `click`: `not-click`} >
      <NavLink/>
      <div className='random-pokemon-div'
      style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`1.5s`}: {opacity:'0'}}
      >
        <div className='random-card' style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`1.9s`}: {opacity:'0'}}>
          <div className='random-card-img' style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`2.3s`}: {opacity:'0'}}>
            <img
            src={`https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/00${(randomNum+1<10) ? `0${randomNum+1}`: randomNum+1}01.png`} 
            alt="" />
          </div>
          <p
          className='random-card-text'
          style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`2.3s`}: {opacity:'0'}}
          >
            {pokemons[randomNum].name}
          </p>
        </div>
      </div>
      <div className='btn-div'
      style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`2.1s`}: {opacity:'0'}} >
        <button className='btn-div-returnBtn' onClick={RandomBtn}>다시!</button>
      </div>
    </div>
  )
}



