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

export const MobileGameComp = () => {
  const {state} = useContext(DataContext);
  const mobileGames = state.games.mobileGames
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {mobileGames.map((game)=>(
              <SwiperSlide>
                <div className='mobileGames-list'>
                  <img src={game.url} alt="" />
                  <p className='mobileGames-list-text'>{game.name}</p>
                </div>
              </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}