/* eslint-disable no-unused-vars */
import React from 'react';
import './test.css'
import { useState, useEffect } from 'react';
import tvswall from '../../assets/images/tvswall.jpg'
import Navigation from './../../components/Navigation/navigation';
import Riddle from '../../services/riddles';
const TestYourBrain = () => {
  
    return (
<>

<div  style={{marginTop:"10px"}}>
    <Riddle/>
</div>
    </>
    );}
 
export default TestYourBrain;