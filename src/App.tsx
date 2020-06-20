import React from 'react';
import { Switch, Route, Link, useLocation } from 'react-router-dom';

import './App.css';

import PageA from './pages/PageA';
import PageB from './pages/PageB';
import PageHome from './pages/PageHome';

function App() {
  const location = useLocation();
  return (
      <div>
        <header>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/a">A</Link>
              </li>
              <li>
                <Link to="/b">B</Link>
              </li>
            </ul>
          </nav>
        </header>
        <hr />
        <p>Current location: {location.pathname}</p>
        <Switch>
          <Route path="/a">
            <PageA />
          </Route>
          <Route path="/b">
            <PageB />
          </Route>
          <Route exact path="/">
            <PageHome />
          </Route>
          <Route path="*">
            <NoMatch />
          </Route>
        </Switch>
      </div>
  );
}

function NoMatch() {
  const location = useLocation();
  return <h2>No match for {location.pathname}</h2>;
}

export default App;
