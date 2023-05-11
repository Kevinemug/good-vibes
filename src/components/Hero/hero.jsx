/* eslint-disable no-unused-vars */
import React from 'react';
import {BsFillSearchHeartFill} from 'react-icons/bs'
import  imagehero from '../../assets/images/imagehero.jpg'
const Hero = () => {
    return ( <>
    
    
    <div className='' >
        <div>
        <div style={{background:"green"}}>Cooking With Love</div>
        <div>Recipes that will warm your heart!</div>
        <div>
          <BsFillSearchHeartFill/>  <input type="text" />
        </div>



        </div>
        <div className='w-40'>
<img src={imagehero} alt="" />
        </div>
    </div>
    
    
    
    
    
    
    
    
    </> );
}
 
export default Hero;