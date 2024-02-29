import React, { useState, useEffect } from 'react';
import axios from 'axios';

const CategoryList = () => {
    const [categories, setCategories] = useState([]);
    const [categoryRecipes, setCategoryRecipes] = useState({});

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await axios.get('http://127.0.0.1:8000/api/api/categories/');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    useEffect(() => {
    const fetchRecipes = async () => {
        const recipes = {};
        await Promise.all(categories.map(async category => {
            const response = await axios.get("http://127.0.0.1:8000/api/api/recipes/?category=${category.id}");
            recipes[category.id] = response.data.filter(recipe => recipe.category === category.id);
        }));
        setCategoryRecipes(recipes);
    };

    fetchRecipes();
},  [categories]);

    return (
        <div>
            <h2>Recipes and dishes</h2>
            <ul>
                {categories.map(category => (
                    <li key={category.id}>
                        {category.name}
                        <ul>
                            {categoryRecipes[category.id] && categoryRecipes[category.id].map(recipe => (
                                <li key={recipe.id}>
                                    <div>
                                        <strong>{recipe.name}</strong><br />
                                        <span>Ingredients: {recipe.ingredients}</span><br />
                                        <span>Description: {recipe.description}</span><br />
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default CategoryList;