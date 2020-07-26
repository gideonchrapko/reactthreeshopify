import React from 'react';
import PropTypes from 'prop-types';
import { Provider } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { createBrowserHistory } from "history";
import ThreeD from './ThreeD';
import ProductLink from './ProductLink';
import App from './App';

const customHistory = createBrowserHistory({
    // basename: config.urlBasename || ""
  });

const Root = ({ store }) => {
      return (
    <Provider store={store}>
      <Router history={customHistory}>
          <Route
              component={({ history }) => {
                  window.appHistory = history;
                  return <App />;
              }}
          />
          <Route exact path="/" component={ThreeD} />
          <Route exact path="/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ1NTkyMzUyNTIyOTg=" render={ProductLink}/>
      </Router>
    </Provider>
    )
  }

Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root;