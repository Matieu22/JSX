import React from 'react';
import Recipe from './Recipe';
import { recipes } from './data.js';

export default function RecipeList() {
  return (
    <div>
      <h1>Recipes</h1>
      {recipes.map(recipe => (
        <Recipe
          key={recipe.id} 
          {...recipe}
        />
      ))}
    </div>
  );
}
