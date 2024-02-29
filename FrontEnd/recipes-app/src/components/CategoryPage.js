import React from 'react';

const CategoryPage = ({ match, recipes }) => {
    const { categoryId } = match.params;
    const recipesForCategory = recipes.filter(recipe => recipe.category === categoryId);

    return (
        <div>
            <h2>Category Page {categoryId}</h2>
            <h3>Recipes for Category {categoryId}:</h3>
            <ul>
                {recipesForCategory.map(recipe => (
                    <li key={recipes.id}>{recipes.name} - {recipes.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryPage;