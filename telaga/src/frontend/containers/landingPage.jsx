import React from 'react'
import { Link } from 'react-router-dom'

const landingPage = () => {
    return (
        <div>
            <div className="header">
                <h1> Landing Page </h1>
                <h6><Link to="/register">Register</Link></h6>
            </div>
        </div>
    )
}

export default landingPage
