import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import { createBrowserHistory } from "history";
import ThreeD from './ThreeD';
import ProductOne from './Products/ProductOne'
import ProductTwo from './Products/ProductTwo'
import App from './App'
import Start from './Start'

const history = createBrowserHistory();

export default () => (
  <Router history={history}>
        <App />
        <ThreeD />
        <Switch>
            <Route exact path="/" component={Start} />
            <Route path="/ProductOne" component={ProductOne} />
            <Route path="/ProductTwo" component={ProductTwo} />
            {/* <Route path="/ProductOne" component={ProductOne} /> */}
        </Switch>
  </Router>
);