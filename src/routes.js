import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import Header from './components/Header';
import Main from './pages/Main';
import Video from './pages/Video';
import Search from './pages/Search';
import Anime from './pages/Anime';
import Lancamentos from './pages/Lancamentos';
import Random from './pages/Random';
import Hoje from './pages/Hoje';

function Routes() {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route path='/' exact component={Main} />
        <Route path='/episodio/:tipo/:nome/:episodio' component={Video} />
        <Route path='/busca/:query' component={Search} />
        <Route path='/:tipo/:nome' component={Anime} />
        <Route path='/lancamentos' component={Lancamentos} />
        <Route path='/random' component={Random} />
        <Route path='/hoje' component={Hoje} />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
