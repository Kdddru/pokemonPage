import React from 'react'
import { Link } from 'react-router-dom'

export const HeadComp = () => {
  const url = 'https://www.pokemonstore.co.kr/?NaPm=ct%3Dlgt4ndif%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dad987382d45e2d14782a0d9e6d33008670c745e3'
  return (
    <div className='header'>
      <Link to={'/'}>포켓몬</Link>
      <Link to={url}>pokemon online store</Link>
    </div>
  )
}
