import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import SignInPage from './pages/signin/SignInPage'
import MainPage from './pages/main/MainPage'
import NotFound from './components/NotFound'


const App = () => (
  <Router>
    <Switch>
      <Route path="/" exact component={MainPage} />
      <Route path="/signin/" exact component={SignInPage} />
      <Route component={NotFound} />
    </Switch>
  </Router>
);

export default App;
