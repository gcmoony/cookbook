import { useState, useEffect } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import RecipeCard from "./RecipeCard/RecipeCard"

function ShowRecipeList() {
  const [recipes, setRecipes] = useState([])
  const [currentList, setCurrentList] = useState([])
  const [search, setSearch] = useState("")
  const [viewStyle, setViewStyle] = useState("picture")

  const updateSearch = (e) => {
    setSearch((newValue) => e.target.value)
  }

  const updateCardStyle = () => {
    viewStyle == "picture" ? "no-picture" : "picture"
  }

  const uri = "http://192.168.0.132:1122/api/recipes/"

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        setRecipes(res.data)
        setCurrentList(res.data)
      })
      .catch((e) => console.log("Error from ShowRecipeList"))
  }, [])

  const recipeList =
    recipes.length === 0
      ? "No recipes found"
      : recipes.map((recipe, key) => (
          <RecipeCard
            variant={viewStyle}
            key={key}
            recipe={recipe}
          />
        ))

  let searchList = Array.isArray(recipeList)
    ? recipeList.filter((recipe, key) => {
        return recipe.props.recipe.title
          .toLowerCase()
          .includes(search.toLowerCase())
      })
    : "Nothing found"

  return (
    <div className='ShowRecipeList'>
      <div className='list-header flex justify-between'>
        <h2 className='list-name text-xl font-sembold'>Browse</h2>
        <Link
          to={"/create-recipe"}
          className='btn hover:bg-slate-700 p-2 rounded'
        >
          ➕ New Recipe
        </Link>
      </div>
      {/* <hr/> */}

      {/* container */}
      <input
        className='search-bar
        bg-inherit
        ring-slate-600
        ring-2
        rounded-md
        focus:outline-none
        focus:ring-2
        focus:ring-slate-300
        p-2
        my-4
        block
        w-full
        mx-auto
      '
        type='text'
        placeholder='Find recipes'
        onChange={updateSearch}
      />
      {/* <div className="list">{recipeList}</div> */}
      <div className='flex justify-center items-center'>
        <button
          className='text-sm'
          onClick={updateCardStyle}
        >
          Change View
        </button>
      </div>
      <div
        className='grid justify-items-stretch items-stretch grid-cols-1 gap-4 place-content-center place-items-center
      sm:grid-cols-2 md:grid-cols-3
      '
      >
        {searchList}
      </div>
    </div>
  )
}

export default ShowRecipeList
