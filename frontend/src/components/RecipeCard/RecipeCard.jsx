import { Link } from "react-router-dom"
import ImageTile from "./ImageTile"
// import "./RecipeCard.css"

function RecipeCard({ recipe, varient }) {
  return (
    <div className=' bg-slate-900 rounded-xl p-4'>
      {varient === "picture" && recipe.imageLink ? (
        <img
          className='aspect-square min-w-full object-cover bg-slate-600 text-center rounded-xl '
          src={recipe.imageLink}
          alt=' Recipe Picture'
        />
      ) : (
        varient === "picture" && (
          <div className='aspect-square min-w-full bg-slate-700 flex justify-center items-center rounded-xl '>
            <span className='-rotate-45 text-xl'>No image available</span>
          </div>
        )
      )}

      {/* <ImageTile  imageLink={recipe.imageLink}/> */}
      <div className='desc'>
        <h2 className='font-bold mt-4 text-lg'>
          <Link to={`/show-recipe/${recipe._id}`}>{recipe.title}</Link>
        </h2>
        {/* <span>By {recipe.author}</span> */}
        <p>
          {recipe.description ? recipe.description : "No description available"}
        </p>
      </div>
    </div>
  )
}

export default RecipeCard
