import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { Router, Route, browserHistory } from 'react-router'
import Login from './login.js';




ReactDOM.render(
  
    <Router history={browserHistory}>
      <Route path="/" component={App} />
      <Route path="login" component={Login} />
    </Router>

  ,
  document.getElementById('root')
);
