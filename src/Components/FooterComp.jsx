import React, { useContext } from 'react'
import DataContext from '../context/DataContext';


export const FooterComp = () => {
  const {action} = useContext(DataContext);
  const click = () =>{
    action.setBtnvalue(true);
  }


  return (
    <div className='footer'>
      <span>gd</span>
      <span>ds</span>
      <div className='bottom-circle'
      style={{cursor:'pointer'}}
      onClick={click}
      ></div>
    </div>
  )
}
