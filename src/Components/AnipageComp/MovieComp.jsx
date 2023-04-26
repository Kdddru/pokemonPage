import React, { useContext } from 'react'

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";
import DataContext from '../../context/DataContext';


export const MovieComp = () => {
  const {state} = useContext(DataContext);
  const movie = state.anis.movie
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {movie.map((ani,i)=>(
              <SwiperSlide>
                <div className='ani-list'>
                  <img src={ani.url} alt="" />
                  <p className='ani-list-text'>{ani.name}</p>
                </div>
              </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}