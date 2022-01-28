import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import PropsTypes from 'prop-types';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderInput from './HeaderInput';

export default function Header({ title }) {
  const history = useHistory();
  const [searchInput, setSearchInput] = useState(false);

  const toggleBtn = () => {
    setSearchInput(!searchInput);
  };

  return (
    <header>
      <button
        type="button"
        data-testid="profile-top-btn"
        onClick={ () => history.push('/profile') }
        src={ profileIcon }
      >
        <img alt="Ícone de Login" src={ profileIcon } />
      </button>
      <h1 data-testid="page-title">{ title }</h1>
      { (title === 'Foods' || title === 'Drinks' || title === 'Explore Nationalities')
        ? (
          <button
            type="button"
            data-testid="search-top-btn"
            onClick={ toggleBtn }
            src={ searchIcon }
          >
            <img alt="Ícone de busca" src={ searchIcon } />
          </button>) : null }
      { searchInput && <HeaderInput /> }
    </header>

  );
}

Header.propTypes = {
  title: PropsTypes.string.isRequired,
};
