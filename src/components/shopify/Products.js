// import React, { Component } from 'react';
// import Product from './Product';

// class Products extends Component {
//   render() {
//     // console.log(products);
//     let products;
//     if (this.props.products) {
//     products = this.props.products.map((product) => { //
//         return (
//           <Product
//             addVariantToCart={this.props.addVariantToCart}
//             client={this.props.client}
//             key={product.id.toString()}
//             product={product}
//           />
//         );
//       });
//     } else {
//       products = <p>Loading...</p>
//     }
//     products.reverse(); // CHFE 2018.10.15 - this makes it so the products are shown newest to oldest on first load
//     return (
//       <div className="Product-wrapper">
//         {products}
//       </div>
//     );
//   }
// }

// export default Products;




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
