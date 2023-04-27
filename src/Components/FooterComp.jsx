import React, { useContext } from 'react'
import DataContext from '../context/DataContext';


export const FooterComp = () => {
  const {state, action} = useContext(DataContext);
  const value = state.btnValue;
  const click = () =>{
    action.setBtnvalue(true);
  }


  return (
    <div className='footer'>
      <span style={value ? undefined: {display:'none'}}>gd</span>
      <span style={value ? undefined: {display:'none'}}>ds</span>
      <div className='bottom-circle'
      style={{cursor:'pointer'}}
      onClick={click}
      ></div>
    </div>
  )
}
