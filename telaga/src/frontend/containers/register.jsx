import React from 'react'
import { Link } from 'react-router-dom'

class Register extends React.Component {
    state = []
    
    render () {
        return (
            <div>
                <div className="header">
                    <h1> Register Page </h1>
                    <h6><Link to="/">Home</Link></h6>
                </div>
            </div>
        )
    }
}

export default Register