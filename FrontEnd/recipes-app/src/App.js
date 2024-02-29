import logo from './logo.svg';
import './App.css';

import React from 'react';
import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import CategoryList from './components/CategoryList';
import RecipeList from './components/RecipeList';
import CategoryPage from './components/CategoryPage';
import RecipePage from './components/RecipePage';

   const App = () => {
       return (
           <Router>
               <div>
                   <Switch>
                       <Route exact path="/" component={CategoryList} />
                       <Route exact path="/recipes" component={RecipeList} />
                       <Route exact path="/category/:categoryId" component={CategoryPage} />
                       <Route exact path="/recipe/:recipeId" component={RecipePage} />
                   </Switch>
               </div>
           </Router>
       );
   };

   export default App;
