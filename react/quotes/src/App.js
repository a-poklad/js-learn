import React from 'react';
import './App.css';
import 'antd/dist/antd.css';
import {
  BrowserRouter as Router,
  Switch,
  Route, Link,
} from 'react-router-dom';

import QuotesListContainer from './components/QuotesListContainer';
import RandomQuote from './components/RandomQuote';
import ErrorBounderies from './components/ErrorBounderies';

// eslint disable
function App() {
  return (
    <ErrorBounderies>
      <div className="App">
        <Router>
          <Switch>
            <Route path="/quotes/:id">
              <RandomQuote />
            </Route>
            <Route exact path="/">
              <div>
                <h1>Home Page</h1>
                <Link to="/quotes">
                  All Quotes
                </Link>
                <br />
                <Link to="/quotes/edit">
                  All Edit Quotes
                </Link>
              </div>
            </Route>
            <Route path="/quotes">
              <QuotesListContainer />
            </Route>
            <Route exact strict path="/quotes/edit">
              <QuotesListContainer />
            </Route>
          </Switch>
        </Router>
      </div>
    </ErrorBounderies>
  );
}

export default App;

// hw
// 1 - add loader
// 2 - edit quote
