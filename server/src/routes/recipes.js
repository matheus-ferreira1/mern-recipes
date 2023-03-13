import express from "express";
import {
  createRecipe,
  getAllRecipes,
  getSavedRecipes,
  getSavedRecipesIds,
  saveRecipe,
} from "../controllers/recipes.js";

const router = express.Router();

router.get("/", getAllRecipes);

router.get("/savedRecipes", getSavedRecipes);

router.get("/savedRecipes/ids", getSavedRecipesIds);

router.post("/", createRecipe);

router.put("/", saveRecipe);

export { router as recipesRouter };
