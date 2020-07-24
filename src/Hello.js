import React from 'react'
import { Link } from 'react-router-dom'

import GenericProductPage from './components/GenericProductPage'

const Hello = () => {
    return (
        <div>
            <Link to="/">
                3D stuff
            </Link>
            <GenericProductPage />
        </div>
    )
}

export default Hello