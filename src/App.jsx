import React from 'react';
import { Route, Switch } from 'react-router';

import FooterNavbar from './FooterNavbar';
import HeaderNavbar from './HeaderNavbar';
import AboutUs from './AboutUs';
import Catalog from './Catalog';
import Favorites from './Favorites';
import FinalResults from './FinalResults';
import HomeConditions from './Components/HomeConditions';
import HomePage from './Homepage';
// import Offer from './Components/Offer';
import Under18 from './Under18';
import { CurrentUserNameContextProvider } from './Contexts/userContext';
import { CurrentAllFavoritesContextProvider } from './Contexts/favoritesContext';

import './App.css';
import { CurrentFinalChoicesContextProvider } from './Contexts/finalChoices';

function App() {
  return (
    <div className="app">
      <CurrentUserNameContextProvider>
        <CurrentFinalChoicesContextProvider>
          <CurrentAllFavoritesContextProvider>
            <HeaderNavbar />
            <Switch>
              <Route exact path="/">
                <HomePage />
              </Route>
              <Route exact path="/Catalog">
                <Catalog />
              </Route>
              <Route exact path="/Favorites">
                <Favorites />
              </Route>
              <Route exact path="/AboutUs">
                <AboutUs />
              </Route>
              <Route exact path="/Under18">
                <Under18 />
              </Route>
              <Route exact path="/HomeConditions">
                <HomeConditions />
              </Route>
              <Route exact path="/FinalResults">
                <FinalResults />
              </Route>
            </Switch>
            <FooterNavbar />
          </CurrentAllFavoritesContextProvider>
        </CurrentFinalChoicesContextProvider>
      </CurrentUserNameContextProvider>
    </div>
  );
}

export default App;
