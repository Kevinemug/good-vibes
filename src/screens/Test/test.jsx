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
<div className="grid grid-cols-3 h-fit shadow-md  mt-[250px] mx-20 gap-3 " >

<div className="bg-green-100 w-600 col-span-3" >header</div>
<div className="bg-green-500 w-600 border border-green-700 row-span-5">sidebar</div>
<div className="bg-green-500 w-600 col-span-2 ">content</div>
<div className="bg-green-500 w-200">footer</div>
<div className="bg-green-500 w-200">footer</div>
<div className="bg-green-500 w-200">footer</div>
<div className="bg-green-500 w-200">footer</div>
<div className="bg-green-500 w-200">footer</div>

<div className="bg-green-500 w-200">footer</div>






</div>





</>






    );}
 
export default TestYourBrain;