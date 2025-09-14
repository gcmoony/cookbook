import { useEffect, useState } from "react"
import { Link, useParams, useNavigate } from "react-router-dom"
import axios from "axios"
import Markdown from "marked-react"

function ShowRecipeDetails(props) {
  const [recipe, setRecipe] = useState({})

  const { id } = useParams()
  const navigate = useNavigate()

  const uri = `http://${import.meta.env.VITE_BACKEND}:${import.meta.env.VITE_BACKEND_PORT || 1122}/api/recipes/${id}`

  const onDeleteClick = (id) => {
    axios
      .delete(uri)
      .then((res) => {
        navigate("/")
      })
      .catch((e) => console.log("Error from delete ShowRecipeDetails"))
  }

  useEffect(() => {
    axios
      .get(uri)
      .then((res) => {
        setRecipe(res.data)
      })
      .catch((e) => console.log("Error from ShowRecipeDetails"))
  }, [id])

  const RecipeItem = (
    <div className='recipe-detail-card'>
      {recipe.imageLink ? (
        <img
          className='recipe-img'
          src={recipe.imageLink}
          alt={`Picture of recipe ${recipe.imageLink}`}
        />
      ) : (
        <></>
      )}

      <article>
        <h1>{recipe.title}</h1>
        <div>
          {/* By {recipe.author} */}
          {/* <br/>
          <span>Published {recipe.publish_date}</span>
          <br/>
          <span>Last updated {recipe.updated_date}</span> */}
        </div>
        <Markdown>{recipe.description}</Markdown>

        <div className='prep-time-card'>
          <h2>Prep Time</h2>
          <ul>
            <li>
              Total: Approximately {recipe.prepTime + recipe.cookTime} minutes
            </li>
            <li>Prep Time: {recipe.prepTime} minutes</li>
            <li>Cook Time: {recipe.cookTime} minutes</li>
          </ul>
        </div>

        <h2>Ingredients</h2>
        <Markdown>{recipe.ingredients}</Markdown>
        <hr />

        <h2>Instructions</h2>
        <div>
          <h3>Preparation</h3>
          <Markdown>{recipe.prepSteps}</Markdown>
        </div>
        <div>
          <h3>Cooking</h3>
          <Markdown>{recipe.cookSteps}</Markdown>
        </div>

        <hr />
      </article>

      <div className='flex justify-between gap-5 py-5'>
        <button
          className='bg-red-900 leading-tight rounded p-2 hover:bg-red-500'
          onClick={onDeleteClick}
        >
          Delete article
        </button>
        <Link
          to={`/edit-recipe/${recipe._id}`}
          className='bg-blue-600 hover:bg-blue-500 rounded leading-tight p-2'
        >
          Edit Article
        </Link>
      </div>
    </div>
  )

  return RecipeItem
}

export default ShowRecipeDetails
