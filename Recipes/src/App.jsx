import React, { useState, useEffect } from 'react';
import ReactPaginate from 'react-paginate';
import './RecipeSearch.css';

const RecipeSearch = () => {
  const [query, setQuery] = useState('');
  const [recipes, setRecipes] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [error, setError] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  const appId = secrets.APP_ID;
  const appKey = secrets.APP_KEY;
  const recipesPerPage = 12;

  useEffect(() => {
    document.body.className = darkMode ? 'dark-mode' : 'light-mode';
  }, [darkMode]);

  const fetchRecipes = async (query) => {
    const url = `https://api.edamam.com/search?q=${query}&app_id=${appId}&app_key=${appKey}&from=0&to=100`;
    try {
      const response = await fetch(url);
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      const data = await response.json();
      setRecipes(data.hits);
      setCurrentPage(0);
    } catch (error) {
      setError(error.message);
      console.error('Error fetching recipes:', error);
    }
  };

  const handleSearch = (e) => {
    e.preventDefault();
    setError(null);
    fetchRecipes(query);
  };

  const handlePageClick = (data) => {
    setCurrentPage(data.selected);
  };

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  const pageCount = Math.ceil(recipes.length / recipesPerPage);
  const offset = currentPage * recipesPerPage;
  const currentRecipes = recipes.slice(offset, offset + recipesPerPage);

  return (
    <div className={`recipe-search ${darkMode ? 'dark-mode' : 'light-mode'}`}>
      <header>
        <h1>🧑‍🍳The Recipe Book</h1>
        <div className="mode-toggle">
          <input 
            type="checkbox" 
            id="mode-switch" 
            checked={darkMode} 
            onChange={toggleDarkMode}
          />
          <label htmlFor="mode-switch" className="switch">
            <span className="switch-light">☀️</span>
            <span className="switch-dark">🌙</span>
          </label>
        </div>
      </header>
      <form onSubmit={handleSearch} className="search-form">
        <input
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Search for recipes..."
          className="search-input"
        />
        <button type="submit" className="search-button">Search</button>
      </form>
      {error && <div className="error-message">Error: {error}</div>}
      <div className="recipe-list">
        {currentRecipes.map((recipe, index) => (
          <div key={index} className="recipe-card">
            <img src={recipe.recipe.image} alt={recipe.recipe.label} className="recipe-image" />
            <h2>{recipe.recipe.label}</h2>
            <p>Source: {recipe.recipe.source}</p>
            <a href={recipe.recipe.url} target="_blank" rel="noopener noreferrer" className="view-recipe-button">
              View Recipe
            </a>
          </div>
        ))}
      </div>
      {pageCount > 1 && (
        <ReactPaginate
          previousLabel={'Previous'}
          nextLabel={'Next'}
          breakLabel={'...'}
          pageCount={pageCount}
          marginPagesDisplayed={2}
          pageRangeDisplayed={5}
          onPageChange={handlePageClick}
          containerClassName={'pagination'}
          activeClassName={'active'}
        />
      )}
    </div>
  );
};

export default RecipeSearch;
