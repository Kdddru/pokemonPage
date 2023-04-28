import React, { useContext, useState} from 'react';
import { NavLink } from '../Components/NavLink';
import DataContext from '../context/DataContext';
import './css/home.css'
import { Link } from 'react-router-dom';


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
  const [btnDisable, setBtnDisable] = useState(false);
  const RandomBtn = () =>{
    const random2 = Math.floor(Math.random()*pokemons.length);
    setRandomNum(random2);
    //console.log(random2)
    setBtnDisable(true);
  }

  

  return (
    <div>
      <Head/>
      <div className={value ? `click`: `not-click`} >
        <div 
        style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`1.5s`}: {opacity:'0'}}
        >
          <NavLink/>
        </div>
          {/**포켓몬 랜덤 카드 박스 */}
        <div className='random-pokemon-div'
        style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`2s`}: {opacity:'0'}}
        >
        {/**포켓몬 랜덤 카드*/}
          <div className='random-card' 
          style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`2.3s`}: {opacity:'0'}}>

          {/**포켓몬 랜덤 카드 이미지 */}
            <div className='random-card-img' 
            style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`2.7s`}: {opacity:'0'}}>
              <img
              src={`https://data1.pokemonkorea.co.kr/newdata/pokedex/mid/00${(randomNum+1<10) ? `0${randomNum+1}`: randomNum+1}01.png`} 
              alt="" />
            </div>

            {/**포켓몬 랜덤 카드 텍스트 */}
            <p
            className='random-card-text'
            style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`2.7s`}: {opacity:'0'}}
            >
              {pokemons[randomNum].name}
            </p>
          </div>
        </div>

        <div className='btn-div'
        style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`2s`}: {opacity:'0'}} >
          <button className='btn-div-returnBtn' onClick={RandomBtn} disabled={btnDisable}>다시!</button>
        </div>
      </div>
      <Foot/>
    </div>
  )
}

const Head = () =>{
  const {state,action} = useContext(DataContext);
  const value = state.btnValue;
  
  
  const click = () =>{
    action.setBtnvalue(true);
  }



  const url = 'https://www.pokemonstore.co.kr/?NaPm=ct%3Dlgt4ndif%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dad987382d45e2d14782a0d9e6d33008670c745e3'
  return (
    <div className='header' 
    style={value ? {height:'80px', transition:'1.5s'}:{height:'50vh'}}>
      {/** 홈 버튼 */}
      <Link to={'/'} 
      style={value ? {visibility:'', transition:'1.5s', transitionDelay:'1.5s'}: {visibility:'hidden'}}>
        Pokemon
      </Link>

      {/**포켓몬 온라인스토어 */}
      <Link to={url} 
      style={value ? {visibility:'', transition:'1.5s', transitionDelay:'1.5s'}: {visibility:'hidden'}}>
        <div className='online-shop'>
        </div>
      </Link>
      {/**몬스터볼 서클 */}
      <div className='top-circle'
      style={value ? {top:'50px' , transition:'1.5s'}:{top:'47.5vh'}}
      onClick={click}
      ></div>
    </div>
  )
}

const Foot = () => {
  const {state, action} = useContext(DataContext);
  const value = state.btnValue;
  const click = () =>{
    action.setBtnvalue(true);
  }


  return (
    <div className='footer'>
      {/**footer 글 */}
      <span style={value ? {display:'' ,transition:'1.5s', transitionDelay:'1.5s'}: {display:'none'}}>gd</span>
      <span style={value ? {display:'', transition:'1.5s', transitionDelay:'1.5s'}: {display:'none'}}>ds</span>
      <div className='bottom-circle'
      style={{cursor:'pointer'}}
      onClick={click}
      ></div>
    </div>
  )
}


