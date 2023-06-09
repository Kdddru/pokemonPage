import React, { useContext } from 'react'
import Slider from 'react-slick'
import DataContext from '../context/DataContext';



export const MonsterBalls = () => {
  
  const {state} = useContext(DataContext);
  
  const balls = state.monsterBall 
  
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 4000,
    cssEase: "linear"
  };
  
  
  return (
    <div>
        <Slider {...settings}>
          {balls.map((ball,i)=>(
            <div key={i}>
              <div
              style={{width:'250px', height:'300px',
              margin:'auto',marginTop:'20px'}}
              >
                <img src={ball.url} alt=""  width={150} height={150}
                  style={{margin:'auto',marginTop:'50px',
                  backgroundColor:'transparent'}}
                />
                <p
                style={{
                  textAlign:'center',
                  marginTop: '40px'
                  }}
                >{ball.name}</p>
              </div>
            </div>
          ))}
        </Slider>
    </div>
  )
}

function SampleNextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}

function SamplePrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={className}
      style={{ ...style, display: "none" }}
      onClick={onClick}
    />
  );
}