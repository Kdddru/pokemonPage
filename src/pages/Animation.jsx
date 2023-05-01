import React, { useContext } from 'react'
import { HeadComp } from '../Components/HeadComp'
import { FooterComp } from '../Components/FooterComp'
import DataContext from '../context/DataContext'
import Slider from 'react-slick'

//css

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

//font css
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

export const Animation = () => {

  return (
    <div>
      <HeadComp/>
        <div className='main'>
          <TvAai/>
          <MovieAni/>
        </div>
      <FooterComp/>
    </div>
  )
}

//슬라이더 버튼 next
const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      className={className}
      icon={faChevronRight}
      style={{ ...style, display: "block", color:'grey',width:'50px', height:'50px', zIndex:'20', right:'0.5%'}}
      onClick={onClick}
    />
    
  );
}

//슬라이더 버튼 prev
const SamplePrevArrow =(props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      style={{ ...style, display: "block", color:'grey',width:'50px', height:'50px', zIndex:'20', left:'0.5%'}}
      onClick={onClick}
    />
  );
}

// tv애니 슬라이더
const TvAai = () =>{
  //전체 배열
  const {state} = useContext(DataContext);
  //전체 애니 배열
  const anis = state.anis
  //tv 애니 배열
  const tv = anis.tv

  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  
    return (
      <div style={{
        backgroundColor:'aliceblue',
        border:'3px solid gray' ,
        margin:'auto' ,marginTop:'10px', width:'90%',minWidth:'1000px',height:'550px' }}>
        {/** 박스 텍스트  */}
        <h2 style={{margin:'10px 0 0 20px'}}>TV 애니메이션</h2>
        {/**슬라이더 공간 */}
        <div>
          <Slider {...settings}>
            {tv.map((tv,i)=>(
              <div key={i} >
              {/** 이미지박스 */}
                <div style={{textAlign:'center', width:'300px', margin:'auto', marginTop:'40px'}}>
                  <img src={tv.url} width={300} height={350} alt=''
                    style={{border: '3px solid black'}}
                    />
                  {/** 텍스트 박스 */}
                  <p
                  style={{margin:'20px 0 0 0', fontWeight:'700', fontSize:'1.3rem'}}
                  >{tv.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
}

// 극장판 슬라이더
const MovieAni = () =>{
  //전체 배열
  const {state} = useContext(DataContext);
  //전체 애니 배열
  const anis = state.anis
  //극장판 배열
  const movie = anis.movie

  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />
  };
  
  
    return (
      <div style={{backgroundColor:'aliceblue',
      border:'3px solid gray' ,
      margin:'auto' ,marginTop:'20px', width:'90%',minWidth:'1000px',height:'550px' }}>
      {/** 박스 텍스트  */}
        <h2 style={{margin:'20px 0 0 30px'}}>극장판</h2>
        {/**슬라이더 공간 */}
        <div 
        >
          <Slider {...settings}>
            {movie.map((movie,i)=>(
              <div key={i} >
              {/** 이미지박스 */}
                <div style={{textAlign:'center', width:'300px', margin:'auto', marginTop:'40px'}}>
                  <img src={movie.url} width={300} height={350} alt=''
                    style={{border: '3px solid black'}}
                    />
                    {/** 텍스트 박스 */}
                  <p
                  style={{margin:'20px 0 0 0', fontWeight:'700', fontSize:'1.3rem'}}
                  >{movie.name}</p>
                </div>
              </div>
            ))}
          </Slider>
        </div>
      </div>
    );
}