import React from 'react'
import { AniComp } from '../Components/AnipageComp/AniComp'
import { MovieComp } from '../Components/AnipageComp/MovieComp'
import { HeadComp } from '../Components/HeadComp'
import { FooterComp } from '../Components/FooterComp'

export const Animation = () => {
  return (
    <div>
      <HeadComp/>
        <div className='main'>
          <AniComp/>
          <MovieComp/>
        </div>
      <FooterComp/>
    </div>
  )
}
