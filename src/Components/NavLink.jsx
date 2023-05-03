import React , { useContext }from 'react'
import DataContext from '../context/DataContext';
import { Link } from 'react-router-dom'
import './css/navlink.css'

export const NavLink = () => {
  const {state} = useContext(DataContext);
  const value = state.btnValue;
  return (
    <div
    style={value ? {opacity:'1',transition:'1s' ,transitionDelay:`1.5s`,height:'200px' }: {opacity:'0', height:'0'}}
    >
      <ul className='nav-link'
      >
        <Link to={`/pokemonlist`}>도 감</Link>
        <Link to={`/game`}>게 임</Link>
        <Link 
        to={`https://pokemoncard.co.kr/main`}>
          카드 게임
        </Link>
        <Link to={`/animation`}>애니메이션</Link>
      </ul>
      <div>
        <div
        className='balls'
        >
        {/** 몬스터볼들 */}
          <div/>
          <div/>
          <div/>
          <div/>
        </div>
      </div>
    </div>
  )
}
