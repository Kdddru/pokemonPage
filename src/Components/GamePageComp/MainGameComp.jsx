import React, { useContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import DataContext from '../../context/DataContext';

// import css


export const MainGameComp = () => {
  const {state} = useContext(DataContext);
  const mainGames = state.games.mainGames
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {mainGames.map((game)=>(
              <SwiperSlide>
                <div className='game-list'>
                  <img src={game.url} alt="" />
                  <p className='game-list-text'>{game.name}</p>
                </div>
              </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}