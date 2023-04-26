import React from 'react'
import { MainGameComp } from '../Components/GamePageComp/MainGameComp'
import { MobileGameComp } from '../Components/GamePageComp/MobileGameComp'

export const Game = () => {
  
  return (
    <div className='main'>
      <MainGameComp/>
      <MobileGameComp/>
    </div>
  )
}
