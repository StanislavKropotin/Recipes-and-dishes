import React, { useState, useEffect } from 'react';
import axios from 'axios';

const RecipeList = () => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        const fetchRecipes = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/api/recipes/');
                setRecipes(response.data);
            } catch (error) {
                console.error('Error fetching recipes:', error);
            }
        };

        fetchRecipes();
    }, []);

    return (
        <div>
            <h2>Recipe List</h2>
            <ul>
                {recipes.map(recipe => (
                    <li key={recipes.id}>{recipes.name} - {recipes.description}</li>
                ))}
            </ul>
        </div>
    );
};

export default RecipeList;