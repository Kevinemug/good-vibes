/* eslint-disable no-unused-vars */
import React from 'react';
import './test.css'
import { useState, useEffect } from 'react';
import tvswall from '../../assets/images/tvswall.jpg'
import Navigation from './../../components/Navigation/navigation';
import Riddle from '../../services/riddles';
import Example from '../../anime';
const TestYourBrain = () => {
  
    return (
<>

<div className=' flex justify-center '  style={{marginTop:"200px"}}>
    {/* <Riddle/> */}
    <Example/>
</div>
    </>
    );}
 
export default TestYourBrain;