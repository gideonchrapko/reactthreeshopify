import React from 'react'
import PropTypes from 'prop-types'
import { Provider } from 'react-redux'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import { createBrowserHistory } from "history";

import Single from './NewComp/Single'
import ThreeD from './ThreeD'
import Hello from './Hello'
import App from './App'
import GenericProductPage from './components/GenericProductPage'

// import store from './Store';

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
          <Route path="/Product" component={Hello} />
          <Route exact path="/view/Z2lkOi8vc2hvcGlmeS9Qcm9kdWN0LzQ1Njk4NzE2Nzk1NjI=" render={GenericProductPage}/>
      </Router>
    </Provider>
    )
  }


Root.propTypes = {
  store: PropTypes.object.isRequired
}

export default Root