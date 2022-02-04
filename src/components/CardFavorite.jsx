import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { useHistory } from 'react-router-dom';
import FavoriteButton from './FavoriteButton';
import shareBtn from '../images/shareIcon.svg';

export default function CardFavorite({
  func,
  index,
  url,
  name,
  type,
  alcoholic,
  category,
  nationality,
  id }) {
  const [show, setShow] = useState(false);
  const popUp = () => {
    setShow(!show);
  };
  const history = useHistory();
  return (
    <div>
      <button
        type="button"
        onClick={ () => history.push(`/${type}s/${id}`) }
      >
        <img
          width={ 300 }
          src={ url }
          alt="Recipe"
          data-testid={ `${index}-horizontal-image` }
        />
      </button>
      {type === 'food' ? (
        <h2
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${nationality} - ${category}`}
        </h2>
      ) : (
        <h2
          data-testid={ `${index}-horizontal-top-text` }
        >
          {`${alcoholic}`}
        </h2>)}
      <button
        type="button"
        onClick={ () => history.push(`/${type}s/${id}`) }
      >
        <h2 data-testid={ `${index}-horizontal-name` }>{name}</h2>
      </button>
      <FavoriteButton page="favorite" index={ index } idPage={ id } func={ func } />
      <button
        type="button"
        data-testid={ `${index}-horizontal-share-btn` }
        src={ shareBtn }
        onClick={ () => {
          navigator.clipboard.writeText(`http://localhost:3000/${type}s/${id}`);
          popUp();
        } }
      >
        <img src={ shareBtn } alt="" />
      </button>
      {show && (<span>Link copied!</span>)}
    </div>
  );
}

CardFavorite.propTypes = {
  index: PropTypes.number,
  url: PropTypes.string,
  name: PropTypes.string,
  alcoholic: PropTypes.string,
  category: PropTypes.string,
  nationality: PropTypes.string,
  type: PropTypes.string,
}.isReqeuired;
