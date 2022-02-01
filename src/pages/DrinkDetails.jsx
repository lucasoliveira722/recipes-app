import React from 'react';

export default function DrinkDetails() {
  return (
    <div>
      <h1 data-testid="recipe-category">Category</h1>
      <h1 data-testid="recipe-title">Title</h1>
      <img src="" alt="recipephoto" data-testid="recipe-photo" />
      <button
        data-testid="share-btn"
        type="button"
      >
        ShareBtn
      </button>
      <button
        data-testid="favorite-btn"
        type="button"
      >
        FavoriteBtn
      </button>
      <ul>
        <li data-testid="0-ingredient-name-and-measure">Ingerdient</li>
      </ul>
      <p data-testid="instructions">Instructions</p>
      <video data-testid="video"><track src="" /></video>
      <ul>
        <li data-testid="0-recomedation-card">Receitas recomendadas</li>
      </ul>
      <button
        type="button"
        data-testid="start-recipe-btn"
      >
        Start
      </button>
    </div>
  );
}
