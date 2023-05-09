import React, { useContext, useState } from 'react'
import DataContext from '../context/DataContext'
import { NavLink } from 'react-router-dom';
import { HeadComp } from '../Components/HeadComp';
import { FooterComp } from '../Components/FooterComp';

import './css/pokemonlist.css'

export const PokemonList = () => {
  const {state} = useContext(DataContext);

  
  //초기값  (모든 포켓몬 불러오기)
  const pokemons = state.pokemons.results;
  
  //검색값넣을곳

  //input 값
  const [inputValue, setInputValue] = useState(``);
  //더보기 페이지 높이 값
  const value = 932
  
  //더보기 페이지 * plusPage의 plusPage
  const [plusPage, setPlusPage] = useState(1);
  const maxPage = plusPage*value;
  //버튼 보이게 하기
  const [onBtn, setOnbtn] = useState(false)

  //검색
  const search = pokemons.filter((pokemon)=>(
    pokemon.name.includes(inputValue) || pokemon.id.includes(inputValue)
  ))
  
  const [click, setClick]  =useState(false);
  //console.log(pokemons);
  //페이지 늘리기
  const plusPageValue = () =>{
    setPlusPage(plusPage+1);
    setOnbtn(true);
    if(maxPage===2796){
      setClick(true)
    }
  }
  // top으로 가기
  const onTop = () =>{
    window.scrollTo({top:0, left:0, behavior:'smooth'});
  }

  return (
    <div>
      <HeadComp/>
      <div className='input-div'>
        {/**modal 창 */}
        {/** 검색창 */}
          <input type="text" required
          onChange={(e)=>{
            setInputValue(e.target.value)
          }}
            value={inputValue}
          />
        {/** 리셋 */}
        {/** 포켓몬 보여지는 박스 */}
        <ul className='pokemonlist'
        style={{height:`${maxPage}px`, overflow:'hidden'}}
        >
            {search.map((pokemon)=>(
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
        <div>
        {/** 더보기 버튼 */}
          <button
          onClick={plusPageValue}
          disabled={click}
          >더보기
          </button>
        </div>
      </div>
      <div className='top-btn'
      onClick={onTop}
      style={onBtn?{display:''}:{display:'none'}}
      >
        <span>Top</span>
      </div>
      <FooterComp/>
    </div>
  )
}