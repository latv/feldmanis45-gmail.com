import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Wish from 'pages/Wish';

import Profile from 'pages/Profile';
import WishRegister from 'pages/WishRegister';
import PageNotFound from '../../pages/PageNotFound';
import HistoryOfWallet from 'components/HistoryOfWallet';
const Router = () => {
  return (
    <Switch>
      <Route exact path="/wish" component={Wish} />
      <Route exact path="/" component={Wish}>
        
      </Route>
      <Route exact path="/profile" component={Profile} />
      <Route exact path="/wish-register" component={WishRegister} />
      <Route exact path="/get-wallet-actions" component={HistoryOfWallet} />
     
      <Route exact path="*" component={PageNotFound} />

    </Switch>
  )
}

export default Router;