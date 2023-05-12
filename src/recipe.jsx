
import  { useState, useEffect } from 'react';
import { Parallax } from 'react-parallax';

function RecipeList() {
  const [query, setQuery] = useState("");
  const [recipes, setRecipes] = useState([]);
  const [selectedRecipe, setSelectedRecipe] = useState(null);
  
  
  
  
  useEffect(() => {
    fetchRecipes();
  }, []);
  
  const handleInputChange = (event) => {
    setQuery(event.target.value);
  };
  
  const fetchRecipes = async () => {
    const response = await fetch(`https://api.edamam.com/search?q=salad&app_id=241d10f8&app_key=09e7aa7cc223159a01aa72b403f51c6c`);
    const data = await response.json();
    setRecipes(data.hits);
    console.log(data)
  }

  const renderRecipeDetails = (recipe) => {
    return (
      <div>
        <h2>{recipe.recipe.label}</h2>
        <img src={recipe.recipe.image} alt={recipe.label} />
        <ul>
          {recipe.recipe.ingredients.map((ingredient, index) => (
            <li key={index}>{ingredient.text }</li>
          ))}
        </ul>
        <h3>Instructions:</h3>
        <ol>
          {recipe.recipe.ingredientLines.map((step, index) => (
            <li key={index}>{step}</li>
          ))}
        </ol>
      </div>
    );
  }

  return (
    <div>
          <Parallax
      blur={5}
      // bgImage={('https://images.freeimages.com/images/large-previews/bc7/gallery-1-1220733.jpg')}
      bgImageAlt="Parallax Image"
      strength={5000}
    >

      <input type="text" value={query} onChange={handleInputChange} />
      <h1>Recipes:</h1>
      <ul>
        {recipes.map((recipe, index) => (
          <li key={index} onClick={() => setSelectedRecipe(recipe)}>
            <h2>{recipe.recipe.label}</h2>
        <a href="http://www.edamam.com/recipe/goat-cheese-souffl%C3%A9-021e480aa577261766eecf279c96599e/salad" target="_blank" rel="noopener noreferrer">Share on social media</a>        <img src={recipe.recipe.image} alt={recipe.recipe.label} />

            <img src={recipe.recipe.image} alt={recipe.recipe.label} />
          </li>
        ))}
      </ul>
      {selectedRecipe && renderRecipeDetails(selectedRecipe)}
      <div style={{ height: '500px' }} > 
      <div><h1>hello</h1></div>
      <div><h1>welcomee</h1></div>
      <div><h1>blahblahdhjej</h1></div>
      </div>
    </Parallax>


    </div>
  );
}

export default RecipeList;
