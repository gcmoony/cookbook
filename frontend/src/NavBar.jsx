
export default function NavBar({loggedIn}){

  const showLogin = () => {
    return <div>
      Welcome back, {loggedIn}
    </div>
  }

  const askLogin = () => {
    return <div>
      <button>Login</button>
    </div>
  }


  return <nav className='nav flex justify-between py-4 items-center'>
    <div>
      <h1 className="text-2xl"><a href='/'>RecipeBook</a></h1>
      <span className="opacity-60 italic">Your favorite recipes</span>
    </div>
    <div className="bg-slate-900 py-2 px-6 rounded-lg">
      {!loggedIn ? askLogin() : showLogin()}
    </div>
  </nav>
}
