import useCookies from "react-cookie/cjs/useCookies";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [cookies, setCookies] = useCookies(["access_token"]);

  const navigate = useNavigate();

  const handleLogout = () => {
    setCookies("access_token", "");
    window.localStorage.removeItem("userId");
    navigate("/auth");
  };

  return (
    <div>
      <Link to="/">Home</Link>
      <Link to="/createrecipe">Create Recipe</Link>
      <Link to="/savedrecipes">Saved Recipes</Link>
      {!cookies.access_token ? (
        <Link to="/auth">Login / Register</Link>
      ) : (
        <button onClick={handleLogout}>Logout</button>
      )}
    </div>
  );
};

export default Navbar;
