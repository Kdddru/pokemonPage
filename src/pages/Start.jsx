import React, { useContext } from 'react'
import { Outlet } from 'react-router-dom'
import DataContext from '../context/DataContext'

export const Start = () => {
  const {state} = useContext(DataContext);
  const changeClass = state.btnValue;

  console.log(state.btnValue);

  return (
    <div className={changeClass ? `click`: `not-click` }>
      <img src="" alt="" />
      <Outlet/>
    </div>
  )
}
