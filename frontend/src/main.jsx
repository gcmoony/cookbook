import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, Link, RouterProvider } from "react-router-dom"
import './index.css'
// import App from './App.jsx'
import { useNavigate } from 'react-router-dom'

// Component imports
import CreateRecipe from './components/CreateRecipe.jsx'
import ShowRecipeDetails from './components/ShowRecipeDetails.jsx'
import ShowRecipeList from './components/ShowRecipeList.jsx'
import UpdateRecipeInfo from './components/UpdateRecipeInfo.jsx'
import NavBar from './NavBar.jsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <ShowRecipeList/>
  },
  {
    path: "/create-recipe",
    element: <CreateRecipe/>
  },
  {
    path: "/show-recipe/:id",
    element: <ShowRecipeDetails/>
  },
  {
    path: "/edit-recipe/:id",
    element: <UpdateRecipeInfo/>
  }
])

createRoot(document.getElementById('root')).render(
  <StrictMode className="">
    <NavBar/>
    <RouterProvider router={router}
    />
  </StrictMode>
)
