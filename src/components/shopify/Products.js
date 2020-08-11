import React, { Component } from 'react';
import Product from './Product';

// pass down products
// findIndex with productId against this.props.products.id
class Products extends Component {
  render(){
    var path = window.location.pathname;
    path = path[0] === '/' ? path.substr(1) : path;
    
    let i = this.props.products.findIndex((product) => product.id === path);
    let product = this.props.products[i];
    if (product === undefined) {
      product = <p>Not Found...</p>
    } else {
      return (
        <div>
          <Product
            addVariantToCart={this.props.addVariantToCart}
            client={this.props.client}
            product={product}
            {...this.props}
          />
        </div>
      )
    }
    
  	return(
      <div className="Product-wrapper">
        {product}
     </div>
    );
  }
}

export default Products;
