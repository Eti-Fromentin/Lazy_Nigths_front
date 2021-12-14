import React, { createContext, useState } from 'react';
import axios from 'axios';

const CurrentAllFavoritesContext = createContext({
  AllFavorites: {},
  setAllFavorites: () => {},
  fetchAllFavorites: () => {},
});

export function CurrentAllFavoritesContextProvider({ children }) {
  const [allFavorites, setAllFavorites] = useState([]);

  function fetchAllFavorites() {
    axios
      .get(`https://lazy-back.site.etifrom.dev/api/favorites/`)
      .then((response) => response.data)
      .then((data) => setAllFavorites(data));
  }

  return (
    <CurrentAllFavoritesContext.Provider
      value={{
        allFavorites,
        setAllFavorites,
        fetchAllFavorites,
      }}
    >
      {children}
    </CurrentAllFavoritesContext.Provider>
  );
}

export default CurrentAllFavoritesContext;
