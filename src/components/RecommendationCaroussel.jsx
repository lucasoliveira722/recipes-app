import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import searchRecipes from '../services/searchRecipesApi';

export default function RecommendationCaroussel({ url, type }) {
  const [recommended, setRecommended] = useState([]);
  const [key, setKey] = useState('');
  useEffect(() => {
    (async () => {
      const resultRe = await searchRecipes(url);
      const recommends = resultRe[type];
      setRecommended(recommends);
      if (type === 'drinks') {
        setKey('Drink');
      } else if (type === 'meals') {
        setKey('Meal');
      }
    })();
  });
  const maxRecommends = 6;
  return (
    <div
      style={ {
        width: 450,
        height: 200,
        whiteSpace: 'nowrap',
        overflow: 'scroll',
      } }
    >
      {recommended.slice(0, maxRecommends)
        .map((recipe, index) => (
          <button
            data-testid={ `${index}-recomendation-card` }
            style={ { display: 'inline-block', width: 250 } }
            type="button"
            key={ index }
          >
            <div>
              <img
                style={ { width: 200, height: 150 } }
                src={ recipe[`str${key}Thumb`] }
                alt="recipe"
              />
              <span
                style={ { display: 'block' } }
                data-testid={ `${index}-recomendation-title` }
              >
                {recipe[`str${key}`] }
              </span>

            </div>
          </button>
        ))}
    </div>
  );
}

RecommendationCaroussel.propTypes = {
  url: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
};
