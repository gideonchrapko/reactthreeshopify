import ReactDOM from 'react-dom'
import React from 'react'

// import { Router, Route } from "react-router-dom"
import { createBrowserHistory } from "history"

// import Routes from './Routes'
import Client from 'shopify-buy'
import { Provider } from 'react-redux'

// import App from './App'
import store from './Store'
import Root from './Root'

import './styles.css'

const customHistory = createBrowserHistory({
  // basename: config.urlBasename || ""
});

const client = Client.buildClient({
  storefrontAccessToken: 'a416f71ae0b8cea01da02b110f7af961',
  domain: 'schweiz-foundry.myshopify.com'
});



store.dispatch({type: 'CLIENT_CREATED', payload: client});
// buildClient() is synchronous, so we can call all these after!
client.product.fetchAll().then((res) => {
  store.dispatch({type: 'PRODUCTS_FOUND', payload: res});
});

client.checkout.create().then((res) => {
  store.dispatch({type: 'CHECKOUT_FOUND', payload: res});
});

client.shop.fetchInfo().then((res) => {
  store.dispatch({type: 'SHOP_FOUND', payload: res});
});

const rootElement = document.getElementById("root");

ReactDOM.render(<Root store={store} />, document.getElementById('root'))
