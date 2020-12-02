import React,{ useEffect , useState} from 'react';
import './App.css';
import Recipe from './Recipe'
require('dotenv').config()

function App() {
 
  const api_id = process.env.REACT_APP_API_ID
  const api_key = process.env.REACT_APP_API_KEY
  
  const [recipes, setRecipes] = useState([])
  const [search, setSearch] = useState("")
  const [query, setQuery] = useState("chicken")

  useEffect(() => {
    getRecipes();
}, [query] )


  //fetching API
  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${query}&app_id=${api_id}&app_key=${api_key}`
    )
    const data =await response.json()
    setRecipes(data.hits)
    // console.log(data)
  }

  // updateSearch function
  const updateSearch = (e) => {
    setSearch(e.target.value)
    // console.log(search)
  }

  const getSearch = e => {
    e.preventDefault()
    setQuery(search)
    setSearch("")
  }

  return (
    <div className="App">
      <form onSubmit={getSearch} className="search-form">
        <input 
            type="text"
            className="search-bar" 
            value={search} 
            onChange={updateSearch}
         />
        <button className="search-button" type="submit">Search</button>      
      </form>
      <div className="recipes">
        {recipes.map(recipe => (
          <Recipe 
            // key={ }
            title={recipe.recipe.label}
            calories={recipe.recipe.calories} 
            image={recipe.recipe.image} 
            ingredients={recipe.recipe.ingredients}
          />
          ))}
      </div>

    </div>
  );
}

export default App;
