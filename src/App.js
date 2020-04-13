import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import React from 'react';

import Landing from './pages/Landing/Landing.js'
import './App.css';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Landing} />

      </Switch>
    </Router>
  );
}

export default App;
