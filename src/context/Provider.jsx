import PropTypes from 'prop-types';
import React, { useState } from 'react';
import AppContext from './AppContext';

function Provider({ children }) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [enable, setEnable] = useState(true);
  const [searchField, setSearchField] = useState('ingredient');
  const [search, setSearch] = useState('ingredient');
  const contextValue = {
    email,
    password,
    enable,
    search,
    searchField,
    setEmail,
    setPassword,
    setEnable,
    setSearch,
    setSearchField,
  };

  return (
    <AppContext.Provider value={ contextValue }>
      {children}
    </AppContext.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.func.isRequired,
};

export default Provider;
