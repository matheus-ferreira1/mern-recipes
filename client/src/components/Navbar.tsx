import { Link} from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
        <Link to='/'>Home</Link>
        <Link to='/createrecipe'>Create Recipe</Link>
        <Link to='/savedrecipes'>Saved Recipes</Link>
        <Link to='/auth'>Login / Register</Link>
    </div>
  )
}

export default Navbar