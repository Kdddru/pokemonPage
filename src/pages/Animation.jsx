import React, { useContext } from 'react'
import { AniComp } from '../Components/AnipageComp/AniComp'
import { MovieComp } from '../Components/AnipageComp/MovieComp'
import DataContext from '../context/DataContext'

export const Animation = () => {
  return (
    <div className='main'>
      <AniComp/>
      <MovieComp/>
    </div>
  )
}
