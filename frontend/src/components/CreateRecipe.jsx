import { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import RecipeForm from "./RecipeForm";

function CreateRecipe(props) {
  const navigate = useNavigate();

  const uri = `http://${import.meta.env.VITE_BACKEND}:${import.meta.env.VITE_BACKEND_PORT || 1122}/api/recipes/`;

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
  });

  function onSubmit(e) {
    e.preventDefault();
    console.log(uri);
    axios
      .post(uri, { ...recipe })
      .then((res) => {
        const { recipe: result } = res.data;
        // navigate(
        //   `http://${import.meta.env.VITE_BACKEND}/show-recipe/${result._id}`,
        // );

        navigate(`/show-recipe/${result._id}`);
      })
      .catch((e) => console.log("Error in CreateRecipe"));
  }

  const onChange = (e) => {
    setRecipe({ ...recipe, [e.target.name]: e.target.value });
  };

  return (
    <div className='CreateRecipe'>
      <div className='container'>
        <h1>Create Recipe</h1>
        <p>Tell us about your recipe below</p>

        <RecipeForm
          subMethod={onSubmit}
          changeMethod={onChange}
          recipe={recipe}
        />
      </div>
    </div>
  );
}

export default CreateRecipe;
