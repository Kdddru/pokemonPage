import React from 'react'
import { MainGameComp } from '../Components/GamePageComp/MainGameComp'
import { MobileGameComp } from '../Components/GamePageComp/MobileGameComp'
import { HeadComp } from '../Components/HeadComp'
import { FooterComp } from '../Components/FooterComp'


export const Game = () => {
  return (
    <div>
      <HeadComp/>
      <div className='main'>
        <MainGameComp/>
        <MobileGameComp/>
      </div>
      <FooterComp/>
    </div>
  )
}
