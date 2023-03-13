import { RecipeModel } from "../models/Recipe.js";
import { UserModel } from "../models/User.js";

//getting all recipes
export const getAllRecipes = async (req, res) => {
  try {
    const recipes = await RecipeModel.find();
    res.json(recipes);
  } catch (error) {
    res.json(error);
  }
};

//get saved recipes IDs
export const getSavedRecipesIds = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    res.json({ savedRecipes: user?.savedRecipes });
  } catch (error) {
    res.json(error);
  }
};

//get saved recipes
export const getSavedRecipes = async (req, res) => {
  try {
    const user = await UserModel.findById(req.body.userId);
    const savedRecipes = await RecipeModel.find({
      _id: { $in: user?.savedRecipes },
    });
  } catch (error) {
    res.json(error);
  }
};

//saving a new recipe
export const createRecipe = async (req, res) => {
  try {
    const recipe = new RecipeModel(req.body);
    const savedRecipe = await recipe.save();
    res.json(savedRecipe);
  } catch (error) {
    res.json(error);
  }
};

//saving a specific recipe
export const saveRecipe = async (req, res) => {
  try {
    const recipe = await RecipeModel.findById(req.body.recipeId);
    const user = await UserModel.findById(req.body.userId);

    user.savedRecipes.push(recipe);
    await user.save();
    res.json({ savedRecipes: user.savedRecipes });
  } catch (error) {
    res.json(error);
  }
};
