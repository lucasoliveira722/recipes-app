import React from 'react';
import { useHistory } from 'react-router-dom';

export default function FormsProfile() {
  const history = useHistory();
  const getLocalStorage = (e) => {
    if (localStorage.getItem(e)) {
      return localStorage.getItem(e);
    }
    return (
      JSON.stringify({ user: { email: '' } })
    );
  };

  const buttonLogout = () => {
    localStorage.clear();
    history.push('/');
  };

  return (
    <div>
      <form>
        <p data-testid="profile-email">
          { JSON.parse(getLocalStorage('user')).email }
        </p>

        <button
          data-testid="profile-done-btn"
          type="submit"
          onClick={ () => history.push('/done-recipes') }
        >
          Done Recipes
        </button>
        <button
          data-testid="profile-favorite-btn"
          type="submit"
          onClick={ () => history.push('/favorite-recipes') }
        >
          Favorite Recipes
        </button>
        <button
          data-testid="profile-logout-btn"
          type="submit"
          onClick={ buttonLogout }
        >
          Logout
        </button>
      </form>
    </div>
  );
}
