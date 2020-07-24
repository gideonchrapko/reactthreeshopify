import React from 'react'
import ReactDOM from 'react-dom'
import { withRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
// import ShotOne from '../Images/Tribal.jpg'
// import GenericProductsPage from '../components/GenericProductPage';

import './ProductOne.css'

const ProductOne = ({ history }) => {

  function refreshPage() {
    history.push('/');
  }

    return ReactDOM.createPortal(
      // <div className="container-fluid">
      // <div className="row">
          <>
            <div className="dimmer" onClick={refreshPage}>
              Buy Now  modal BG
              <div className="modalbody offset-1 col-10">
               
                
             
              </div>
            </div>
           </>
      // </div>
      ,
    document.querySelector('#ProductOne')
    )
}

export default withRouter(ProductOne);