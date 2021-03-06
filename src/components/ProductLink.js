import React from 'react'
import { Link } from 'react-router-dom'
import GenericProductPage from './GenericProductPage'

const ProductLink = () => {
    return (
        <div>
            <Link to="/">
                Back
            </Link>
            <GenericProductPage />
        </div>
    )
}

export default ProductLink;