import React from 'react';

const RecipePage = ({ match, recipes }) => {
    const { recipeId } = match.params;
    const selectedRecipe = recipes.find(recipe => recipe.id === recipeId);

    if (!selectedRecipe) {
        return <div>Recipe not found</div>;
    }

    return (
        <div>
            <h2>Recipe Page {recipeId}</h2>
            <h3>{selectedRecipe.title}</h3>
            <p>{selectedRecipe.description}</p>
            <p>Ingredients:</p>
            <ul>
                {selectedRecipe.ingredients.map((ingredient, index) => (
                    <li key={index}>{ingredient}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipePage;