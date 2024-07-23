import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Login from './components/Login';
import Register from './components/Register';
import Transactions from './components/Transactions';
import Budget from './components/Budget';
import Report from './components/Report';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/login" component={Login} />
          <Route path="/register" component={Register} />
          <Route path="/transactions" component={Transactions} />
          <Route path="/budget" component={Budget} />
          <Route path="/report" component={Report} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
