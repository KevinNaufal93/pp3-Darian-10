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
        <div className="pp2__navbar">
            <div className="pp2__navbar-links">
                <div className="pp2__navbar-links_logo">
                    <img src={logo} alt="logo" />
                </div> 
                <div className="pp2__navbar-links_container">
                    <p><a href="#">Home</a></p>
                    <p><a href="#">Services</a></p>
                    <p><a href="#">Contact Me</a></p>
                </div>
            </div>
            <div className="pp2__navbar-sign">
                    <p>Sign in</p>
                    <button type="button"><Link to="/register">Sign up</Link></button>
            </div>
        </div>
    )
}

export default MyNavbar