import React, { useContext } from 'react'
import Slider from 'react-slick';
import DataContext from '../context/DataContext';




export const News = () => {
  const {state} = useContext(DataContext);

  const news = state.news
  
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    nextArrow: <SampleNextArrow />,
    prevArrow: <SamplePrevArrow />,
    autoplay: true,
    speed: 1200,
    autoplaySpeed: 3000,
    cssEase: "linear"
  };
  
  return (
    <div>
      <Slider {...settings}>
      {news.map((n,i)=>(
            <div key={i}>
              <div
              style={{width:'250px', height:'300px',
              margin:'auto',marginTop:'10px'}}
              >
                <img src={n.url} alt=""  width={170} height={190}
                  style={{margin:'auto',marginTop:'50px',
                  backgroundColor:'transparent'}}
                />
                <p
                style={{
                  textAlign:'center',
                  marginTop: '20px'
                  }}
                >{n.content}</p>
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