import React, { useContext } from 'react'
import DataContext from '../context/DataContext';


export const FooterComp = () => {
  const {action} = useContext(DataContext);
  const click = () =>{
    action.setBtnvalue(true);
  }


  return (
    <div className='footer'>
      <span>
        ©2023 Pokémon. ©1995-2023 Nintendo/Creatures Inc./GAME FREAK inc.<br/>
        ©Nintendo, Creatures, GAME FREAK, TV Tokyo, ShoPro, JR Kikaku. ©Pokémon.<br/>
        ©1998-2020 PIKACHU PROJECT.
      </span>
      <span>
      포켓몬스터, 포켓몬, Pokémon, 몬스터볼,<br/> Nintendo Switch, Nintendo 3DS, Nintendo DS는Nintendo의 상표입니다.
      </span>
      <div className='bottom-circle'
      style={{cursor:'pointer'}}
      onClick={click}
      ></div>
    </div>
  )
}
