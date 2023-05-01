import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import DataContext from '../context/DataContext';

export const HeadComp = () => {

  const {action} = useContext(DataContext);
  
  
  const click = () =>{
    action.setBtnvalue(true);
  }

  //주소
  const url = 'https://www.pokemonstore.co.kr/?NaPm=ct%3Dlgt4ndif%7Cci%3Dcheckout%7Ctr%3Dds%7Ctrx%3D%7Chk%3Dad987382d45e2d14782a0d9e6d33008670c745e3'

  return (
    <div className='header'>
      <Link to={'/'}>Pokemon</Link>
      <Link to={url}>
        <div className='online-shop'>
        </div>
      </Link>
      <div className='top-circle'
      onClick={click}
      ></div>
    </div>
  )
}
