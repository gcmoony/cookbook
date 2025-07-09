import { useState } from "react"
import { Link } from "react-router-dom"
import axios from "axios"
import { useNavigate } from "react-router-dom"
import RecipeForm from "./RecipeForm"

function CreateRecipe(props) {
  const navigate = useNavigate()

  const uri = `http://${import.meta.env.VITE_BACKEND}:1122/api/recipes/`

  const [recipe, setRecipe] = useState({
    title: "",
    ingredients: "",
    imageLink: "",
    prepSteps: "",
    cookSteps: "",
    prepTime: 10,
    cookTime: 45,
    description: "",
    author: "Anonymous",
  })

  

  function onSubmit(e) {
    e.preventDefault();
    axios.post(uri, recipe)
    .then((res) => {
      setRecipe({
        title: "",
        ingredients: "",
        imageLink: "",
        prepSteps: "",
        cookSteps: "",
        prepTime: 0,
        cookTime: 0,
        description: "",
        author: "Anonymous",
        publish_date: Date.now,
        updated_date: Date.now
      })

      // Push to /
      navigate('/')
    })
    .catch((e) => console.log("Error in CreateRecipe"))
  }

  const onChange = (e) => {
    setRecipe({...recipe, [e.target.name]: e.target.value})
  }

  return <div className="CreateRecipe">
    <div className="container">
      <h1>Create Recipe</h1>
      <p>Tell us about your recipe below</p>

      <RecipeForm subMethod={onSubmit} changeMethod={onChange} recipe={recipe}/>
    </div>
  </div>
}

export default CreateRecipe