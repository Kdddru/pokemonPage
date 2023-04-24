import React from 'react'
import { Outlet } from 'react-router-dom'

export const Start = () => {
  return (
    <div className='out'>
      <Outlet/>
    </div>
  )
}
