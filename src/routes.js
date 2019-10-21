import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Video from './pages/Video';
import Search from './pages/Search';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/episodio/:tipo/:nome/:episodio' component={Video} />
        <Route path='/busca/:query' component={Search} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
