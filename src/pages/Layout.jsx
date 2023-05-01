import React from 'react'
import { HeadComp } from '../Components/HeadComp'
import { FooterComp } from '../Components/FooterComp'

export const Layout = () => {
  return (
    <div>
      <HeadComp/>
        <div className='main'>
          <div
          style={{display:'flex',width:'90%', height:'1000px', backgroundColor:'aliceblue',
          margin:'auto', border: '4px solid grey'
          }}
          >
            <div
            style={{width:'50%',height:'100%', backgroundColor:'beige'}}
            >1</div>
            <div style={{display:'flex', flexDirection:'column', width:'50%'}}>
              <div
              style={{backgroundColor:'blue', height:'50%'}}
              ></div>
              <div
              style={{backgroundColor:'red', height:'50%'}}
              ></div>
            </div>
          </div>
        </div>
      <FooterComp/>
    </div>
  )
}
