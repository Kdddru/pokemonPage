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
        </div>
      <FooterComp/>
    </div>
  )
}

const SampleNextArrow = (props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      className={className}
      icon={faChevronRight}
      style={{ ...style, display: "block", color:'black',width:'50px', height:'50px', zIndex:'20', right:'0.5%'}}
      onClick={onClick}
    />
    
  );
}

const SamplePrevArrow =(props) => {
  const { className, style, onClick } = props;
  return (
    <FontAwesomeIcon
      icon={faChevronLeft}
      className={className}
      style={{ ...style, display: "block", color:'black',width:'50px', height:'50px', zIndex:'20', left:'0.5%'}}
      onClick={onClick}
    />
  );
}

const TvAai = () =>{
  const {state} = useContext(DataContext);

  const anis = state.anis

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
      <div style={{backgroundColor:'aliceblue',border:'3px solid gray' ,margin:'auto' ,marginTop:'50px', width:'90%',minWidth:'1000px',height:'550px' }}>
        <h2
        style={{margin:'20px 0 0 30px'}}
        >TV 애니메이션</h2>
        <div 
        >
          <Slider {...settings}>
            {tv.map((tv,i)=>(
              <div key={i} >
                <div style={{textAlign:'center', width:'300px', margin:'auto', marginTop:'40px'}}>
                  <img src={tv.url} width={300} height={350} alt=''
                    style={{border: '3px solid black'}}
                    />
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