import React from 'react';
import {
  HashRouter as Router,
  Route,
  Redirect,
  Switch
} from 'react-router-dom';
import { connect } from 'react-redux'; 
import './App.css';

import CartPage from '../CartPage/CartPage';
import Navbar from '../Navbar/Navbar';
import SearchPage from '../SearchPage/SearchPage';

function App() {
  return (
    <div className="App">
      <Router>
        <Redirect exact from="/" to="/search" />
        <Navbar />
        <Switch>
          <>
            <main>
              <Route exact path="/search" component={SearchPage} />
              <Route exact path="/cart" component={CartPage} />
            </main>
          </>
        </Switch>
      </Router>
    </div>
  );
}

export default connect()(App);
