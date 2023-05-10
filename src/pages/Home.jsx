import React, { useContext} from 'react';
import { NavLink } from '../Components/NavLink';
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom';
import { RandomPoke } from '../Components/RandomPoke';
import { MonsterBalls } from '../Components/MonsterBalls';
import { News } from '../Components/News';

import './css/home.css'

//font
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowUp } from '@fortawesome/free-solid-svg-icons';


export const Home = () => {
  //데이터 값 들고오기
  const {state} = useContext(DataContext);
  const value = state.btnValue;

  return (
    <div>
      <Head/>
      <div className={value ? `click`: `not-click`} 
      >
        <NavLink/>
        <div className='layout-main'
          style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`1.5s`}: { opacity:'0'}}>
          <div className='layout-1'>
          {/** 랜덤 포켓몬 박스 */}
            <RandomPoke/>
          </div>
          <div className='layout-2'>
            <div className='layout-2-1'>
              <div className='layout-2-1-1'>
                <News/>
              </div>
            </div>
            <div className='layout-2-2'>
              <div className='layout-2-2-1'>
                <MonsterBalls/>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/** 온라인 스토어 텍스트 */}
      <div style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`1.5s`}: {opacity:'0'}}
      className='top-arrow'>
        <FontAwesomeIcon
        icon={faArrowUp}
        style={{width:'50px'}}
        />
        <p>온라인스토어</p>
      </div>
      <Foot/>
    </div>
  )
}

// home head 

const Head = () =>{
  //전체 데이터, 데이터 함수 들고오기
  const {state,action} = useContext(DataContext);
  const value = state.btnValue;
  
  
  //css 변경 버튼 (top-circle btn)
  const click = () =>{
    action.setBtnvalue(true);
  }

  // 포켓몬 온라인 스토어 링크 
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
      style={value ? {top:'50px' , transition:'1.5s'}:{top:'47.6vh'}}
      onClick={click}
      />
    </div>
  )
}

const Foot = () => {

  //전체 데이터, 데이터 함수 들고오기
  const {state, action} = useContext(DataContext);
  const value = state.btnValue;

  //css 변경버튼 (bottom-circle btn)
  const click = () =>{
    action.setBtnvalue(true);
  }


  return (
    <div className='footer'>
      {/**footer 글 */}
      <span style={value ? {display:'', transition:'1.5s', transitionDelay:'1.5s'}: {display:'none'}}>
        ©2023 Pokémon. ©1995-2023 Nintendo/Creatures Inc./GAME FREAK inc.<br/>
        ©Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku. ©Pokémon.<br/>
        ©1998-2020 PIKACHU PROJECT.
      </span>
      <span style={value ? {display:'' ,transition:'1.5s', transitionDelay:'1.5s'}: {display:'none'}}>
        포켓몬스터, 포켓몬, Pokémon, 몬스터볼,<br/> Nintendo Switch, Nintendo 3DS, Nintendo DS는Nintendo의 상표입니다.
      </span>
      <div className='bottom-circle'
      onClick={click}
      />
    </div>
  )
}


