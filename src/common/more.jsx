// eslint-disable-next-line no-unused-vars
import React from 'react';
import imagehero from '../assets/images/imagehero.jpg'
import {FaRegShareSquare} from 'react-icons/fa'
import {ImCancelCircle} from 'react-icons/im'
const More = () => {
    return ( <>
    
    <div className=' mt-200 absolute top-[0px]'>
        <div className=" flex justify-center"><ImCancelCircle className='text-xl'/></div>
        <div className='grid'>
            <div className='text-2xl flex justify-center py-[30px] font-black'>Green salad with avocado</div>
            <div className="grid grid-cols-2 gap-x-20 px-20 py-[20px]">
                <div className=' '>
                    <img src={imagehero} alt="" className='h-[150px] w-[400px] rounded-md rounded-lg' />
                </div>
                <div className='h-[42px] w-[124px] shadow  rounded-lg bg-[#F4F4F4] flex justify-center items-center gap-x-20 mt-40' >
                    <div><FaRegShareSquare className='text-xl'/></div>
                    <p className='text-xl'>Share recipe</p>
                </div>
            </div>
        </div>
        
        <div className='py-[30px]'>
        
        
        <div className='text-xl text-gray-400 border-b-2 pb-[10px] px-[30px] '> Engredients</div>
        <div className='flex flex-col gap-y-[15px] mt-20 ml-40'>
        <li className='list-none'>1 tsps of juicce</li>
        <li className='list-none'>1 tsps of juicce</li>
        <li className='list-none'>1 tsps of juicce</li>
        <li className='list-none'>1 tsps of juicce</li>
        
        </div>
        
        
        </div>
        
        <div className='py-[30px]'>
            <div className='text-xl text-gray-400 border-b-2 pb-[10px] px-[30px] '>Preparation</div>
            <div className="flex gap-x-40 py-40 px-[30px]">
                <div className='h-[42px] w-[124px] shadow  rounded-lg bg-[#F4F4F4] flex justify-center items-center'>instructions</div>
                <div className='underline mt-[10px] '>on bbc</div>
            </div>
        </div>
        
        <div>
            <div className='text-xl text-gray-400 border-b-2 pb-[10px] px-[30px]'>Nutrition</div>
            <div className="flex gap-x-40 px-[30px] py-40">
                <div className='h-[60px] w-[68px] bg-[#F4F4F4] shadow-lg rounded-lg flex flex-col justify-center items-center'>
                    <div className='font-black'>116</div>
                    <div className='font-black text-[10px]'>CAL/SERV</div>
                </div>
                <div className='h-[60px] w-[68px] bg-[#F4F4F4] shadow-lg rounded-lg flex flex-col justify-center items-center'>
                    <div className='font-black'>6 %</div>
                    <div className='font-black text-[10px]'>DAILY VALUE</div>
                </div>
                <div className='h-[60px] w-[68px] bg-[#F4F4F4] shadow-lg rounded-lg flex flex-col justify-center items-center'>
                    <div className='font-black'>10</div>
                    <div className='font-black text-[10px]'>SERVINGS</div>
                </div>
            </div>
        
        
        <div className="flex flex-col gap-20 px-[30px]">
            <div className='grid grid-cols-5 shadow rounded-md px-20 py-[5px]'>
            <div className='col-span-3 border-r-2 border-lime-300 '>Fat</div>
            <div >11g</div>
            <div>17%</div>
            </div>
            <div className='grid grid-cols-5 shadow rounded-md px-20 py-[5px]'>
            <div className='col-span-3 border-r-2 border-lime-300'>Carbs</div>
            <div>11g</div>
            <div>17%</div>
            </div>
            <div className='grid grid-cols-5 shadow rounded-md px-20 py-[5px]' >
            <div className='col-span-3 border-r-2 border-lime-300'>Protein</div>
            <div>11g</div>
            <div>17%</div>
            </div>
            <div className='grid grid-cols-5 shadow rounded-md px-20 py-[5px]' >
            <div className='col-span-3 border-r-2 border-lime-300'>Magnesium</div>
            <div>11g</div>
            <div>17%</div>
            </div>
            <div className='grid grid-cols-5 shadow rounded-md px-20 py-[5px]' >
            <div className='col-span-3 border-r-2 border-lime-300'>Calsium</div>
            <div>11g</div>
            <div>17%</div>
            </div>
        </div>
        
        
        </div>
        
        
        
    </div>
    
    
    
    </> );
}
 
export default More;
