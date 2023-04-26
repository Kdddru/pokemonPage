import React from 'react'
import { Link } from 'react-router-dom'
import './css/navlink.css'

export const NavLink = () => {
  return (
    <div>
      <ul className='nav-link'>
        <Link to={`/pokemonlist`}>도 감</Link>
        <Link to={`/game`}>게임</Link>
        <Link 
        to={`https://pokemoncard.co.kr/main`}>
          카드 게임
        </Link>
        <Link to={`/animation`}>애니메이션</Link>
      </ul>
    </div>
  )
}
