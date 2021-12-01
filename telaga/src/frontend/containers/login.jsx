import React from 'react'
import { Link } from 'react-router-dom'
import '../assets/styles/registerPage.css'

class Login extends React.Component {
    state = []
    
    render () {
        return (
            <div>
                <div className="pp3__header">LOGIN</div>

                <div className="pp3__form">

                    <div className="pp3__form-group">
                        <label htmlFor="email">Email</label>
                        <input type="text" name="email" placeholder="email"></input>                
                    </div>

                    <div className="pp3__form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" name="password" placeholder="password"></input>                
                    </div>

                </div>
                <div className="pp3__button-container">
                    <button >Login</button>
                </div>
            </div>
        )
    }
}

export default Login