import "./RecipeFormStyles.css"

export default function RecipeForm({subMethod, recipe, changeMethod, formType = "Submit"}) {
  return(
    <form noValidate onSubmit={subMethod}>
      
    <fieldset>
      <legend className="text-lg font-bold py-5 block">Recipe Details</legend>
      <div className="bg-slate-900 p-2 rounded mb-5 w-max m-auto">
        Want to practice using Markdown to format your recipes? <a target="_blank" className="underline underline-offset-2 hover:text-slate-400" href={"https://gcmoony-reactmd.netlify.app/"}>Check out my preview site here</a>!
      </div>

      <div className="form-group">
      <label htmlFor="imageLink">{"Recipe Image"}</label>
      <br/>
        <input
          type="text"
          id="imageLink"
          placeholder="image.url/"
          name="imageLink"
          className="form-control"
          value={recipe.imageLink}
          onChange={changeMethod}
        />
      </div>

      <div className="form-group">
      <label htmlFor="title">{"Recipe Title"}</label>
      <br/>
        <input
          type="url"
          id="title"
          placeholder="Title of Recipe"
          name="title"
          className="form-control"
          value={recipe.title}
          onChange={changeMethod}
        />
      </div>

      <div className="form-group">
      <label htmlFor="description">{"Recipe Description"}</label>
      <br/>
        <textarea
          id="description"
          placeholder="Recipe Description"
          name="description"
          className="form-control"
          value={recipe.description}
          onChange={changeMethod}
          rows={5}
        />
      </div>

      <div className="form-group">
      <label htmlFor="ingredients">{"Ingredients"}</label>
      <br/>
        <textarea
          id="ingredients"
          placeholder="- Salt"
          name="ingredients"
          className="form-control"
          value={recipe.ingredients}
          onChange={changeMethod}
          rows={5}
        />
      </div>

      <div className="form-group">
      <label htmlFor="prepSteps">{"Preparation Steps"}</label>
      <br/>
        <textarea
          id="prepSteps"
          placeholder="1. Wash and peel the potatoes..."
          name="prepSteps"
          className="form-control"
          value={recipe.prepSteps}
          onChange={changeMethod}
          rows={5}
        />
      </div>

      <div className="form-group">
      <label htmlFor="cookSteps">{"Cooking Steps"}</label>
      <br/>
        <textarea
          id="cookSteps"
          placeholder="1. Boil the potatoes for 20 minutes or until knife tender.."
          name="cookSteps"
          className="form-control"
          value={recipe.cookSteps}
          onChange={changeMethod}
          rows={5}
        />
      </div>

      <div className="form-group">
        <label htmlFor="prepTime">{"Preparation Time (Minutes)"}</label>
        <br/>
        <input
          type="number"
          id="prepTime"
          min={0}
          step={1}
          value={recipe.prepTime}
          name="prepTime"
          className="form-control"
          onChange={changeMethod}
        />
      </div>

      <div className="form-group">
        <label htmlFor="cookTime">{"Cook Time (Minutes)"}</label>
        <br/>
        <input
          type="number"
          id="cookTime"
          min={0}
          step={1}
          value={recipe.cookTime}
          name="cookTime"
          className="form-control"
          onChange={changeMethod}
        />
      </div>

      <br/>
      <button type="submit" className="rounded bg-blue-600 hover:bg-blue-500 p-2 leading-tight mb-10">{formType} Recipe</button>
    </fieldset>
  </form>
)}