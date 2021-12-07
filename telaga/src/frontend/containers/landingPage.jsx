import React from 'react'
import '../assets/styles/landingPage.css'
import {Link} from 'react-router-dom';

const landingPage = () => {
    return (
        <div className="base-container">
            <div className="header">
                <h1>Welcome to Telaga's Order Management Website</h1>
            </div>
            <div className="content">
                <h3><Link to='/av'>Task Overview</Link></h3>
            </div>
        </div>
    )
}

export default landingPage
