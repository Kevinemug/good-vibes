/* eslint-disable react/jsx-key */
/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { BsFillSearchHeartFill } from "react-icons/bs";
import imagehero from "../../assets/images/imagehero.jpg";
import More from "../../common/more";
import { FaRegShareSquare } from "react-icons/fa";
import { TiArrowBack} from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Recipe = () => {
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  const blurToggle = document.getElementById("blur-toggle");
  const body = document.body;
  const [recipes, setRecipes] = useState([]);
  const [recipe, setRecipe] = useState([]);
  const [skeletons, setSkeletons] = useState(true);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState(false);
  const [more, setMore] = useState(false);
  const [calories, setCalories] = useState([]);
  const [title, setTitle] = useState("Top searches");
  const navigate =useNavigate()
  useEffect(() => {
    axios
      .get(
        "https://api.edamam.com/search?q=pizza&app_id=241d10f8&app_key=09e7aa7cc223159a01aa72b403f51c6c&from=0&to=10",
        { params: { limit: 5 } }
      )
      .then((response) => setRecipes(response.data.hits))
      .then((data) => {
        setSkeletons(false);
        setCalories(data.totalNutrients.ENERC_KCAL.quantity)
        console.log(data.totalNutrients)
      })
      .catch((error) => console.error(error));
  }, []);

  function handleSearch() {
    setTitle("searching..");
    fetch(
      `https://api.edamam.com/search?q=${query}&app_id=241d10f8&app_key=09e7aa7cc223159a01aa72b403f51c6c&from=0&to=20`
    )
      .then((response) => response.json())
      .then((data) => {
        const recipes = data.hits.map((hit) => hit.recipe);
        setRecipe(recipes);
        setResults(true);
        setSkeletons(false);
        setTitle(`showing results for ${query}`);
      })
      .catch((error) => console.log(error));
  }

  function handleInputChange(event) {
    setQuery(event.target.value);
  }

  const handleBtnClick = (event) => {
    handleSearch();
    setSkeletons(true);
  };
  

  const renderRecipeDetails = (recipe,index) => {
    return (
      <div className=" mt-200 absolute top-[0px] transition">
        <div className=" flex justify-center font-black" onClick={handlCancel }>
          <TiArrowBack className="text-xl"   />back
        </div>
        <div className="grid">
          <div className="text-2xl flex justify-center py-[30px] font-black">
          {recipe.recipe.label}
          </div>
          <div className="grid grid-cols-2 gap-x-20 px-20 py-[20px]">
            <div className=" ">
              <img
                src={recipe.recipe.image}
                alt={recipe.recipe.label}
                className="h-[150px] w-[400px] rounded-md rounded-lg"
              />
            </div>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                <div className="h-[42px] w-[124px] shadow  rounded-lg bg-[#F4F4F4] flex justify-center items-center gap-x-20 mt-40">
                  <div>
                    <FaRegShareSquare className="text-xl" />
                  </div>
                  <p className="text-xl">Share</p>
                </div>
            </a>
          </div>
        </div>

        <div className="py-[30px]">
          <div className="text-xl text-gray-400 border-b-2 pb-[10px] px-[30px] ">
            {" "}
            Engredients
          </div>
          {recipe.recipe.ingredients.map((ingredient, index) => (
          <div className="flex flex-col gap-y-[15px] mt-20 ml-40">
            <li className="list-none" key={index}>{ingredient.text }</li>
          </div>           ))}

        </div>

        <div className="py-[30px]">
          <div className="text-xl text-gray-400 border-b-2 pb-[10px] px-[30px] ">
            Preparation
          </div>
          <div className="flex gap-x-40 py-40 px-[30px]">
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                <div className="h-[42px] w-[124px] shadow  rounded-lg bg-[#F4F4F4] flex justify-center items-center">
                  instructions
                </div>
            </a>
            <a  href={recipe.recipe.url} target="_blank" rel="noopener noreferrer">
                <div className="underline mt-[10px] ">click here</div>
            </a>
          </div>
        </div>

        <div>
          <div className="text-xl text-gray-400 border-b-2 pb-[10px] px-[30px]">
            Nutrition
          </div>
          <div className="flex gap-x-40 px-[30px] py-40">
            <div className="h-[60px] w-[68px] bg-[#F4F4F4] shadow-lg rounded-lg flex flex-col justify-center items-center">
              <div className="font-black" >{recipe.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(1)}</div>
              <div className="font-black text-[10px]">{recipe.recipe.totalNutrients.ENERC_KCAL.unit}</div>
            </div>
            <div className="h-[60px] w-[68px] bg-[#F4F4F4] shadow-lg rounded-lg flex flex-col justify-center items-center">
              <div className="font-black">{recipe.recipe.totalNutrients.ENERC_KCAL.quantity.toFixed(1)/4}</div>
              <div className="font-black text-[10px]">Daily value</div>
            </div>
            <div className="h-[60px] w-[68px] bg-[#F4F4F4] shadow-lg rounded-lg flex flex-col justify-center items-center">
              <div className="font-black">10</div>
              <div className="font-black text-[10px]">servings</div>
            </div>
          </div>

          <div className="flex flex-col gap-20 px-[30px]">
            <div className="grid grid-cols-5 shadow rounded-md px-20 py-[5px]">
              <div className="col-span-2 border-r-2 border-lime-300">Fat</div>
              <div>{recipe.recipe.totalNutrients.FAT.quantity.toFixed(1)}g</div>
              <div className="ml-[10px]">{(recipe.recipe.totalNutrients.FAT.quantity.toFixed(1))/2}%</div>
            </div>
            <div className="grid grid-cols-5 shadow rounded-md px-20 py-[5px]">
              <div className="col-span-2 border-r-2 border-lime-300">Calcium</div>
              <div>{recipe.recipe.totalNutrients.CA.quantity.toFixed(1)}g</div>
              <div className="ml-[10px]">{(recipe.recipe.totalNutrients.CA.quantity.toFixed(1))/2}%</div>
            </div>
            <div className="grid grid-cols-5 shadow rounded-md px-20 py-[5px]">
              <div className="col-span-2 border-r-2 border-lime-300">
                Sugar
              </div>
              <div>{recipe.recipe.totalNutrients.SUGAR.quantity.toFixed(1)}g</div>
              <div className="ml-[10px]">{(recipe.recipe.totalNutrients.SUGAR.quantity.toFixed(1))/2}%</div>
            </div>
            <div className="grid grid-cols-5 shadow rounded-md px-20 py-[5px]">
              <div className="col-span-2 border-r-2 border-lime-300">
                Water
              </div>
              <div>{recipe.recipe.totalNutrients.WATER.quantity.toFixed(1)}g</div>
              <div className="ml-[10px]">{(recipe.recipe.totalNutrients.WATER.quantity.toFixed(1))/2}%</div>
            </div>
            <div className="grid grid-cols-5 shadow  rounded-md px-20 py-[5px]">
              <div className="col-span-2 border-r-2 border-lime-300">
            Potassium
              </div>
              <div>{recipe.recipe.totalNutrients.K.quantity.toFixed(1)}g</div>
              <div className="ml-[10px]">{(recipe.recipe.totalNutrients.K.quantity.toFixed(1))/2}%</div>
            </div>
          </div>
        </div>
      </div>
    );
  };
  const handleMore = (recipe) => {
    setMore(true);
    // body.classList.toggle("blur");
    // navigate("/more")
    window.scrollTo({
        top: 0,
        behavior: "smooth"
      });
    setSelectedRecipe(recipe)
  };
  const handlCancel = () => {
    setMore(false);
    // body.classList.toggle("blur");
    navigate("/recipe")
  };

  return (
    <>
      { more ? (selectedRecipe && renderRecipeDetails(selectedRecipe)) : 
<div>
    
          <div className="">
            {/* hero */}
            <div className=" mt-[170px] md:mt-[250px] lg:mt-200 grid md:grid-cols-2 w-full">
              <div className="flex -mt-[50px]   lg:-mt-[50px]">
                <img
                  src={imagehero}
                  alt=""
                  className="h-[200px] rounded-md w-full  md:h-[300px] lg:h-[370px] lg:rounded-lg"
                />
                <div className="hidden bg-green-100  w-[230px]  md:mt-[10px] h-[300px] skew-y-[45deg] transform-gpu rounded-full lg:block"></div>
              </div>
    
              <div className=" mt-[20px] md:mt-40 lg:mt-[20px] lg:ml-[30px] ml-[10px]">
                <div className=" text-2xl md:text-4xl lg:text-6xl font-black ">
                  Cooking With Love.
                </div>
                <div className="text-[10px] md:text-3xl md:mt-20 lg:text-4xl font-semibold w-3/4 lg:mt-[20px]">
                  Recipes that will warm your heart!
                </div>
                <div className=" flex justify-between w-[300px] border-2 border-green-200  shadow rounded-xl lg:rounded-2xl lg:h-[50px] mt-[10px] lg:mt-[30px]  lg:w-[600px]">
                  <input
                    type="text"
                    className=" focus:outline-none lg:w-[300px] ml-20 text-base placeholder-gray-400::placeholder text-[14px] "
                    placeholder="search recipe"
                    value={query}
                    onChange={handleInputChange}
                  />
                  <BsFillSearchHeartFill
                    onClick={handleBtnClick}
                    className=" text-xl lg:text-2xl  mx-20 my-[10px] "
                  />
                </div>
              </div>
            </div>
          </div>
    
          <div className="mt-[30px] lg:mt-[10px] md:mt-[100px] ml-20">
            <div className="  md:text-[26px] lg:text-[18px] mb-20 text-[12px] text-gray-400">
              {title}
            </div>
            {!results ? (
              skeletons ? (
                <div className="grid grid-cols-2 md:grid-cols-4 gap-y-[20px] gap-x-[10px]  justify-center">
                  <div className="w-[150px] animate-pulse">
                    <div className="w-[150px] lg:w-[220px] bg-slate-200 h-[150px]"></div>
                    <div className="flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200"></div>
                  </div>
                  <div className="w-[150px] animate-pulse">
                    <div className="w-[150px] lg:w-[220px] bg-slate-200 h-[150px]"></div>
                    <div className="flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200"></div>
                  </div>
                  <div className="w-[150px] animate-pulse">
                    <div className="w-[150px] lg:w-[220px] bg-slate-200 h-[150px]"></div>
                    <div className="flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200"></div>
                  </div>
                  <div className="w-[150px] animate-pulse">
                    <div className="w-[150px] lg:w-[220px] bg-slate-200 h-[150px]"></div>
                    <div className="flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200"></div>
                  </div>
                </div>
              ) : (
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-[20px] gap-x-[10px]  ">
                  {recipes.map((recipe, index) => (
                    <div
                      className="w-[150px] transition lg:w-[200px] rounded-lg shadow  md:w-[220px]"
                      key={index}
                      id="blur-toggle"
                  onClick={ () => handleMore(recipe)}
                    >
                      <img
                        src={recipe.recipe.image}
                        alt={recipe.label}
                        className="rounded-lg  lg:h-[150px] lg:w-[250px]"
                      />
                      <p className="flex justify-center lg:mt-[10px] px-20  text-justify text-[13px] text-gray-500">
                        {recipe.recipe.label}
                      </p>
                    </div>
                  ))}
                </div>
              )
            ) : (
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5  gap-y-[20px] gap-x-[10px]  ">
                {skeletons ? (
                  <div className="lg:grid grid-rows-2">
                    <div className="w-[150px] animate-pulse">
                      <div className="w-[150px] lg:w-[220px] bg-slate-200 h-[150px]"></div>
                      <div className="flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200"></div>
                    </div>
                    <div className="w-[150px] animate-pulse">
                      <div className="w-[150px] lg:w-[220px] bg-slate-200 h-[150px]"></div>
                      <div className="flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200"></div>
                    </div>
                    <div className="w-[150px] animate-pulse">
                      <div className="w-[150px] lg:w-[220px] bg-slate-200 h-[150px]"></div>
                      <div className="flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200"></div>
                    </div>
                    <div className="w-[150px] animate-pulse">
                      <div className="w-[150px] lg:w-[220px] bg-slate-200 h-[150px]"></div>
                      <div className="flex justify-center w-[100px] rounded-xl mt-[10px] h-20 bg-slate-200"></div>
                    </div>
                  </div>
                ) : recipe.length === 0 ? (
                  <div>couldnt find what you are looking for</div>
                ) : (
                  recipe.map((recipe) => (
                    <div
                      className="w-[150px] transition lg:w-[200px] rounded-lg shadow  md:w-[220px]"
                      key={recipe.uri}
                      onClick={ () => handleMore(recipe)}

                    >
                      {/* <h3>{recipe.calories}</h3> */}
                      <img
                        src={recipe.image}
                        alt={recipe.label}
                        className="rounded-lg  lg:h-[150px] lg:w-[250px]"
                      />
                      <p className="flex justify-center lg:mt-[10px] px-20  text-justify text-[13px] text-gray-500">
                        {recipe.label}
                      </p>
                    </div>
                  ))
                )}
              </div>
            )}
          </div>
</div>
}
    </>
  );
};

export default Recipe;
