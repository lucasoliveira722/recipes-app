import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import profileIcon from '../images/profileIcon.svg';
import searchIcon from '../images/searchIcon.svg';
import HeaderInput from './HeaderInput';

export default function Header() {
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
      >
        <img alt="Ícone de Login" src={ profileIcon } />
      </button>
      <h1 data-testid="page-title">Name of the page</h1>
      <button
        type="button"
        data-testid="search-top-btn"
        onClick={ toggleBtn }
      >
        <img alt="Ícone de busca" src={ searchIcon } />
      </button>
      { searchInput && <HeaderInput /> }
    </header>
  );
}
