import React from 'react'


export const Layout = () => {
  return (
    <div>
        <div className='main'>
          <div
          style={{display:'flex',width:'90%', height:'800px', backgroundColor:'aliceblue',
          margin:'auto', border: '4px solid grey'
          }}
          >
            <div
            style={{width:'50%',height:'100%', backgroundColor:'beige'}}
            >
            </div>
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
    </div>
  )
}
