import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import './App.css';

import CartPage from '../CartPage/CartPage';
import Navbar from '../Navbar/Navbar';
import SearchPage from '../SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Router>
        <Switch>
          <Redirect exact from="/" to="/search" />
          <Route exact path="/search" component={SearchPage} />
          <Route exact path="/cart" component={CartPage} />
        </Switch>
      </Router>
    </div>
  );
}

export default App;
