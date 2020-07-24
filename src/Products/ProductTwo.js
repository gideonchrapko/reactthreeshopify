import React from 'react'
import ReactDOM from 'react-dom'
// import { withRouter } from "react-router-dom"

import 'bootstrap/dist/css/bootstrap.min.css'
import GenSinglePage from '../components/GenSinglePage'
import history from '../Hello'

import './ProductTwo.css'

const ProductTwo = () => {



    return ReactDOM.createPortal(
      // <div className="container-fluid">
      // <div className="row">
          <>
            <div className="dimmer">
              Buy Now  modal BG
              <div className="modalbody offset-1 col-10" >
              {/* <GenSinglePage /> */}
              </div>
            </div>
           </>
      // </div>
      ,
    document.querySelector('#ProductTwo')
    )
}

export default ProductTwo;