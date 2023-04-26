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
import '../css/slide.css'

export const AniComp = () => {
  const {state} = useContext(DataContext);
  const tv = state.anis.tv
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {tv.map((ani)=>(
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
