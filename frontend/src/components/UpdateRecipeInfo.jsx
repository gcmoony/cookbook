import { useEffect, useState } from "react"
import axios from "axios"
import { useNavigate, Link, useParams } from "react-router-dom"
import RecipeForm from "./RecipeForm"

function UpdateRecipeInfo(props) {
  const navigate = useNavigate()
  const { id } = useParams()


  const uri = `http://192.168.0.132:1122/api/recipes/${id}`

  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: [],
    imageLink: "",
    prepSteps: [],
    cookSteps: [],
    prepTime: 10,
    cookTime: 45,
    description: "",
    author: "",
  })

  function onSubmit(e) {
    e.preventDefault();

    const data = {
      title: recipe.title,
      ingredients: recipe.ingredients,
      imageLink: recipe.imageLink,
      prepSteps: recipe.prepSteps,
      cookSteps: recipe.cookSteps,
      prepTime: recipe.prepTime,
      cookTime: recipe.cookTime,
      description: recipe.description,
      author: recipe.author,
      publish_date: recipe.publish_date,
      updated_date: Date.now()
    }

    axios.put(uri, data)
    .then((res) => {

      // Push to /
      navigate(`/show-recipe/${id}`)
    })
    .catch((e) => console.log("Error in UpdateRecipeInfo"))
  }

  const onChange = (e) => {
    setRecipe({...recipe, [e.target.name]: e.target.value})
  }


  useEffect(() => {
    axios.get(uri)
      .then((res) => {
        setRecipe({
          title: res.data.title,
          ingredients: res.data.ingredients,
          imageLink: res.data.imageLink,
          prepSteps: res.data.prepSteps,
          cookSteps: res.data.cookSteps,
          prepTime: res.data.prepTime,
          cookTime: res.data.cookTime,
          description: res.data.description,
          author: res.data.author,
        })
      })
      .catch((e) => console.log("Error in UpdateRecipeInfo"))
  }, [id])

  

  

  return <div>
    <div className="container">
      <h1>Edit Recipe</h1>
      <p>Make changes to your recipe below</p>
      <RecipeForm subMethod={onSubmit} formType="Update" changeMethod={onChange} recipe={recipe}/>
    </div>
  </div>
}

export default UpdateRecipeInfo