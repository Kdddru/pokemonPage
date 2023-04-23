import React from 'react'
import { Link } from 'react-router-dom'

export const NavLink = () => {
  return (
    <div>
      <ul>
        <Link to={`/pokemonlist`}>도감</Link>
        <Link to={`/gamepage`}>게임</Link>
        <Link to={`/pokemonlist`}>도감</Link>
        <Link to={`/animation`}>애니메이션</Link>
      </ul>
    </div>
  )
}
