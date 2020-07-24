import * as THREE from 'three'
import { Canvas, Dom } from 'react-three-fiber'
import Controls from './components/Controls'
import Environment from './components/Environment'
// import Suzanne from './components/Suzanne'
import Sphere from './components/Sphere'
import Jacket from './components/Jacket'
import Loading from './components/Loading'

import './threed.css'

import React, { Component, Suspense } from 'react';
// import { Router, Route, Switch } from "react-router-dom";
// import { createBrowserHistory } from "history";

import { Switch, Route, Link } from "react-router-dom";
import { connect } from 'react-redux';
import Cart from './components/shopify/Cart'
import store from './Store'
import Nav from './components/Nav';

import GenericProductPage from './components/GenericProductPage'
import ThreeD from './ThreeD';
import ProductThree from './Products/ProductThree';
import ProductTwo from './Products/ProductTwo'
import Start from './Start.js'

// import GenericProductsPage from './components/GenericProductPage';

class App extends Component {
  constructor() {
    super();
    this.updateQuantityInCart = this.updateQuantityInCart.bind(this);
    this.removeLineItemInCart = this.removeLineItemInCart.bind(this);
    this.handleCartClose = this.handleCartClose.bind(this);
    this.handleCartOpen = this.handleCartOpen.bind(this);
  }
  updateQuantityInCart(lineItemId, quantity) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id
    const lineItemsToUpdate = [{id: lineItemId, quantity: parseInt(quantity, 10)}]
    state.client.checkout.updateLineItems(checkoutId, lineItemsToUpdate).then(res => {
      store.dispatch({type: 'UPDATE_QUANTITY_IN_CART', payload: {checkout: res}});
    });
  }
  removeLineItemInCart(lineItemId) {
    const state = store.getState(); // state from redux store
    const checkoutId = state.checkout.id
    state.client.checkout.removeLineItems(checkoutId, [lineItemId]).then(res => {
      store.dispatch({type: 'REMOVE_LINE_ITEM_IN_CART', payload: {checkout: res}});
    });
  }
  handleCartClose() {
    store.dispatch({type: 'CLOSE_CART'});
  }
  handleCartOpen() {
    store.dispatch({type: 'OPEN_CART'});
  }
  render() {
    
    const state = store.getState(); // state from redux store
    
    return (
        <div>
            <Nav handleCartOpen={this.handleCartOpen}/>
            <header>
            </header>
            <Cart
            checkout={state.checkout}
            isCartOpen={state.isCartOpen}
            handleCartClose={this.handleCartClose}
            updateQuantityInCart={this.updateQuantityInCart}
            removeLineItemInCart={this.removeLineItemInCart}
            />
         </div>
    )
  }
}

export default connect((state) => state)(App);