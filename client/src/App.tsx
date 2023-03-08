import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Auth from "./pages/Auth";
import SavedRecipes from "./pages/SavedRecipes";
import CreateRecipe from "./pages/CreateRecipe";
import Navbar from "./components/Navbar";

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/savedrecipes" element={<SavedRecipes />} />
          <Route path="/createrecipe" element={<CreateRecipe />} />
        </Routes>
      </Router>
    </>
  );
};

export default App;
