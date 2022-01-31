import React from 'react';
import { useHistory } from 'react-router-dom';

export default function ButtonsExplore() {
  const history = useHistory();

  return (
    <>
      <button
        type="button"
        data-testid="explore-foods"
        onClick={ () => history.push('/explore/foods') }
      >
        Explore Foods
      </button>
      <button
        type="button"
        data-testid="explore-drinks"
        onClick={ () => history.push('/explore/drinks') }
      >
        Explore Drinks
      </button>
    </>
  );
}
