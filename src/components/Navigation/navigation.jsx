/* eslint-disable no-unused-vars */
import './navigation.css'
import {AiOutlineHome} from 'react-icons/ai'
import {GiArtificialIntelligence} from 'react-icons/gi'
import {GiInspiration} from 'react-icons/gi'
import {MdOutlineDinnerDining} from 'react-icons/md'
import {TbBrandBlogger} from 'react-icons/tb'
import {MdOutlineConnectWithoutContact} from 'react-icons/md'
import { useState } from 'react'
import { Link } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const Navigation = ({image}) => {
    const[click,setClick]=useState('home')
    const handleClick = (link) =>{

        setClick(link)
    }
    return ( <>
    <div className="nav-background" >
        <img src={image} alt="" className='background-image' />

<div className="nav-container " >
<Link to="/" className="nav-link-container " >
    <div className={`icon-container ${click === 'home'? 'active ' : ''}` } onClick={ () =>handleClick('home')}>
        <AiOutlineHome className='icon '/>
    </div>
 <div className={`icon-name  ${click === 'home' ? "name-active " : ""} `} >Home</div>
   

</Link>
<Link to="/test" className="nav-link-container ">
    <div className={`icon-container ${click === 'test' ? 'active ' : ''}` } onClick={ () =>handleClick('test')}>
        <GiArtificialIntelligence className='icon'/>
    </div>
    <div className={`icon-name  ${click === 'test' ? "name-active " : ""} `}>Test your brain</div>
</Link>
<Link to="/" className="nav-link-container ">
    <div className={`icon-container ${click === 'inspo' ? 'active ' : ''}` } onClick={ () =>handleClick('inspo')}>
        <GiInspiration className='icon'/>
    </div>
    <div className={`icon-name  ${click === 'inspo' ? "name-active " : ""} `}>Inspiration</div>
</Link>
<Link to="/" className="nav-link-container">
    <div className={`icon-container ${click === 'nutri' ? 'active ' : ''}` } onClick={ () =>handleClick('nutri')}>
        <MdOutlineDinnerDining className='icon'/>
    </div>
    <div className={`icon-name  ${click === 'nutri' ? "name-active " : ""} `}>Recipes and nutrition</div>
</Link>
<Link to="/" className="nav-link-container ">
    <div className={`icon-container ${click === 'blog' ? 'active ' : ''}` } onClick={ () =>handleClick('blog')}>
        <TbBrandBlogger className='icon'/>
    </div>
    <div className={`icon-name  ${click === 'blog' ? "name-active " : ""} `}>Blog</div>
</Link>
<Link to="/" className="nav-link-container ">
    <div className={`icon-container ${click === 'feed' ? 'active ' : ''}` } onClick={ () =>handleClick('feed')}>
        <MdOutlineConnectWithoutContact className='icon'/>
    </div>
    <div className={`icon-name  ${click === 'feed' ? "name-active " : ""} `}>Testimonials</div>
</Link>

</div>


    </div>
    
    </> );
}
 
export default Navigation;