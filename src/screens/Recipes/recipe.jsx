/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import {BsFillSearchHeartFill} from 'react-icons/bs'
import  imagehero from '../../assets/images/imagehero.jpg'

const Recipe = () => {

    const [recipes, setRecipes] = useState([]);
    const [recipe, setRecipe] = useState([]);
    const [skeletons,setSkeletons]= useState(true)
    const [query, setQuery] = useState("");
    const[results,setResults]=useState(false)
    
    const[title,setTitle]=useState('Top searches')
    useEffect(() => {
      axios.get('https://api.edamam.com/search?q=salad&app_id=241d10f8&app_key=09e7aa7cc223159a01aa72b403f51c6c&from=0&to=6', { params: { limit: 5 } })
        .then(response =>setRecipes(response.data.hits))
        .then(() => {
            setSkeletons(false)
          })
                  .catch(error => console.error(error));
    }, []);



    function handleSearch() {
        const YOUR_APP_ID = "241d10f8";
        const YOUR_APP_KEY = "09e7aa7cc223159a01aa72b403f51c6c";
         setTitle('searching..')
        fetch(`https://api.edamam.com/search?q=${query}&app_id=241d10f8&app_key=09e7aa7cc223159a01aa72b403f51c6c&from=0&to=20`)

          .then(response => response.json())
          .then(data => {
            const recipes = data.hits.map(hit => hit.recipe);
            setRecipe(recipes);
            setResults(true)
            setSkeletons(false)
            setTitle(`showing results for ${query}`)
          })
          .catch(error => console.log(error));
      }

      function handleInputChange(event) {
        setQuery(event.target.value);
      }


const handleBtnClick = (event) => {

handleSearch();
setSkeletons(true)

}






    return ( <>
    
    
    <div className=''>
        {/* hero */}
        <div className=' mt-[170px] md:mt-[250px] lg:mt-200 grid grid-cols-2 w-full'>
            <div className=' mt-[20px] md:mt-40 lg:mt-[100px] lg:ml-[30px] ml-[10px]'>
            <div className=' text-2xl md:text-4xl lg:text-6xl font-black '>Cooking With Love.</div>
            <div className='text-[10px] md:text-3xl md:mt-20 lg:text-5xl font-semibold w-3/4 lg:mt-[20px]'>Recipes that will warm your heart!</div>
            <div className=' flex justify-between  border-2 border-green-200 w-300 shadow rounded-3xl lg:rounded-2xl lg:h-[50px] mt-[40px]'>
              <input type="text" className=' focus:outline-none lg:w-300 ml-20 text-base placeholder-gray-400::placeholder text-[14px] ' placeholder='search recipe' value={query} onChange={handleInputChange}/>
              <BsFillSearchHeartFill onClick={ handleBtnClick} className=' text-xl lg:text-2xl mx-20 my-[10px] ' />
            </div>
            </div>
            <div className='flex '>
        <img src={imagehero} alt="" className='h-[140px] md:h-[300px] lg:h-[370px] lg:rounded-lg'/>
        <div className='hidden bg-green-100 w-[230px]  mt-[10px] h-[450px] skew-y-[45deg] transform-gpu rounded-full lg:block' ></div>
            </div>
        </div>
    </div>
    
<div className='mt-[30px] lg:mt-[-60px] md:mt-[100px] ml-20'>

    <div className='  md:text-[26px] lg:text-[18px] mb-20 text-[12px] text-gray-400'>{title}</div>
{!results  ? (
  skeletons ? (     <div className='grid grid-cols-2 md:grid-cols-4 gap-y-[20px] gap-x-[10px]  justify-center'>

<div className='w-[150px] animate-pulse' >
    <div className='w-[150px] lg:w-[220px] bg-slate-200 h-[150px]'></div>
    <div className='flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200'></div>
</div>
<div className='w-[150px] animate-pulse' >
    <div className='w-[150px] lg:w-[220px] bg-slate-200 h-[150px]'></div>
    <div className='flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200'></div>
</div>
<div className='w-[150px] animate-pulse' >
    <div className='w-[150px] lg:w-[220px] bg-slate-200 h-[150px]'></div>
    <div className='flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200'></div>
</div>
<div className='w-[150px] animate-pulse' >
    <div className='w-[150px] lg:w-[220px] bg-slate-200 h-[150px]'></div>
    <div className='flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200'></div>
</div>




    </div>
) : ( 
      <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-[20px] gap-x-[10px]  '>

{recipes.map((recipe,index) => (

<div className='w-[150px] transition lg:w-[200px] rounded-lg shadow  md:w-[220px]' key={index}>
    <img src={recipe.recipe.image} alt={recipe.label} className='rounded-lg  lg:h-[150px] lg:w-[250px]' />
    <p className='flex justify-center lg:mt-[10px] px-20  text-justify text-[13px] text-gray-500'>{recipe.recipe.label}</p>
</div>



))}

    </div>
)
) : (   
    <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-[20px] gap-x-[10px]  '>
 { skeletons ? (     <div className='lg:grid grid-rows-2'>

<div className='w-[150px] animate-pulse' >
    <div className='w-[150px] lg:w-[220px] bg-slate-200 h-[150px]'></div>
    <div className='flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200'></div>
</div>
<div className='w-[150px] animate-pulse' >
    <div className='w-[150px] lg:w-[220px] bg-slate-200 h-[150px]'></div>
    <div className='flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200'></div>
</div>
<div className='w-[150px] animate-pulse' >
    <div className='w-[150px] lg:w-[220px] bg-slate-200 h-[150px]'></div>
    <div className='flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200'></div>
</div>
<div className='w-[150px] animate-pulse' >
    <div className='w-[150px] lg:w-[220px] bg-slate-200 h-[150px]'></div>
    <div className='flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200'></div>
</div>




    </div>) :  ( recipe.length === 0 ? <div>couldnt find what you are looking for</div>  :     recipe.map(recipe => (
        <div  className='w-[150px] transition lg:w-[200px] rounded-lg shadow  md:w-[220px]' key={recipe.uri}>
      {/* <h3>{recipe.calories}</h3> */}
      <img src={recipe.image} alt={recipe.label}className='rounded-lg  lg:h-[150px] lg:w-[250px]'/>
      <p className='flex justify-center lg:mt-[10px] px-20  text-justify text-[13px] text-gray-500'>{recipe.label}</p>
</div>) 
 
 
  ))}
</div>
)}


    

    
    
</div>
    
    
    </> );
}
 
export default Recipe;