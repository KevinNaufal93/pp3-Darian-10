import React from 'react'
import {
    Navbar,
    Nav,
    DropdownToggle,
    UncontrolledDropdown,
    DropdownMenu,
    DropdownItem
} from 'reactstrap';
import {Link} from 'react-router-dom';
import '../../assets/styles/navbar.css'
import logo from '../../assets/img/logo.png'

const MyNavbar = () => {
    
    return (
        <div className="pp3__navbar">
            <div className="pp3__navbar-links">
                <div className="pp3__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div> 
                <div className="pp3__navbar-links_container">
                    <p><Link to="/">Home</Link></p>
                    <p><Link to="/register">Sign Up</Link></p>
                    <p><Link to="/login">Sign In</Link></p>
                </div>
            </div>
            <div className="pp3__navbar-item">
                    <p>Hello</p>
            </div>
        </div>
    )
}

export default MyNavbar