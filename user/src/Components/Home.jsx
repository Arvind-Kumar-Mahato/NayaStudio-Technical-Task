import React from 'react'
import Canvas from './Canvas'
import Form from './form/Form'
import Navbarr from './Navbarr'
import Panel from './Panel'




const Home =  () => {
 

  return (
    <div>
      <Navbarr />
      <div className='box1'>
        <div>
          <Canvas />
        </div>
        
        <div className='panel-box'>
          <Panel />
        </div>
      </div>
      <Form/>
    </div>
  );
}

export default Home

